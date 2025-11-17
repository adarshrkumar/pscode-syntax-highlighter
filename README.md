# Common Pseudocode Syntax Highlighter (pscode)

[![.github/workflows/vs-extension.yml](https://github.com/adarshrkumar/commonps-syntax-highlighter/actions/workflows/vs-extension.yml/badge.svg)](https://github.com/adarshrkumar/commonps-syntax-highlighter/actions/workflows/vs-extension.yml)

A VS Code extension that provides comprehensive syntax highlighting for [Common Pseudocode](https://commonps.dev), making it easier to write, read, and teach pseudocode.

## Features

- **Full Syntax Highlighting** - Colorizes keywords, operators, strings, numbers, comments, and built-in functions
- **Comment Support** - Line comments (`//`) and block comments (`/* */`)
- **Bracket Matching** - Auto-closing and matching for parentheses, brackets, and braces
- **Multiple File Extensions** - Supports `.pscode`, `.pcode`, `.pseudo`, and `.commonps` files

### Supported Syntax

The extension highlights all Common Pseudocode constructs including:

- **Control Flow**: `if`, `else`, `elseif`, `switch`, `case`, `default`
- **Loops**: `for`, `while`, `repeat`, `until`, `do`, `loop`
- **Functions**: `function`, `takes in`, `return`, `run`, `with`
- **Data Types**: `number`, `string`, `boolean`, `array`, `record`, `constant`
- **Operators**: Arithmetic (`+`, `-`, `*`, `/`, `%`, `^`), logical (`and`, `or`, `not`), comparison (`equals`, `is greater than`, etc.)
- **Flow Control**: `jump`, `skip`, `exit`, `stop`, `return`
- **Built-in Functions**: `abs`, `round`, `sqrt`, `max`, `min`, `length`, `sort`, `append`, `split`, `join`, and more
- **I/O Operations**: `input`, `output`, `read`, `write`, `open file`, `close file`
- **Exception Handling**: `try`, `catch`, `finally`

## Installation

### From VS Marketplace

The preferred method of installation is from the VS Code Marketplace. It can be installed [at this link](https://marketplace.visualstudio.com/items?itemName=adarshrkumar.pscode).

### From VSIX (Local Installation)

1. Package the extension:

   ```bash
   vsce package
   ```

2. Install the generated `.vsix` file:

   ```bash
   code --install-extension pscode-0.0.1.vsix
   ```

### From Source

1. Clone or download this repository
2. Copy the entire folder to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions`
   - **macOS/Linux**: `~/.vscode/extensions`
3. Restart VS Code

## Usage

1. Create a new file with one of the supported extensions: `.pscode`, `.pcode`, `.pseudo`, or `.commonps`
2. Start writing your pseudocode - syntax highlighting will be applied automatically

### Example

```pscode
// Calculate factorial
function factorial takes in n
    if n is less than or equal to 1
        return 1
    return n * factorial(n - 1)

// Main program
input "Enter a number: " into num
result = run factorial with num
output "Factorial is: {result}"
```

For complete syntax documentation, see [commonps.md](commonps.md).

## Requirements

- VS Code version 1.80.0 or higher

## Extension Settings

This extension is declarative and does not add any VS Code settings.

## Known Issues

None currently. Please report issues on the GitHub repository.

## Release Notes

### 0.0.1

Initial release of Common Pseudocode Syntax Highlighter:

- Comprehensive syntax highlighting for all pseudocode constructs
- Support for multiple file extensions
- Comment toggling and bracket matching
- Auto-closing pairs for quotes and brackets

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This extension is provided as-is for educational purposes.

---

**Enjoy writing clear, well-formatted pseudocode!**
