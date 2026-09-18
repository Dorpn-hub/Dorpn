# Built-in Functions

Dorpn provides a set of built-in functions that cover the most common 
operations a program needs: producing output, reading input, 
inspecting types, performing mathematical calculations, controlling 
program flow, and reading files. These functions are always available 
without any import or declaration.

Unlike methods, which are called on a value using dot-notation, 
functions are called by name with their arguments in parentheses. For 
example, `print("hello")` calls the `print` function with one 
argument. A function may return a value, in which case the call 
expression can be used anywhere a value is expected, or it may perform 
an action without producing anything useful.

---

## Input and Output

---
> `print()`

The `print()` function displays output to the console. It accepts one 
or more expressions separated by commas and prints each of them 
followed by a newline. When multiple arguments are given, they are 
printed on a single line, separated by a space.

```python
print("Hello")
print("Hello", "World")           # prints "Hello World"
print(42)
print(3.14)
print(true)
```

`print()` handles every core type. Integers, floats, booleans, and 
strings are all converted to their textual representation before being 
written out.

---
> `printOut()`

The `printOut()` function displays output to the console without 
appending a newline. It accepts a single argument. This is useful when 
you want to write a prompt, a progress indicator, or any partial line 
that will be completed later.

```python
printOut("Loading")
printOut(".")
printOut(".")
printOut(".")
print("")                         # newline to finish the line
```

The combination of `print()` and `printOut()` gives you full control 
over line breaks in your output.

---
> `ask()`

The `ask()` function pauses the program and waits for the user to 
enter a line of input. It accepts an optional prompt string, which is 
displayed before reading input. The function always returns the user's 
input as a `String`.

```python
imm name = ask("Enter your name: ")
print("Hello,", name)
```

Because `ask()` always returns a `String`, if you need a number you 
must convert it explicitly. This is by design. Silently coercing input 
to a guessed type would hide mistakes.

```python
imm input = ask("Enter a number: ")
tag n = input.asInt()
```

If the user enters something that is not a valid number, the 
conversion will panic at runtime, which is the intended behavior.

---

## Type Inspection

---
> `type()`

The `type()` function evaluates the runtime type of an expression and 
returns its name as a `String`. This is useful for debugging, for 
logging, or for building generic logic that behaves differently 
depending on the type of a value.

```python
imm user_input = ask("Enter value: ")
print(type(user_input))            # "String"

print(type(42))                    # "Int"
print(type(3.14))                  # "Float"
print(type(true))                  # "Bool"
```

The returned string is one of `"Int"`, `"Int32"`, `"Float"`, 
`"Float32"`, `"String"`, `"Bool"`, or `"unknown"` if the type cannot 
be determined.

---

## Mathematical Functions

Dorpn includes a small set of mathematical functions for common 
operations. These cover the cases where a function call is more 
natural or more readable than an operator.

---
> `abs()`

The `abs()` function returns the absolute value of a number. Negative 
values become positive, positive values stay unchanged, and zero 
remains zero. It works on both `Int` and `Float` inputs.

```python
tag val = abs(-10)                 # 10
tag fval = abs(-3.14)              # 3.14
tag zero = abs(0)                  # 0
```

---
> `min()` and `max()`

The `min()` and `max()` functions take two arguments and return the 
smaller or larger of the two, respectively. If the two arguments have 
different numeric types, the narrower type is promoted before 
comparison, and the result has the wider type.

```python
tag lowest = min(5, 2)             # 2
tag highest = max(5, 2)            # 5

tag small = min(10, 3.14)          # 3.14 (Int promoted to Float)
```

To compare more than two values, chain the calls:

```python
tag smallest = min(min(5, 2), 8)   # 2
```

---
> `add()`

The `add()` function is a functional alternative to the `+` operator 
for numeric addition. It takes two arguments and returns their sum. 
This is occasionally useful when passing an addition operation as a 
value, or when the syntax of `+` would be ambiguous.

```python
tag total = add(10, 20)            # 30
tag sum = add(3.5, 1.5)            # 5.0
```

For most code, the `+` operator is more readable and should be 
preferred. `add()` exists to cover the cases where a function form is 
needed.

---

## Program Execution Control

These functions control the flow of the entire program. They are 
typically used for error handling, early exit, or returning a specific 
exit code to the shell.

---
> `panic()`

The `panic()` function immediately halts execution and prints an error 
message to standard error. It is intended for situations where the 
program has reached a state it cannot recover from, such as invalid 
input or a violated assumption.

```python
if age < 0:
    panic("Age cannot be negative")
```

When `panic()` is called, the program terminates with a non-zero exit 
code. Any code after the `panic()` call in the same block will not 
execute.

---
> `finish()`

The `finish()` function terminates the program successfully, with exit 
code `0`. This is useful when you want to end execution early but the 
situation is not an error.

```python
if not is_logged_in:
    print("Goodbye")
    finish()

print("Welcome back")
```

In this example, `finish()` ends the program before the welcome 
message is printed.

---
> `error_out()`

The `error_out(code)` function exits the program with the specified 
exit code. Unlike `panic()`, it does not print an error message. This 
gives you full control over how the program terminates when you need 
to signal a specific error condition.

```python
if file_not_found:
    error_out(2)
```

The exit code is available to the calling shell and can be used to 
detect what went wrong.

---

## File Reading

> `Onload()`

The `Onload("path")` function reads the contents of the file at the 
given path and returns it as a `String`. This is intended for loading 
data that is embedded into the program at compile time, such as 
configuration files, templates, or static resources.

```python
tag content = Onload("data.txt")
print(content)
```

The path must be a literal string known at compile time. Because the 
file is read during compilation, the content becomes part of the 
generated program and is available immediately when the program runs.

```python
tag template = Onload("templates/welcome.txt")
print(template)
```

`Onload()` accepts an optional second argument: a threshold in bytes. 
If the file is larger than this threshold, the compiler emits a 
warning. This is useful for catching cases where a file has grown 
larger than expected.

```python
tag big = Onload("large.txt", 1000000)     # warn if over 1 MB
```

If the file does not exist, or if the path is not a compile-time 
literal, the compiler reports an error and the program does not build.

---
