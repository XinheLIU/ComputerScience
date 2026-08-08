Last updated: 2026-07-21

Status:

Tags: [[Programming]]

Course Link: [https://time.geekbang.org/column/article/160985](https://time.geekbang.org/column/article/160985)

- [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
  - [What is Object-Oriented Programming (OOP)](#what-is-object-oriented-programming-oop)
  - [Four Key Features of OOP](#four-key-features-of-oop)
    - [OOP Features in different languages](#oop-features-in-different-languages)
  - [OOP vs Procedural Programming](#oop-vs-procedural-programming)
  - [Abstract Class vs Interface](#abstract-class-vs-interface)
- [Design Principles](#design-principles)
  - [SOLID Principles](#solid-principles)
    - [SRP (Single Responsibility Principle)](#srp-single-responsibility-principle)
    - [OCP (Open/Closed Principle)](#ocp-openclosed-principle)
    - [LSP (Liskov Substitution Principle)](#lsp-liskov-substitution-principle)
    - [ISP (Interface Segregation Principle)](#isp-interface-segregation-principle)
    - [Dependency Inversion (\& Control Inversion, Dependency Injection)](#dependency-inversion--control-inversion-dependency-injection)
  - [Don't Repeat Yourself (DRY)](#dont-repeat-yourself-dry)
  - [KISS (Keep it Simple and Stupid) and YAGNI (You aren't gonna to need it)](#kiss-keep-it-simple-and-stupid-and-yagni-you-arent-gonna-to-need-it)
  - [Law of Demeter (LOD)](#law-of-demeter-lod)
    - [High Cohesion and Loose Coupling](#high-cohesion-and-loose-coupling)
    - [Core Relationship: Same Goal, Different Focus](#core-relationship-same-goal-different-focus)
    - [Synergy and Collaboration: How They Work Together](#synergy-and-collaboration-how-they-work-together)
- [Design Patterns](#design-patterns)

### What is Good Code?

>  How to Measure Code Quality?
>   flexibility, extensibility, maintainability, readability, understandability, changeability, reusability, testability, modularity, cohesion/coupling, efficiency, performance, security, compatibility, usability, clarity, simplicity, documentation, layering, correctness, robustness, reliability, scalability, stability, elegance, etc.

- **Maintainability**
  - How easily code can be modified, bugs fixed, or new features added without introducing new bugs or breaking existing design.
  - Influenced by readability, simplicity, extensibility, modularity, clear layering, and adherence to design principles.
  - Maintenance is the most time-consuming part of software development.
  - Maintainability is subjective and depends on the person maintaining the code.

- **Readability**
  - Code should be easy for humans to understand, not just computers.
  - Readability is crucial because code is read more often than it is written.
  - Factors: adherence to coding standards, meaningful naming, clear comments, appropriate function length, clear module boundaries, high cohesion, low coupling.
  - Code reviews are a practical way to test readability.

- **Extensibility**
  - The ability to **add new features with minimal changes to existing code.**
  - Good extensibility means code has well-designed extension points.
  - Closely related to the “open for extension, closed for modification” principle.

- **Flexibility**
  - The code’s ability to **adapt to new requirements or be used in different scenarios.**
  - Often overlaps with extensibility, reusability, and usability.
  - Flexible code is modular, abstracted, and can be easily repurposed.

- **Simplicity**
  - Follows the KISS principle: “Keep It Simple, Stupid.”
  - Simple code is easier to read, maintain, and extend.
  - Overcomplicating code (e.g., unnecessary design patterns) is a common pitfall for less experienced developers.

- **Reusability**
  - Code should **minimize duplication and maximize reuse.**
  - Achieved through inheritance, polymorphism, modularity, and adherence to DRY (“Don’t Repeat Yourself”) principle.
  - Reusability is a goal of many design principles and patterns.

- **Testability**
  - Code should be easy to test, especially with unit tests.
  - Poor testability often signals design problems.
  - Testability is a less-discussed but critical aspect of code quality.


#### Coding Standards

- Focus on code readability and maintainability
- More concrete and detail-oriented than principles or patterns

Includes:

- Naming conventions for variables, classes, functions
- Commenting standards
- Guidelines for function length and parameter count
- Essential for team collaboration and onboarding
- Closely tied to small-scale refactoring

#### Refactoring

- Continuous process of improving code structure without changing its external behavior
- Purpose: adapt to changing requirements, fix design flaws, prevent code rot
- Methods rely on OOP, design principles, patterns, and coding standards
- Types:
  - Large-scale (systemic, architectural)
  - Small-scale (local, incremental)
- Techniques: unit testing, improving testability
- When to refactor: when code **readability, maintainability, or extensibility** is at risk

#### Relationships Among OOP, Design Patterns, Design Principles, Coding Standards and Refactoring

- OOP provides the foundation for design principles and patterns
- Design principles guide when and how to apply design patterns
- Design patterns make principles actionable, focusing on extensibility
- Coding standards ensure readability and are the basis for small refactorings
- Refactoring uses all the above to maintain and improve code quality
- All five serve the ultimate goal: writing high-quality, maintainable, and scalable code

## Object-Oriented Programming (OOP)

Key concepts

- Differences and connections between OOP and procedural programming
- **Object-oriented analysis, design, and programming**
- Differences and use cases for interfaces vs. abstract classes
- “Program to an interface, not an implementation”
- Favor composition over inheritance
- Anemic (procedural) vs. rich (object-oriented) models


### What is Object-Oriented Programming (OOP)

- Object-Oriented Programming (OOP) & Object-Oriented Programming Languages (OOPL)
  - OOP is a programming paradigm using classes and objects as basic units
    - Emphasizes four main features: encapsulation, abstraction, inheritance, polymorphism
  - OOPL refers to languages that support class/object syntax and make it easy to implement OOP’s four features
    - Examples: Java, C++, Python, C#, Ruby, JavaScript, etc.
    - Not all popular languages strictly support all four features (e.g., JavaScript’s inheritance is limited)
    - OOP is usually done with OOPL, but not always(You can write OOP-style code in non-OOPL languages)
  - History and Development of OOP
    - Class and object concepts originated in the 1960s with Simula
    - Smalltalk is considered the first true OOPL
    - C++ popularized OOP in the 1980s
    - Most modern languages now support OOP
- Object-Oriented Analysis (OOA) & Object-Oriented Design (OOD)
  - OOA (Object Oriented Analysis): Analyzes requirements, clarifies “what to do”
  - OOD (Object Oriented Design): Designs solutions, clarifies “how to do it”
  - Both result in class design (class division, attributes, methods, interactions)
  - OOA, OOD, and OOP together form the full object-oriented software development process
  - UML(Unified Modeling Language) is used to express OOA and OOD ideas
    - UML is useful but often too complex for everyday use; clarity is more important than strict standards

### Four Key Features of OOP

Encapsulation: Hides internal implementation, exposes only interfaces

- Also called information hiding or data protection
  - Classes expose limited interfaces, restricting access to internal data
  - Example: A Wallet class only allows balance changes via specific methods, not direct modification
- Supported by language features like access control (e.g., ⁠private⁠, ⁠public⁠)
- Benefits:
  - **Protects data from arbitrary changes**
  - Improves maintainability and usability
  - Reduces the risk of misuse by limiting what external code can do

Abstraction: Extracts commonalities, hides details

- Hides implementation details, exposing only what’s necessary
  - Achieved via interfaces or abstract classes, but also simply by using functions
  - Example: Users interact with an interface, not the underlying implementation
- Benefits:
  - Makes code easier to extend and maintain
  - Filters out unnecessary details, helping manage complexity
  - Supports principles like **“program to an interface, not an implementation”**
  - Example
  
  ```java
  public interface IPictureStorage {
    void savePicture(Picture picture);
    Image getPicture(String pictureId);
    void deletePicture(String pictureId);
    void modifyMetaInfo(String pictureId, PictureMetaInfo metaInfo);
   }
  public class PictureStorage implements IPictureStorage {
    // ...省略其他属性...
    @Override
    public void savePicture(Picture picture) { ... }
    @Override
    public Image getPicture(String pictureId) { ... }
    @Override
    public void deletePicture(String pictureId) { ... }
    @Override
    public void modifyMetaInfo(String pictureId, PictureMetaInfo metaInfo) { ... }
  }`
    ```

Inheritance: Enables code reuse and “is-a” relationships

- Models “is-a” relationships between classes (e.g., Cat is a Mammal)
  - Can be single or multiple inheritance, depending on language support
  - Enables code reuse by allowing subclasses to inherit properties and methods from parent classes
- Benefits:
  - Reduces code duplication
  - Reflects real-world relationships, aiding design clarity
  - Cautions:
    - Overuse leads to deep, complex hierarchies and tight coupling
    - Can harm readability and maintainability

Polymorphism: Allows multiple implementations for the same interface

- Allows subclasses to replace parent classes at runtime, enabling dynamic method calls
  - Achieved via inheritance and method overriding, interfaces, or duck-typing (in dynamic languages)
  - Example: A function can accept different types that implement the same interface
- Benefits:
  - Greatly improves code extensibility and reusability
  - Enables **writing generic code that works with many types**
  - Foundation for many design patterns and principles (e.g., Strategy, Dependency Inversion)
  - Examples

Use Interface

```java
public interface Iterator {
  boolean hasNext();
  String next();
  String remove();
}

public class Array implements Iterator {
  private String[] data;
  
  public boolean hasNext() { ... }
  public String next() { ... }
  public String remove() { ... }
  //...省略其他方法...
}

public class LinkedList implements Iterator {
  private LinkedListNode head;
  
  public boolean hasNext() { ... }
  public String next() { ... }
  public String remove() { ... }
  //...省略其他方法... 
}

public class Demo {
  private static void print(Iterator iterator) {
    while (iterator.hasNext()) {
      System.out.println(iterator.next());
    }
  }
  
  public static void main(String[] args) {
    Iterator arrayIterator = new Array();
    print(arrayIterator);
    
    Iterator linkedListIterator = new LinkedList();
    print(linkedListIterator);
  }
}

```

duck-typing in python

```python
class Logger:
    def record(self):
        print(“I write a log into file.”)
        
class DB:
    def record(self):
        print(“I insert data into db.”)
        
def test(recorder):
    recorder.record()

def demo():
    logger = Logger()
    db = DB()
    test(logger)
    test(db)

```

#### OOP Features in different languages

|Language      |Encapsulation (access-control)                            |Abstraction (interfaces / abstract types)                |Inheritance support                                        |Polymorphism mechanism(s)                  |Notes                                                              |
|--------------|----------------------------------------------------------|---------------------------------------------------------|-----------------------------------------------------------|-------------------------------------------|-------------------------------------------------------------------|
|**Java**      |`private / protected / public` keywords                   |Interfaces + abstract classes                            |Single class inheritance; multiple via interfaces          |Virtual-method override, interface dispatch|Considered a “strict” OOPL in the article                          |
|**C++**       |`private / protected / public` keywords                   |Abstract classes (pure virtual)  (*no interface keyword*)|Full multiple inheritance                                  |Virtual-table dispatch                     |Shows why some languages still keep multiple inheritance           |
|**Go**        |Exported-identifier convention (no fine-grained modifiers)|Interfaces only, no abstract classes                     |No class-based inheritance; favors composition             |Interface value dispatch                   |Article cites Go as intentionally *dropping* inheritance           |
|**Python**    |Naming conventions (`_name`) not enforced                 |Duck typing; optional ABC module                         |Multiple inheritance                                       |Dynamic dispatch; duck typing              |Highlighted as a dynamic, duck-typed language                      |
|**C#**        |`private / protected / public / internal`                 |Interfaces + abstract classes                            |Single class, multiple via interfaces                      |Virtual override & interface dispatch      |Similar stance to Java on inheritance                              |
|**Ruby**      |`private / protected / public` (runtime-checked)          |Duck typing; mix-ins (Modules)                           |Single class, mix-in multiple via Modules                  |Dynamic dispatch; duck typing              |Listed among languages lacking strict four-feature set             |
|**JavaScript**|No classical modifiers until recent `#` fields            |Prototype-based; no built-in interfaces                  |Prototype chain (single); no classical inheritance keywords|Duck typing; dynamic dispatch              |Not fully support                                            |
|**PHP**       |`private / protected / public` keywords                   |Interfaces + abstract classes; Traits                    |Single class, multiple via interfaces / traits             |Virtual override & interface dispatch      |Used as example of “single inheritance only” family                |
|**Perl**      |No built-in modifiers (can fake via modules)              |Duck typing; roles via Moose                             |Multiple inheritance (@ISA list)                           |Dynamic dispatch                           |Mentioned alongside C++ & Python as supporting multiple inheritance|

### OOP vs Procedural Programming

Definitions

- Procedural programming: Organizes code around procedures (functions), with data and methods separated.
  - Best for simple, linear programs; code is organized as a sequence of functions manipulating data.
- Object-oriented programming: Organizes code around classes/objects, integrating data and methods, and supports encapsulation, abstraction, inheritance, and polymorphism.
  - Suited for complex, large-scale systems; code is modular, organized as interacting objects/classes.

Compare

- OOP Advantages
  - **Better for complex systems**
    - Handles intricate, network-like workflows more clearly.
    - Encourages modeling business logic as classes and relationships, not just step-by-step procedures.
      - Modular design makes large codebases easier to manage.
      - Classes help organize related data and behavior together.
  - **Improved code quality**
    - Easier to reuse, extend, and maintain code.
    - OOP features:
      - Encapsulation: Data and methods are bundled, with controlled access.
      - Abstraction: Interfaces and abstract classes allow flexible, interchangeable implementations.
      - Inheritance: Shared code can be reused across related classes.
      - Polymorphism: New behaviors can be added without modifying existing code.
  - **More human-centric and advanced**
    - OOP languages are designed to be closer to human thinking, focusing on modeling real-world entities.
    - They are considered more “intelligent” and user-friendly than procedural languages, which are closer to machine instructions.
- Nuances
  - For simple tasks, procedural programming can be more straightforward.
  - Complex systems (like Unix/Linux) can be built with procedural languages, but OOP makes managing complexity easier.
  - OOP and procedural styles are not mutually exclusive; procedural languages can mimic OOP patterns, but with more effort.
- Conclusion
  - OOP is now the mainstream paradigm for software development due to its advantages in handling complexity, code organization, and maintainability.
  - Procedural programming is not obsolete, but OOP is generally preferred for modern, large-scale applications.

Example:

```c
struct User {
  char name[64];
  int age;
  char gender[16];
};

struct User parse_to_user(char* text) {
  // Parse text (e.g., "XiaoWang&28&Male") into a struct User
}

char* format_to_text(struct User user) {
  // Format struct User as text (e.g., "XiaoWang\t28\tMale")
}

void sort_users_by_age(struct User users[]) {
  // Sort users array by age in ascending order
}

void format_user_file(char* origin_file_path, char* new_file_path) {
  // Open input and output files...
  struct User users[1024]; // 假设最大1024个用户
  int count = 0;
  while(1) { // read until the file is empty
    struct User user = parse_to_user(line);
    users[count++] = user;
  }
  
  sort_users_by_age(users);
  
  for (int i = 0; i < count; ++i) {
    char* formatted_user_text = format_to_text(users[i]);
    // write to new file...
  }
  // close files...
}

int main(char** args, int argv) {
  format_user_file("/home/zheng/user.txt", "/home/zheng/formatted_users.txt");
}

```

```java
 public class User {
  private String name;
  private int age;
  private String gender;
  
  public User(String name, int age, String gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  public static User praseFrom(String userInfoText) {
    // Parse text ("小王&28&男") into a User object
  }
  
  public String formatToText() {
    // Format the User object as text ("小王\t28\t男")
  }
}

public class UserFileFormatter {
  public void format(String userFile, String formattedUserFile) {
    // Open files...
    List users = new ArrayList<>();
    while (1) { // read until file is empty 
      // read from file into userText...
      User user = User.parseFrom(userText);
      users.add(user);
    }
    // sort users by age...
    for (int i = 0; i < users.size(); ++i) {
      String formattedUserText = user.formatToText();
      // write to new file...
    }
    // close files...
  }
}

public class MainApplication {
  public static void main(String[] args) {
    UserFileFormatter userFileFormatter = new UserFileFormatter();
    userFileFormatter.format("/home/zheng/users.txt", "/home/zheng/formatted_users.txt");
  }
}

```

Some Code looks like OOP, but Indeed Procedural

Three Common Procedural Patterns in OOP Code

1.**Overuse of Getter/Setter Methods**
   - Defining getters/setters for every property, especially setters, breaks encapsulation.
     - Makes private data as accessible as public, risking data inconsistency.
     - Returning modifiable collections via getters exposes internal state.
     - Solution: Only define necessary setters/getters; return unmodifiable collections when needed.

2.**Overuse of Global Variables and Methods**
   - Large, catch-all Constants or Utils classes are procedural in nature.
     - Centralizing all constants in one class hurts maintainability, increases compile time, and reduces reusability.
     - Large Utils classes with only static methods separate data from behavior, which is procedural.
     - Solution: Split constants/utils into smaller, focused classes; place constants/methods close to where they’re used.

3. **Separation of Data and Methods**
   - Data-only classes (VO/BO/Entity) and logic-only classes (Controller/Service/Repository) are common in MVC/“anemic model” patterns.
     - This splits data and behavior, which is a procedural style, not true OOP.

Why This Happens a lot

- Why Procedural Code Creeps into OOP?
  - Human thinking is naturally process-oriented (step-by-step).
  - OOP design is harder, requiring thoughtful encapsulation and class relationships.
  - Developers often default to procedural habits for simplicity.
- Is Procedural Code Always Bad in OOP?
  - Not necessarily—procedural style is sometimes appropriate, especially for small scripts or data-processing tasks.
  - OOP and procedural styles are not mutually exclusive; high-quality code can blend both, as long as procedural drawbacks are managed.

### Abstract Class vs Interface

Abstract classes and interfaces are key concepts in object-oriented programming, each serving distinct purposes and usage scenarios.

- **Definitions & Syntax**
  - **Abstract classes:**
    - Cannot be instantiated, only inherited.
    - Can contain attributes and methods (with or without implementation).
    - Subclasses must implement all abstract methods.
  - **Interfaces:**
    - Cannot contain attributes (except static constants in some languages).
    - Only declare methods, no implementation.
    - Classes implementing interfaces must define all declared methods.
- **Purpose & Meaning**
  - **Abstract classes:**
    - Represent an **“is-a” relationship**.
    - Mainly solve code reuse problems.
    - Used when subclasses share common code and require polymorphism.
  - **Interfaces:**
    - Represent a **“has-a” relationship** (protocol/contract).
    - Focus on **decoupling and abstraction,** not code reuse.
    - Enable separation of definition and implementation, improving extensibility.
- **Simulation in Other Languages**
  - In languages without direct support (like C++ or Python):
    - Abstract classes can simulate interfaces by only declaring methods without implementation.
    - Ordinary classes can simulate abstract classes/interfaces by throwing exceptions in unimplemented methods or using design patterns like **duck-typing**.
- **Design Approach**
  - **Abstract classes:** Bottom-up (refactor common code into a parent class).
  - **Interfaces:** Top-down (define contracts first, then implement).

## Design Principles

- Experience-based guidelines for designing robust code
- Abstract and open to interpretation; understanding intent and application is crucial

Major principles:

- SOLID principles:
  - **SRP (Single Responsibility Principle)**
  - **OCP (Open/Closed Principle)**
  - **LSP (Liskov Substitution Principle)**
  - **ISP (Interface Segregation Principle)**
  - **DIP (Dependency Inversion Principle)**
- Other key principles:
  - **DRY (Don’t Repeat Yourself)**
  - **KISS (Keep It Simple, Stupid)**
  - **YAGNI (You Aren’t Gonna Need It)**
  - **LOD (Law of Demeter)**

### SOLID Principles

#### SRP (Single Responsibility Principle)

**Single Responsibility Principle (SRP) Definition & Understanding**
- A class or module should be responsible for only one functionality or responsibility
  - This principle describes two objects: class and module. There are two ways to understand these concepts:
    - **First understanding:** Module is a more abstract concept than class; a class can also be seen as a module
    - **Second understanding:** Module is a coarser-grained code block than class; a module contains multiple classes
- Avoid designing "large and comprehensive" classes
- Improve code cohesion, readability, and maintainability
- SRP is one of the five SOLID design principles

**How to Judge if a Class Has Single Responsibility**
- No clear quantitative standards; must be combined with actual business scenarios
  - When business requirements change, class design also needs adjustment
  - Detailed business-level analysis may require further class decomposition
- Practical judgment indicators:
  - Class has too many lines of code, functions, or attributes
  - Class depends on too many other classes, or is depended upon by too many
  - Too many private methods
  - Class name cannot accurately describe its responsibility
  - Methods concentrate on operating certain attributes

**Is More Single Responsibility Always Better?**
- Over-decomposition reduces cohesion and maintainability
  - Example: After splitting serialization/deserialization classes, protocol changes require modifications in multiple places, prone to errors
- Should aim to improve code readability, extensibility, reusability, and maintainability as the ultimate goal

**Practical Application Recommendations**
- Initially design coarse-grained classes, then continuously refactor as business develops
  - Don't over-design; avoid dogmatism
  - Experience and "sixth sense" help determine the right timing for decomposition



#### OCP (Open/Closed Principle)

**Open/Closed Principle (OCP) Definition**
- Software entities (modules, classes, functions, etc.) should be "open for extension, closed for modification"
- New functionality should be implemented through extending code (adding new classes, methods) rather than modifying existing code
- Aims to improve code maintainability and extensibility

**Why Follow the Open/Closed Principle?**
- **Improve code extensibility and maintainability**
  - Modifying existing code easily introduces bugs and affects existing functionality
  - Poor extensibility makes code difficult to adapt to business changes
  - Code modifications require synchronous unit test adjustments, increasing workload

**How to Implement the Open/Closed Principle?**
- **Reserve extension points by identifying variable and invariable parts**
  - Use abstraction, encapsulation, and interface design to isolate changes
  - Leverage polymorphism, dependency injection, and interface-based programming
  - Design patterns (Decorator, Strategy, Template, Chain of Responsibility, State) commonly used to improve extensibility
- **Practical approach:**
  - For certain and near-term extension requirements, reserve extension points
  - For uncertain or long-term requirements, wait for requirement-driven refactoring
  - Balance extensibility and readability to avoid over-design

**Extension vs. Modification Boundaries**
- Not about completely eliminating modifications, but achieving new functionality with minimal cost
- Some initialization and assembly code modifications are inevitable
- Key is keeping core business logic unchanged while completing extensions through new code
- From a coarse-grained perspective it might be "modification," but from fine-grained view it's "extension"

**Implementation Techniques**
- Polymorphism, dependency injection, interface-based programming, and abstraction consciousness all represent the same design approach from different angles
- Demonstrates that "many design principles, ideas, and patterns are interconnected"


**Example: Alert Class Change**

The original Alert class directly handled all alert logic within the check() method, requiring modifications to method parameters and internal logic when adding new features like timeout alerts. Each modification could impact existing functionality and tests, resulting in high maintenance costs. The main problems were frequent modifications to core code due to new requirements, affecting stability and requiring synchronous changes to calling code and test code.

After refactoring, a "Handler" mechanism was introduced where the check() method only iterates through and calls various AlertHandlers. Each alert type (TPS, error count, timeout) is implemented by independent Handler classes. Adding new alert types only requires creating new Handler classes without modifying the core Alert class or check() method. An ApiStatInfo class encapsulates all statistical data, so adding new statistics only requires adding fields to this class. ApplicationContext handles assembly and registration of all Handlers during initialization.

To extend new functionality, you only need to: add new fields to ApiStatInfo (like timeoutCount), create corresponding Handler classes (like TimeoutAlertHandler), register the new Handler in ApplicationContext, and set the new field value before calling the check() method. The advantages are that new features are implemented through "extension" without modifying core logic, and existing functionality and tests remain unaffected, greatly improving maintainability and extensibility. This example demonstrates the open/closed principle: through proper structural design, new features can be added by extending code rather than modifying existing core code.

#### LSP (Liskov Substitution Principle)

Here’s a structured summary of the article on the Liskov Substitution Principle (LSP) and its distinction from polymorphism.

**LSP (Liskov Substitution Principle) - Key Points:**

- **Definition**: Subclasses should be replaceable for their parent classes without affecting program correctness
- **Core Concept**: "Design by contract" - subclasses must honor behavioral contracts of parent classes
- **Formal Statement**: If S is a subtype of T, objects of type T can be replaced with objects of S without breaking the program

**LSP vs Polymorphism:**
- **Polymorphism**: Language feature enabling dynamic method replacement (how code executes)
- **LSP**: Design principle guiding how subclasses should be designed (ensures correctness)
- **Key Difference**: Not all polymorphic code satisfies LSP

**Common LSP Violations:**
- Subclass changes intended function of parent method (e.g., sorting by date instead of amount)
- Subclass alters input/output/exception contracts (stricter validation, different error handling)
- Subclass ignores special notes in parent documentation (e.g., allowing overdraft when forbidden)
- **Testing Tip**: Run parent class unit tests on subclasses to reveal LSP violations

**Benefits of Following LSP:**
- Ensures code maintainability, extensibility, and reliability
- Promotes consistency and predictability in inheritance hierarchies
- Helps avoid confusing or ambiguous subclass behavior
- Increases code readability

**Key Takeaways:**
- LSP is about honoring the contract set by the parent class
- Subclasses can extend but not contradict parent behavior
- LSP is a design guideline; polymorphism is a technical feature
- Sometimes breaking LSP is justified for major design changes, but should be conscious decision


#### ISP (Interface Segregation Principle)

**Core Concept of Interface Segregation Principle (ISP)**
- Clients should not be forced to depend on interfaces they do not use
- Keep interfaces smaller and more focused, avoiding "fat interfaces"

**Three Types of "Interface" Understanding and Applications**
- **Collection of API Interfaces**
  - Interface collections in microservices or class libraries
  - Only expose specific interfaces to callers who need them (e.g., delete user interface only for backend management systems)
- **Single API Interface or Function**
  - Functions should have single functionality
  - Split large functions into multiple smaller functions to avoid unnecessary computation and dependencies
- **OOP Interfaces (e.g., Java interface)**
  - Design small and specialized interfaces (e.g., Updater, Viewer)
  - Let implementation classes and callers only depend on required functionality, improving flexibility and reusability

**Difference from Single Responsibility Principle**
- Single Responsibility Principle focuses on modules/classes/interfaces having single responsibility
- Interface Segregation Principle emphasizes interface design, judging whether interfaces are "bloated" from caller's perspective

**Design Recommendations**
- Split interfaces to avoid forcing all implementation classes to implement unnecessary methods
- Smaller interfaces are easier to extend and reuse, reducing unnecessary work and maintenance costs

**Practical Case Study**
- Use two small interfaces: Updater and Viewer to separately satisfy hot update and monitoring needs
- Avoid designing "big and comprehensive" Config interfaces to improve system flexibility

**Discussion on Thinking Question (AtomicInteger's getAndIncrement)**
- Whether it conforms to single responsibility and interface segregation principles depends on actual scenarios and requirements
- Sometimes atomicity requirements determine that a method must "do two things," but this is reasonable from the caller's perspective

**Significant Code-Level Benefits**

- **Reducing Coupling and Improving Flexibility**
- **Problem**: If a class implements a large "fat interface" (containing many methods), even if the class only uses one or two interface methods, it must implement all methods (even if just empty implementations). When the "fat interface" needs modification, all classes implementing it must be modified and recompiled regardless of whether they use that method, causing a "ripple effect"
- **Solution**: ISP requires splitting large interfaces into multiple small, specialized interfaces. A class can implement only the small interfaces it truly needs. Modifying a small interface only affects classes that actually use it, without affecting innocent parties
- **Improving Cohesion and Making Code Clearer and More Maintainable**
  -  **Problem**: An interface defining "user CRUD, send email, generate reports" methods has unclear and ambiguous responsibilities, violating the Single Responsibility Principle
     -  **Solution**: Split into IUserService (CRUD), IEmailService (send email), IReportService (generate reports), etc. Each interface has single responsibility and high cohesion, making code easier to understand and maintain
- **Avoiding Interface Pollution and "Fat Interfaces"**
  - **Problem**: During project iterations, developers might directly add new methods to existing interfaces for convenience instead of considering whether to create new interfaces. This leads to increasingly "fat" interfaces containing various unrelated methods
  - **Solution**: ISP forces more refined design. When adding new functionality, first consider "which existing small interface should this functionality belong to?" or "do I need to create a new small interface?". This prevents interface pollution from the design source
- **Relationship Between ISP and SRP**
  - Interface Segregation Principle (ISP) and Single Responsibility Principle (SRP) are the most easily confused principles in SOLID. They are closely related and often work together, but focus on completely different dimensions
  -  **Single Responsibility Principle (SRP)**: Focuses on module (class, interface) "cohesion" and "responsibility". Answers: "What does this module do?" Requires a module to have one and only one reason to change
  -  **Interface Segregation Principle (ISP)**: Focuses on "dependency relationships" between interfaces and their "callers" (clients). Answers: "What do callers need?" Requires interfaces not to expose methods that callers don't need
  
  
#### Dependency Inversion (& Control Inversion, Dependency Injection)

**Core Concepts and Relationships**

- **Inversion of Control (IoC)**
  - Program execution flow control is transferred from programmers to frameworks
  - Framework drives the process, programmers only need to implement extension points
  - Example: Testing frameworks control test flow, developers only write test logic
  - Represents a broad design principle where control is "handed over to external entities"

- **Dependency Injection (DI)**
  - A specific coding technique where external entities create dependency objects and inject them into classes
  - Avoid creating dependency objects with `new` inside classes
  - Dependencies are passed through constructors, parameters, or other methods
  - Improves code extensibility and flexibility
  - Dependencies can be interfaces or classes
  - Three main injection types:
    - **Constructor Injection** (most recommended): Dependencies passed through class constructor
    - **Setter Method Injection**: Dependencies set through setter methods after object creation
    - **Interface Injection** (less common): Dependencies injected through specific injection interfaces

- **Dependency Injection Framework (DI Framework)**
  - Frameworks that automatically manage object creation and dependency injection
  - Configure classes and dependency relationships; framework automatically handles object assembly and lifecycle management
  - Examples: Spring, Guice, ASP.NET Core DI Container

- **Dependency Inversion Principle (DIP)**
  - High-level modules should not depend on low-level modules; both should depend on abstractions
  - Abstractions should not depend on concrete implementations; concrete implementations should depend on abstractions
  - Primarily used to guide framework design
  - Example: Both Tomcat and web applications depend on the Servlet specification abstraction
  - Mathematical representation: If $H$ is high-level module, $L$ is low-level module, and $A$ is abstraction, then $H \rightarrow A \leftarrow L$ instead of $H \rightarrow L$

**Practical Understanding Through Examples**

- **Traditional Approach (Tight Coupling)**
  - `ClassA` directly creates `ClassB` using `new ClassB()`
  - Control is in `ClassA`'s hands - it actively acquires dependencies
  - Results in tight coupling and reduced testability

- **IoC Approach (Loose Coupling)**
  - `ClassA` passively receives `ClassB` through constructor, setter, or interface injection
  - Control authority lies with calling code or specialized IoC container
  - Dependency acquisition control is inverted from `ClassA` to external entities

**IoC Container Workflow**

- **Registration Phase**
  - Configure container: "When someone needs `ClassB`, provide a `ClassB` instance"
  - Can configure instance creation strategies (singleton vs. new instance per request)

- **Resolution Phase**
  - When container needs to create `ClassA`, it discovers `ClassA` depends on `ClassB`
  - Container automatically creates required dependencies in correct order

- **Injection Phase**
  - Container creates `ClassB` instance first, then injects it into `ClassA` constructor
  - Returns fully assembled `ClassA` instance to caller
  - Eliminates need for manual `new ClassA(new ClassB())` code

**Benefits and Significance**

- **Reduced Coupling**
  - Classes depend on abstractions (interfaces) rather than concrete implementations
  - Enables easy substitution of implementations without modifying dependent classes

- **Improved Testability**
  - Easy to replace real dependencies with mock objects during testing
  - Enables isolated unit testing by injecting test doubles

- **Enhanced Flexibility and Maintainability**
  - Implementation changes require minimal code modifications
  - Often only need to update IoC container configuration to swap implementations

- **Centralized Object Lifecycle Management**
  - Container manages object creation, destruction, and lifecycle patterns
  - Supports various instantiation strategies (singleton, prototype, request-scoped, etc.)

**Relationship Summary**

- **Inversion of Control (IoC)**: Broad design principle advocating "delegate control to external entities"
- **Dependency Injection (DI)**: Primary technical implementation method for achieving IoC
- **Dependency Inversion Principle (DIP)**: Specific SOLID design principle requiring "depend on abstractions, not concretions"
- **Key Insight**: Dependency Injection (DI) serves as the best practice and core technology for simultaneously achieving both IoC and DIP objectives

### Don't Repeat Yourself (DRY)

**TLDR:**
- Duplicate code doesn't necessarily violate DRY principle - need to distinguish between implementation logic, functional semantics, and execution repetition
- Methods to improve code reusability include reducing coupling, single responsibility, modularization, etc.
- Reuse awareness and flexible application of principles (such as Rule of Three) are equally important

**Core Concepts**

- **DRY Principle (Don't Repeat Yourself)**
  - Don't write duplicate code, but "duplication" falls into three typical categories:
    - **Implementation Logic Duplication**
      - Code implementation is identical but semantics differ (e.g., validating username vs. password)
      - Not necessarily a DRY violation as merging might violate Single Responsibility Principle
      - Example: Two validation functions with same regex pattern but different business contexts
    - **Functional Semantics Duplication**
      - Same functionality but different implementations (e.g., two IP validation functions)
      - Clear DRY violation - should unify implementation to avoid maintenance pitfalls
      - Mathematical expression: If $f_1(x) \equiv f_2(x)$ but $\text{implementation}(f_1) \neq \text{implementation}(f_2)$, then violation occurs
    - **Code Execution Duplication**
      - Same logic executed multiple times (e.g., repeated validation, redundant database queries)
      - Violates DRY principle - should optimize workflow to reduce unnecessary repeated execution
      - Performance impact: $O(n \cdot k)$ where $n$ is operation complexity and $k$ is repetition count

- **Code Reusability Concepts**
  - **Distinction between Related Concepts**
    - **Code Reusability**: Inherent characteristic of code being easily reusable
    - **Code Reuse**: Actual behavior of reusing existing code
    - **DRY Principle**: Avoiding writing duplicate content
  - **Key Insight**: Non-repetitive $\neq$ Reusable
    - Reusability focuses on developers' perspective (ease of extraction and reuse)
    - Reuse focuses on users' perspective (actual utilization of existing code)

**Methods to Improve Code Reusability**

- **Reduce Code Coupling**
  - High coupling impairs code extraction and reusability
  - Aim for loose coupling through dependency injection and interface abstraction
- **Satisfy Single Responsibility Principle**
  - Finer granularity leads to higher universality and reusability
  - Each module should have only one reason to change
- **Modularization**
  - Functionally independent modules are more easily reusable
  - Clear module boundaries and well-defined interfaces
- **Separate Business and Non-business Logic**
  - Extract common code into frameworks, libraries, and components
  - Business-agnostic utilities have higher reuse potential
- **Common Code Layering**
  - Lower layers are more universal - avoid lower layers depending on upper layers
  - Follow dependency inversion principle in system architecture
- **Leverage Object-Oriented Features**
  - Utilize inheritance, polymorphism, abstraction, and encapsulation
  - Design patterns like Template Method enhance reusability
- **Apply Design Patterns**
  - Template Pattern: Define algorithm skeleton, subclasses implement specific steps
  - Strategy Pattern: Encapsulate algorithms, making them interchangeable
- **Reuse Awareness**
  - Design with reusability in mind - think like designing APIs when creating modules, classes, functions
  - Consider future extensibility and modification scenarios

**Flexible Application and Critical Thinking**

- **Cost-Benefit Analysis**
  - Don't over-invest in development costs without clear reuse requirements
  - Balance immediate needs with potential future benefits
- **Rule of Three Principle**
  - First time: Write code without considering reuse
  - Second time: Copy and modify existing code
  - Third time: Refactor to create reusable components
  - Mathematical justification: Refactoring cost $C_r$ justified when $C_r < (n-2) \cdot C_d$ where $n \geq 3$ is usage count and $C_d$ is duplication cost
- **Incremental Refactoring**
  - Refactor code to improve reusability when actual reuse scenarios emerge
  - Avoid premature optimization and over-engineering

**Synergy with SOLID Principles**

- **DRY and SOLID Work Hand in Hand**
  - When discovering code duplication (DRY violation), extracting methods or classes naturally leads to SRP compliance
  - The extracted class/method inherently has a single responsibility
- **Interface Segregation and DRY**
  - ISP requires splitting large interfaces into smaller ones
  - Each interface expresses only specific client needs, embodying DRY by avoiding repetitive broad interfaces
- **Design Quality Indicators**
  - DRY violations often signal poor design
  - SOLID principles provide refactoring direction when addressing DRY violations

**Key Takeaways**

- **Three Types of Code Duplication**: Require specific analysis to determine DRY violation
- **Multiple Improvement Methods**: Various techniques available for enhancing code reusability
- **Reuse Awareness**: Equally important as technical methods
- **Principle Applicability**: DRY has broader applicability; code reusability should be balanced against actual needs
- **Tool Limitations**: Automated tools struggle with semantic and execution duplication detection - relies on developer awareness and team collaboration

**Discussion Points**
- Beyond implementation logic, functional semantics, and execution duplication, what other types of code repetition exist?
- How can teams establish processes to systematically identify and address DRY violations?
- What metrics can effectively measure code reusability in practice?



### KISS (Keep it Simple and Stupid) and YAGNI (You aren't gonna to need it)

- **KISS Principle (Keep It Simple and Stupid)**
  - Code should be as simple, readable, and maintainable as possible
  - Readability and maintainability are more important than code line count
  - Logic complexity, implementation difficulty, and team understanding capability must all be considered
  - Using complex methods to solve inherently complex problems does not violate KISS
  - Fewer lines of code does not equal simplicity - regular expressions and other examples demonstrate this
  - Prioritize using technologies and tool libraries familiar to the team
  - Avoid over-optimization and sacrificing readability
  - Code review is an effective method for judging whether code is "simple"

- **YAGNI Principle (You Ain't Gonna Need It)**
  - Don't design or implement functionality that isn't currently needed
  - Only build features that are truly needed now, avoid over-design
  - Example: If currently only using Redis, don't implement ZooKeeper-related code in advance
  - Don't introduce unnecessary dependency packages prematurely
  - Maintain extension points and implement when actually needed

- **Differences and Connections**
  - KISS focuses on "how to do it" - keeping things simple
  - YAGNI focuses on "whether to do it" - only doing what's needed
  - Both oppose over-design and complexity, but have different focal points

- **Practical Guidelines**
  - Don't use technologies that teammates don't understand to implement code
  - Don't reinvent the wheel - leverage existing tool libraries effectively
  - Don't over-optimize at the expense of code clarity
  - Simplicity doesn't mean low technical content - solving complex problems with simple methods demonstrates true capability

- **Synergistic Relationships**
  - **Common Goal**: All principles (SOLID, DRY, YAGNI) ultimately aim to achieve KISS - a simple, easy-to-understand system
  - **KISS as the Ultimate Objective**: 
    - Following SRP results in functionally focused, easy-to-understand small classes (simpler)
    - Following DRY eliminates duplication, with logic defined in only one place (simpler)
    - Following YAGNI avoids unused complex code (simpler)
  - **YAGNI Constrains Over-application**: 
    - SOLID and DRY, if applied dogmatically, can easily lead to over-design
    - Example scenario: Simple `ReportGenerator` class with potential future need for PDF and Excel formats
      - Dogmatic SOLID/DRY approach: Immediately apply DIP and OCP, create `IReportFormatter` interface with `PdfFormatter` and `ExcelFormatter` implementations
      - YAGNI approach: Simply write a method in `ReportGenerator` to generate current required format (e.g., CSV) until a second format is actually needed

- **Quality Assurance Methods**
  - Use code review as an effective indirect method to evaluate code simplicity
  - If colleagues have many questions during code review, the code may not be "simple" enough and needs optimization
  - Remember: The ability to solve complex problems with simple methods truly reflects one's capability
  - Don't over-design or assume simple solutions lack technical sophistication


### Law of Demeter (LOD)

- **Design Philosophy**
  - **High Cohesion**: Functions are concentrated, easy to maintain
  - **Loose Coupling**: Fewer dependencies, easy to extend
- **Core of Law of Demeter**
  - Only depend on necessary interfaces, reduce direct dependencies between classes
  - Make classes more independent, minimize the impact scope of changes
- **Practical Guidelines**
  - Prioritize interface segregation and dependency minimization
  - Combine with Single Responsibility and Interface Segregation principles to improve overall design quality

#### High Cohesion and Loose Coupling

- **High Cohesion and Loose Coupling**
  - **High Cohesion**: Related functions are concentrated in the same class, convenient for maintenance and modification
    - Single Responsibility Principle contributes to high cohesion
  - **Loose Coupling**: Simple and clear dependency relationships between classes, reducing mutual impact
    - Dependency injection, interface segregation, and programming to interfaces all serve loose coupling

- **Law of Demeter (LOD)**
  - **Theoretical Description**
    - Each class should only know limited knowledge about classes closely related to itself
    - "Only talk to friends, don't talk to strangers"
  - **Practical Application**
    - Classes that shouldn't have direct dependency relationships should not depend on each other
    - Classes with dependency relationships should only depend on necessary interfaces (Principle of Least Knowledge)

- **Code Examples**
  - **Case 1: Refactoring NetworkTransporter, HtmlDownloader, Document**
    - NetworkTransporter doesn't directly depend on HtmlRequest, uses more general parameters
    - Document doesn't directly depend on HtmlDownloader, uses factory method for decoupling
  - **Case 2: Serialization and Deserialization**
    - Split into Serializer and Deserializer, or use interface segregation for dependencies
    - Only depend on needed interfaces, avoid over-dependency

- **Relationships Between Principles**
  - **Single Responsibility Principle**: Focus on class's own functionality, improve cohesion
  - **Interface Segregation Principle**: Only depend on needed interfaces, reduce coupling
  - **Programming to Interfaces, Not Implementations**: Improve extensibility and decoupling
  - **Law of Demeter**: Emphasize minimal dependencies, further reduce coupling
  - **Common Goal**: All these principles aim for high cohesion and loose coupling
  - **Dialectical Thinking**
    - Design principles don't have absolute right or wrong, need flexible application based on actual scenarios
    - Over-splitting may lead to low cohesion, need to balance design trade-offs

#### Core Relationship: Same Goal, Different Focus

You can understand them as:

- **SOLID Principles** are more like "macro-architectural guidelines" for building robust systems. They tell you how to design relationships between classes, interfaces, and modules (SRP, DIP, ISP), how to extend functionality (OCP), and how to substitute behavior (LSP).

- **Law of Demeter (LoD)** is more like guiding "micro-communication rules" between classes. It prescribes how objects should safely "talk" to each other in an already designed architecture to avoid excessive coupling.

Their common ultimate goal is: **reduce coupling, increase cohesion, enhance code maintainability, extensibility, and flexibility**.

#### Synergy and Collaboration: How They Work Together

LoD is closely related to multiple SOLID principles and often works synergistically with them.

- **LoD and Single Responsibility Principle (SRP)**
  - SRP requires a class to do only one thing. If a class needs to accomplish work through `a.getB().getC().doSomething()`, it often means it may be overstepping boundaries, trying to handle responsibilities that should belong to class B or class C.
  - LoD effectively reinforces SRP by mandating "only talk to direct friends". It prevents a class from knowing and handling logic that doesn't belong to its responsibility scope, forcing you to assign responsibilities to more appropriate classes.
  - **Synergistic Effect**: Following LoD helps you discover violations of SRP and encourages refactoring toward classes with more singular responsibilities.

- **LoD and Interface Segregation Principle (ISP)**
  - ISP requires clients should not be forced to depend on interfaces they don't need. It reduces exposure to clients by defining small, specialized interfaces.
  - LoD requires an object to communicate only with its most direct friends. This means the interfaces a class sees (i.e., its friends' methods) should naturally be the most needed and streamlined interfaces.
  - **Synergistic Effect**: Small interfaces designed following ISP naturally make it easier for clients to follow LoD, because they can't see unnecessary methods. Conversely, following LoD also encourages you to think: "Which methods does my class actually need to depend on?", thus driving you to define more segregated and precise interfaces rather than large, bloated ones.

- **LoD and Dependency Inversion Principle (DIP)**
  - This is the most important and profound connection.
  - DIP requires both high-level and low-level modules to depend on abstractions (interfaces), not concrete implementations. It addresses the problem of dependency direction.
  - LoD addresses the problem of communication distance. It doesn't allow remote communication like A → B → C.
  - **Synergistic Effect**: DIP provides powerful implementation tools for LoD.

Consider this example:

## Design Patterns


- General solutions to recurring design problems in software development
- Main goal: improve **code extensibility and maintainability**
- Less abstract than design principles; more actionable and concrete

**23 classic patterns, grouped into three categories:**(Some patterns are now built into languages or considered anti-patterns as languages evolve)

| Category     | Common Patterns                                         | Less Common Patterns                        |
|--------------|--------------------------------------------------------|---------------------------------------------|
| Creational   | Singleton, Factory, Builder                            | Prototype                                   |
| Structural   | Proxy, Bridge, Decorator, Adapter                      | Facade, Composite, Flyweight                |
| Behavioral   | Observer, Template, Strategy, Chain of Responsibility, Iterator, State | Visitor, Memento, Command, Interpreter, Mediator |