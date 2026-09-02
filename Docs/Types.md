# 📑 Dorpn Language Documentation 

> This file explains Dorpn's static typing system under the hood with type inference, detailing core primitive types along with concise examples. 

---
# Dorpn Type Keywords

### Int

- **Purpose**: Whole numbers (positive, negative, or zero)
- **Characteristics**: 64-bit signed integer, no decimal point
- **Examples**: 42, -100, 0, 1_000_000

### Int32

- **Purpose**: Whole numbers with reduced memory footprint
- **Characteristics**: 32-bit signed integer, no decimal point
- **Examples**: 42, -100, 0

### Float

- **Purpose**: Decimal numbers and scientific notation
- **Characteristics**: Double-precision floating point, includes decimal point
- **Examples**: 3.14, -2.5, 0.0, 1.23e-4

### Float32

- **Purpose**: Decimal numbers with reduced memory footprint
- **Characteristics**: Single-precision floating point, includes decimal point
- **Examples**: 3.14, -2.5, 0.0

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

- ✓ Correct: `Int`, `Float`, `String`, `Bool`, `Int32`, `Float32`
- ✗ Incorrect: int, FLOAT, string, BOOL, int32, FLOAT32

### Type Inference

- Omitting type annotations → compiler infers from value
- Literal numbers without decimal → `Int`
- Literal numbers with decimal → `Float`
- Text in quotes → `String`
- true/false → `Bool`
- 32-bit variants must be **explicitly annotated** — they are never inferred automatically

### Type Safety

- Once declared/inferred, type cannot change
- Mixed operations: Int + Float → Float (promotion)
- Mixed operations: Int32 + Float32 → Float32 (promotion)
- String conversion: Any type + String → String
- Boolean operators only work with Bool type
- 32-bit and 64-bit types do not implicitly promote to each other

### Default Behaviors

- Division (/) always returns Float
- Floor division (fld) always returns Int
- Exponentiation (**) always returns Float
- String concatenation uses + operator
- String manipulation uses .method() calls

---

# Memory/Performance Notes

- `Int` → long long (C) - 8 bytes
- `Int32` → int (C) - 4 bytes
- `Float` → double (C) - 8 bytes
- `Float32` → float (C) - 4 bytes
- `String` → char* (C) - heap allocated, manual management
- `Bool` → bool (C) - 1 byte
- No garbage collector - manual freeing in generated C code

---

**Eight types. Strict rules. Compile-time safety.**

---
# Type Annotations (Optional)

Can optionally specify types [Case Sensitive]:

```js
tag score: Int = 100
tag temperature: Float = 36.6
tag greeting: String = "Hello"
tag is_ready: Bool = false
```

### With 32-Bit Types (Annotation Required)

```js
tag score: Int32 = 100
tag temperature: Float32 = 36.6
```

---

## Type Inference

Dorpn automatically infers types from values:

```py
tag x = 10           # Inferred as Int
tag y = 3.14         # Inferred as Float
tag z = "text"       # Inferred as String
tag flag = true      # Inferred as Bool
```

> **Note:** 32-bit types (`Int32`, `Float32`) are never inferred. They must always be explicitly annotated.

---

## Type Rules

### Numeric Types

```py
tag a = 5            # Int
tag b = 5.0          # Float
tag c = a + b        # Result: Float (10.0)

# Int and Float can work together
tag result = a * b   # Float (25.0)
```

### 32-Bit Numeric Types

```py
tag a: Int32 = 5
tag b: Float32 = 5.0
tag c: Float32 = a + b   # Result: Float32 (10.0)
```

---

## Type Safety

```py
tag x: Int = "hello"   # ERROR: Type mismatch!

tag y = 10
y = 3.14               # ERROR: Int cannot become Float!

tag z: Int32 = 10
tag w: Int = z         # ERROR: Int32 and Int are not interchangeable!
```
