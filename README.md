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

## ⚡ Performance Metrics (v0.3.2)

| Operation                   | Performance | Latency  | Strategic Advantage                                           |
| :-------------------------- | :---------- | :------- | :----------------------------------------------------------- |
| **Cold Startup** | **0.7ms** | Ultra-Low| Near-instant execution; ideal for microservices and CLI tools.|
| **Computational Throughput**| **17ms** | Minimal  | High-efficiency loop execution via native binary optimization. |
| **I/O File Handling** | **12ms** | Optimized| Fast data ingestion with streamlined buffer management.       |
| **String Manipulation** | **5ms** | Low-Level| Efficient memory allocation for complex string operations.    |
| **Concurrent Function Calls**| **35ms** | Minimal  | Highly optimized stack usage with type-safe verification.     |
| **Engine Compilation** | **310ms** | Balanced | Robust safety checks integrated into the build pipeline.      |

---

### 🚀 Key Improvements in v0.3.2

* **Integrated Semantic Validation:** Compilation now includes a comprehensive logic verification phase. This prevents runtime failures by ensuring code integrity before the binary is generated.
* **Static Runtime Linking:** By utilizing a dedicated, pre-optimized runtime library, generated binaries are leaner and benefit from global machine-code optimizations.
* **Type-Safe Memory Management:** Memory allocation for dynamic types has been refined, resulting in a 15-20% improvement in predictability during high-load operations.
* **Performance Balance:** v0.3.2 achieves a superior equilibrium, offering the safety of a high-level language with the raw responsiveness of a native systems language.

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

*Benchmarks based on v0.3.2 . All benchmarks are not fixed. Dorpn already excels in startup, memory, and numerical performance—key advantages for CLI tools, system utilities, and performance-sensitive applications.*


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
