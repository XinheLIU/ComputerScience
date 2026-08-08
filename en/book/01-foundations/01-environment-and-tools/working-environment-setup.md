# Working Environment Set-up for Data Scientists

Last updated: 2026-07-21

- [Working Environment Set-up for Data Scientists](#working-environment-set-up-for-data-scientists)
  - [Basic Tools Installation and Set-up](#basic-tools-installation-and-set-up)
    - [Macbook Basic Set-up](#macbook-basic-set-up)
    - [Editor Set-up](#editor-set-up)
      - [Vim](#vim)
      - [Emacs](#emacs)
    - [IDE Environments (eg. VS Code)](#ide-environments-eg-vs-code)
  - [Python Set-up](#python-set-up)
  - [R Set-up](#r-set-up)
  - [Resources](#resources)

## Basic Tools Installation and Set-up

> - [Reference](https://bytedance.larkoffice.com/wiki/FR6nwTayYi0CzakC0KbctchonLd)

### Macbook Basic Set-up

1. set up [iterms2](https://iterm2.com/downloads.html)
   1. you can customize settings and colors of iterms2, for example, using a [color theme](https://github.com/one-dark/iterm-one-dark-theme?tab=readme-ov-file).
2. use zsh
   1. [difference between bash ans zsh](https://unix.stackexchange.com/questions/38172/are-all-bash-scripts-compatible-with-zsh)
      1. Zsh is compatible with most Bash syntax but lacks compatibility with some Bash file wildcards, specifically the use of *.
      2. Zsh offers additional syntax extensions absent in Bash. Given the current prevalence of Bash in default Linux installations, it is advisable not to use Zsh extended syntax. Shell scripts should also utilize #!/bin/bash to ensure compatibility.
   2. [use zsh for $SHELL](https://support.apple.com/en-us/102360)
3. install [oh-my-zsh](https://ohmyz.sh/)
   1. a configuration framework for zsh, which can help simplify the configuration of zsh, providing convenient plugin management and theme configuration functions.
   2. browse [themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)
      1. recommend: download [powerlevel10k](https://github.com/romkatv/powerlevel10k) by following instructions
      ```bash
        git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
        # in /.zshrc
        ZSH_THEME="powerlevel10k/powerlevel10k"
        # ZSH_THEME="sorin"
      ```
   3. browse [plug-ins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)
      1. recommend [some of the zsh plugins](https://aiktb.dev/blog/powerful-zsh-config#:~:text=P10K%20is%20presently%20the%20most,of%2Dthe%2Dbox%20experience.) such as syntax-highlighting
      2. ls replacement: download [colorls](https://github.com/athityakumar/colorls) and [lsd](https://github.com/lsd-rs/lsd)
      3. secret manager: [secman](https://github.com/scmn-dev/secman)
      4. [tran](https://github.com/abdfnx/tran)
    ```bash
      # download in command-line
      ## syntax highlighting
      git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
      ## auto-suggestions
      git clone https://github.com/zsh-users/zsh-autosuggestions.git "${ZSH_CUSTOM}"/plugins/zsh-autosuggestions
      ## history substring search
      git clone https://github.com/zsh-users/zsh-history-substring-search "${ZSH_CUSTOM}"/plugins/zsh-history-substring-search

      # sudo gem install colorls
      brew install lsd
      sudo gem install colorls

      # in ~/.zshrc write 
      plugins=(git zsh-syntax-highlighting zsh-autosuggestions zsh-history-substring-search)
      alias ls='lsd'
      alias lc='colorls -lA --sd'
      
      source $(dirname $(gem which colorls))/tab_complete.sh
      
      # then run source ~/.zshrc
      ```
4. install [Homebrew](https://brew.sh/)
5. Install developer toolkits
   ```bash
   xcode-select --install
   ```
   - X code Command Line Tools is a toolkit containing many commonly used software, such as Git, GCC, Clang, etc. If the system does not prompt you automatically, you can manually trigger the pop-up window and install it with the following command.
6. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
   1. [First Time Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

      ```bash
      # Display the list of valid login shells on the system
      cat /etc/shells

      # Change the current user's default shell to zsh
      chsh -s /bin/zsh

      # Download and run the Oh My Zsh installation script from GitHub
      sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

      # Install Xcode command line tools (for macOS development)
      xcode-select --install

      # Check the installed version of Git
      git version
      ```

### Editor Set-up

#### Vim

Use the [Vim learning path](./vim.md) for installation, core editing,
configuration, and optional plugins. Start with terminal Vim and `vimtutor`;
install MacVim or an IDE-style plugin stack only when the workflow requires it.

#### Emacs

### IDE Environments (eg. VS Code)

1. download [VS Code](https://code.visualstudio.com/)
2. VS Code Extensions
   1. [Markown Extension Pack](https://marketplace.visualstudio.com/items?itemName=bat67.markdown-extension-pack)
   2. [Python Extension Pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-extension-pack) which includes must-have python environment tools and Jupyter.
   3. [PyLance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
   4. [Git Extension Pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.git-extension-pack)
   5. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): autocomplete file paths
   6. [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap) or CodeSnap plus
   7. Themes: Search themes for example, "Atom" in the marketplace and use settings

Settings

   1. Jupyter › Interactive Window › Text Editor: Execute Selection -> Yes
   2. Command + Shift + P -> install code command in PATH, then you can use "code xxx" to open files in command line

## Python Set-up

See [Python Environment Set-up](https://github.com/XinheLIU/Python/blob/main/python-environment-setup.md)

## R Set-up

1. [Install R & R Studio](https://posit.co/download/rstudio-desktop/)
2. R kernel for Jupyter : <https://github.com/IRkernel/IRkernel>

## Resources

<https://stackoverflow.com/>
<https://discourse.jupyter.org/>
<https://www.python.org/community/forums/>
<https://docs.jupyter.org/en/latest/>
<https://www.markdownguide.org/basic-syntax/>
