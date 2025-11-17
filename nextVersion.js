const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const PUBLISHER = 'adarshrkumar';
const EXTENSION_NAME = 'pscode';
const PACKAGE_JSON_PATH = path.join(__dirname, 'package.json');

// Default bump type can be overridden with command line args
// Usage: node nextVersion.js [patch|minor|major]
const bumpType = process.argv[2] || 'patch';

/**
 * Fetches the latest version from VS Code Marketplace
 */
function getMarketplaceVersion() {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      filters: [{
        criteria: [
          { filterType: 7, value: `${PUBLISHER}.${EXTENSION_NAME}` }
        ]
      }],
      flags: 914
    });

    const options = {
      hostname: 'marketplace.visualstudio.com',
      path: '/_apis/public/gallery/extensionquery',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json;api-version=3.0-preview.1',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          const extension = response.results?.[0]?.extensions?.[0];

          if (extension && extension.versions && extension.versions.length > 0) {
            const latestVersion = extension.versions[0].version;
            resolve(latestVersion);
          } else {
            // Extension not found in marketplace, start from 0.0.0
            console.log('Extension not found in marketplace, starting from 0.0.0');
            resolve('0.0.0');
          }
        } catch (error) {
          reject(new Error(`Failed to parse marketplace response: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error(`Failed to fetch from marketplace: ${error.message}`));
    });

    req.write(data);
    req.end();
  });
}

/**
 * Increments a semantic version string
 * @param {string} version - Current version (e.g., "1.2.3")
 * @param {string} type - Bump type: "major", "minor", or "patch"
 * @returns {string} - New version
 */
function incrementVersion(version, type) {
  const parts = version.split('.').map(Number);

  if (parts.length !== 3 || parts.some(isNaN)) {
    throw new Error(`Invalid version format: ${version}`);
  }

  let [major, minor, patch] = parts;

  switch (type) {
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'patch':
    default:
      patch++;
      break;
  }

  return `${major}.${minor}.${patch}`;
}

/**
 * Updates the version in package.json
 */
function updatePackageVersion(newVersion) {
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
  const oldVersion = packageJson.version;

  packageJson.version = newVersion;

  fs.writeFileSync(
    PACKAGE_JSON_PATH,
    JSON.stringify(packageJson, null, 2) + '\n',
    'utf8'
  );

  return oldVersion;
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log(`Fetching latest version from marketplace for ${PUBLISHER}.${EXTENSION_NAME}...`);

    const marketplaceVersion = await getMarketplaceVersion();
    console.log(`Current marketplace version: ${marketplaceVersion}`);

    const newVersion = incrementVersion(marketplaceVersion, bumpType);
    console.log(`Incrementing ${bumpType} version: ${marketplaceVersion} -> ${newVersion}`);

    const oldPackageVersion = updatePackageVersion(newVersion);
    console.log(`Updated package.json version: ${oldPackageVersion} -> ${newVersion}`);

    console.log('\nVersion update successful!');
    console.log(`Next steps:`);
    console.log(`1. Update CHANGELOG.md with changes for version ${newVersion}`);
    console.log(`2. Run: vsce package`);
    console.log(`3. Run: vsce publish`);

  } catch (error) {
    console.error('Error updating version:', error.message);
    process.exit(1);
  }
}

// Validate bump type
if (!['major', 'minor', 'patch'].includes(bumpType)) {
  console.error(`Invalid bump type: ${bumpType}`);
  console.error('Usage: node nextVersion.js [patch|minor|major]');
  process.exit(1);
}

main();
