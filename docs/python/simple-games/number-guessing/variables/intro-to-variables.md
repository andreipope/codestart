---
sidebar_position: 1
slug: /python/simple-games/number-guessing/intro-to-variables
---

# Intro to Variables

Think of a variable as a labeled jar where you can store something. In programming, just like you might have a jar for cookies and a jar for sugar in the kitchen, you have variables to keep track of data like numbers, words, or lists of things.

### Create a Variable

A variable in Python is created the moment you decide what you want to put in this jar and label it. Thus, creating a new variable is like putting a label on an empty jar and then deciding what to put inside it. The steps for creating a variable are as follows:

1. **Label your jar** : You decide on a label for your jar. In Python, this is the variable name, like `my_jar`.
2. **Fill Your jar by assigning a value**: You put something into the jar. This could be anything like cookies or sugar. In Python, you might put a number like 10 or a word like "Hello" into your variable.

**Example:**

```python
# Assigning values to variables is like putting things in jars
my_jar = 10        # The jar labeled 'my_jar' has 10 cookies.
```

Just like you wouldn't label every jar in your kitchen "sugar," each variable in Python needs a unique name so you can tell them apart. Below are some rules and tips:
- **Start with a letter or underscore**: Names can't start with a number. So "1jar" is not allowed, but "_jar1" is fine.
- **Make it unique**: Each jar needs its own label. Similarly, each variable name must be unique and can't be the same as another.
- **Case-sensitive**: Just like "SUGAR," "Sugar," and "sugar" might mean different things in your kitchen, variable names in Python are case-sensitive. So `myvar`, `MyVar`, and `MYVAR` are all different.

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
