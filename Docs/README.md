# Dorpn — Language Documentation

Welcome to the official Dorpn docs. Everything you need to read, write, and understand Dorpn is in this folder — pick a section below and dive in.

---

## Compilation Pipeline

Here's what happens when you run `dorpn program.dpn`:

```
.dpn Source File
      │
      ▼
   Lexer  ──────────────── turns raw text into tokens
      │
      ▼
   Parser  ─────────────── builds an Abstract Syntax Tree (AST)
      │
      ▼
  Semantic Analyzer ──── validates types, scopes, and logic
      │
      ▼
  Code Generator ──────── emits clean, readable C code
      │
      ▼
    GCC  ────────────────── compiles C to native machine code
      │
      ▼
  Executable  ✓
```

No VM. No runtime. Just your code, C, and the machine.

---

## Documentation Index

### [Variables.md](./Variables.md)
How to declare and use variables in Dorpn. Covers `tag` for mutable values, `Const` for constants, type inference, and scoping rules.

### [Types.md](./Types.md)
The full type system — primitives, strings, booleans, and how Dorpn's static typing works under the hood with type inference.

### [Operators.md](./Operators.md)
Every operator Dorpn supports: arithmetic, comparison, logical, and assignment. Includes precedence rules and examples.

### [built-Ins_Functions.md](./built-Ins_Functions.md)
All built-in functions available out of the box — `print`, `input`, `range`, and more. Each one mapped to its C equivalent.

### [built-Ins_Methods.md](./built-Ins_Methods.md)
Built-in methods on types — string manipulation, list operations, and other type-specific utilities.

### [FAQ.md](./FAQ.md)
Common questions, gotchas, and things that might trip you up when coming from Python or another language.

---

## Quick Syntax Cheatsheet

```dpn
# Variables
tag name = "Dorpn"
Const VERSION = 4

# Function
func int add(int a, int b)
    return a + b

# Loop
loop i in range(5)
    print(i)

# Comment
-- this is a comment
# this too
```

---

> **New here?** Start with [Variables.md](./Variables.md) → then [Types.md](./Types.md) → then [Operators.md](./Operators.md). That's the natural reading order.