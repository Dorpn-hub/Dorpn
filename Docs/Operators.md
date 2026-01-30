# 📑 Dorpn Language Documentation

---

# String Conversion with `+`

- The `+` operator is used not only for numeric addition but also for string concatenation. When one of the operands is a string, the other operand is automatically converted to a string, and the two are joined together.
- Concatenation does not add spaces automatically. Must include them explicitly if needed.

```
tag num = 42
tag text = "The answer is " + num  # Auto-converted to string
print(text)  # "The answer is 42"
```

---

# Addition with `+`

- The `+` operator is also used for numeric addition.
- If both operands are numbers , performs numeric addition.


## Integer addition
```
tag num = 30
tag num1 = 40
tag total = num + num1
print(total)  # Output: 70
```

## Multiple additions
```
tag sum = 20 + 30 + 10
print(sum)  # Output: 60
```

## Float addition
```
tag price1 = 9.99
tag price2 = 5.50
tag total_price = price1 + price2
print(total_price)  # Output: 15.49
```
## Mixed Int and Float (Int promoted to Float)
```
tag int_val = 10
tag float_val = 3.14
tag mixed_sum = int_val + float_val
print(mixed_sum)  # Output: 13.14
print(type(mixed_sum))  # Output: "Float"
```
## Negative numbers
```
tag result = 50 + (-20)
print(result)  # Output: 30
```
---

# Substraction with `-`

- The `-` operator performs numeric substraction. 
- Both operands must be numeric (**Int or Float**).

## Integer subtraction
```
tag difference = 100 - 45
print(difference)  # Output: 55
```

## Float subtraction
```
tag float_diff = 10.5 - 3.2
print(float_diff)  # Output: 7.3
```
## Negative results
```
tag negative = 20 - 50
print(negative)  # Output: -30
```

## Multiple operations
```
tag complex = 100 - 30 - 20
print(complex)  # Output: 50
```

## Mixed types (Int - Float)
```
tag int_num = 15
tag float_num = 4.5
tag mixed = int_num - float_num
print(mixed)  # Output: 10.5
print(type(mixed))  # Output: "Float"
```
## Error Examples
```
tag text = "hello"
tag num = 10
tag error = text - num  # COMPILE ERROR: Cannot perform '-' on Strings
```

---

# Multiplication with `*`

- The `*` operator performs numeric multiplication. 
- Both operands must be numeric.

## Integer multiplication
```
tag product = 7 * 8
print(product)  # Output: 56
```

## Float multiplication  
```
tag area = 5.5 * 3.0
print(area)  # Output: 16.5
```

## With negative numbers
```
tag neg_product = -5 * 3
print(neg_product)  # Output: -15
```

## Multiple multiplications
```
tag volume = 2 * 3 * 4
print(volume)  # Output: 24
```

## Mixed types
```
tag int_val = 3
tag float_val = 2.5
tag mixed = int_val * float_val
print(mixed)  # Output: 7.5
```

---

# Division with `/`

- The `/` operator performs floating-point division.
- It always returns a **Float** , even when dividing integers.

## Integer division (returns Float)
```
tag result = 10 / 2
print(result)   # Output: 5.0
print(type(result))  # Output: "Float"
```

## Float division
```
tag float_result = 15.0 / 4.0
print(float_result)  # Output: 3.75
```

## Uneven division
```
tag uneven = 7 / 3
print(uneven)  # Output: 2.333333...
```

## Division by decimal
```
tag decimal_div = 100 / 2.5
print(decimal_div)  # Output: 40.0
```

## Order of operations
```
tag complex_div = 10 + 20 / 5
print(complex_div)  # Output: 14.0 (20/5=4.0, +10=14.0)
```
*Note: Division by zero will cause a runtime error (floating-point exception)*.

---

# Floor Division with `fld`

- The `fld` operator performs integer division, discarding any fractional part.
- It always returns an **Int**.

## Basic floor division
```
tag result = 10 fld 3
print(result)   # Output: 3
print(type(result))  # Output: "Int"
```

## Even division
```
tag even = 20 fld 4
print(even)  # Output: 5
```

## Negative numbers
```
tag negative = -10 fld 3
print(negative)  # Output: -4 (rounds toward negative infinity)
```

## Mixed types (Float gets floored first)
```
tag mixed = 10.9 fld 2.5  # Same as: 10 fld 2
print(mixed)  # Output: 5
```

---

# Modulo with `%`

- The `%` operator returns the remainder of division.
- Works with both **Int** and **Float**.

## Integer modulo
```
tag remainder = 17 % 5
print(remainder)  # Output: 2
```

## Even division (no remainder)
```
tag zero_remainder = 20 % 4
print(zero_remainder)  # Output: 0
```

## Float modulo
```
tag float_remainder = 10.5 % 3.2
print(float_remainder)  # Output: 0.9 (approximately)
```

## Check for even/odd
```
tag number = 42
if number % 2 == 0:
    print("Even number")  # Output: "Even number"
else:
    print("Odd number")
```

## Wrapping values (circular buffer)
```
tag index = 15
tag size = 10
tag wrapped = index % size
print(wrapped)  # Output: 5
```

---

# Exponentiation with `**`

- The `**` operator raises a number to a power.
- Returns **Float** for all cases.

## Integer exponentiation
```
tag square = 5 ** 2
print(square)   # Output: 25.0
print(type(square))  # Output: "Float"
```

## Float exponentiation
```
tag power = 2.5 ** 3
print(power)  # Output: 15.625
```

## Negative exponent (reciprocal)
```
tag reciprocal = 2 ** -1
print(reciprocal)  # Output: 0.5
```

## Square root (using 0.5 power)
```
tag root = 16 ** 0.5
print(root)  # Output: 4.0
```

## Compound interest example
```
tag principal = 1000.0
tag rate = 1.05  # 5% growth
tag years = 3
tag future_value = principal * (rate ** years)
print(future_value)  # Output: 1157.625
```

---

# Equality Comparison with `==`

- The `==` operator checks if two values are equal.
- Returns **Bool**.

## Numeric equality
```
tag is_equal = 10 == 10
print(is_equal)  # Output: true
```

## Float equality (be careful with precision)
```
tag float_eq = 3.14 == 3.14
print(float_eq)  # Output: true
```

## String equality
```
tag str_eq = "hello" == "hello"
print(str_eq)  # Output: true
```

## Case-sensitive string comparison
```
tag case_eq = "Hello" == "hello"
print(case_eq)  # Output: false
```

## Boolean equality
```
tag bool_eq = true == true
print(bool_eq)  # Output: true
```

## Type mismatch (always false)
```
tag mismatch = 10 == "10"
print(mismatch)  # Output: false
```

## In conditional statements
```
tag score = 85
if score == 100:
    print("Perfect!")
elif score == 0:
    print("Try again!")
```

---

# Inequality Comparison with `!=`

- The `!=` operator checks if two values are NOT equal.
- Returns **Bool**.

## Numeric inequality
```
tag not_equal = 10 != 5
print(not_equal)  # Output: true
```

## String inequality
```
tag str_ne = "apple" != "orange"
print(str_ne)  # Output: true
```

## Same value check
```
tag same = 7 != 7
print(same)  # Output: false
```

## Boolean inequality
```
tag bool_ne = true != false
print(bool_ne)  # Output: true
```

## Input validation example
```
tag password = ask("Enter password: ")
if password != "secret123":
    print("Access denied")
    halt
print("Access granted")
```

---

# Less than with `<`

- The `<` operator checks if the left value is less than the right value. 
- Returns **Bool**.

## Numeric comparison
```
tag less = 5 < 10
print(less)  # Output: true
```

## Float comparison
```
tag float_less = 3.14 < 3.15
print(float_less)  # Output: true
```

## String lexicographic comparison
```
tag str_less = "apple" < "banana"
print(str_less)  # Output: true (alphabetical order)
```

## Case matters in string comparison
```
tag case_less = "Apple" < "apple"
print(case_less)  # Output: true (uppercase < lowercase in ASCII)
```

## Edge case: equal values
```
tag equal_check = 10 < 10
print(equal_check)  # Output: false
```

## Range checking
```
tag age = 16
if age < 18:
    print("Underage")  # Output: "Underage"
```

---

# Greater Than with `>`

- The `>` operator checks if the left value is greater than the right value.
- Returns **Bool**.

## Numeric comparison
```
tag greater = 15 > 10
print(greater)  # Output: true
```

## Float comparison
```
tag float_greater = 4.2 > 4.1
print(float_greater)  # Output: true
```
## String comparison
```
tag str_greater = "zebra" > "apple"
print(str_greater)  # Output: true
```

## Boundary check
```
tag at_boundary = 10 > 10
print(at_boundary)  # Output: false
```

## Sorting logic
```
tag a = 30
tag b = 20
if a > b:
    tag max_val = a
else:
    tag max_val = b
print(max_val)  # Output: 30
```

---

# Less Than or Equal with `<=`

- The `<=` operator checks if the left value is less than OR equal to the right value.
- Returns **Bool**.

## Less than case
```
tag less_case = 5 <= 10
print(less_case)  # Output: true
```

## Equal case
```
tag equal_case = 10 <= 10
print(equal_case)  # Output: true
```

## Greater than case
```
tag greater_case = 15 <= 10
print(greater_case)  # Output: false
```

## String comparison
```
tag str_le = "abc" <= "abc"
print(str_le)  # Output: true
```

## Array bounds checking
```
tag index = 9
tag size = 10
if index <= size - 1:
    print("Valid index")  # Output: "Valid index"
```

---

# Greater Than or Equal with `>=`

- The `>=` operator checks if the left value is greater than OR equal to the right value.
- Returns **Bool**.

## Greater than case
```
tag greater_case = 15 >= 10
print(greater_case)  # Output: true
```

## Equal case
```
tag equal_case = 10 >= 10
print(equal_case)  # Output: true
```

## Less than case
```
tag less_case = 5 >= 10
print(less_case)  # Output: false
```

## Grade checking example
```
tag score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")  # Output: "Grade: B"
elif score >= 70:
    print("Grade: C")
```

---

# Logical AND with `and`

- The `and` operator performs logical conjunction. 
- Returns **Bool**.
- Both operands must be boolean.

## Basic AND
```
tag result = true and true
print(result)  # Output: true
```

## False cases
```
tag false1 = true and false
print(false1)  # Output: false

tag false2 = false and true
print(false2)  # Output: false

tag false3 = false and false
print(false3)  # Output: false
```

## Short-circuit evaluation
```
tag x = 10
tag y = 20
if x > 5 and y < 30:
    print("Both conditions true")  # Output: "Both conditions true"
```

## Range checking
```
tag age = 25
if age >= 18 and age <= 65:
    print("Working age")  # Output: "Working age"
```   

## Multiple ANDs
```
tag a = true
tag b = true
tag c = false
tag multi = a and b and c
print(multi)  # Output: false
```

*Note: Dorpn uses short-circuit evaluation. If the left operand is false, the right operand is not evaluated.*

---

# Logical OR with `or`

- The `or` operator performs logical disjunction.
- Returns **Bool**. 
- Both operands must be boolean.

## Basic OR
```
tag result = true or false
print(result)  # Output: true
```

## True cases
```
tag true1 = true or true
print(true1)  # Output: true

tag true2 = false or true
print(true2)  # Output: true
```

## False case
```
tag false_case = false or false
print(false_case)  # Output: false
```

## Input validation
```
tag input = ask("Enter yes or no: ")
if input == "yes" or input == "no":
    print("Valid input")
else:
    print("Invalid input")
```

## Multiple ORs
```
tag option = "C"
if option == "A" or option == "B" or option == "C":
    print("Valid option")  # Output: "Valid option"
```

*Note: Uses short-circuit evaluation. If the left operand is true, the right operand is not evaluated.*

---

# Logical NOT with not

- The not operator performs logical negation.
- Returns **Bool**.
- Operand must be boolean.

## Basic negation
```
tag result = not true
print(result)  # Output: false

tag result2 = not false
print(result2)  # Output: true
```

## Double negation
```
tag value = true
tag double_not = not not value
print(double_not)  # Output: true
```

## In conditions
```
tag logged_in = false
if not logged_in:
    print("Please log in")  # Output: "Please log in"
```

## Combined with AND/OR
```
tag a = true
tag b = false
tag combined = not (a and b)
print(combined)  # Output: true
```

## Toggle logic
```
tag enabled = true
enabled = not enabled  # Toggle to false
print(enabled)  # Output: false
```

*Note: `not` has higher precedence than `and` and `or`. Use parentheses when needed.*