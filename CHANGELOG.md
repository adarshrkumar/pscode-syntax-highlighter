# Change Log

All notable changes to the "pscode" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - Initial Release

### Added

- Syntax highlighting for pseudocode files with extensions: `.pscode`, `.pcode`, `.pseudo`, `.commonps`
- Support for common pseudocode elements:
  - Control flow keywords (if, else, while, for, repeat, until, etc.)
  - Data types (number, string, boolean, array, integer, float, double)
  - Operators (logical, comparison, arithmetic, assignment)
  - Built-in functions (math, string, array, type conversion)
  - Comments (line `//` and block `/* */`)
  - Strings (single, double, backtick, and triple-quoted)
  - Numbers (integers and floats)
  - Booleans and constants (true, false, null, nothing)
- Language configuration for brackets, auto-closing pairs, and commenting behavior
- Declarative-only extension with no runtime code dependencies
