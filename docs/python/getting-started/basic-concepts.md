---
sidebar_position: 2
slug: /python/getting-started/basic-concepts/
description: Variables, data types, and basic operations
---

# Basic Concepts


## Variables

In Python, and programming in general, a variable is a fundamental concept that plays a crucial role. It can be thought of as a storage container for data, holding values that can be manipulated and retrieved throughout a program.

### Create a Variable

A variable in Python is created when you first assign a value to it. Unlike some other programming languages, you don’t need to declare a variable explicitly before assigning a value to it. Python is dynamically typed, meaning that the type of a variable is inferred at runtime, and the same variable can be reassigned to hold different types of data. This flexibility is one of the hallmarks of Python, making it both user-friendly and versatile.

**Example:**

```py
# Python dynamically infers the type based on the assigned value
my_var = 10        # Here, my_var is an integer and stores the value 10
my_var = "Hello"   # Now, my_var is a string and stores the value Hello
my_var = 3.14      # Here, my_var becomes a floating-point number and store the value 3.14
```

Variable names in Python can include letters, numbers, and underscores but cannot start with a number. They are case-sensitive, which means `myvar`, `MyVar`, and `MYVAR` are three different variables.

## Basic Data Types in Python

Data types in Python define the kind of value a variable can hold and how the value can be used. Python, being a dynamically typed language, does not require explicit declaration of data types. However, understanding these basic types is crucial for effective programming.

### Integers (`int`)

Integers are whole numbers without a decimal point, which can be positive or negative.

**Example:**
```python
age = 25
temperature = -10
```

### 2. Floating-Point Numbers (`float`)

Floating-point numbers, or floats, are numbers with a decimal point. They are used for more precise values or calculations.

**Example:**
```python
price = 19.99
gravity = 9.81
```

### 3. Strings (`str`)

Strings are sequences of characters enclosed in quotes (either single, double, or triple for multi-line strings). They are used to represent text.

**Example:**
```python
name = "Alice"
message = 'Hello, World!'
paragraph = """This is a multi-line
string example."""
```

### 4. Booleans (`bool`)

Booleans represent one of two values: `True` or `False`. They are often used in conditions and logical operations.

**Example:**
```python
is_active = True
test_passed = False
```

## Basic Operations

### Arithmetic Operations

- **Addition (`+`):**
  - Adds two numbers together.
  - Example: `sum = 5 + 3` (sum will be `8`).

- **Subtraction (`-`):**
  - Subtracts one number from another.
  - Example: `difference = 10 - 2` (difference will be `8`).

- **Multiplication (`*`):**
  - Multiplies two numbers.
  - Example: `product = 4 * 2` (product will be `8`).

- **Division (`/`):**
  - Divides one number by another.
  - Example: `quotient = 20 / 5` (quotient will be `4`).

##### String Operations:

- **Concatenation (`+`):**
  - Combines two strings into one.
  - Example: `full_name = "Alice" + " Smith"` (full_name will be "Alice Smith").

- **Repetition (`*`):**
  - Repeats a string a specified number of times.
  - Example: `echo = "Hello" * 3` (echo will be "HelloHelloHello").
