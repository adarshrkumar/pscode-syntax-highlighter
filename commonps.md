# Common Pseudocode

## General notes

This "language" works like JavaScript, where each new line is treated as a statement with an implicit "semicolon" (which we don't have in Pseudocode) at the end of each line.

Indentation is done Python style, but without the need for the `:` at the end of the parent "statement".

## Code format

### Comments

Single line comment:

```pscode
// This is a single-line comment
x = 5  // This is an inline comment
```

Multi-line comment:

```pscode
/*
This is a multi-line comment
that spans multiple lines
*/
x = 10
```

### Input and Output

Read in a user input to the variable `userInput`:
```input userInput```

Read in a user input to the variable `outputInput` following an output of `Please enter an input`:

```pscode
output "Please enter an output: "
input outputInput
```

"Print" the value in the variable `outputToUser` to the "standard output" (or the equivalent place):
```output outputToUser```

### Data Types

Explicitly declare variable types (optional in most pseudocode):

```pscode
number age = 25
string name = "John"
number price = 19.99
boolean isActive = true
array numbers = [1, 2, 3]
```

Type conversion:

```pscode
stringValue = "123"
numValue = convert stringValue to number  // or number(stringValue)
stringFromNum = convert age to string  // or string(age)
```

### Assignment

Declare a variable without an initial value:
```define variableName```

Assign the variable `newNumber` to the value of `7`:
```newNumber = 7```

Assign the variable `currentNumber` to `newNumber`:
```currentNumber = newNumber```

Example with `define`:

```pscode
define counter
define userName
define isValid

counter = 0
userName = "John"
isValid = true
```

### Constants

Define a constant (value cannot be changed):

```pscode
constant PI = 3.14159
constant MAX_USERS = 100
```

### Strings

`"This is a string"`, `'This is also a string'`, ``` `This yet again, is a string` ```

```pscode
`
This is a multiline string
`
```

```pscode
"""
This is also a multiline string
"""
```

### Booleans

`true` = `True` = `TRUE`, `false` = `False` = `FALSE`
`fAlse`, `fALSE`, `trUe`, and `tRuE` are not booleans.

### Operators

Addition: `1 + 1`
Subtraction: `1 - 1`
Multiplication: `1 * 1`
Division: `1 / 1`

To the power of (exponentiation): `1 ^ 1` or `1 ** 1` or `1 to the power of 1`
Remainder (modulus): `1 % 1` or `1 modulus 1` or `remainder after 1 / 1`

Advanced operator usage:
`num = num + 1` = `num++`
`num = num * age` = `num*=age`
`num = num ^ 1000` = `num^=1000`

```pscode
num = 8
ans = num/3
num = num % 3
``` = ```pscode
num = 8
ans = num/3
num%=3
```

Sine (sin), Cosine (cos), Tangent (tan), Cosecant (csc), Secant (sec), and Cotangent (cot):
`sin of 30`, `cos of 60`, `tan of 20`, `csc of 50`, `sec of 70`, `cot of 40`

Sine inverse (sin^-1), Cosine inverse (cos^-1), Tangent inverse (tan^-1), Cosecant inverse (csc^-1), Secant inverse (sec^-1), and Cotangent inverse (cot^-1):
`sin^-1 of 30`, `cos^-1 of 60`, `tan^-1 of 20`, `csc^-1 of 50`, `sec^-1 of 70`, `cot^-1 of 40` (or `**`) (NOTE: `to the power of` doesn't work here).

Concatination:
`"Hello" " " "World"` results in `"Hello World"`
`num = 10; "Hello the number is {num}"` results in `"Hello the number is 10"`

### Comparison Operators

Equal to: `x equals y` or `x is equal to y` or `x == y`
Not equal to: `x does not equal y` or `x is not equal to y` or `x != y`
Greater than: `x is greater than y` or `x > y`
Less than: `x is less than y` or `x < y`
Greater than or equal to: `x is greater than or equal to y` or `x >= y`
Less than or equal to: `x is less than or equal to y` or `x <= y`

Example:

```pscode
if age >= 18
    output "You are an adult"
else
    output "You are a minor"
```

### Logical Operators

AND: `condition1 AND condition2` or `condition1 and condition2` or `condition1 && condition2`
OR: `condition1 OR condition2` or `condition1 or condition2` or `condition1 || condition2`
NOT: `NOT condition` or `not condition` or `!condition`

Examples:

```pscode
if age >= 18 AND age < 65
    output "You are a working-age adult"

if username == "" OR password == ""
    output "Please fill in all fields"

if NOT isLoggedIn
    output "Please log in first"
```

### Conditional Statements (if, else if, else, switch)

Check if `currentNumber` is equal to `5`, if so print `hi 5`, if not check if it is equal to `7`, if so print `hi 7`, if not print `hi not 5 or 7`:

```pscode
if currentNumber equals 5 // or if currentNumber is equal to 5
    output "hi 5"
else if currentNumber equals 7 // or elif, elseif
    output "hi 7"
else
    output "hi not 5 or 7"
```

Check if `currentNumber` is greater than `5`:

```pscode
if currentNumber is greater than 5
    output "hi 5"
```

Check if `currentNumber` is less than or equal to `7`:

```pscode
if currentNumber is less than or equal to 7
    output "hi 7"
```

Take a user's input for a desired menu option, check for each case, and print out that number (switch):

```pscode
/*
    Output:

    Options:
    1. Book a ticket
    2. Cancel a ticket
    3. View a ticket
    4. View all tickets
    5. Track train
    6. Track all trains
    9. Exit

    Please enter an option:
*/
output "Options: "
output "1. Book a ticket"
output "2. Cancel a ticket"
output "3. View a ticket"
output "4. View all tickets"
output "5. Track train"
output "6. Track all trains"
output "9. Exit"
output ""
output "Please enter an option: "
input userOption

switch userOption
    case 1
        output 1
        jump // or break
    case 2
    output 2
        jump
    case 3
        output 3
        jump
    case 4
        output 4
        jump
    case 5
        output 5
        jump
    case 6
        output 6
        jump
    case 9
        output 9
        exit // or stop, return
    default
        output "not " 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", or " 9
```

### Loops (for, while, loop)

Basic loop:

```pscode
loop from 1 to 10 using i
    output i
    output ""
```

While loop:

```pscode
i = 0
while i is less than or equal to 10
    i = i+1 // or i++
```

For loop:

```pscode
for all the integers between 1 and 10 using i:
    output "Haha " i " love you!"
```

Do-While loop (executes at least once):

```pscode
do
    output "Enter a positive number: "
    input num
while num <= 0
```

Repeat-Until loop (executes until condition is true):

```pscode
repeat
    output "Enter password: "
    input password
until password == "secret"
```

### Loop Control

Break out of the loop early:

```pscode
for i from 1 to 100
    if i == 50
        jump  // or break
    output i
```

Skip to next iteration:

```pscode
for i from 1 to 10
    if i % 2 == 0
        skip  // or continue
    output i  // only outputs odd numbers
```

### Arrays and Lists

Declare an empty array:

```pscode
numbers = []
names = array()
```

Declare an array with initial values:

```pscode
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "orange"]
```

Access array element (0-indexed):

```pscode
firstFruit = fruits[0]  // "apple"
thirdNumber = numbers[2]  // 3
```

Modify array element:

```pscode
fruits[1] = "grape"  // changes "banana" to "grape"
```

Array length:

```pscode
count = length of numbers  // or count = numbers.length
```

Add an element to the end of an array:

```pscode
append 6 to numbers  // or numbers.append(6) or numbers.push(6)
```

Remove element from array:

```pscode
remove element at index `2` from numbers  // or numbers.remove(2)
```

Insert element at specific position:

```pscode
insert "pear" at index `1` in fruits  // or fruits.insert(1, "pear")
```

Check if element exists in array:

```pscode
if "apple" is in fruits
    output "We have apples!"
```

Loop through array:

```pscode
for each fruit in fruits
    output fruit
```

```pscode
for i from 0 to length of numbers - 1
    output numbers[i]
```

Sort array:

```pscode
sort numbers in ascending order  // or numbers.sort()
sort fruits in descending order  // or fruits.sort(descending)
```

### Multi-dimensional Arrays

Declare a 2D array:

```pscode
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

Access 2D array element:

```pscode
value = grid[1][2]  // gets 6 (row 1, column 2)
```

Loop through 2D array:

```pscode
for each row in grid
    for each value in row
        output value
```

### Functions

Basic function definition:

```pscode
function hello takes in nothing
    return "world"
``` or ```pscode
function hello
    return world
```

Simple addition function:

```pscode
function add takes in num1 and num2
    return num1 + num2
```

Function with no return value (procedure):

```pscode
function printGreeting takes in name
    output "Hello, " name "!"
```

Calling a function:

```pscode
result = add(5, 3)  // or result = run add with 5 and 3
output result  // outputs 8

printGreeting("Alice")  // or run printGreeting with "Alice"
```

Alternative function calling syntax:

```pscode
sum = run add with 10 and 20
run printGreeting with "Bob"
```

### Records/Structures

Define a record/structure:

```pscode
record Person
    string name
    number age
    string email
```

Create and use a record:

```pscode
person1 = new Person
person1.name = "Alice"
person1.age = 30
person1.email = "alice@example.com"

output person1.name  // "Alice"
```

Or with initialization:

```pscode
person2 = Person("Bob", 25, "bob@example.com")
```

Array of records:

```pscode
people = [
    Person("Alice", 30, "alice@example.com"),
    Person("Bob", 25, "bob@example.com")
]

for each person in people
    output person.name
```

### Common Built-in Functions

#### Math Functions

```pscode
absolute = abs of -5  // or abs(-5)  // 5
rounded = round 3.7  // or round(3.7)  // 4
roundedDown = floor 3.7  // or floor(3.7)  // 3
roundedUp = ceil 3.2  // or ceil(3.2)  // 4
squareRoot = sqrt of 16  // or sqrt(16)  // 4
maximum = max(5, 10, 3)  // or run max with 5 and 10 and 3  // 10
minimum = min(5, 10, 3)  // or run min with 5 and 10 and 3  // 3
randomNum = random()  // or run random  // random float between 0 and 1
randomInt = random integer from 1 to 10  // random int in range
```

#### String Functions

```pscode
text = "Hello World"
textLength = length of text  // or text.length  // 11
uppercase = text to uppercase  // "HELLO WORLD"
lowercase = text to lowercase  // "hello world"
substring = substring of text from 0 to 5  // "Hello"
trimmed = trim(text)  // removes leading/trailing whitespace
splitWords = split text by " "  // ["Hello", "World"]
joined = join ["Hello", "World"] with " "  // "Hello World"

// Character access
firstChar = text[0]  // "H"

// Find substring
position = find "World" in text  // returns 6
contains = text contains "World"  // returns true
```

#### Type Checking

```pscode
isNum = is number(value)  // or run is number with value
isString = is string(value)  // or run is string with value
isBoolean = is boolean(value)  // or run is boolean with value
isArray = is array(value)  // or run is array with value
```

### Error Handling

Try-catch block:

```pscode
try
    result = 10 / 0
catch error
    output "An error occurred: " error
finally
    output "This always executes"
```

### File Operations (Optional)

Open and read from a file:

```pscode
open file "data.txt" for reading as fileHandle
while not end of fileHandle
    line = read line from fileHandle
    output line
close fileHandle
```

Write to a file:

```pscode
open file "output.txt" for writing as fileHandle
write "Hello, World!" to fileHandle
close fileHandle
```

Append to a file:

```pscode
open file "log.txt" for appending as fileHandle
write "New log entry" to fileHandle
close fileHandle
```

### Common Algorithm Examples

#### Linear Search

```pscode
function linearSearch takes in array and target
    for i from 0 to length of array - 1
        if array[i] equals target
            return i
    return -1  // not found
```

#### Binary Search (on sorted array)

```pscode
function binarySearch takes in array and target
    left = 0
    right = length of array - 1

    while left <= right
        mid = floor((left + right) / 2)

        if array[mid] equals target
            return mid
        else if array[mid] < target
            left = mid + 1
        else
            right = mid - 1

    return -1  // not found
```

#### Bubble Sort

```pscode
function bubbleSort takes in array
    n = length of array

    for i from 0 to n - 1
        for j from 0 to n - i - 2
            if array[j] > array[j + 1]
                // Swap elements
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

    return array
```

#### Find Maximum in Array

```pscode
function findMax takes in array
    if length of array equals 0
        return null

    max = array[0]
    for each value in array
        if value > max
            max = value

    return max
```

### Best Practices

1. Use meaningful variable names: `studentCount` instead of `sc`
2. Keep functions small and focused on one task
3. Comment complex logic
4. Initialize variables before using them
5. Check for edge cases (empty arrays, division by zero, etc.)
6. Use constants for values that don't change
7. Indent code properly to show structure
8. Validate user input before processing
