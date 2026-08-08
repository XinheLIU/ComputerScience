# Vim: Vimscript

Last updated: 2026-07-21

Vimscript is Vim's configuration and extension language. Use it when options
and mappings are insufficient; keep ordinary configuration declarative when no
logic is needed.

## Evaluate and Inspect Values

```vim
:echo &number          " option value
:echo $HOME            " environment variable
:echo expand('%:p')    " absolute path of the current buffer
:messages              " previously emitted messages
```

Vimscript variables have explicit scopes:

| Prefix | Scope |
| --- | --- |
| `g:` | Global |
| `s:` | Current script |
| `b:` | Current buffer |
| `w:` | Current window |
| `t:` | Current tab page |
| `v:` | Vim-defined |
| `a:` | Function argument |
| `l:` | Function local |

Prefer the narrowest scope that owns the value.

## Work with Core Values

```vim
let s:languages = ['Python', 'Go']
let s:settings = {'format_on_save': v:false, 'width': 88}

call add(s:languages, 'Rust')
let s:width = get(s:settings, 'width', 80)
```

Lists and dictionaries are mutable. Avoid sharing them across scopes unless
that state is intentional; `copy()` and `deepcopy()` create independent values.

Use `.` for portable string concatenation. Single quotes create literal strings;
use double quotes when escape sequences such as `\n` are required.

## Write Small Functions

```vim
function! s:TrimTrailingWhitespace() abort
  let l:view = winsaveview()
  keepjumps keeppatterns %s/\s\+$//e
  call winrestview(l:view)
endfunction
```

- `s:` keeps the helper private to the script.
- `!` allows safe re-sourcing during configuration development.
- `abort` stops the function after an error.
- Saving and restoring the view prevents a cleanup command from moving the
  user's cursor.
- `keepjumps` and `keeppatterns` avoid modifying unrelated editor state.

Make state preservation explicit whenever a function temporarily changes the
cursor, search register, working directory, or options.

## Expose a Command

```vim
command! TrimTrailingWhitespace call <SID>TrimTrailingWhitespace()
```

User-defined command names must begin with an uppercase letter. Add `-nargs`,
`-range`, or `-bang` only when the command genuinely needs arguments, a line
range, or `!` behavior; see `:help :command`.

## Respond to Events with Autocommands

Always place related autocommands in a named group and clear that group before
redefining it:

```vim
augroup project_markdown
  autocmd!
  autocmd FileType markdown setlocal textwidth=80 spell
augroup END
```

This invariant makes `:source $MYVIMRC` idempotent. Without `autocmd!`, each
reload adds another copy of the handler.

Common events include `BufReadPost`, `BufWritePre`, and `FileType`. Prefer
`FileType` plus `setlocal` for buffer-specific settings.

## Execute Constructed Commands Carefully

`execute` evaluates a string as an Ex command:

```vim
execute 'edit ' . fnameescape(some_path)
```

Escape file names with `fnameescape()` rather than concatenating raw user or
file-system input. Prefer direct function calls over constructed commands when
an equivalent function exists.

`normal!` runs Normal-mode keys using built-in mappings:

```vim
normal! gg
```

The `!` avoids dependence on user mappings and makes scripted behavior more
predictable.

## Organize an Extension

Vim discovers files by role under directories in `runtimepath`:

```text
plugin/       commands and behavior loaded at startup
autoload/     functions loaded on first use
ftplugin/     filetype-specific settings
after/        overrides loaded after standard runtime files
doc/          help documentation
```

Do not build a plugin structure for one short configuration function. Extract a
plugin only when the behavior has a stable public command or mapping, needs
tests or documentation, or is reused independently.

## Optional Language Integration

Some Vim builds embed Python, Lua, or other interpreters. Check capabilities
with `:echo has('python3')` rather than assuming they exist. Embedded Python can
access Vim through the `vim` module, but it reduces portability across Vim
builds; prefer Vimscript for small editor operations and an external tool for
substantial standalone logic.

## Continue with Built-in Documentation

Use `:help usr_41.txt` for a guided Vimscript introduction, `:help eval.txt` for
the language reference, and `:help write-plugin` before packaging an extension.
