# Built-in Methods

Dorpn provides a set of built-in methods that operate on values 
directly. These methods are invoked using dot-notation, where the 
value appears on the left side of the dot and the method name appears 
on the right. For example, `"hello".size()` calls the `size` method 
on the string `"hello"`.

These methods fall into two categories. 
- **The first category :** works primarily on strings and produces new strings or integers. 

- **The second category :** handles explicit type conversion, allowing you to change a value from one type to another when the need arises.

An important property to keep in mind is that none of the string 
methods modify the original value. Strings in Dorpn are immutable, so 
every method that appears to transform a string actually returns a new 
one, leaving the original untouched. When you write 
`tag rev = "hello".flip()`, the original `"hello"` is not modified. A 
new string `"olleh"` is created and assigned to `rev`.


## String Methods

> `.repeat(count)`

The `.repeat(count)` method takes an integer and returns a new string 
consisting of the original string repeated `count` times. No separators 
are inserted between repetitions. If `count` is zero or negative, the 
result is an empty string.

```python
tag stars = "*".repeat(5)          # "*****"
tag line = "ab".repeat(3)          # "ababab"
tag none = "x".repeat(0)           # ""
```

This method is useful for constructing visual separators, padding, or 
any repeated pattern without writing a loop.

---

> `.alter(target, replacement)`

The `.alter(target, replacement)` method returns a new string in which 
every occurrence of the substring `target` has been replaced with the 
substring `replacement`. If `target` does not appear in the original 
string, the original is returned unchanged. If `target` is empty, the 
original string is returned as-is, since replacing every occurrence of 
an empty substring would produce an unreasonable result.

```python
tag text = "Hello World".alter("World", "Dorpn")
# text is "Hello Dorpn"

tag path = "a/b/c".alter("/", "-")
# path is "a-b-c"
```

Note that `.alter` replaces all occurrences, not just the first one.

---
> `.flip()`

The `.flip()` method returns a new string with the order of its 
characters reversed. The first character becomes the last, the second 
becomes the second-to-last, and so on. An empty string returns an 
empty string.

```python
tag rev = "hello".flip()           # "olleh"
tag back = "Dorpn".flip()          # "nproD"
```

This is often useful in algorithms that work with palindromes, 
reversed strings, or certain kinds of parsing.

---
> `.tidy()`

The `.tidy()` method returns a new string with leading and trailing 
whitespace removed. Whitespace here includes spaces, tabs, newlines, 
and other standard whitespace characters. Internal whitespace is left 
untouched.

```python
tag clean = "  hello  ".tidy()     # "hello"
tag lines = "\n text \n".tidy()    # "text"
```

This is commonly used to clean up user input, since `ask()` does not 
strip whitespace automatically.

---
> `.size()`

The `.size()` method returns an `Int` representing the number of 
characters in the string. For an empty string, it returns `0`.

```python
tag length = "Dorpn".size()        # 5
tag empty = "".size()              # 0
```

`.size()` can also be called with a unit argument, in which case it 
returns the size converted to that unit as a `Float`. This is useful 
when working with strings that represent file contents or data, where 
sizes are conventionally expressed in bytes, kilobytes, or megabytes.

```python
tag bytes = "hello world".size("b")       # 11.0
tag kb = data.size("kb")                  # size in kilobytes
tag bits = "ab".size("bits")              # 16.0
```

Supported units include `"b"`, `"bit"`, `"bits"`, `"kb"`, `"kib"`, 
`"mb"`, `"mib"`, `"gb"`, `"gib"`, `"tb"`, and `"tib"`. Unknown units 
produce a warning and return the size in bytes.

---

## Type Conversion Methods

Dorpn does not implicitly convert between types. If a value of one 
type is needed where another is expected, you must say so explicitly 
using one of the conversion methods. These methods are also called 
with dot-notation.

| Method | Accepts | Returns |
|--------|---------|---------|
| `.asInt()` | Int32, Float, Float32, String | Int |
| `.asInt32()` | Int | Int32 |
| `.asFloat()` | Int, Int32, Float32, String | Float |
| `.asFloat32()` | Float | Float32 |
| `.asString()` | Any type | String |

### `.asInt()` and `.asFloat()`

These methods convert a value to an `Int` or `Float` respectively. 
They accept numeric types and strings that represent valid numbers. If 
the string is not a valid number, a runtime panic occurs.

```python
tag num_str = "100"
tag num = num_str.asInt()          # 100

tag pi_str = "3.14"
tag pi = pi_str.asFloat()          # 3.14

tag n = 42
tag f = n.asFloat()                # 42.0
```

The strict behavior on invalid input is intentional. Silently 
returning zero for a string like `"abc"` would hide the problem until 
much later, making debugging difficult. A panic at the point of 
conversion makes the failure obvious.

---
### `.asInt32()` and `.asFloat32()`

These methods narrow a value to a smaller type. If the value does not 
fit in the target type, a runtime panic occurs. This is different from 
the silent truncation that occurs in many other languages.

```python
tag n = 100
tag narrow = n.asInt32()           # 100 as Int32

tag big = 5000000000
tag overflow = big.asInt32()       # runtime panic: out of range
```

---
### `.asString()`

The `.asString()` method converts any value to its string 
representation. This never fails.

```python
tag n = 42
tag s = n.asString()               # "42"

tag f = 3.14
tag fs = f.asString()              # "3.14"

tag b = true
tag bs = b.asString()              # "true"
```

---

## Chaining Methods

Because each method returns a new value, methods can be chained 
together. The result of one method becomes the input to the next.

```python
tag result = "  hello world  ".tidy().flip()
# result is "dlrow olleh"
```

In this example, `.tidy()` first removes the surrounding whitespace, 
producing `"hello world"`. Then `.flip()` reverses it, producing 
`"dlrow olleh"`.

Chaining works because each method returns a `String`, and `String` 
values support the same methods. Conversion methods break the chain 
when they change the type, since the resulting `Int` or `Float` does 
not have string methods.

---
