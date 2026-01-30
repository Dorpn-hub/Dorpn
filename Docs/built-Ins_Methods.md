# 📑 Dorpn Language Documentation 
---

# Built-in String Methods

---

**`.repeat()`** - String Repetition

- The `.repeat()` method create a new string consisting of the original string repeated a specified number of times.
- **Count**: An integer(**Int**) specifying how many times to repeat the string. Must be non-negative. 
- **`.repeat()`** does not insert seprators between repetitions.
- **Syntax**: `"string".repeat(times)`

```
tag stars = "*".repeat(10)
tag hello = "Hi ".repeat(3) 
print(stars)    # Output: **********
print(hello)    # Output: Hi Hi Hi
```
```
print("=".repeat(5))  # Outptut: =====
```
---

**`.alter()`** - String Replacement

- The `.alter()` method creates a new string by replacing occurrence of a substring with another substring.
- The original string is not modified , `.alter()` always returns a new string.
- **Syntax**: `"string".alter()`

```
tag text = "Hello World"
tag new_text = text.alter("World", "Dorpn")
print(new_text)  # "Hello Dorpn"
```
---


**`.flip()`** - String Reversal

- The `.flip()` method returns a new string with the characters of the original string reversed.
- `.flip()` is useful for palindrome detection, formatting, and string manipulation.
- Does not modify the original string `.flip()` always returns a new one. Must assign or use the returned value.
- **Syntax**: `"string".flip()`

```
tag reversed = "hello".flip() 
tag palindrome = "racecar".flip() 
print(reversed)    # "olleh"
print(palindrome)    # "racecar"
```

---

**`.size()`** - String Length

- The `.size()` method returns the length of a string, measured in the number of characters it contains.
- Always returns an integer(**Int**) represents the number of characters in the string, `.size()` is useful for validation, loops, and formatting tasks.
- **Syntax**: `"string".size()`

```
tag length = "Hello".size()  # 5
tag empty = "".size()        # 0

# With variables
tag name = "Alice"
print("Name length:", name.size())
```