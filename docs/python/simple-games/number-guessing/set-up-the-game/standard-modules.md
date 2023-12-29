---
sidebar_position: 2
slug: /python/simple-games/number-guessing/standard-modules
---

# Standard Modules

Standard modules come pre-installed with Python. These modules provide functions, classes, and variables that help in performing many standard programming tasks, from mathematical computations to interacting with the operating system.

## Why Use Standard Modules?

- **Built-in Functionality:** They offer a wide range of functionality out-of-the-box without the need to install additional packages.
- **Reliability:** As part of the Python distribution, these modules are well-tested and reliable.
- **Efficiency:** They help you write efficient code by providing pre-built functionality, which saves time and effort.


## Import a Module

Before you can use the functions, classes, or variables defined in a module in Python, you must first `import` that module into your script. This is akin to telling Python, "I want to bring in some external tools (modules) to use in my program." Importing is essential because it keeps Python lightweight; you only load what you need, when you need it.

There are several ways to import modules in Python, and the method you choose can affect how the module's contents are accessed in your code.

- **Import an entire module:**
  - Use the `import` statement followed by the module name.
  - Once imported, you access functions or variables in the module using the dot notation: `module_name.function_name`.

  The following example imports the `math` module and calls the `sqrt` function using the dot notation:
  ```python
  import math
  print(math.sqrt(16))  # Accessing the sqrt function from the math module
  ```

- **Import specific attributes:**
  - To import specific parts from a module, use the `from` keyword.
  - This method allows you to access the imported items directly without the `module_name.` prefix.

  The following example imports `sqrt` and `pi` from `math` and accesses them directly:
  ```python
  from math import sqrt, pi
  print(sqrt(16))  # Directly using the sqrt function
  print(pi)        # Directly using the pi constant
  ```

- **Import a module with an alias:**
  - You can import a module or function under a different name (an alias) using the `as` keyword.
  - This is often used to shorten the name of the module or if the module name conflicts with an existing name in your code.

  The following example imports the `math` module as `m`
  ```python
  import math as m
  print(m.sqrt(16))  # Using an alias (m) for the math module
  ```

- **Import all names from a module:**
  - You can import everything from a module using `from module_name import *`.
  - This method is generally discouraged as it can lead to conflicts with existing names and makes the code less readable.

  The following example imports everything from the `math` module and then invokes the `sqrt` function
  ```python
  from math import *
  print(sqrt(16))  # sqrt is directly available
  ```

## Best Practices for Importing

- **Clarity and readability:** Prefer specific imports over general ones. This makes it clear which module a function comes from.
- **Avoid namespace conflicts:** Be cautious about naming conflicts. Using `import module` or `from module import specific_function` helps avoid overwriting existing functions or variables.
- **Performance considerations:** Import only what you need. While importing entire modules is generally not a performance concern for small projects, for large-scale applications, it can make a difference.


## Examples

Below are examples of importing and using some of the most commonly used standard modules in Python.

- **`math` module:**
  - Provides mathematical functions and constants.
  - Example: Calculating the square root or constants like π.

  ```python
  import math

  print(math.sqrt(25))  # Output: 5.0
  print(math.pi)        # Output: 3.141592653589793 
  ```

- **`random` module:**
  - Used for generating random numbers and performing random operations.
  - Example: Randomly choosing an item from a list.

  ```python
  import random

  colors = ["red", "blue", "green", "yellow"]
  print(random.choice(colors))  # Output: random choice from the list
  ```

3. **`datetime` module:**
  - Provides classes for manipulating dates and times.
  - Example: Getting the current date and time.

  ```python
  import datetime

  now = datetime.datetime.now()
  print(now)  # Output: Current date and time
  ```


