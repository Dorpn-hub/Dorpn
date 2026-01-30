# 📑 Dorpn Language Documentation 
---
# 🏷️ Dorpn Type Keywords

## Core Types

### Int

- **Purpose**: Whole numbers (positive, negative, or zero)
- **Characteristics**: 64-bit signed integer, no decimal point
- **Examples**: 42, -100, 0, 1_000_000

### Float

- **Purpose**: Decimal numbers and scientific notation
- **Characteristics**: Double-precision floating point, includes decimal point
- **Examples**: 3.14, -2.5, 0.0, 1.23e-4

### String

- **Purpose**: Text data and character sequences
- **Characteristics**: UTF-8 encoded, mutable via methods, automatic memory management
- **Examples**: "hello", "Line 1\nLine 2", "" (empty)

### Bool

- **Purpose**: Logical/boolean values
- **Characteristics**: Binary true/false state, used in conditions and logic
- **Values**: Only true or false (case-sensitive)

---

# Key Rules Summary

### Case Sensitivity

- ✓ Correct: `Int`, `Float`, `String`, `Bool`
- X Incorrect: int, FLOAT, string, BOOL

### Type Inference

- Omitting type annotations → compiler infers from value
- Literal numbers without decimal → `Int`
- Literal numbers with decimal → `Float`
- Text in quotes → `String`
- true/false → `Bool`

### Type Safety

- Once declared/inferred, type cannot change
- Mixed operations: Int + Float → Float (promotion)
- String conversion: Any type + String → String
- Boolean operators only work with Bool types

### Default Behaviors

- Division (/) always returns Float
- Floor division (fld) always returns Int
- Exponentiation (**) always returns Float
- String concatenation uses + operator
- String manipulation uses .method() calls

---

# Memory/Performance Notes

- Int → long long (C) - 8 bytes
- Float → double (C) - 8 bytes
- String → char* (C) - heap allocated, manual management
- Bool → bool (C) - 1 byte
- No garbage collector - manual freeing in generated C code

---

**Four types. Strict rules. Compile-time safety.**


---
# Type Annotations (Optional)

Can optionally specify types [Case Sensitive]:

```
tag score: Int = 100
tag temperature: Float = 36.6
tag greeting: String = "Hello"
tag is_ready: Bool = false
```
---

## Type Inference

Dorpn automatically infers types from values:

```
tag x = 10           # Inferred as Int
tag y = 3.14         # Inferred as Float
tag z = "text"       # Inferred as String
tag flag = true      # Inferred as Bool
```
---
## Type Rules

Numeric Types

```
tag a = 5            # Int
tag b = 5.0          # Float
tag c = a + b        # Result: Float (10.0)

# Int and Float can work together
tag result = a * b   # Float (25.0)
```

## Type Safety

```
tag x: Int = "hello"  # ERROR: Type mismatch!

tag y = 10
y = 3.14     # ERROR: Int cannot become Float!
```