# Frequently Asked Questions

Got a question about Dorpn? Chances are it's answered here. If not, drop by the [Discord](https://discord.gg/9J2qabs3gu) and ask.

---

## Installation & Releases

**Q: How do I install Dorpn?**

Download the latest Windows installer from the [Releases page](https://github.com/Dorpn-hub/dorpn/releases). Run the installer and Dorpn will be ready to use — no manual setup needed.

---

**Q: Is the source code available?**

Not yet. The compiler will be open-sourced when Dorpn reaches v1.0 or becomes self-hosted. For now, only compiled binaries are distributed.

---

**Q: How do I update to a newer version?**

Download the latest installer from the releases page and run it — it'll replace your existing installation automatically.

---

**Q: Can I build from source?**

Not currently. The compiler is closed-source until v1.0 to ensure stability and proper documentation before public scrutiny.

---

## Basic Usage

**Q: How do I compile my first program?**

```sh
dorpn hello.dpn          # compile only
dorpn hello.dpn --run    # compile and run immediately
```

---

**Q: Can I specify a custom output filename?**

Yes, use the `--out` flag (available since v0.3.4):

```sh
dorpn program.dpn --out myapp
```

---

**Q: How do I see the generated C code?**

Use `--keep-c` to preserve the intermediate C file after compilation:

```sh
dorpn program.dpn --keep-c
```

This is also useful for debugging or understanding what the compiler produces.

---

**Q: Is there a REPL or interactive mode?**

Not yet. As a quick workaround:

```sh
echo 'print("test")' > temp.dpn && dorpn temp.dpn -r && rm temp.dpn
```

Or use the Dorpn VS Code extension for a smoother development experience.

---

## Common Errors & Solutions

**Q: "File not found" but the file clearly exists**

Check three things:
- The file extension is `.dpn`
- You're in the correct directory
- There are no typos in the filename

---

**Q: Compilation fails with a syntax error and I can't find it**

Run with `--verbose` to get more insight into the compilation process. Note that it currently shows the first 20–25 AST tokens, so it's most useful for catching early-stage errors:

```sh
dorpn file.dpn --verbose
```

---

**Q: "Cannot assign to constant" error**

You're trying to reassign a `Const` variable. Use `tag` instead if the value needs to change:

```dpn
Const PI = 3.14     # fixed, can't reassign
tag counter = 0     # mutable, can reassign
```

---

**Q: "Type mismatch" in assignment**

Dorpn is statically typed. Once a variable is assigned a type, it stays that type:

```dpn
tag x = 10
x = "hello"   # error — x is Int, not String
```

---

## Language Questions

**Q: What's the difference between `tag` and `Const`?**

`tag` declares a mutable variable — you can reassign it later. `Const` declares an immutable constant — once set, it cannot be changed.

```dpn
tag score = 0       # can change later
Const MAX = 100     # fixed forever
```

---

**Q: How do I convert between types?**

Some conversions happen automatically — for example, `Int` to `Float` in math expressions, or any type to `String` when using `+`. Manual type conversion functions are planned for an upcoming release.

---

**Q: Are lists/arrays supported?**

Not in the current version. List and array support is planned for a future release.

---

**Q: Can I use external C libraries?**

Not yet. A C FFI (Foreign Function Interface) is planned for a future release.

---

**Q: How should I structure larger projects?**

Currently Dorpn is single-file only. A module and import system is on the roadmap.

---

## Performance & Debugging

**Q: My program feels slow. How do I optimize?**

A few things that help:
- Avoid string concatenation inside loops
- Prefer `Int` over `Float` when decimal precision isn't needed
- Use `--keep-c` to inspect the generated C and spot inefficiencies

---

**Q: How do I debug my Dorpn code?**

The most practical approach right now:
- Add `print()` calls to trace values
- Use `type()` to inspect variable types at runtime
- Use `--keep-c` to read the generated C output
- Use `--verbose` for early-stage compilation insights (shows first 20–25 AST tokens)

---

**Q: Is there a file size limit when using `Onload()`?**

No hard limit — it's bounded by available system memory. For very large files, chunked or streaming reads are being considered for future versions.
