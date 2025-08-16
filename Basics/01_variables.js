// Variables in JavaScript - Complete Guide with Detailed Theory

/*
🔥 VARIABLE THEORY:

WHAT ARE VARIABLES?
- Variables are containers that store data values
- They provide a way to label and store data in memory
- Think of them as named boxes that hold information
- Variables make code readable and maintainable

WHY USE VARIABLES?
1. Store data for later use
2. Make code readable and meaningful
3. Avoid repeating values (DRY principle)
4. Allow dynamic data manipulation
5. Enable program state management
*/

// =====================================================
// VARIABLE DECLARATIONS - DETAILED THEORY
// =====================================================

/*
📦 JAVASCRIPT VARIABLE DECLARATION EVOLUTION:

HISTORY:
- Originally only 'var' existed (ES5 and before)
- 'let' and 'const' introduced in ES6 (2015)
- Modern JavaScript prefers 'let' and 'const'

DECLARATION vs INITIALIZATION:
- Declaration: Creating the variable name
- Initialization: Assigning a value to the variable
*/

// 1. const - Cannot be reassigned (constant)
// THEORY: const creates a constant reference, not constant value
// When we use const, the BINDING cannot be changed
const account_Id = 123456;

// 2. let - Block-scoped, can be reassigned
let account_Email = "vaibhavsalave14@gmail.com";

// 3. var - Function-scoped, can be reassigned (avoid using)
var account_Password = "1234";

// 4. Without declaration keyword (creates global variable - BAD PRACTICE)
account_City = "Ghodegaon"; // This is possible but not recommended

// 5. Declaration without initialization
let account_State; // Value is undefined

console.log("Initial values:");
console.log(account_Id);

// =====================================================
// VARIABLE REASSIGNMENT
// =====================================================

// Trying to change const variable will throw error
// account_Id = 2; // TypeError: Assignment to constant variable

// let variables can be reassigned
account_Email = "vaibhav";
account_Password = "12";
account_City = "pune";

// Display multiple variables in tabular format
console.table([account_Email, account_Password, account_City, account_State]);

// =====================================================
// WHY AVOID VAR? - SCOPE ISSUES
// =====================================================

/*
Problems with var:
1. Function scope instead of block scope
2. Hoisting behavior can cause confusion
3. Can be redeclared in same scope
4. Creates properties on global object
*/

// Example of var scope issue:
function scopeExample() {
    if (true) {
        var varVariable = "I'm var";
        let letVariable = "I'm let";
        const constVariable = "I'm const";
    }
    
    console.log(varVariable); // Works - var is function scoped
    // console.log(letVariable); // Error - let is block scoped
    // console.log(constVariable); // Error - const is block scoped
}

// =====================================================
// HOISTING BEHAVIOR
// =====================================================

/*
Hoisting: Variable declarations are moved to the top of their scope
- var: hoisted and initialized with undefined
- let/const: hoisted but not initialized (Temporal Dead Zone)
*/

console.log("Hoisting examples:");
console.log(hoistedVar); // undefined (not error)
// console.log(hoistedLet); // ReferenceError: Cannot access before initialization

var hoistedVar = "I'm hoisted";
let hoistedLet = "I'm also hoisted but in TDZ";

// =====================================================
// BEST PRACTICES
// =====================================================

/*
1. Use const by default
2. Use let when you need to reassign
3. Never use var
4. Always declare variables before use
5. Use descriptive variable names
6. Initialize variables when possible
*/

// Good examples:
const PI = 3.14159;
let userAge = 25;
let userName = "John Doe";

// Variable naming conventions:
const MAX_USERS = 100; // Constants in UPPER_CASE
let firstName = "John"; // camelCase for variables
let isLoggedIn = true; // Boolean variables often start with 'is', 'has', 'can'

// =====================================================
// TEMPORAL DEAD ZONE (TDZ)
// =====================================================

/*
The time between when a let/const variable is hoisted
and when it's actually declared and initialized
*/

function temporalDeadZoneExample() {
    // TDZ starts here for 'example'
    console.log("Before declaration");
    
    // console.log(example); // ReferenceError: Cannot access 'example' before initialization
    
    let example = "Now I'm accessible"; // TDZ ends here
    console.log(example); // Works fine
}

temporalDeadZoneExample();
 