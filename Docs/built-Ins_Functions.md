# 📑 Dorpn Language Documentation
---
# Built-in Functions
---
**`print(exp)`** - Output
- The `print` built-in is used to display output to the console.
It is one of the most commonly used functions in the language and is typically the first step in learning how to interact with programs.

```
# Single value
print("Hello")

# Multiple values (space-separated)
print("Value:", x, "Result:", result)
```
--- 

**`ask()`** - User Input
- The `ask` built-in is used to receive input from the user during program execution. It pauses the program until the user provides a response, then returns that response as a string.

```
# Without prompt
tag name = ask()

# With prompt
tag age = ask("Enter your age: ")

# Always returns String
tag input = ask("Say something: ")
print("You said:", input)
```

`ask(prompt)`

- prompt (optional): A string message displayed to the user before waiting for input.  
- If no prompt is provided, the program simply waits for input.


---

**`type()`** - Type Checking

- The `type` built-in is used to determine the data type of a value or variable at runtime. It is especially useful when working with user input (from **ask**) or dynamic values, where the type may not be immediately obvious.


```
print(type(42))      # "Int"
print(type(3.14))    # "Float"  
print(type("text"))  # "String"
print(type(true))    # "Bool"

# Useful for debugging
tag value = 100
print("Type of value is:", type(value))
```

---

## Mathematical Functions

**`abs()`**  Absolute value

- Returns the absolute value of a number (an Int or Float).
- If the number is positive, it returns the same number.
- If the number is negative, it returns it's positive counterpart.

```
tag a = abs(-10)      # 10
tag b = abs(-3.14)    # 3.14
```
---

**`min()`** - **`max()`**

- `min()` returns the smallest value among the given arguments. It compare all arguments and returns the smallest one.
- `max()` returns the largest value among the given arguments. Compare all arguments and returns the largest one.
- Works with integers(**Int**), floats (**Float**) and strings(**String**) **[lexicographic comparison]**.

```
tag small = min(5, 10)  # 5
tag large = max(5, 10)  # 10
print(min("apple", "banana")) # Output: apple
```
---

**`add()`** Addition (alternative to +)

- Returns the sum of all given arguments. Adds all numeric arguments together. Returns an **Int**  or **Float** depends on the input.

```
tag sum = add(7, 3)   
print(sum)  # Output:10

tag num = add(2,3.0)
print(num)  # Output:5.0
```
---

## File I/O

**`Onload()`** - File Reading

- Loads the provided resource at compile time and reads the content of a file **as String** from the given path. 


```
# Read entire file as string
tag content = Onload("data.txt")
print("File size:", content.size())

# Error if file doesn't exist
tag config = Onload("config.json")
```
