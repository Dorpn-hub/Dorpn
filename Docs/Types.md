# Dorpn Type System

Dorpn is a **statically typed** language. Every value has a known type 
before the program runs, and the compiler rejects code that mixes 
incompatible types. This prevents whole categories of bugs at compile 
time instead of at runtime.

Dorpn provides seven core types:

| Type | C Equivalent | Size | Description |
|------|-------------|------|-------------|
| `Int` | `long long` | 64-bit signed | Whole numbers |
| `Int32` | `int` | 32-bit signed | Smaller whole numbers |
| `Float` | `double` | 64-bit | Decimal numbers |
| `Float32` | `float` | 32-bit | Lower-precision decimals |
| `String` | `char*` | Variable | UTF-8 text |
| `Bool` | `bool` | Logical | `true` or `false` |
| `Unit` | `void` | — | Absence of a value |

Type names are **case-sensitive**. `int` is not a type — `Int` is.

---

## Basic Types in Action

```py
tag age: Int = 21
tag price: Float = 99.99
tag label: String = "Item"
tag active: Bool = true
```

### Int and Int32

`Int` is the default integer type. Use `Int32` only when you need to 
match a specific 32-bit external interface or save memory.

```py
tag big: Int = 9000000000       # fits in Int
tag small: Int32 = 42           # explicit narrow type
```

### Float and Float32

`Float` is the default decimal type. `Float32` trades precision for 
memory — useful when you need it, but rarely the default choice.

```py
tag precise: Float = 3.14159265358979
tag approx: Float32 = 3.14
```

### String

`String` holds UTF-8 text. Strings are immutable in Dorpn — operations 
like `.flip()` and `.alter()` return **new** strings rather than 
modifying the original.

```py
tag greeting: String = "Hello, Dorpn!"
tag empty: String = ""
```

### Bool

`Bool` has exactly two values: `true` and `false`. Booleans are the 
result of comparison and logical operators.

```py
tag is_ready: Bool = true
tag is_done: Bool = 10 > 5      # true
```

### Unit

`Unit` represents "no value". It is used as the return type of 
functions that perform an action but don't produce a result.

```rs
func log_message(msg: String) → Unit:
    print(msg)
```

---

## Type Inference

When you don't annotate a type, Dorpn infers it from the initial value:

```py
tag x = 42          # Int
tag y = 3.14        # Float
tag z = "hello"     # String
tag flag = true     # Bool
```

Once inferred, the type is **locked**. The variable cannot later hold 
a value of a different type:

```py
tag x = 42
x = "hello"         # compile-time error: cannot assign String to Int
```

To be explicit — and to catch your own mistakes early — annotate 
types when the meaning isn't obvious:

```py
tag ratio: Float = 1 / 3
```

---

## Type Conversion

Dorpn does **not** implicitly convert between unrelated types. 
Conversions are explicit, using built-in `.asX()` methods.

### Conversion Methods

| Method | Accepts | Returns | Fails When |
|--------|---------|---------|------------|
| `.asInt()` | Int32, Float, Float32, String | Int | String is not a valid number |
| `.asInt32()` | Int | Int32 | Value out of 32-bit range |
| `.asFloat()` | Int, Int32, Float32, String | Float | String is not a valid number |
| `.asFloat32()` | Float | Float32 | Value out of 32-bit range |
| `.asString()` | Any type | String | Never fails |

### Examples

```py
tag num_str = "123"
tag count = num_str.asInt()        # 123

tag val = 42
tag float_val = val.asFloat()      # 42.0

tag answer = 3.14
tag text = answer.asString()       # "3.14"
```

> [!WARNING] 
> _String-to-number conversions trigger a **runtime panic** if the string is not a valid number. Always validate user input before converting:_


```py
imm input = ask("Enter a number: ")
tag n = input.asInt()               # panics if input is "abc"
```

---
### Narrowing Conversions

`.asInt32()` and `.asFloat32()` reduce the size of a value. If the 
value doesn't fit, a runtime panic occurs:

```py
tag big: Int = 5000000000
tag narrow = big.asInt32()          # runtime panic: out of range

tag ok: Int = 100
tag small = ok.asInt32()            # fine
```

---

## Mixed-Type Arithmetic

When arithmetic mixes numeric types, Dorpn promotes the "narrower" 
type to the "wider" one:

| Left | Right | Result |
|------|-------|--------|
| `Int` | `Int` | `Int` |
| `Int32` | `Int32` | `Int32` |
| `Int` | `Int32` | `Int` |
| `Float` | `Float32` | `Float` |
| `Int` | `Float` | `Float` |
| `Int32` | `Float32` | `Float` |

The result of `/` is **always** `Float`, even when both operands are 
integers:

```py
tag result = 10 / 3        # Float: 3.333...
```

For integer division that discards the remainder, use `fld`:

```py
tag floored = 10 fld 3     # Int: 3
```

`String` only participates in `+` (concatenation). Any other 
arithmetic operator on a `String` is a compile-time error.

---

## Common Mistakes

### 1. Forgetting that `/` returns Float

```py
tag avg = 10 / 4           # Float: 2.5, not Int 2
tag avg_int = (10 fld 4)   # Int: 2
```

### 2. Converting unvalidated input

```py
tag n = ask("Number: ").asInt()    # panics on non-numeric input
```

Validate first:

```py
imm input = ask("Number: ")
if input.size() > 0:
    tag n = input.asInt()
```

### 3. Expecting implicit coercion

```py
tag n: Int = 42
tag s: String = n                   # compile-time error
tag s: String = n.asString()        #  correct
```

### 4. Overflowing `Int32`

```py
tag big: Int = 3000000000
tag small = big.asInt32()           #  runtime panic
```

---

