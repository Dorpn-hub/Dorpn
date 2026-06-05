# Dorpn
![20260125_112233](https://github.com/user-attachments/assets/fa64d282-a60b-4750-b034-9f29907a2abe)

## Introduction

### What is Dorpn?

Dorpn is a compiled programming language designed for developers who value both performance and productivity. It combines Python-like readability with C-level execution speed — clean syntax on the surface, native binary underneath.

---

## Philosophy

Dorpn is built around three principles:

1. **Simplicity First** — Clean, readable syntax that's easy to learn and write.
2. **Performance by Default** — Compiled to native code, no interpreter in the way.
3. **Safety** — Static typing and semantic analysis catch errors before your program ever runs.

---

## Key Features

- **Clean Syntax** — Python-inspired, minimal boilerplate, indentation-based structure
- **Multi-Target Compilation** — Compile to native binary (via C) or JavaScript with `-js` or `--Javs` *(v0.4.0+)*
- **Static Type Inference** — Types are inferred automatically, no need to annotate everything
- **No Runtime Overhead** — No VM, no garbage collector, no JIT warm-up delay
- **ANSI Color Support** — Terminal color output via escape sequences, works out of the box
- **Fast JS Output** — JavaScript target compiles in milliseconds for quick iteration *(v0.4.0+)*

---

## Basic Syntax

```py

# This is comment
-- This is comment
 
# Variable declarations
tag x = 10
Const VERSION = 4
tag name = "Dorpn"

# Functions
func greet(String: name):
    return "Hello, " + name

# Conditionals
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is exactly 5")
else:
    print("x is less than 5")

# Loop with range
loop i in 100:
    print("step " + i)

# While-style loop
keep x < 10:
    x = x + 1
    print(x)
```

For the full syntax reference, see the [Docs folder](./Docs/) — it covers variables, types, operators, built-in functions and methods, with examples for each.

---

## Source Code

The compiler source will be released once Dorpn reaches v1.0 or becomes self-hosted. Compiled binaries are available on the [Releases page](https://github.com/Dorpn-hub/dorpn/releases).

---

## Performance

Dorpn compiles to C and then to a native binary via GCC, which means execution performance is close to hand-written C. The JavaScript target trades some runtime speed for near-instant compilation.

| Metric | Result |
|--------|--------|
| JS compilation time | ~0.002s |
| Native (C) compilation time | ~0.549s |
| Cold startup | ~0.7ms |
| Base memory (small programs) | 2–4 MB |
| Base memory (larger programs) | 20–50 MB |

**Where Dorpn does well:**
- Instant cold start — no VM initialization
- Predictable performance — no GC pauses, no JIT variance
- Lean memory footprint — ideal for CLI tools and constrained environments
- Fast math and I/O — running close to the metal

**Current trade-offs:**
- Native compilation (~0.5s) adds a small overhead to the dev loop — use the JS target for quick testing
- String-heavy workloads will see further improvements in upcoming releases

*Benchmarks are approximate and will shift as the compiler matures.*

---

## Multi-Target Compilation *(v0.4.0+)*

Starting from v0.4.0, Dorpn supports multiple compilation targets:

```sh
# Compile to native binary (default)
dorpn program.dpn

# Compile to JavaScript and shows compilation time
dorpn program.dpn -js -t

# Compile and run immediately (JS target)
dorpn program.dpn -js -r
```

The JavaScript target is useful for rapid testing — compilation finishes in milliseconds compared to the full C pipeline.

---

## Terminal Color Output *(v0.4.0+)*

Starting from v0.4.0, Dorpn includes `printOut()` — a built-in that writes to stdout without a newline, making ANSI color output easy to compose:

```dpn
Const fgGreen = "\033[92m"
Const fgRed   = "\033[91m"
Const fgReset = "\033[0m"

func main():
    printOut(fgGreen)
    printOut("SUCCESS")
    printOut(fgReset)
    print(" - Dorpn is working!")
```

For a full list of built-in functions including `printOut`, see [Docs/built-Ins_Functions.md](./Docs/built-Ins_Functions.md) — it covers every built-in with usage examples and what each maps to in C.

---

## Support

- Open an issue in this repository
- Join the [Discord](https://discord.gg/9J2qabs3gu) server

