# Vim: Getting Started

Last updated: 2026-07-21

The first goal is not speed. It is knowing which mode you are in and being able
to open, edit, save, and close a file without uncertainty.

## Install and Verify Vim

Many Unix-like systems already include a small Vim build. Check it before
installing another one:

```bash
vim --version
```

Install a full terminal build with the package manager already used by your
system:

```bash
# Debian or Ubuntu
sudo apt install vim

# Fedora
sudo dnf install vim-enhanced

# macOS with Homebrew
brew install vim
```

On Windows, use the installer linked from
[vim.org](https://www.vim.org/download.php). The essential commands in this
subchapter are the same on every platform. GUI packages and MacVim are optional;
they are not required to learn Vim.

## Understand the Modes

Normal mode is the control center. Press `<Esc>` whenever you are unsure of the
current mode.

| Mode | Enter from Normal mode | Purpose |
| --- | --- | --- |
| Normal | `<Esc>` | Navigate and edit with commands |
| Insert | `i`, `a`, `o`, or `O` | Type text |
| Visual | `v`, `V`, or `<C-v>` | Select characters, lines, or a block |
| Command-line | `:` | Save, quit, configure, and run Ex commands |
| Replace | `R` | Overwrite existing text until `<Esc>` |

`<C-v>` means hold Ctrl and press `v`. Vim help and configuration use this
notation consistently.

## Complete the First Editing Cycle

Open a disposable file:

```bash
vim practice.txt
```

Then perform this exact sequence:

1. Press `i` and type a line of text.
2. Press `<Esc>` to return to Normal mode.
3. Type `:w` and press Enter to save.
4. Type `:q` and press Enter to quit.

The essential command-line operations are:

| Command | Effect |
| --- | --- |
| `:w` | Save the current buffer |
| `:q` | Close the current window if there are no unsaved changes |
| `:wq` or `:x` | Save and close |
| `:q!` | Close and intentionally discard unsaved changes |
| `:e {file}` | Edit a file in the current window |
| `:help {topic}` | Open help for a command or concept |

Use `:q!` only when discarding changes is deliberate. Vim's warning about
unsaved work is protection, not an obstacle to bypass by default.

## Learn Help Before Memorizing Commands

Vim's help is navigable documentation:

```vim
:help motion.txt
:help :write
:help i_CTRL-R
```

- Press `<C-]>` on a highlighted help tag to follow it.
- Press `<C-o>` to jump back.
- Type `:q` to close the help window.
- Add the context prefix shown in help when a key is ambiguous: `i_` for Insert
  mode, `v_` for Visual mode, and `:` for command-line commands.

## Complete the Tutor

Run the interactive tutor before configuring Vim:

```bash
vimtutor
```

It takes roughly half an hour and builds the muscle memory needed by the next
page. Repeat it once after several days of real editing; the second pass usually
reveals commands that were too unfamiliar to retain the first time.

## Checkpoint

Continue when you can:

- recognize Normal and Insert modes;
- recover to Normal mode with `<Esc>`;
- open, edit, save, and close a file;
- open help for an unfamiliar command.
