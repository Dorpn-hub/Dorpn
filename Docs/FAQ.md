# Frequently Asked Questions

---
## 📦 Installation & Releases
---

**Q: How do I install Dorpn?**  
A: Download the latest release binary for your OS from the [Releases page](https://github.com/Dorpn-hub/dorpn/releases). No compilation needed!

**Q: Is the source code available?**  
A: The compiler source will be released when Dorpn reaches v1.0 or becomes self-hosted. Currently, only compiled binaries are provided.

**Q: How do I update to a newer version?**  
A: Simply download the latest release binary and replace your existing `dorpn` executable.

**Q: Can I build from source?**  
A: Not currently. The compiler is closed-source until v1.0 to ensure stability and proper documentation.

---
## ✍️ Basic Usage
---

**Q: How do I compile my first program?**  
A: `dorpn hello.dpn` creates an executable. Use `dorpn hello.dpn --run` to compile and run immediately.

**Q: Can I specify a different output filename?**  
A: Not directly in v0.3.0. Workaround: `dorpn input.dpn && mv input custom_name`

**Q: How do I compile without executing?**  
A: Just omit the `--run` flag: `dorpn program.dpn` creates executable only.

**Q: Can I see the generated C code?**  
A: Yes! Use `dorpn program.dpn --keep-c` to preserve the intermediate C file.

**Q: Is there a REPL or interactive mode?**  
A: Not yet. Use this one-liner: `echo 'print("test")' > temp.dpn && dorpn temp.dpn -r && rm temp.dpn` or VS Code with `Dorpn` extension.

---
## 🐛 Common Errors & Solutions
---

**Q: "gcc: command not found" error**  
A: Install GCC: Ubuntu/Debian: `sudo apt install gcc`, macOS: `xcode-select --install`

**Q: "File not found" but the file exists**  
A:- a. File extension is `.dpn`.
  - 2) You're in the right directory
  - 3) No typos in filename

**Q: "Permission denied" when running the executable**  
A: Make it executable: `chmod +x program_name`

**Q: Compilation fails with syntax error**  
A: Use verbose mode to pinpoint: `dorpn file.dpn --verbose`

**Q: "Cannot assign to constant" error**  
A: You're trying to modify a `Const` variable. Use `tag` for mutable variables.

**Q: "Type mismatch" in assignment**  
A: Dorpn has strict static typing. Once `tag x = 10` (Int), you can't do `x = "text"` later.

---
## 💡 Language Questions
---

**Q: What's the difference between `tag` and `Const`?**  
A: `tag` creates mutable variables, `Const` creates immutable constants (cannot be reassigned).

**Q: How do I convert between types?**  
A: Automatic in some cases (Int→Float in math, any→String with `+`). Manual conversion functions coming soon.

**Q: Are arrays/lists supported?**  
A: Basic list literals (`[1,2,3]`) and indexing are supported in v0.3.0.

**Q: Can I use external C libraries?**  
A: Not in v0.3.0. C FFI (Foreign Function Interface) is planned for future releases.

**Q: How should I structure larger projects?**  
A: Currently single-file only. Module/import system is planned for future versions.

---
## ⚡ Performance & Debugging
---

**Q: My program is slow. How can I optimize?**  
A:- a. Avoid string concatenation in loops 
  - 2) Use `Int` instead of `Float` when possible 
  - 3) Use `--keep-c` to examine generated C code

**Q: How do I debug my Dorpn code?**  
A:- a. Add `print()` statements 
  - 2) Use `type()` to check variable types 
  - 3) Examine C code with `--keep-c` 4) Use `--verbose` for compilation insights

**Q: What's the maximum file size Dorpn can handle with `Onload()`?**  
A: Limited by available system memory. For large files, considering streaming or chunked reading in future versions.
