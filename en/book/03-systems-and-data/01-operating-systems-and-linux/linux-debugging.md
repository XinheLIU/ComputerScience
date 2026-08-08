Last updated: 2026-07-21

### Debugger

* basic skills use print/eprint functions - print the status and variables out
* break point - the core of a debugger\(dynamic/permanent\)
  * step over
  * step into
  * step out
  * display local variables
* callback - debug addin

##### GDB - GNU Debugger

* gdb &lt;program name&gt; : pull up the GDB environment
  * CtrL + U : delete input
* b \[function name, line number\] : set a break point at specified position \(optional parameters in \[\]\)
* r \[command-line arguments\] : run the program 
* n : will step forward one block of code
* s : will step forward one line of code
* p \[variable\] : print out value of variable given
* info locals : print out the value of all local variables
* bt : shows you what series of function calls have led you to the current point of the program
* q : quits GDB

##### Valgrind - Memory Debugger

* valgrind &lt;program file&gt; : check memory leaks
  * segmentation fault
  * buffer overflow \(exploit\) - attack to cover the return value
  * allocation of value before allocating memory
* buffer overflow exploit

### Debugging Techniques

## Code Testing

* Unit Test: test single function for function/unit, no side effects

* integrated test: set up environment, test data and test process for integrated working of programs

* Regression Testing: take a step back, don't break existing results

### Static Analysis

* static analyser
* code review
  * check
  * review
* dynamic testing
  * black-box test\(for function\)
  * white-box test\(for structure\)

### Debugger

* basic skills use print/eprint functions - print the status and variables out
* break point - the core of a debugger\(dynamic/permanent\)
  * step over
  * step into
  * step out
  * display local variables
* callback - debug addin

##### GDB - GNU Debugger

* gdb &lt;program name&gt; : pull up the GDB environment
  * CtrL + U : delete input
* b \[function name, line number\] : set a break point at specified position \(optional parameters in \[\]\)
* r \[command-line arguments\] : run the program 
* n : will step forward one block of code
* s : will step forward one line of code
* p \[variable\] : print out value of variable given
* info locals : print out the value of all local variables
* bt : shows you what series of function calls have led you to the current point of the program
* q : quits GDB

##### Valgrind - Memory Debugger

* valgrind &lt;program file&gt; : check memory leaks
  * segmentation fault
  * buffer overflow \(exploit\) - attack to cover the return value
  * allocation of value before allocating memory
* buffer overflow exploit

### Debugging Techniques

## Code Testing

* Unit Test: test single function for function/unit, no side effects

* integrated test: set up environment, test data and test process for integrated working of programs

* Regression Testing: take a step back, don't break existing results

### Static Analysis

* static analyser
* code review
  * check
  * review
* dynamic testing
  * black-box test\(for function\)
  * white-box test\(for structure\)


