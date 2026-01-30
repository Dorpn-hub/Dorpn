# 📑 Dorpn Language Documentation

---

# 🏗️ Variable System in Dorpn

A comprehensive guide to variable declaration, constants, and scope management in Dorpn's statically-typed environment.

---

## 📝 Variable Declaration with `tag`

### Overview
The `tag` keyword introduces mutable variables into the current scope. Variables declared with `tag` can be reassigned new values, provided the new value matches the variable's inferred or explicitly declared type.

### Key Characteristics
- **Mutability**: Values can be modified after initialization
- **Type Binding**: Each variable is permanently bound to a specific type (Int, Float, String, or Bool)
- **Scope Awareness**: Variables exist from their point of declaration forward
- **Case Sensitivity**: Variable names follow standard identifier rules

### Declaration Patterns
Variables can be declared with explicit type annotations or rely on automatic type inference from the assigned value. The type, once established (either through annotation or inference), remains fixed for the variable's lifetime.

---

## 🔒 Constants with `Const`

### Overview
The `Const` keyword creates immutable named values that cannot be modified after initialization. Constants provide compile-time guarantees about value stability and enable performance optimizations.

### Design Philosophy
- **Immutable by Design**: Attempting to reassign a constant triggers a compile-time error
- **Compile-Time Verification**: Constants are validated during compilation
- **Naming Convention**: Typically use UPPER_SNAKE_CASE for clarity
- **Scope Hierarchy**: Constants follow standard lexical scoping rules

### Use Cases
Constants are ideal for configuration values, mathematical constants, application metadata, and any value that should remain invariant throughout program execution. They serve as both runtime values and documentation of intent.

---

## 🗺️ Scope Rules & Visibility

### Lexical Scoping Model
Dorpn employs static (lexical) scoping where variable visibility is determined by the program's textual structure. Scopes are created by code blocks, function definitions, and control structures.

### Scope Hierarchy
1. **Global Scope**: Variables declared outside any function or block
2. **Function Scope**: Variables declared within a function (local to that function)
3. **Block Scope**: Variables declared within control structures (if, loop, keep blocks)
4. **Nested Scopes**: Inner scopes can access outer scope variables, but not vice versa

### Shadowing Behavior
A variable in an inner scope can "shadow" (temporarily hide) a variable with the same name from an outer scope. The original variable becomes inaccessible within the inner scope but regains visibility once the inner scope exits.

### Lifetime Management
- Variables exist from their point of declaration until the end of their containing scope
- Memory for variables is managed automatically via the generated C code
- No garbage collector overhead—memory is freed deterministically

---

## ⚡ Best Practices & Guidelines

### Variable Naming
- Use descriptive names that indicate purpose and content type
- Prefer `camelCase` for variables, `UPPER_SNAKE_CASE` for constants
- Avoid single-letter names except for loop counters or mathematical variables
- Consider type hints in names when beneficial (e.g., `userCount`, `priceFloat`)

### Declaration Placement
- Declare variables as close as possible to their first use
- Group related variables with blank lines for visual separation
- Initialize variables at declaration when practical
- Place constants at the top of files or logical sections

### Scope Management
- Minimize variable scope to reduce cognitive load
- Avoid global variables when local alternatives exist
- Use constants for values that shouldn't change
- Consider function parameters over shared global state

### Type Safety Considerations
- Prefer explicit type annotations for public APIs and complex types
- Use inference for obvious, local contexts
- Remember: type is permanent after first assignment
- Leverage constants for type-stable invariant values

---

## 🚨 Common Pitfalls & Solutions

### Reassignment Errors
Attempting to change a variable's type after declaration results in a compile-time type mismatch error. Solution: Use separate variables for different types or employ union types if supported in future versions.

### Constant Modification
Constants cannot be reassigned. Any attempt triggers a compile-time error. Solution: Use `tag` instead of `Const` if the value needs to change, or create a new constant with a different name.

### Scope Confusion
Variables declared in inner scopes are not accessible in outer scopes. Solution: Declare variables in the appropriate scope level, or return values from inner scopes when needed externally.

### Shadowing Issues
Accidental shadowing can make outer variables inaccessible. Solution: Use distinct names across nested scopes, or be intentional about when shadowing is used for clarity.

---

## 📊 Comparison Table

| Aspect | `tag` Variables | `Const` Constants |
|--------|-----------------|-------------------|
| **Mutability** | Mutable (can be reassigned) | Immutable (fixed value) |
| **Type Flexibility** | Fixed type after first assignment | Fixed type and value |
| **Memory** | May change memory allocation | Fixed allocation |
| **Use Case** | Changing values, accumulators | Configuration, invariants |
| **Performance** | Standard | Potential optimization opportunities |
| **Naming Convention** | `camelCase` | `UPPER_SNAKE_CASE` |

---

## 🎯 Design Principles Behind Dorpn's Variable System

### 1. **Predictability Over Convenience**
Variables have fixed types to eliminate runtime type errors and enable better compiler optimizations.

### 2. **Explicit Over Implicit**
While type inference is supported, the system encourages clarity through appropriate naming and optional annotations.

### 3. **Safety Through Immutability**
Constants provide compile-time guarantees about value stability, reducing bug surfaces.

### 4. **Local Reasoning**
Lexical scoping helps to understand variable visibility by examining local code structure.

### 5. **Gradual Disclosure**
Simple variable usage is straightforward; advanced patterns are available but not required for basic programs.

---

*Dorpn's variable system balances flexibility with safety, enabling both rapid prototyping and robust production code through its clear semantics and compile-time guarantees.*

---
# Variables Declaration 
---

Variables in Dorpn are declared using `tag` keyword.
This allows you to introduce mutable variables that can be changed later in the Program.
- Use `tag` to declare variables:

```
tag name = "Dorpn"      # String
tag count = 42          # Integer
tag price = 19.99       # Float
tag active = true       # Boolean
```

---
# Constants
---

Constants are for values that must remain fixed throughout the execution.
- Use `Const` for immutable that don't change:

```
Const PI = 3.14159
Const APP_NAME = "Dorpn"
Const MAX_RETRIES = 3
```
```
Const PI = 3.14159
PI = 3.14  # ERROR: Cannot assign to constant!
```
---

# Scope Rules
---

Variables are available from their point of declaration:

```
tag global = "I'm available everywhere below"

if true:
    tag local = "I'm only in this block"
    print(global)  # Works
    print(local)   # Works

print(global)  # Works
# print(local)  # ERROR: Not defined here