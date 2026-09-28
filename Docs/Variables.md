# Variables in Dorpn

A variable is a named storage location in your program. When you declare 
a variable, you are telling the compiler two things: what to call it, 
and what kind of data it will hold. Dorpn then enforces those decisions 
for the rest of the variable's life.

Unlike dynamically typed languages where a variable can freely change 
its type, holding a number on one line and a string on the next, Dorpn 
locks a variable's type the moment it is declared. This is a deliberate 
choice. It means the compiler can catch type mistakes before your 
program ever runs, and it means anyone reading your code knows exactly 
what to expect from each name.

Dorpn provides three keywords for declaring variables: `tag`, `imm`, 
and `Const`. They differ in two important ways. The first is whether 
the value can be changed after it is set. The second is whether that 
value is determined at compile time or at runtime. Understanding this 
difference is the key to using them correctly.

---

## Quick Comparison

| Feature | `tag` | `imm` | `Const` |
|---------|-------|-------|---------|
| Reassignable | Yes | No | No |
| Value determined at | Runtime | Runtime | Compile time |
| Can call `ask()` | Yes | Yes | No |
| Can reference other `Const`s | Yes | Yes | Yes |
| Compile-time error on reassignment | No | Yes | Yes |
| Typical use | State that changes | Locked runtime value | Fixed configuration |

---

## `tag` - Mutable Variables

The `tag` keyword declares a mutable variable, one whose value can 
change during the lifetime of the program. This is the most flexible 
of the three keywords, and also the most commonly used. Whenever you 
need a counter that increments, a running total that accumulates, or 
any piece of state that evolves as your program executes, `tag` is 
the right choice.

A `tag` variable can be reassigned any number of times, as long as the 
new value has the same type as the original. You can either annotate 
the type explicitly, or let Dorpn infer it from the initial value.

```dpn
tag name = "Dorpn"             # inferred as String
tag count: Int = 42            # explicitly typed
```

The type is locked the moment the variable is declared. Even though 
`count` started as `42`, it cannot later hold a string:

```dpn
tag count: Int = 42
count = "hello"                # compile-time error: type mismatch
```

This is a feature, not a limitation. It means that once you have 
decided a variable holds a number, you cannot accidentally overwrite 
it with something else three hundred lines later. The compiler acts 
as a guardian of your intent.

Use `tag` when the value genuinely needs to change: loop counters, 
accumulators, flags that get flipped, buffers that get filled. 

---

## `imm` - Runtime Immutable

The `imm` keyword creates a variable whose value is set once at 
runtime and then never changes. It is a middle ground between `tag` 
and `Const`. Like `tag`, the value can come from a runtime source 
such as user input or a computation. But like `Const`, once assigned, 
the value is locked and cannot be reassigned.

This makes `imm` ideal for values that come from external sources and 
should be treated as read-only after they are obtained. A username 
entered by the user, a configuration value loaded from a file, a 
computed result that should not be accidentally overwritten. All of 
these are natural fits for `imm`.

```dpn
imm username = ask("Enter your name: ")
print(username)

# username = "New Name"        # compile-time error
```

The key difference from `Const` is that `imm` allows runtime values. 
You do not need to know the value at compile time. You only need to 
know that it will not change after it is set.

```dpn
imm current_score = 100        # could be computed at runtime
imm config = ask("Config? ")   # runtime value, locked after
```

Use `imm` when the value comes from runtime, such as user input, a 
file read, or a computed value, and you want to prevent accidental 
reassignment. If the value is known at compile time, prefer `Const`. 
If the value needs to change, use `tag`.

---

## `Const` - Compile-Time Constant

The `Const` keyword declares a value that must be known before the 
program runs, at compile time. The initializer cannot depend on any 
runtime input. It must be a literal, or an expression built entirely 
from other compile-time constants.

```dpn
Const PI = 3.14159
Const MAX_USERS = 100
Const GREETING = "Hello"
```

Because the compiler knows these values, it can substitute them 
directly into the generated code. This gives `Const` a small 
performance advantage over `imm` and `tag`. More importantly, it 
makes the constant's role in the program explicit. When someone reads 
`MAX_USERS` in your code, they know it is a fixed value that will 
never change during execution.

Runtime values are rejected at compile time:

```dpn
Const user = ask("Name: ")     # compile-time error
```

Constants can reference other constants, as long as the whole 
expression evaluates at compile time. The compiler resolves them in 
declaration order:

```dpn
Const BASE = 100
Const LIMIT = BASE * 2         # 200, computed at compile time
```

Use `Const` when the value is a fixed part of your program: 
mathematical constants, buffer sizes, configuration limits, magic 
strings that should not change. If the value might come from runtime, 
use `imm` instead.

---

## Scope Rules

Dorpn uses lexical scoping, also called block scoping. In simple 
terms, a variable is visible from the point where it is declared, 
down to the end of the block it was declared in. A block is any 
section of code enclosed by indentation, such as a function body, an 
`if` branch, or a loop body.

This means variables declared at the top of a file are visible 
throughout the file, while variables declared inside a function are 
visible only within that function. Variables declared inside an `if` 
or `loop` block disappear when that block ends.

```dpn
tag global_x = 10

func example() -> Unit:
    tag local_y = 20
    print(global_x)            # accessible (outer scope)
    print(local_y)             # accessible (same scope)

print(local_y)                 # compile-time error: not defined here
```

The same rule applies to control blocks:

```dpn
if true:
    tag inner = 5
print(inner)                   # compile-time error
```

This lexical scoping model keeps variables from leaking into places 
they do not belong. If you only need a variable inside a loop, 
declare it inside the loop. It will be gone by the time the loop 
ends, and nothing outside the loop can accidentally depend on it.

---

## Common Mistakes

Even experienced programmers trip over these. Most of them come from 
carrying assumptions from other languages, particularly from 
dynamically typed languages where variables can change type freely, 
or from languages where `const` behaves differently than Dorpn's.

### 1. Trying to reassign `imm` or `Const`

The most common mistake is treating `imm` and `Const` as if they were 
`tag`. Both are single-assignment:

```dpn
imm x = 5
x = 10                         # compile-time error

Const Y = 5
Y = 10                         # compile-time error
```

If you find yourself wanting to reassign an `imm`, ask whether it 
should have been a `tag` in the first place.

### 2. Using runtime values with `Const`

`Const` requires a compile-time value. Anything that depends on 
runtime, such as user input, file contents, or environment values, 
must use `imm` instead:

```dpn
Const user = ask("Name: ")     # compile-time error
imm user = ask("Name: ")       # correct
```

### 3. Assuming `Const` is evaluated lazily

Constants are resolved at compile time, in declaration order. If you 
reference a constant before it is declared, the compiler will not 
find it:

```dpn
Const A = 10
Const B = A + 5                # B = 15

Const C = D + 1                # compile-time error: D not defined
Const D = 20
```

### 4. Forgetting that type is locked after first assignment

Because Dorpn infers a variable's type from its first value, and 
because that type is then permanent, changing the shape of a variable 
later is not allowed:

```dpn
tag x = 42                     # x is Int
x = 3.14                       # compile-time error
```

The fix is to declare `x` as `Float` from the start, or to use a 
different variable.

---

## Choosing the Right Keyword

When you are not sure which keyword to use, ask yourself a single 
question: does the value ever change after it is created?

- No, and the value is known at compile time: use `Const`
- No, but the value comes from runtime: use `imm`
- Yes, the value changes: use `tag`

That is the entire decision. `Const` is for fixed values known in 
advance. `imm` is for values obtained at runtime that should never 
change afterward. `tag` is for everything that evolves.

A useful sanity check: if you ever find yourself writing a comment 
like `# don't change this` next to a `tag`, that variable probably 
wanted to be `imm` or `Const` instead.

