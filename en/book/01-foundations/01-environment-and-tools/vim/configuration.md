# Vim: Configuration

Last updated: 2026-07-21

Configuration should encode stable preferences, not compensate for commands
you have not learned. Start with a small file, understand every line, and add a
setting only after encountering the problem it solves.

## Find the Configuration File

Vim reads user configuration from:

- Unix and macOS: `~/.vimrc`
- Windows: `~/vimfiles/vimrc` or `~/_vimrc`

Inside Vim, `:echo $MYVIMRC` shows the loaded path after a configuration file
has been found. Use `:edit $MYVIMRC` to edit it and `:source $MYVIMRC` to reload
it.

## Start with an Explicit Baseline

```vim
" Display
set number
set ruler
set showcmd
set scrolloff=3

" Search
set incsearch
set hlsearch
set ignorecase
set smartcase

" Indentation: choose values that match the project
set tabstop=4
set shiftwidth=4
set softtabstop=4
set expandtab

" File handling
set hidden
set nobackup
set undofile
set undodir=~/.vim/undo//

syntax enable
filetype plugin indent on
```

Create the undo directory before enabling persistent undo:

```bash
mkdir -p ~/.vim/undo
```

Do not put project-specific indentation into the global file when projects
disagree. Prefer repository conventions or filetype-specific configuration.

## Inspect Before Changing

Vim options are observable:

```vim
:set number?          " show the current value
:set number!          " toggle it
:set nonumber         " disable it explicitly
:verbose set number?  " show where it was last set
:help 'number'        " open option documentation
```

The quotes in `:help 'number'` identify an option. Use `:options` to browse
options by category.

## Define Non-Recursive Mappings

Mappings should be mode-specific and non-recursive unless recursion is
intentional:

```vim
let mapleader = " "

nnoremap <leader>w :write<CR>
nnoremap <leader>h :nohlsearch<CR>
inoremap jk <Esc>
```

- `nnoremap` maps Normal mode.
- `inoremap` maps Insert mode.
- `xnoremap` maps Visual mode.
- `cnoremap` maps command-line mode.

Avoid remapping a built-in command until you know what it does. Check a mapping
with `:verbose nmap {key}` before diagnosing unexpected behavior.

## Keep Filetype Settings Local

Settings under `~/.vim/after/ftplugin/{filetype}.vim` apply after Vim's standard
filetype plugin. Make buffer-local changes there:

```vim
" ~/.vim/after/ftplugin/python.vim
setlocal tabstop=4
setlocal shiftwidth=4
setlocal softtabstop=4
setlocal expandtab
```

`setlocal` prevents a Python preference from leaking into buffers of other
types.

## Configure Color Without Depending on It

```vim
set background=dark
colorscheme default

if exists('+termguicolors')
  set termguicolors
endif
```

`termguicolors` also requires a terminal that supports true color. If colors are
incorrect, first compare the terminal's capabilities with `:set termguicolors?`
and `$TERM`; do not add environment-specific escape sequences blindly.

## Organize Growing Configuration

When the file becomes difficult to scan, split it by responsibility and source
the pieces explicitly:

```vim
source ~/.vim/config/options.vim
source ~/.vim/config/mappings.vim
source ~/.vim/config/plugins.vim
```

Keep the loading order visible because later settings and mappings can override
earlier ones. Vimscript mechanisms for conditional configuration are covered in
[Vimscript](./vimscript.md).

## Checkpoint

A healthy baseline starts without errors, contains only understood settings,
and can be explained line by line. Run `vim -Nu NONE` when you need to determine
whether a problem comes from Vim itself or from your configuration.
