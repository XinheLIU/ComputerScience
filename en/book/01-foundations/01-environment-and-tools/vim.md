# Vim

Last updated: 2026-07-21

Vim is a modal text editor built around a small editing language. Instead of
memorizing an unrelated shortcut for every action, you combine an operator with
a movement or text object:

```text
d  +  w   = delete to the next word
c  +  i"  = change inside quotes
y  +  2j  = copy this line and the next two lines
```

That grammar is the reason to learn Vim. It works in terminal sessions and is
also available as an editing mode in many IDEs, shells, and other tools.

## Learning Path

Read the pages in order. Stop after the level that matches your needs.

1. [Getting Started](./vim/getting-started.md) — install Vim and complete a
   safe open-edit-save-quit cycle.
2. [Editing and Workflows](./vim/editing-and-workflows.md) — learn motions,
   operators, text objects, search, repetition, registers, macros, buffers, and
   windows.
3. [Configuration](./vim/configuration.md) — build a small, understandable
   `vimrc` without copying a large configuration you cannot maintain.
4. [Plugins and Ecosystem](./vim/plugins-and-ecosystem.md) — add only the
   capabilities your workflow needs and understand where Neovim differs.
5. [Vimscript](./vim/vimscript.md) — write commands, mappings, functions, and
   event-driven configuration.

## A Practical Target

You do not need to learn every command. A useful progression is:

- First session: leave Insert mode with `<Esc>`, save with `:w`, and quit with
  `:q`.
- First week: navigate with words and searches; edit with `d`, `c`, `y`, and
  text objects.
- Daily use: make one repeatable change with `.`, a substitution, or a macro;
  move between files with buffers.
- Later: add configuration and plugins only when a repeated problem justifies
  them.

## Vim, Vim Modes, and Neovim

This subchapter targets Vim 8/9 and portable Vim behavior. The editing language
also transfers to Vim emulation in tools such as VS Code and JetBrains IDEs.
Neovim uses the same core language but has a different Lua-based configuration
and plugin ecosystem; those differences are isolated to the optional ecosystem
page.

## Primary References

- Run `vimtutor` for an interactive introduction.
- Use `:help user-manual` for Vim's structured manual.
- Use `:help {topic}` as the authoritative reference for an individual command.
- Read [Practical Vim](https://pragprog.com/titles/dnvim2/) for exercise-driven
  practice after learning the fundamentals.
