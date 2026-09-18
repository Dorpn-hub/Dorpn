# Language Operators

Dorpn provides a complete set of arithmetic, comparison, and logical 
operators for working with values. An operator is a symbol that 
combines one or two values into a new value. The rules for which 
operators apply to which types are enforced by the compiler, so 
invalid combinations are caught before the program runs.

Understanding the operators is mostly about understanding two things. 
First, which types each operator accepts. Second, what type the 
operator produces as its result. Once those are clear, writing correct 
expressions becomes straightforward.

---

## Arithmetic Operators

Dorpn provides the usual arithmetic operators along with a few that 
have specific behavior worth noting.

---

> **Addition** `+`

The `+` operator performs numeric addition when both operands are 
numeric. If either operand is a `String`, the `+` operator instead 
performs string concatenation, converting the non-string operand to a 
`String` first. This dual behavior makes `+` the only arithmetic 
operator that works with strings.

```python
tag sum = 10 + 20
tag total = 3.14 + 1
tag msg = "Value: " + 42           # "Value: 42"
tag full = "a" + "b"               # "ab"
```

The result type follows the type promotion rules of the language. 
`Int + Int` produces `Int`, `Int + Float` produces `Float`, and any 
combination involving `String` produces `String`.

---

> **Subtraction** `-`

The `-` operator subtracts the right operand from the left. Both 
operands must be numeric. The result type follows promotion rules.

```python
tag diff = 10 - 3                  # 7
tag neg = 3.14 - 1.0               # 2.14
```

Attempting to subtract a `String` from anything, or from a `String`, 
is a compile-time error.

---

> **Multiplication** `*`

The `*` operator multiplies two numbers. Both operands must be 
numeric. As with the other binary arithmetic operators, the result 
type follows promotion rules.

```python
tag product = 6 * 7                # 42
tag scaled = 2 * 3.14              # 6.28
```

Multiplication does not concatenate or repeat strings. For repeating 
a string, use the `.repeat()` method described in Built-in Methods.

---

> **Division** `/`

The `/` operator performs division. It always returns a `Float`, 
regardless of the types of the operands. This is a deliberate design 
choice. Integer division with implicit truncation is a frequent source 
of subtle bugs, so Dorpn does not offer it through `/`.

```python
tag half = 10 / 2                  # 5.0 (Float)
tag third = 10 / 3                 # 3.333... (Float)
tag exact = 10.0 / 4               # 2.5
```

If both operands are `Int`, the division still produces a `Float`. To 
get integer division, use `fld` instead.

---

> **Floor Division** `fld`

The `fld` operator performs floor division. It divides the left 
operand by the right and discards the fractional part, returning an 
`Int`. Unlike truncation toward zero, `fld` rounds toward negative 
infinity, which is the standard mathematical definition of floor.

```python
tag q1 = 10 fld 3                  # 3
tag q2 = -10 fld 3                 # -4 (rounds down)
tag q3 = 10 fld 2                  # 5
```

This is the operator to use when you genuinely need integer division 
and want the remainder discarded predictably.

---

> **Modulo** `%`

The `%` operator returns the remainder of a division. For integers, it 
produces an `Int`. For floats, it uses floating-point modulo and 
produces a `Float`.

```python
tag rem = 10 % 3                   # 1
tag even = 10 % 2                  # 0
tag frac = 10.5 % 3                # 1.5
```

For negative operands, `%` follows the sign convention of the left 
operand, consistent with the behavior of `fld`.

---

> **Exponentiation** `**`

The `**` operator raises the left operand to the power of the right. 
The result is always a `Float`, even when both operands are integers. 
This keeps the behavior consistent with the mathematical definition 
and avoids the ambiguity of integer exponentiation with negative 
exponents.

```python
tag square = 2 ** 3                # 8.0 (Float)
tag root = 9 ** 0.5                # 3.0
tag one = 5 ** 0                   # 1.0
```

---

## Comparison Operators

Comparison operators compare two values and produce a `Bool`. They are 
most often used in conditions and loops, but can appear anywhere a 
`Bool` is expected.

---

> **Equality** `==` and **Inequality** `!=`

The `==` operator returns `true` if its operands are equal, and 
`false` otherwise. The `!=` operator is its negation. For strings, 
equality compares the full contents, not the memory addresses.

```python
tag a = 10 == 10                   # true
tag b = 10 != 20                   # true
tag c = "hello" == "hello"         # true
tag d = true == false              # false
```

Comparing values of incompatible types is a compile-time error. You 
cannot compare an `Int` to a `String`.

---

> **Relational** `<`, `>`, `<=`, `>=`

The relational operators compare two values and return a `Bool` 
indicating whether the relation holds. They work on numeric types and 
on strings.

```python
tag lt = 5 < 10                    # true
tag gt = 5 > 10                    # false
tag le = 5 <= 5                    # true
tag ge = 10 >= 20                  # false
```

For strings, comparison follows lexicographic order based on 
character codes:

```python
tag lex = "apple" < "banana"       # true
tag eq = "abc" <= "abc"            # true
```

Mixing string and numeric operands in a relational comparison is a 
compile-time error.

---

## Logical Operators

Logical operators combine `Bool` values. Their operands must be of 
type `Bool`. Using any other type is a compile-time error.

---

> `and`

The `and` operator returns `true` only if both operands are `true`. It 
uses short-circuit evaluation. If the left operand is `false`, the 
right operand is not evaluated at all, since the result is already 
determined.

```python
tag both = true and true           # true
tag one = true and false           # false
```

Short-circuit behavior is useful for guarding expressions:

```python
if count > 0 and total / count > 5:
    print("Average is high")
```

The division on the right side is only evaluated if `count > 0`, so 
no division by zero can occur.

---

> `or`

The `or` operator returns `true` if at least one operand is `true`. It 
also uses short-circuit evaluation. If the left operand is `true`, the 
right operand is not evaluated.

```python
tag either = true or false         # true
tag neither = false or false       # false
```

---

> `not`

The `not` operator is a unary operator that negates a `Bool`. It takes 
a single operand and flips its value.

```python
tag inverted = not true            # false
tag same = not false               # true
```

`not` binds tighter than comparison operators, so `not a == b` 
evaluates as `(not a) == b`. Parentheses are often useful to make 
intent explicit.

---

## Precedence

When an expression contains multiple operators, Dorpn applies them in 
order of precedence. Higher precedence operators bind first.

| Precedence | Operators |
|------------|-----------|
| Highest | `**` |
| | `*`, `/`, `%`, `fld` |
| | `+`, `-` |
| | `<`, `>`, `<=`, `>=` |
| | `==`, `!=` |
| | `not` |
| | `and` |
| Lowest | `or` |

When in doubt, use parentheses. They make the intent clear and cost 
nothing at runtime.

```python
tag result = 2 + 3 * 4             # 14, not 20
tag clear = (2 + 3) * 4            # 20
```

---

## Type Promotion in Arithmetic

When arithmetic operators combine operands of different numeric types, 
the narrower type is promoted to the wider one before the operation 
runs. The result has the wider type.

| Left | Right | Result |
|------|-------|--------|
| `Int` | `Int` | `Int` |
| `Int32` | `Int32` | `Int32` |
| `Int` | `Int32` | `Int` |
| `Float` | `Float32` | `Float` |
| `Int` | `Float` | `Float` |
| `Int32` | `Float32` | `Float` |

The `/` operator is an exception: it always produces a `Float`, 
regardless of operand types.

---

## Common Mistakes

### 1. Expecting `/` to return an integer

```python
tag n = 10 / 2                     # 5.0, not 5
tag i = 10 fld 2                   # 5, integer division
```

### 2. Using `*` for string repetition

```python
tag s = "ab" * 3                   # compile-time error
tag ok = "ab".repeat(3)            # "ababab"
```

### 3. Comparing mismatched types

```python
tag bad = 10 == "10"               # compile-time error
tag good = 10 == 10                # true
```

### 4. Forgetting operator precedence

```python
tag maybe = 2 + 3 * 4              # 14, not 20
tag clear = (2 + 3) * 4            # 20
```

### 5. Relying on `and` and `or` with non-Bool operands

```python
tag bad = 1 and 2                  # compile-time error
tag good = true and false          # false
```

---
