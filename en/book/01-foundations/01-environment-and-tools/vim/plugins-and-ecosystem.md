# Vim: Plugins and Ecosystem

Last updated: 2026-07-21

Plugins are valuable when they remove a repeated workflow cost. They are a poor
substitute for learning motions, text objects, buffers, quickfix lists, and
Vim's help system.

## Decide Whether a Plugin Is Needed

Before adding one, answer three questions:

1. Which repeated task does it improve?
2. Does Vim already provide an acceptable command for that task?
3. Is the plugin's configuration and maintenance cost lower than the saved
   effort?

Add one plugin at a time. Keep its declaration and configuration together, and
remove both if it no longer earns its place.

## Use Vim's Native Package Layout

Vim 8 and later load packages from `pack/*/start` automatically. Optional
packages live under `pack/*/opt` and load with `:packadd`.

```text
~/.vim/pack/vendor/start/plugin-name/
~/.vim/pack/vendor/opt/optional-plugin/
```

This approach has no plugin-manager dependency, but you must clone, update, and
remove repositories yourself. Run `:helptags ALL` if a plugin's help tags are
not generated automatically.

## Use a Manager When It Solves a Real Need

A plugin manager becomes useful for a longer list, parallel installation,
version pinning, lazy loading, or reproducible setup. For classic Vim,
[vim-plug](https://github.com/junegunn/vim-plug) is a compact option:

```vim
call plug#begin()
Plug 'tpope/vim-surround'
Plug 'tpope/vim-commentary'
Plug 'tpope/vim-repeat'
Plug 'tpope/vim-fugitive'
Plug 'junegunn/fzf'
Plug 'junegunn/fzf.vim'
call plug#end()
```

The example is a menu, not a required starter pack:

- `vim-surround` edits quotes, brackets, and tags.
- `vim-commentary` adds composable commenting.
- `vim-repeat` lets compatible plugin actions repeat with `.`.
- `vim-fugitive` provides Git operations inside Vim.
- `fzf` and `fzf.vim` provide fuzzy file, buffer, and text selection; the
  external `fzf` binary is a separate dependency.

Install only the entries tied to a current need. Prefer built-in `:Explore`,
`:find`, `:grep`, quickfix, and buffer commands when they are sufficient.

## Keep Vim an Editor Unless You Need an IDE

Language-aware completion requires more moving parts than text completion:
language servers or compiler engines, client plugins, and project configuration.
Choose that stack from the language and project requirements, not from a generic
plugin list.

For classic Vim, a maintained LSP client or an integrated completion client may
be appropriate. YouCompleteMe remains relevant for users with an existing YCM
workflow, especially specialized C-family setups, but it should not be the
default in a general introduction because of its installation and configuration
cost.

## Neovim Is a Separate Configuration Choice

Neovim preserves Vim's core editing language but its modern ecosystem commonly
uses Lua, `lazy.nvim`, built-in LSP, Treesitter, Telescope or `fzf-lua`, and
Lua-native completion plugins. Do not paste that configuration into `vimrc` or
assume a Vim plugin manager can manage it unchanged.

Choose Neovim when its API and ecosystem solve problems you actually have. Stay
with classic Vim when portability, remote availability, or a small stable
configuration matters more. Editing skills from the first two pages transfer to
both.

## Maintain the Plugin Set

- Keep plugin declarations in version control, not downloaded plugin code.
- Pin versions when reproducibility matters; otherwise review updates before
  changing many plugins together.
- Read `:help {plugin-name}` before copying configuration snippets.
- Diagnose with `vim -Nu NONE` and then re-enable plugins incrementally.
- Remove mappings and settings when removing the plugin that owns them.

The target is a small system whose behavior you can explain, not the largest
feature list.
