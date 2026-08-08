# Vim: Editing and Workflows

Last updated: 2026-07-21

Vim becomes predictable when commands are treated as a language. The core
invariant is:

```text
[count] operator [count] motion-or-text-object
```

For example, `d2w` deletes two word motions and `2dd` deletes two lines. Prefer
the form that most clearly describes the intended edit.

## Navigate by Meaning

Use the smallest motion that expresses the destination:

| Scope | Commands |
| --- | --- |
| Character | `h` left, `j` down, `k` up, `l` right |
| Word | `w` next start, `b` previous start, `e` next end |
| Line | `0` first column, `^` first non-blank, `$` end |
| File | `gg` first line, `G` last line, `{number}G` target line |
| Screen | `H` top, `M` middle, `L` bottom, `zz` center current line |
| Structure | `%` matching delimiter, `{`/`}` paragraph, `(`/`)` sentence |
| Line character | `f{char}` on character, `t{char}` before character |

Repeat `f`, `t`, `F`, or `T` with `;`; repeat it in the opposite direction with
`,`.

## Compose Edits

The main operators are:

| Operator | Meaning | Example |
| --- | --- | --- |
| `d` | Delete into a register | `d$` deletes to the end of the line |
| `c` | Delete, then enter Insert mode | `cw` changes to the end of a word |
| `y` | Yank (copy) | `y}` copies through the paragraph |
| `>` / `<` | Indent / unindent | `>}` indents through the paragraph |
| `g~` | Toggle case | `g~w` toggles case through a word |

Doubling a linewise operator applies it to complete lines: `dd`, `cc`, `yy`,
`>>`, and `<<`.

Use precise insertion commands instead of navigating after entering Insert
mode:

| Command | Insert position |
| --- | --- |
| `i` / `a` | Before / after the cursor |
| `I` / `A` | First non-blank / end of line |
| `o` / `O` | New line below / above |
| `s` / `S` | Replace character / entire line and insert |
| `r{char}` | Replace one character without entering Insert mode |

## Operate on Text Objects

Text objects describe a semantic region. `i` means inside; `a` means around,
including surrounding whitespace or delimiters.

```text
diw   delete the current word
daw   delete the word and adjacent whitespace
ci"   change inside double quotes
da(   delete parentheses and their contents
cit   change inside an HTML/XML tag
yip   copy the current paragraph's contents
```

The same object works with different operators. Learn the object once, then
reuse it with `d`, `c`, `y`, or Visual mode.

## Search and Substitute

Search from Normal mode:

| Command | Effect |
| --- | --- |
| `/pattern` / `?pattern` | Search forward / backward |
| `n` / `N` | Repeat in the same / opposite direction |
| `*` / `#` | Search for the word under the cursor forward / backward |

Substitution is an Ex command with an explicit range:

```vim
:s/old/new/          " first match on this line
:s/old/new/g         " every match on this line
:%s/old/new/gc       " every match in the file, with confirmation
:5,10s/old/new/g     " every match on lines 5 through 10
```

If the pattern contains many `/` characters, choose another separator:

```vim
:%s#/var/tmp#/srv/cache#g
```

## Repeat Instead of Retyping

Repetition is often more valuable than a complex one-off command:

- `.` repeats the last change.
- `u` undoes a change; `<C-r>` redoes it.
- `@:` repeats the last Ex command.
- `&` repeats the last substitution on the current line.

Shape a change so that `.` represents one complete unit. For example, use
`ciwnew<Esc>` once, move to the next target, then press `.`.

## Select with Visual Mode

- `v` selects by character.
- `V` selects complete lines.
- `<C-v>` selects a rectangular block.

After entering Visual mode, extend the selection with motions or text objects,
then apply an operator. Prefer direct operator-motion commands for routine edits;
Visual mode is most useful when the exact selection is easier to see than to
describe.

## Use Registers Deliberately

Deletes, changes, and yanks write text to registers. Inspect them with
`:registers`.

| Register | Purpose |
| --- | --- |
| `"` | Most recent delete, change, or yank |
| `0` | Most recent yank, unaffected by later deletes |
| `1`–`9` | Recent deletes |
| `a`–`z` | Named storage; uppercase appends |
| `_` | Black-hole register; discard without overwriting paste text |
| `+` | System clipboard when the Vim build supports it |

Prefix an operation with a register: `"ayy` yanks a line into `a`, `"ap` pastes
it, and `"_dd` deletes a line without changing normal paste history.

## Record Repeatable Work with Macros

1. `q{register}` starts recording.
2. Perform one complete edit and return to Normal mode.
3. `q` stops recording.
4. `@{register}` plays it; `@@` repeats the last macro.

Test a macro on one item before applying a count such as `20@a`. A robust macro
uses searches and text objects rather than fixed cursor distances.

## Work with Files, Buffers, and Windows

A buffer holds text, a window displays a buffer, and a tab page arranges one or
more windows. A tab is not a file container.

```vim
:edit path/to/file    " open a file in the current window
:ls                   " list buffers
:buffer {name}        " switch to a buffer
:bnext                " next buffer
:bprevious            " previous buffer
:bdelete              " remove a buffer from the list
:split {file}         " horizontal split
:vsplit {file}        " vertical split
:only                 " close other windows
```

Use `<C-w>` followed by `h`, `j`, `k`, or `l` to move between windows. Use
`<C-^>` to switch between the current and alternate buffer.

## Checkpoint

You are ready to configure Vim when you can solve routine edits by composing
operators and motions, repeat a change with `.`, retrieve a yank after deleting
other text, and move between two buffers without reopening files.
