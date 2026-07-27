# Quick Start

> Requires **Dorpn v0.4.1** or later.

Ready-to-run `.dpn` examples — copy any file into your project (or run directly) to see it in action.

**Breaking changes in v0.4.1:** colons (`:`) are now required at every block header, indentation must be a consistent 2 or 4 spaces, and `String32`/`Bool32` have been removed in favor of `String`/`Bool`. If you're copying these examples into an older Dorpn install, they may not run correctly.

## Examples

| File | Covers |
|---|---|
| [`examples/Hello.dpn`](examples/Hello.dpn) | First program — `print`, `printOut`, `ask()` |
| [`examples/conditionals.dpn`](examples/conditionals.dpn) | `if` / `elif` / `else`, `and` / `or`, grouped conditions with `()` |
| [`examples/loop.dpn`](examples/loop.dpn) | Basic `loop` iteration, plus rectangle / tree / heart / circle patterns |
| [`examples/whileLoop.dpn`](examples/whileLoop.dpn) | `keep` (while), `halt` (break), `skip` (continue) |
| [`examples/functions.dpn`](examples/functions.dpn) | Basic, typed, multi-param, and recursive functions |
| [`examples/Var_Types.dpn`](examples/Var_Types.dpn) | `tag` / `Const`, core types, `print` vs `printOut`, ANSI colors |

## Running an example

```bash
./dorpn examples/Hello.dpn -r
```

Use `-js` instead of (or alongside) `-r` to compile/run via the JavaScript backend.
