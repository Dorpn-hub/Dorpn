## Dorpn — Language Documentation

Welcome to the official Dorpn docs. Everything you need to read, write, and understand Dorpn is in this folder — pick a section below and dive in.

---
| Stage | Process | Action | Output |
| :--- | :--- | :--- | :--- |
| **Lexing** | Lexer | Converts raw text into tokens | Tokens |
| **Parsing** | Parser | Builds structural tree representation | AST |
| **Semantics** | Semantic Analyzer | Validates types, scopes, and logic | Checked AST |
| **CodeGen** | Code Generator | Emits clean, readable C code | C Code |
| **Compilation** | GCC | Compiles C to native machine code | Machine Binary |
| **Execution** | OS | Executes binary file | Final Result |

---

### Detailed Breakdown

* **Input:** `program.dpn` (Raw source text)
* **Lexer:** Tokenizes source code text into discrete lexical tokens.
* **Parser:** Constructs an Abstract Syntax Tree (AST) from tokens.
* **Semantic Analyzer:** Verifies type safety, variable scoping, and syntax rules.
* **Code Generator:** Translates the validated AST into high-level C code.
* **GCC/Clang:** Compiles intermediate C code directly into a native executable binary (`✓`).

No VM. No runtime. Just your code, C, and the machine.

---

## Documentation Index

**[Variables.md](./Variables.md)**
How to declare and use variables in Dorpn. Covers `tag` for mutable values, `Const` for constants, `imm` for runtime immutable variable, type inference, and scoping rules.

**[Types.md](./Types.md)**
The full type system — primitives, strings, booleans, and how Dorpn's static typing works under the hood with type inference.

**[Operators.md](./Operators.md)**
Every operator Dorpn supports: arithmetic, comparison, logical, and assignment, compound. Includes precedence rules and examples.

**[built-Ins_Functions.md](./built-Ins_Functions.md)**
All built-in functions available out of the box — `print`, `input`, `range`, and more. Each one mapped to its C equivalent.

**[built-Ins_Methods.md](./built-Ins_Methods.md)**
Built-in methods on types — string manipulation and other type-specific utilities.

**[FAQ.md](./FAQ.md)**
Common questions, gotchas, and things that might trip you up when coming from other languages.

---

> **Quick Syntax Cheatsheet**

```py
# Variables
tag name = "Dorpn"
Const VERSION = 4

# Function
func int add(Int: a, Int: b):
    return a + b

# Loop
loop i in 5:
    print(i)

# this is aComment
-- this is a comment
```

---

> **New here?** Start with [Variables.md](./Variables.md) → then [Types.md](./Types.md) → then [Operators.md](./Operators.md). That's the natural reading order.
