// JavaScript Basics - Complete Theory with Practical Examples

// =====================================================
// WHAT IS JAVASCRIPT? - FUNDAMENTAL THEORY
// =====================================================

/*
🔥 JAVASCRIPT OVERVIEW:

JavaScript is a:
1. HIGH-LEVEL programming language (automatic memory management)
2. INTERPRETED language (no compilation needed)
3. DYNAMICALLY TYPED language (variable types determined at runtime)
4. PROTOTYPE-BASED language (objects can inherit directly from other objects)
5. MULTI-PARADIGM language (supports procedural, object-oriented, and functional programming)

📍 WHERE JAVASCRIPT RUNS:
- Web Browsers (Client-side)
- Node.js (Server-side)
- Mobile Apps (React Native, Ionic)
- Desktop Apps (Electron)
- IoT devices
*/

console.log("=== JAVASCRIPT FUNDAMENTALS ===");

// =====================================================
// JAVASCRIPT ENGINE AND EXECUTION
// =====================================================

/*
🚀 HOW JAVASCRIPT WORKS:

1. PARSING: Code is converted to Abstract Syntax Tree (AST)
2. COMPILATION: Modern JS engines use Just-In-Time (JIT) compilation
3. EXECUTION: Code runs in the JavaScript Engine

📊 POPULAR JAVASCRIPT ENGINES:
- V8 (Chrome, Node.js)
- SpiderMonkey (Firefox)
- JavaScriptCore (Safari)
- Chakra (Edge - legacy)
*/

// Example: Understanding execution
console.log("1. This runs first");

setTimeout(() => {
    console.log("3. This runs last (asynchronous)");
}, 0);

console.log("2. This runs second");

// =====================================================
// BASIC SYNTAX RULES - THEORY AND PRACTICE
// =====================================================

console.log("\n=== BASIC SYNTAX RULES ===");

/*
📝 JAVASCRIPT SYNTAX RULES:

1. CASE SENSITIVE: 'myVariable' ≠ 'MyVariable'
2. SEMICOLONS: Optional but recommended for clarity
3. COMMENTS: // for single line, /* */ for multi-line
4. IDENTIFIERS: Must start with letter, $, or _ (not numbers)
5. KEYWORDS: Reserved words like 'var', 'let', 'function', etc.
*/

// ✅ Valid identifiers
let myVariable = "valid";
let $specialVar = "valid with $";
let _privateVar = "valid with underscore";
let user123 = "valid with numbers after letters";

// ❌ Invalid identifiers (commented to avoid errors)
// let 123invalid = "cannot start with number";
// let my-variable = "cannot use hyphens";
// let function = "cannot use reserved keywords";

console.log("Valid identifiers:", {myVariable, $specialVar, _privateVar, user123});

// =====================================================
// MEMORY MODEL - THEORY WITH EXAMPLES
// =====================================================

console.log("\n=== MEMORY MODEL EXPLAINED ===");

/*
🧠 JAVASCRIPT MEMORY MODEL:

STACK MEMORY (Fast, Limited):
- Stores primitive values
- Stores references to objects
- Function execution contexts
- Fixed size allocation

HEAP MEMORY (Slower, Large):
- Stores objects and arrays
- Dynamic size allocation
- Garbage collected automatically
*/

// STACK MEMORY EXAMPLE
console.log("--- STACK MEMORY (Primitives) ---");

// Each primitive gets its own memory slot
let number1 = 10;        // Stack: number1 -> 10
let number2 = number1;   // Stack: number2 -> 10 (copy created)
number2 = 20;           // Stack: number2 -> 20 (original unchanged)

console.log("number1:", number1); // 10 (unchanged)
console.log("number2:", number2); // 20 (changed)

// HEAP MEMORY EXAMPLE
console.log("--- HEAP MEMORY (Objects) ---");

// Objects stored in heap, variables hold references
let obj1 = {value: 10};     // Stack: obj1 -> reference to heap object
let obj2 = obj1;            // Stack: obj2 -> same reference (no copy)
obj2.value = 20;            // Modifies the shared object in heap

console.log("obj1.value:", obj1.value); // 20 (changed!)
console.log("obj2.value:", obj2.value); // 20 (same object)

// =====================================================
// JAVASCRIPT DATA TYPES - COMPLETE THEORY
// =====================================================

console.log("\n=== DATA TYPES - COMPLETE THEORY ===");

/*
📊 JAVASCRIPT TYPE SYSTEM:

PRIMITIVE TYPES (Immutable, Stored by Value):
1. Number    - All numbers (integers, floats, special values)
2. String    - Text data in quotes
3. Boolean   - true/false logical values
4. Undefined - Declared but not assigned
5. Null      - Intentional absence of value
6. Symbol    - Unique identifiers (ES6)
7. BigInt    - Large integers (ES2020)

NON-PRIMITIVE TYPES (Mutable, Stored by Reference):
1. Object    - Collections of key-value pairs
2. Array     - Ordered lists of values
3. Function  - Reusable code blocks
*/

// DETAILED TYPE EXAMPLES WITH THEORY
console.log("--- NUMBER TYPE ---");

/*
🔢 NUMBER TYPE THEORY:
- JavaScript has only ONE number type (no int/float distinction)
- Uses IEEE 754 standard (64-bit floating point)
- Range: -(2^53 - 1) to (2^53 - 1) for safe integers
- Special values: Infinity, -Infinity, NaN
*/

let integer = 42;                    // Integer (stored as floating point)
let float = 3.14159;                // Floating point number
let scientific = 2.5e6;             // Scientific notation (2,500,000)
let binary = 0b1010;                // Binary literal (10 in decimal)
let octal = 0o12;                   // Octal literal (10 in decimal)  
let hex = 0xFF;                     // Hexadecimal literal (255 in decimal)
let infinity = 1/0;                 // Infinity
let negInfinity = -1/0;             // -Infinity
let notANumber = 0/0;               // NaN (Not a Number)

console.log("Number examples:", {
    integer, float, scientific, binary, octal, hex, 
    infinity, negInfinity, notANumber
});

console.log("--- STRING TYPE ---");

/*
📝 STRING TYPE THEORY:
- Immutable sequence of characters
- UTF-16 encoding support
- Three ways to create: 'single', "double", `template`
- Template literals support interpolation and multi-line
*/

let singleQuotes = 'Hello World';
let doubleQuotes = "JavaScript is awesome";
let templateLiteral = `Current year: ${new Date().getFullYear()}`;
let multiLine = `This is a
multi-line
string example`;
let emptyString = "";
let stringWithEscape = "Line 1\nLine 2\tTabbed";

console.log("String examples:");
console.log("Single quotes:", singleQuotes);
console.log("Double quotes:", doubleQuotes);
console.log("Template literal:", templateLiteral);
console.log("Multi-line:", multiLine);
console.log("With escapes:", stringWithEscape);

console.log("--- BOOLEAN TYPE ---");

/*
✅ BOOLEAN TYPE THEORY:
- Only two values: true, false
- Result of logical operations
- Used in conditional statements
- Any value can be converted to boolean (truthy/falsy)
*/

let trueValue = true;
let falseValue = false;
let comparisonResult = 5 > 3;        // true
let logicalResult = true && false;   // false

// Truthy/Falsy concept demonstration
let truthyValues = [1, "hello", [], {}, function(){}];
let falsyValues = [0, "", null, undefined, NaN, false];

console.log("Boolean examples:", {trueValue, falseValue, comparisonResult, logicalResult});

console.log("Truthy values:");
truthyValues.forEach(val => console.log(`${val} is ${Boolean(val)}`));

console.log("Falsy values:");
falsyValues.forEach(val => console.log(`${val} is ${Boolean(val)}`));

// =====================================================
// VARIABLE DECLARATION - THEORY AND BEST PRACTICES
// =====================================================

console.log("\n=== VARIABLE DECLARATION THEORY ===");

/*
📦 VARIABLE DECLARATION KEYWORDS:

VAR (Legacy - Avoid):
- Function scoped
- Can be redeclared
- Hoisted and initialized with undefined
- Creates property on global object

LET (Modern - Preferred):
- Block scoped
- Cannot be redeclared in same scope
- Hoisted but not initialized (Temporal Dead Zone)
- Does not create global property

CONST (Modern - Preferred):
- Block scoped
- Cannot be redeclared or reassigned
- Must be initialized at declaration
- For objects/arrays: reference is constant, content can change
*/

// VAR examples (avoid in modern code)
function varExample() {
    console.log("--- VAR BEHAVIOR ---");
    
    // Hoisting demonstration
    console.log("Before declaration:", typeof hoistedVar); // undefined
    var hoistedVar = "I'm hoisted";
    console.log("After declaration:", hoistedVar);
    
    // Function scope (not block scope)
    if (true) {
        var functionScoped = "Available outside block";
    }
    console.log("Outside if block:", functionScoped); // Works!
    
    // Redeclaration allowed
    var redeclared = "First value";
    var redeclared = "Second value"; // No error
    console.log("Redeclared:", redeclared);
}

varExample();

// LET examples (modern preferred)
function letExample() {
    console.log("--- LET BEHAVIOR ---");
    
    // Block scope
    if (true) {
        let blockScoped = "Only available in this block";
        console.log("Inside block:", blockScoped);
    }
    // console.log("Outside block:", blockScoped); // Would throw error
    
    // No redeclaration
    let unique = "First value";
    // let unique = "Second value"; // Would throw error
    unique = "Updated value"; // Reassignment is fine
    console.log("Updated:", unique);
    
    // Temporal Dead Zone
    // console.log("Before declaration:", temporal); // Would throw error
    let temporal = "Now accessible";
    console.log("After declaration:", temporal);
}

letExample();

// CONST examples (modern preferred)
function constExample() {
    console.log("--- CONST BEHAVIOR ---");
    
    // Must initialize
    const PI = 3.14159;
    console.log("Constant value:", PI);
    
    // Cannot reassign
    // PI = 3.14; // Would throw error
    
    // Objects and arrays: reference is constant, content is mutable
    const user = {name: "John", age: 30};
    const colors = ["red", "green", "blue"];
    
    // This works (modifying content)
    user.age = 31;
    user.city = "New York";
    colors.push("yellow");
    
    console.log("Modified object:", user);
    console.log("Modified array:", colors);
    
    // This would throw error (reassigning reference)
    // user = {}; // Error
    // colors = []; // Error
}

constExample();

// =====================================================
// OPERATORS - COMPLETE THEORY AND EXAMPLES
// =====================================================

console.log("\n=== OPERATORS THEORY ===");

/*
🔧 OPERATOR CATEGORIES:

1. ARITHMETIC: +, -, *, /, %, **, ++, --
2. ASSIGNMENT: =, +=, -=, *=, /=, %=, **=
3. COMPARISON: ==, ===, !=, !==, <, >, <=, >=
4. LOGICAL: &&, ||, !, ??, ?.
5. BITWISE: &, |, ^, ~, <<, >>, >>>
6. TYPE: typeof, instanceof, in
7. TERNARY: condition ? true : false
*/

console.log("--- ARITHMETIC OPERATORS ---");

let a = 10, b = 3;

console.log("Basic arithmetic:");
console.log(`${a} + ${b} = ${a + b}`);        // Addition
console.log(`${a} - ${b} = ${a - b}`);        // Subtraction  
console.log(`${a} * ${b} = ${a * b}`);        // Multiplication
console.log(`${a} / ${b} = ${a / b}`);        // Division
console.log(`${a} % ${b} = ${a % b}`);        // Modulus (remainder)
console.log(`${a} ** ${b} = ${a ** b}`);      // Exponentiation

// Increment/Decrement with theory
let counter = 5;
console.log("Increment/Decrement:");
console.log("Original:", counter);              // 5
console.log("Pre-increment:", ++counter);       // 6 (increment first, then return)
console.log("Post-increment:", counter++);      // 6 (return first, then increment)
console.log("After post-increment:", counter);  // 7

console.log("--- COMPARISON OPERATORS ---");

/*
⚖️ COMPARISON THEORY:
== (Loose equality): Performs type coercion
=== (Strict equality): No type coercion
!= (Loose inequality): Performs type coercion  
!== (Strict inequality): No type coercion
*/

console.log("Equality comparisons:");
console.log("5 == '5':", 5 == '5');           // true (type coercion)
console.log("5 === '5':", 5 === '5');         // false (strict comparison)
console.log("null == undefined:", null == undefined);   // true (special case)
console.log("null === undefined:", null === undefined); // false

console.log("--- LOGICAL OPERATORS ---");

/*
🧠 LOGICAL OPERATOR THEORY:
&& (AND): Returns first falsy value or last value
|| (OR): Returns first truthy value or last value
! (NOT): Converts to boolean and negates
?? (Nullish coalescing): Returns right side if left is null/undefined
*/

console.log("Logical operations:");
console.log("true && false:", true && false);         // false
console.log("'hello' && 'world':", 'hello' && 'world'); // 'world'
console.log("false || 'default':", false || 'default'); // 'default'
console.log("null ?? 'fallback':", null ?? 'fallback'); // 'fallback'

// =====================================================
// FUNCTIONS - BASIC THEORY AND PATTERNS
// =====================================================

console.log("\n=== FUNCTION BASICS THEORY ===");

/*
🔄 FUNCTION THEORY:

WHAT IS A FUNCTION?
- Reusable block of code
- Can accept inputs (parameters)
- Can return outputs
- Creates its own execution context
- Can be stored in variables, passed as arguments

FUNCTION DECLARATION vs EXPRESSION:
- Declaration: Hoisted completely
- Expression: Variable hoisted, function not
*/

// Function Declaration (hoisted)
console.log("--- FUNCTION DECLARATIONS ---");

// This works due to hoisting
console.log("Calling hoisted function:", hoistedFunction());

function hoistedFunction() {
    return "I was called before I was defined!";
}

// Basic function with parameters
function greetUser(name, age = 18) {
    // Default parameter
    return `Hello ${name}, you are ${age} years old`;
}

console.log(greetUser("Alice"));
console.log(greetUser("Bob", 25));

// Function Expression (not hoisted)
console.log("--- FUNCTION EXPRESSIONS ---");

// This would throw error if called before definition
const calculateArea = function(length, width) {
    return length * width;
};

console.log("Rectangle area:", calculateArea(5, 3));

// Arrow Functions (ES6)
console.log("--- ARROW FUNCTIONS ---");

/*
🏹 ARROW FUNCTION THEORY:
- Shorter syntax
- No 'this' binding (inherits from parent scope)
- Cannot be used as constructors
- No 'arguments' object
*/

const square = x => x * x;                    // Single parameter, single expression
const add = (a, b) => a + b;                 // Multiple parameters
const complexFunction = (x, y) => {          // Multiple statements
    const sum = x + y;
    return sum * 2;
};

console.log("Arrow function examples:");
console.log("Square of 4:", square(4));
console.log("Add 3 + 7:", add(3, 7));
console.log("Complex function (2, 3):", complexFunction(2, 3));

// =====================================================
// CONTROL FLOW - THEORY AND EXAMPLES
// =====================================================

console.log("\n=== CONTROL FLOW THEORY ===");

/*
🚦 CONTROL FLOW THEORY:

CONDITIONAL STATEMENTS:
- if/else: Execute code based on conditions
- switch: Compare value against multiple cases
- ternary: Shorthand for simple if/else

LOOPS:
- for: Known number of iterations
- while: Unknown number of iterations, condition at start
- do-while: At least one iteration guaranteed
*/

console.log("--- CONDITIONAL STATEMENTS ---");

// if/else with detailed examples
let userAge = 20;
let hasLicense = true;

if (userAge >= 18 && hasLicense) {
    console.log("Can drive a car");
} else if (userAge >= 16) {
    console.log("Can drive with supervision");
} else {
    console.log("Too young to drive");
}

// Switch statement
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Unknown day";
}

console.log("Day name:", dayName);

// Ternary operator
let weather = "sunny";
let activity = weather === "sunny" ? "go to beach" : "stay inside";
console.log("Activity:", activity);

console.log("--- LOOPS ---");

// For loop
console.log("For loop - counting:");
for (let i = 1; i <= 3; i++) {
    console.log(`Iteration ${i}`);
}

// While loop
console.log("While loop - countdown:");
let countdown = 3;
while (countdown > 0) {
    console.log(`Count: ${countdown}`);
    countdown--;
}

// =====================================================
// ARRAYS AND OBJECTS - BASIC THEORY
// =====================================================

console.log("\n=== ARRAYS AND OBJECTS THEORY ===");

/*
📚 ARRAY THEORY:
- Ordered collection of elements
- Zero-indexed (first element at index 0)
- Dynamic size (can grow/shrink)
- Can hold mixed data types
- Reference type (stored in heap)
*/

console.log("--- ARRAY BASICS ---");

// Array creation and manipulation
let fruits = ["apple", "banana", "orange"];
console.log("Original array:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Array length:", fruits.length);

// Adding elements
fruits.push("grape");              // Add to end
fruits.unshift("mango");          // Add to beginning
console.log("After additions:", fruits);

// Removing elements
let lastFruit = fruits.pop();     // Remove from end
let firstFruit = fruits.shift();  // Remove from beginning
console.log("Removed fruits:", {lastFruit, firstFruit});
console.log("Final array:", fruits);

/*
🏗️ OBJECT THEORY:
- Collection of key-value pairs
- Keys are strings (or Symbols)
- Values can be any data type
- Used to model real-world entities
- Reference type (stored in heap)
*/

console.log("--- OBJECT BASICS ---");

// Object creation and manipulation
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isEmployed: true
};

console.log("Person object:", person);
console.log("Person name:", person.name);           // Dot notation
console.log("Person age:", person["age"]);          // Bracket notation

// Adding/modifying properties
person.email = "john@example.com";    // Add new property
person.age = 31;                      // Modify existing
console.log("Updated person:", person);

// =====================================================
// ERROR HANDLING - BASIC THEORY
// =====================================================

console.log("\n=== ERROR HANDLING THEORY ===");

/*
⚠️ ERROR HANDLING THEORY:
- Errors are objects that represent problems
- try/catch blocks handle errors gracefully
- finally block always executes
- throw creates custom errors
*/

// Basic error handling
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        console.log("Error occurred:", error.message);
        return null;
    } finally {
        console.log("Division operation completed");
    }
}

console.log("Division result:", divideNumbers(10, 2));  // Success
console.log("Division result:", divideNumbers(10, 0));  // Error

// =====================================================
// BEST PRACTICES FOR BEGINNERS
// =====================================================

console.log("\n=== BEGINNER BEST PRACTICES ===");

/*
💡 JAVASCRIPT BEST PRACTICES:

1. USE STRICT MODE: "use strict"; at top of file
2. CONSISTENT NAMING: camelCase for variables, PascalCase for constructors
3. DECLARE VARIABLES: Always use let/const, avoid var
4. MEANINGFUL NAMES: Use descriptive variable and function names
5. COMMENT YOUR CODE: Explain complex logic
6. HANDLE ERRORS: Use try/catch for risky operations
7. AVOID GLOBAL VARIABLES: Keep scope as narrow as possible
8. USE === INSTEAD OF ==: Avoid type coercion bugs
*/

// Example of good practices
"use strict";

const MAX_USERS = 100;              // Constant in UPPER_CASE
let currentUserCount = 0;           // Descriptive variable name

function addUser(userName) {        // Clear function name and parameter
    // Input validation
    if (!userName || typeof userName !== 'string') {
        throw new Error('Valid username is required');
    }
    
    // Business logic with error handling
    if (currentUserCount >= MAX_USERS) {
        throw new Error('Maximum user limit reached');
    }
    
    currentUserCount++;
    return {
        message: `User ${userName} added successfully`,
        totalUsers: currentUserCount
    };
}

// Proper error handling in usage
try {
    console.log(addUser("Alice"));
    console.log(addUser("Bob"));
    // console.log(addUser("")); // Would throw error
} catch (error) {
    console.log("User addition failed:", error.message);
}

// =====================================================
// SUMMARY AND NEXT STEPS
// =====================================================

console.log("\n=== LEARNING SUMMARY ===");

/*
🎓 WHAT YOU'VE LEARNED:

CORE CONCEPTS:
✅ How JavaScript works (engine, execution)
✅ Memory model (stack vs heap)
✅ Data types (primitive vs reference)
✅ Variable declarations (var, let, const)
✅ Operators (arithmetic, logical, comparison)
✅ Functions (declarations, expressions, arrows)
✅ Control flow (conditions, loops)
✅ Arrays and objects basics
✅ Error handling
✅ Best practices

NEXT STEPS:
1. Practice with more complex examples
2. Learn advanced array methods (map, filter, reduce)
3. Study object-oriented programming
4. Explore asynchronous JavaScript
5. Learn DOM manipulation
6. Build real projects
*/

console.log("🎉 Congratulations! You've completed JavaScript Basics Theory!");
console.log("🚀 Ready to move on to intermediate concepts!");

// =====================================================
// PRACTICE EXERCISES
// =====================================================

console.log("\n=== PRACTICE EXERCISES ===");

/*
🏋️ PRACTICE CHALLENGES:

Try to solve these on your own:

1. Create a function that calculates compound interest
2. Build a simple calculator with all operations
3. Create an array of objects representing students with grades
4. Write a function to find the highest grade
5. Build a simple to-do list with add/remove functions
*/

// Example solution for compound interest
function calculateCompoundInterest(principal, rate, time, compoundFrequency = 1) {
    const amount = principal * Math.pow((1 + rate / compoundFrequency), compoundFrequency * time);
    const interest = amount - principal;
    
    return {
        principal: principal,
        interest: interest.toFixed(2),
        totalAmount: amount.toFixed(2),
        timeYears: time
    };
}

console.log("Compound Interest Example:");
console.log(calculateCompoundInterest(1000, 0.05, 2)); // $1000 at 5% for 2 years