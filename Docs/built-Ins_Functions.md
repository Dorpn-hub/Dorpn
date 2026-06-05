# Built-in Functions

Dorpn comes with a set of built-in functions available in every program — no imports needed. This page covers each one with usage examples and behavior notes.

---

## Output

### `print()`

Writes output to the console followed by a newline. Accepts one or more arguments separated by commas — values are printed space-separated.

```py
# Single value
print("Hello, Dorpn!")

# Multiple values
print("Value:", x, "Result:", result)

# Numbers and strings together
print("Sum is:", add(3, 7))
```

---

### `printOut()` *(v0.4.0+)*

Writes output to the console **without** a trailing newline. Useful for building up a line piece by piece — commonly used for ANSI color sequences or inline formatting.

```py
Const fgGreen = "\033[92m"
Const fgRed   = "\033[91m"
Const fgBlue  = "\033[94m"
Const fgReset = "\033[0m"

# Colored success message
printOut(fgGreen)
printOut("SUCCESS")
printOut(fgReset)
print(" - Build passed!")

# Inline label + value on one line
printOut(fgBlue + "INFO:" + fgReset)
print(" Compilation finished.")
```

> `printOut` was introduced in v0.4.0. If you're on an earlier version, use `print` and restructure output accordingly.

---

## Input

### `ask()`

Pauses execution and waits for user input. Returns the entered value as a `String`. Optionally accepts a prompt message displayed before waiting.

```py
# Without prompt
tag name = ask()

# With prompt
tag age = ask("Enter your age: ")

# Always returns String
tag response = ask("Say something: ")
print("You said:", response)
```

**Parameters:**
- `prompt` *(optional)* — a string displayed to the user before input is accepted. If omitted, the program waits silently.

---

## Type Inspection

### `type()`

Returns the data type of a value or variable as a `String`. Useful for debugging or inspecting values that come from user input.

```py
print(type(42))       # "Int"
print(type(3.14))     # "Float"
print(type("hello"))  # "String"
print(type(true))     # "Bool"

# Debugging a variable
tag value = 100
print("Type:", type(value))
```

---

## Math

### `abs()`

Returns the absolute value of a number. Works with both `Int` and `Float`. Negative values are returned as their positive counterpart; positive values pass through unchanged.

```py
tag a = abs(-10)     # 10
tag b = abs(-3.14)   # 3.14
tag c = abs(7)       # 7
```

---

### `min()` / `max()`

`min()` returns the smallest value among the given arguments. `max()` returns the largest. Both work with `Int`, `Float`, and `String` (strings are compared lexicographically).

```py
tag small = min(5, 10)             # 5
tag large = max(5, 10)             # 10

print(min("apple", "banana"))      # apple
print(max("apple", "banana"))      # banana
```

---

### `add()`

Returns the sum of all given arguments. An alternative to the `+` operator — returns `Int` if all inputs are integers, `Float` if any input is a float.

```py
tag result = add(7, 3)
print(result)       # 10

tag mixed = add(2, 3.0)
print(mixed)        # 5.0
```

---

## File I/O

### `Onload()`

Reads the full contents of a file at the given path and embeds it directly into the compiled binary. The file is resolved and loaded at **compile time**. If the file doesn't exist at the provided path, the compiler raises an error before a binary is ever produced.

```py
# Embed a text file into the binary
tag content = Onload("data.txt")
print("File size:", content.size())

# Embed a config file
tag config = Onload("config.json")
print(config)
```

> Since the file is embedded at compile time, the final binary carries the content independently. For very large files, memory usage will scale with the embedded content size.

