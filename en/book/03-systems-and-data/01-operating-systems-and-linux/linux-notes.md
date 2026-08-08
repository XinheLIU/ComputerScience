Last updated: 2026-07-21

Status: 

Tags: [[Software Engineering]],[[Backend Frameworks]]

- [Shell Introduction](#shell-introduction)
  - [Concepts](#concepts)
  - [Commands/Exercise](#commandsexercise)
- [Shell Scripting and Shell Tools](#shell-scripting-and-shell-tools)
  - [Shell Scripting Overview](#shell-scripting-overview)
  - [Shell Tools](#shell-tools)
- [Data Wrangling](#data-wrangling)
  - [Core Concepts and Tools](#core-concepts-and-tools)
  - [Regular Expressions](#regular-expressions)
  - [Practical Examples](#practical-examples)
  - [Binary Data Wrangling](#binary-data-wrangling)
  - [Exercises](#exercises)

## Shell Introduction


### Concepts

- Shell
  - The shell is a textual interface that allows running programs, providing input, and inspecting output, which is not restricted like graphical or voice interfaces.
  - Nearly all platforms have shells, which are similar in core despite differences in details.
  - Common Shells
    - Bash (Bourne Again SHell): one of the most widely used shells, with syntax similar to many others.
    - zsh (Z Shell): a powerful and highly customizable shell that builds on features from bash and other shells. It offers advanced tab completion, improved globbing, powerful prompt customization, and a rich plugin ecosystem (such as Oh My Zsh)
  - The shell is a programming environment with variables, conditionals, loops, and functions.
- $PATH is an environment variable that lists directories the shell searches for programs when a command is given.
  - The directories in $PATH are separated by colons (:).
  - You can use the which command to determine the location of a specific executable file within the directories listed in $PATH.
- File Path: A path in the shell is a delimited list of directories, with / as the separator on Linux and macOS, and \ on Windows; / is the root on Linux and macOS, while Windows has a root per disk partition.
  - Absolute path starts with /; relative path is relative to the current working directory.
  - . refers to the current directory, .. to its parent directory.
  - Programs operate in the current directory unless specified otherwise.
  - Programs have input and output streams, which can be redirected using < file, > file, >> (append), and pipes (|) to chain programs.
- Root User: The root user has almost all access restrictions
  - sudo is used to perform actions as root;
  - The root user has unrestricted access, but users typically use sudo to perform actions as root **instead of logging in as root.**
  - Operations like |, >, < are handled by the shell, not individual programs, which affects permission when using sudo with redirection (e.g., sudo echo 3 > brightness fails, but echo 3 | sudo tee brightness works).
- sysfs exposes kernel parameters as files on Unix-like systems (not on Windows or macOS), allowing kernel reconfiguration.
  - Writing to the sysfs file system:  
        - Requires root privileges  
        - Mounted under `/sys`  
        - Exposes kernel parameters as files for easy reconfiguration
  - sysfs is not available on Windows or macOS
- Using the Shell Commands
  - The shell parses commands by splitting them by whitespace, running the program indicated by the first word, and supplying subsequent words as arguments.
  - To provide arguments with spaces or special characters, use ' or " to quote the argument, or \ to escape relevant characters.
  - The shell prompt indicates the current working directory, and can be configured to show various useful information (covered in a later lecture).
  - Most commands accept flags and options starting with - to modify behavior; -h or --help often prints help text.
  - **Input and output streams** of programs can be redirected: < file rewires input to a file, > file rewires output to a file, >> appends output to a file.
  - **Pipes** (|) chain programs, making the output of one the input of another.
- File Permissions
  - File and directory permissions are indicated by three groups of three characters (rwx) in the long listing format (ls -l), representing permissions for the owner, the owning group, and everyone else respectively.
  - A 'd' at the start of a line in ls -l indicates the item is a directory.
  - 'r' (read), 'w' (write), and 'x' (execute) are the basic permissions: the owner needs 'w' to modify a directory (add/remove files); users need 'x' (search) permission to enter a directory (and its parents) and 'r' permission to list its contents.
  - Most files in /bin have 'x' permission for everyone, allowing anyone to execute them.
  - chmod: Changes file permissions; e.g., chmod to make a file executable.

### Commands/Exercise

- Commands
  - date: Executes the date program to print the current date and time.
  - echo: Prints out its arguments; e.g., echo hello prints hello.
  - which: Finds which file is executed for a given program name; e.g., which echo shows /bin/echo.
  - pwd: Shows the current working directory.
  - cd: Changes the current working directory; e.g., cd /home changes to the /home directory.
  - ls: Lists the contents of a directory; with -l uses long listing format, --help shows help.
    - ls -l: Uses long listing format to show detailed information about files/directories, including permissions, owner, group, size, and modification time.
    - ls --help: Displays help text for the ls command, explaining available flags and options.
  - mv: Renames or moves a file.
  - cp: Copies a file.
  - mkdir: Creates a new directory.
  - man: Shows the manual page of a program; e.g., man ls shows the manual for ls; press q to exit.
  - cat: Concatenates files; when given file names, prints their contents; without arguments, prints input stream to output stream.
  - curl: Used with --head --silent to get header information silently; e.g., curl --head --silent google.com.
  - grep: Searches for patterns; e.g., grep --ignore-case content-length searches for content-length case-insensitively.
  - cut: Splits lines by a delimiter; e.g., cut --delimiter=' ' -f2 splits by space and takes the second field.
  - tail: Outputs the last part of files; e.g., tail -n1 outputs the last line.
  - sudo: Allows performing actions as root; e.g., sudo tee brightness runs tee as root.
  - find: Searches for files; e.g., sudo find -L /sys/class/backlight -maxdepth 2 -name '*brightness*' searches for brightness-related files.
  - chmod: Changes file permissions; e.g., chmod to make a file executable.
- Exercises
  - Ensure using a Unix shell like Bash or ZSH; check with echo $SHELL.
  - Create a new directory called missing under /tmp.
  - Look up the touch program using man.
  - Use touch to create a new file called semester in missing.
  - Write specific content into semester, handling quotes properly.
  - Try to execute ./semester and understand why it doesn't work by checking ls output.
  - Run sh semester and understand why it works.
  - Look up chmod using man.
  - Use chmod to make ./semester executable and understand how the shell knows to use sh (shebang line).
  - Use | and > to write the "last modified" date from semester into lastmodified.txt in the home directory.
  - Write a command to read laptop battery power level or desktop CPU temperature from /sys (macOS users skip).

## [Shell Scripting and Shell Tools](https://missing.csail.mit.edu/2020/shell-tools/)

### Shell Scripting Overview

- Shell scripting is used to automate shell tasks, incorporating variables, control flow, and other syntax. Optimized for tasks like command pipelines, file management, and input/output handling.
  - Focus on **bash scripting** as it is the most commonly used shell.

Bash as a programming language

- Variables in Bash
  - **Assignment:** `foo=bar`;spaces matter (foo=bar works, foo = bar doesn't)
  - **Accessing variables:** `$foo`
  - **No spaces allowed:** `foo = bar` causes an error.
  - **Space character**: Used for argument splitting in bash.
- Strings in Bash
  - **Single Quotes** : Literal strings (no variable substitution).
  - **Double Quotes** : Allows variable substitution.  
        ```Bash  
        foo=bar  
        echo "$foo"  # Outputs: bar  
        echo '$foo'  # Outputs: $foo  
        ```
- Control Flow in Bash
  - **Conditional statements:** `if`, `case`, `while`, and `for`.
- **Functions**: in Bash
  - Syntax:
    ```Bash
    function_name () {
        # commands
    }
    # example
    mcd () {
        mkdir -p "$1"
        cd "$1"
    }
    ```
    - Arguments are accessed via `$1`, `$2`,
  - Special Variables
    - `$0`: Script name.
    - `$1` to `$9`: Script arguments.
    - `$@`: All arguments.
    - `$#`: Number of arguments.
    - `$?`: Return code of the previous command.
    - `$$`: Process ID of the script.
    - `!!`: Last command with arguments.
    - `$_`: Last argument of the previous command.
  - Function Exit Codes
    - **Exit codes**: Indicate the success or failure of commands.
      - `0`: Success.
      - Non-zero: Error.
    - **Short-circuiting operators**:
      - `&&`: Executes next command only if the first one succeeds.
      - `||`: Executes next command only if the first one fails.  
                ```Bash  
                false || echo "Oops, fail"  # Outputs: Oops, fail  
                true && echo "Success"      # Outputs: Success  
                ```
- Command Substitution
  - **Syntax:** `$(command)`
  - **Use case:** Capturing output of a command and using it in another command  
        ```Bash  
        echo "Today is $(date)"  
        ```
- **Process Substitution**
  - **Syntax:** `<(command)`
  - **Use case:** Executes a command and uses the output as input to another command  
        ```Bash  
        diff <(ls dir1) <(ls dir2)  
        ```
- Globbing and Wildcards
  - **Wildcards:** Match patterns in filenames.
    - `*`: Matches any number of characters.
    - `?`: Matches one character.
    - Examples  
            ```Bash  
            rm foo?   # Deletes files like foo1, foo2  
            rm foo*   # Deletes all files starting with foo  
            ```
  - **Curly braces** `{}`: Expand similar commands or filenames.  
        ```Bash  
        cp file.{txt,pdf} /newdir  
        # Expands to:  
        cp file.txt file.pdf /newdir  
        # Creates files foo/a, foo/b, ..., bar/h  
        touch {foo,bar}/{a..h}  
        ```

Shell Script

- Shell Functions vs Scripts
  - **Functions**: Loaded into the current shell and modifies the environment.
  - **Scripts**: Executed in a new process, can't change the parent shell’s environment.
    - Functions must be in the same language as the shell; scripts can be written in any language (as long as the interpreter is specified with a shebang).
    - Functions are loaded once when defined; scripts are loaded each time they run.
    - Functions can modify shell variables; scripts cannot.
- Bash Script Execution
  - **Shebang (**`#!/bin/bas`): Defines the interpreter.
  - Use `#!/usr/bin/env bash` for portability (resolves the correct path to the interpreter).
    - Example
        ```Bash
        #!/bin/bash
        echo "Starting program at $(date)"
        echo "Running program $0 with $# arguments with pid $$"
        for file in "$@"; do
            grep foobar "$file" > /dev/null 2> /dev/null
            if [[ $? -ne 0 ]]; then
                echo "File $file does not have any foobar, adding one"
                echo "# foobar" >> "$file"
            fi
        done
        ```
  - **Explanation**:
    - `$(date)`: Command substitution to print current date.
    - `$0`, `$#`, `$$`: Special variables for script name, argument count, and PID.
    - `grep foobar "$file"`: Search for `foobar` in files.
    - `if [[ $? -ne 0 ]]`: Check if `grep` found `foobar`. If not, add it to the file

### Shell Tools

Finding Command Information

- **Using Help Flags**
    1. Commands often provide a quick reference via `-h` or `--help`.
    2. Example: `ls --help` gives a brief description of the command and available flags.
- **Using Man Pages**
    1. `man <command>` shows detailed manuals for commands.
    2. Example: `man rm` displays detailed options, including flags like `-i` for interactive removal.
    3. **Interactive Programs**: Use `:help` or `?` for internal help
- **Using TLDR Pages**
    1. `tldr <command>` offers simplified, example-based help for common commands.
    2. **Use Case**: Useful for frequently used complex commands like `tar` or `ffmpeg`.

Finding Files

- **Using** **`find`**
  - **Recursive search** for files and directories matching criteria.
      1. Examples:
          - Find all directories named `src`:`find . -name src -type d`
          - Find all Python files in `test` folder paths:`find . -path '*/test/*.py' -type f`
          - Find files modified in the last day:`find . -mtime -1`
          - Find zip files between 500k and 10M in size:`find . -size +500k -size -10M -name '*.zip'`
  - **Performing Actions with** **`find`**
      1. **Execute commands** over the matched files.
      2. Examples:
          - Delete `.tmp` files:`find . -name '*.tmp' -exec rm {} \;`
          - Convert PNG to JPG:`find . -name '*.png' -exec convert {} {}.jpg \;`
  - **Alternatives to** **`find`**
      1. **`fd`**: A faster, more user-friendly alternative to `find`. Supports colorized output, default regex matching, and easier syntax.Example:`fd PATTERN` (vs `find -name '*PATTERN*'`)
      2. **`locate`**
         1. Uses a **database of file paths**, updated by `updatedb`.
            1. on Mac, you need to run `sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.locate.plist`
         2. **Faster** but potentially **less fresh** results than `find`.
         3. Example:`locate filename`

Finding Code: **Using** **`grep`**

- **Search for patterns** in files or input streams.
  - Examples:
    - Print 5 lines before and after a match:`grep -C 5 "pattern" file.txt`
    - **Recursive search** through directories:`grep -R "pattern"`
    - Invert the match (find lines without the pattern):`grep -v "pattern"`
- **Alternatives to** **`grep`**
  - **`rg`** (ripgrep) Faster and more intuitive than `grep`. Supports recursive search and advanced options.
  - Examples:
    - Find all Python files using the `requests` library:`rg -t py 'import requests'`
    - Find all files without a shebang:`rg -u --files-without-match "^#\!"`
    - Print statistics of matches:`rg --stats PATTERN`

Finding Shell Commands

- **Using** **`history`**
  - Prints all past shell commands in the session.
  - Example:`history | grep find` searches for the use of `find` in your command history.
- **Using** **`Ctrl + R`**
  -  **Reverse search** through command history.
  -  Allows you to match commands by substring.
- **Using** **`fzf`**
  - A fuzzy finder that can search command history and other sources with visual feedback.
- **Autosuggestions**
  -  **Dynamically suggests** the most recent matching commands as you type.
  -  Available in `fish` shell and can be enabled in `zsh`.
- **Preventing Sensitive Commands from Being Saved**
  - Use `HISTCONTROL=ignorespace` in `.bashrc` or `setopt HIST_IGNORE_SPACE` in `.zshrc` to **avoid saving commands** that start with a space (useful for commands containing sensitive data).

Directory Navigation

- **Efficient Navigation with Aliases and Symlinks**
    1. Use `ln -s` to create symbolic links for quick access to directories.
    2. Example:`ln -s /path/to/project ~/project_link`
- **Using** **`fasd`** and **`autojump`**
  - **`fasd`**: Tracks **frequency and recency** of accessed directories for quick navigation with `z <substring>`.
    - Example:`z project` to jump to `/home/user/files/cool_project`.
  - **`autojump`**: Similar functionality using `j <substring>`.
- **Tools for Directory Structure Overview**
  - **`tree`**: Visualizes directory structure in a tree format.
  - **`broot`****, **`**nnn**`**, **`**ranger**`: Advanced file managers for interactive directory navigation.


## Data Wrangling

data wrangling: transforming data from one format to another using command-line tools and techniques. It emphasizes combining tools to manipulate both textual and binary data effectively.

### Core Concepts and Tools 

Data wrangling often involves using pipes (`|`) to chain commands. Key tools and their roles are detailed:  

- **grep**: Filters data (e.g., extracting SSH-related logs from server journals).  
- **sed**: A stream editor for text modification, commonly used for substitution (`s/REGEX/SUBSTITUTION/`). It supports regular expressions and capture groups to extract specific data.  
- **awk**: A programming language for processing text streams, adept at field-based operations (e.g., printing specific columns with `{print $2}`) and conditional logic.  
- **sort** and **uniq**: Sort data and count occurrences (`uniq -c`), with `sort -n` for numeric sorting and `-k` to specify sort columns.  
- **less**: A pager for navigating long outputs.  
- **bc**: A calculator for mathematical operations on input streams.  
- **R**: Used for statistical analysis (e.g., generating summary statistics for data).  
- **gnuplot**: For simple data visualization (e.g., box plots of username occurrence counts).  
- **xargs**: Passes processed data as arguments to other commands (e.g., uninstalling software).  

### Regular Expressions

A critical component of data wrangling, regular expressions (regex) enable pattern matching. Key syntax includes:  

- `.`: Any single character (except newline).  
- `*`/`+`: Zero or more/one or more of the preceding element (greedy by default).  
- `[abc]`: Any one of the specified characters.  
- `(RX1|RX2)`: Matches either regex pattern.  
- `^`/`$`: Start/end of a line.  
- Capture groups `(...)` store matched text for reuse in substitutions (e.g., `\1` for the first group).  

Notably, `sed` has unique regex behavior (requiring `\` for special characters unless `-E` is used), while tools like Perl support non-greedy matching (`*?`).  

### Practical Examples

analyzing SSH login attempt logs to demonstrate workflows:  

1. **Filtering logs**: Use `grep sshd` and `grep "Disconnected from"` to isolate relevant entries.  
2. **Extracting usernames**: `sed` with regex (and capture groups) extracts usernames from filtered logs.  
3. **Counting and sorting**: `sort | uniq -c` counts username occurrences; `sort -nk1,1` sorts by count, with `tail -n10` to get top 10.  
4. **Further processing**: `awk` extracts specific fields (e.g., usernames), `R` computes statistics (e.g., summary of counts), and `gnuplot` visualizes results.  

### Binary Data Wrangling

Pipes work for binary data too. For example, `ffmpeg` captures a camera image, converts it to grayscale, compresses it with `gzip`, sends it over SSH, decompresses it, saves a copy, and displays it.  

### Exercises

Six exercises reinforce concepts:  

1. Practicing regex via an interactive tutorial.  
2. Analyzing words in `/usr/share/dict/words` (e.g., counting those with at least three "a"s and no "'s" ending).  
3. Explaining pitfalls of in-place substitution (e.g., `sed ... input.txt > input.txt`) and finding correct methods.  
4. Calculating average, median, and max system boot times over the last 10 boots using `journalctl` (Linux) or `log show` (macOS).  
5. Identifying boot messages unique to the past three reboots by filtering, normalizing, and deduplicating logs.  
6. Fetching online datasets with `curl`, extracting numerical columns, and computing min/max/sum differences.  
