# Dorpn Language Documentation
---
## 📖 Overview

Dorpn is a statically-typed, compiled language with Python-like syntax that compiles to C. It combines readability with performance through type inference and direct C compilation.

--- 
### Compilation Pipeline

Dorpn Source (.dpn) 
- **→ Lexing**
- **→ Tokens** 
- **→ Parsing** 
- **→ AST**
- **→ Semantic Analyzer** 
- **→ Code Generating**
- **→ GCC** 
- **→ Executable**


### Available Commands for Dorpn v0.3.0

| Command | Short Flag | Description | Example Usage | Notes |
|---------|------------|-------------|---------------|-------|
| **Compile file** | (none) | Compile a `.dpn` file to executable | `dorpn program.dpn` | Creates executable with same name |
| **Compile and run** | `-r` | Compile and immediately execute | `dorpn program.dpn --run` | Equivalent to compile then `./program` |
| **Keep C file** | `-k` | Keep generated intermediate C code | `dorpn program.dpn --keep-c` | Preserves `program.c` after compilation |
| **Verbose mode** | `-v` | Show detailed compilation output | `dorpn program.dpn --verbose` | Displays lexer, parser, codegen stages |
| **Show help** | `-h` | Display help information | `dorpn --help` | Works with or without filename |
| **Show version** | `-V` | Display compiler version | `dorpn --version` | Shows version and copyright |
| **Run (alternative)** | `--run` | Same as `-r` | `dorpn program.dpn --run` | Long form of run flag |
| **Keep C (alternative)** | `--keep-c` | Same as `-k` | `dorpn program.dpn --keep-c` | Long form of keep-c flag |
| **Verbose (alternative)** | `--verbose` | Same as `-v` | `dorpn program.dpn --verbose` | Long form of verbose flag |
| **Help (alternative)** | `--help` | Same as `-h` | `dorpn --help` | Long form of help flag |
| **Version (alternative)** | `--version` | Same as `-V` | `dorpn --version` | Long form of version flag |

## 🎯 How to Use This Documentation

This documentation provides:
1. **Complete Syntax Reference** - Every keyword and construct explained
2. **Practical Examples** - Real code snippets for each feature
3. **Internal Details** - Understanding how the compiler works
4. **Best Practices** - Guidelines for writing good Dorpn code

The documentation is structured to serve both:
- **Language Users**: Who want to write Dorpn programs
- **Compiler Developers**: Who want to understand/extend the implementation
