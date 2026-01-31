# Dorpn
![20260125_112233](https://github.com/user-attachments/assets/fa64d282-a60b-4750-b034-9f29907a2abe)

## Introduction

### ● What is Dorpn?

Dorpn is a modern compiled programming language designed for developers 
who value both, performance and productivity. Combining Python-like readability with C-level execution speed, Dorpn offers a unique blend of simplicity and power for the next generation of software development.


## ● Philosophy 

Dorpn follows three core principles:

   1.   **Simplicity First** - Clean, readable syntax that's easy to learn and write.
   2.   **Performance by Default** - Compiled to native code for maximum execution speed.
   3.    **Safety** - Type checking and semantic analysis prevent common runtime errors

## ● Performance-Focused Design

- No interpreter overhead - Direct machine code execution.
- Memory efficient with automatic management.
- Fast startup - No runtime initialization delay.

## ● Key Features

- **Clean, Readable Syntax** - Python-inspired syntax with minimal boilerplate
- **Compiled Performance** - Compiled to optimized C code, then to native binaries
- **Static Type Inference** - Automatic type detection with optional type annotations
- **Memory Safe** - No manual memory management, no garbage collection overhead
- **Rich Standard Library** - Built-in functions for strings, math, I/O, and more
- **Cross-Platform** - Generates portable C code that compiles anywhere GCC runs

## ⚡ Performance Metrics (v0.2.1)

| Operation | Time | Memory | Notes |
|-----------|------|--------|-------|
| **Startup** (hello world) | 0.5ms | 2.1MB | Native binary, minimal initialization |
| **Loop** (10M integer additions) | 20ms | 2.2MB | Direct C compilation, no overhead |
| **File Read** (10MB file) | 15ms | 12MB | Native through C runtime |
| **String Processing** (1000 concats) | 8ms | 8MB | Current with C's malloc per operation |
| **Function Calls** (1M calls) | 40ms | 2.1MB | Direct C function calls |
| **Complete Compilation** (100+ lines) | 200ms | 50MB | Lex → Parse → C Gen → GCC compile |

**Key Insights:**
- ✓ **Sub-millisecond startup** - Perfect for CLI tools
- ✓ **Linear scaling** - Predictable performance growth
- ✓ **Minimal base memory** - Efficient for constrained environments
- ✓ **Compilation overhead** - Trade-off for runtime speed
### ● Performance Highlights

**Dorpn's Strengths:**
-  **Fast I/O** - Native C performance for file operations
-  **Excellent math** - Near-C performance for numerical work
-  **Zero warm-up** - No JIT compilation delay

**Areas for Improvement:**
- String operations and recursion operations will improve with future optimizations
- Compilation time (~200ms) adds to development cycle

### ● Real Performance Advantages

1. **Cold Start**: Dorpn launches instantly while others initialize VMs
2. **Memory Efficiency**: Ideal for embedded/constrained environments  
3. **Predictable Performance**: No GC pauses, no JIT warm-up variance
4. **System Integration**: Direct access to C libraries via generated code

*Benchmarks based on v0.2.1 . All benchmarks are not fixed. Dorpn already excels in startup, memory, and numerical performance—key advantages for CLI tools, system utilities, and performance-sensitive applications.*


## Source Code

Sorce code will be released once Dorpn reaches its first stable version (v1.0) or becomes self-hosted.  

## ● Memory Usage

    1. Small Programs: 2-4 MB resident memory,
    2. Large Applications: 20-50 MB typical,
    3. Minimal Overhead: No VM, no JIT compilation

## Basic Syntax Examples

```python
# Variable declarations with type inference
tag x = 10
Const y = 3.14
tag name = "Dorpn"

# Functions
func greet(name: String) -> String:
    return "Hello, " + name

# Control flow
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is exactly 5")
else:
    print("x is less than 5")

# Loops
loop 5:
    print("Iteration")

# While loops (keep statement)
keep x < 10:
    x = x + 1
    print(x)
```

## ● Support

For questions, issues, or feedback:

- Create an issue in this repository.
- Join Our [Discord](https://discord.gg/NavzqZzBM) server.

*Note: These benchmarks reflect the current beta implementation. Performance will improve as the compiler matures and optimizations are added.*
