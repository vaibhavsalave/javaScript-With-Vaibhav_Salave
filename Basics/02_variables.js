// JavaScript Data Types - Complete Guide

// =====================================================
// STRICT MODE
// =====================================================

// "use strict" - Treats all JS code as newer version with stricter syntax
"use strict";

/*
Strict Mode Benefits:
1. Prevents accidental global variables
2. Throws errors for common mistakes
3. Disables features that are confusing or poorly thought out
4. Makes code run faster in some cases
5. Helps catch common coding errors

Note: In Node.js, some features like alert() are not available
In browsers, you can use: alert(3+3);
*/

// Code readability is mandatory - always write clean, readable code

/*
ECMAScript Standard Specification:
- ES5, ES6 (ES2015), ES2016, ES2017, ES2018, ES2019, ES2020, ES2021, ES2022, ES2023
- Defines the standards for JavaScript implementations
*/

// =====================================================
// PRIMITIVE DATA TYPES (7 types)
// =====================================================

/*
Primitive Types - Call by Value (copies the value)
1. String
2. Number  
3. Boolean
4. null
5. undefined
6. Symbol (ES6)
7. BigInt (ES2020)
*/

// 1. STRING
let name = "vaibhav";
let message = 'Hello World';
let template = `My name is ${name}`; // Template literals (ES6)

// 2. NUMBER 
let age = 18;
let price = 99.99;
let negative = -42;
// Range: -(2^53 - 1) to (2^53 - 1)
let maxSafeInteger = Number.MAX_SAFE_INTEGER; // 9007199254740991

// 3. BIGINT (for integers larger than Number.MAX_SAFE_INTEGER)
let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBig = BigInt("1234567890123456789012345678901234567890");

// 4. BOOLEAN
let isLoggedIn = false;
let isActive = true;

// 5. NULL - Intentionally assigned empty value
let data = null; // Represents "no value" or "empty"

// 6. UNDEFINED - Variable declared but not assigned
let notAssigned; // Value is undefined
let explicitUndefined = undefined;

// 7. SYMBOL - Creates unique identifiers (ES6)
let sym1 = Symbol();
let sym2 = Symbol("description");
let sym3 = Symbol("description");
console.log(sym2 === sym3); // false - symbols are always unique

// =====================================================
// CHECKING DATA TYPES WITH typeof
// =====================================================

console.log("=== Data Type Examples ===");
console.log(typeof name);           // "string"
console.log(typeof age);            // "number"
console.log(typeof isLoggedIn);     // "boolean"
console.log(typeof data);           // "object" (this is a known quirk!)
console.log(typeof notAssigned);    // "undefined"
console.log(typeof sym1);           // "symbol"
console.log(typeof bigNumber);      // "bigint"

// =====================================================
// SPECIAL CASES AND QUIRKS
// =====================================================

// typeof null returns "object" - this is a known bug in JavaScript
console.log(typeof null);           // "object" (historical bug)

// typeof undefined returns "undefined"
console.log(typeof undefined);      // "undefined"

// NaN (Not a Number) is of type "number"
let notANumber = NaN;
console.log(typeof notANumber);     // "number"

// Infinity is also of type "number"  
let infinity = Infinity;
console.log(typeof infinity);       // "number"

// =====================================================
// NON-PRIMITIVE (REFERENCE) DATA TYPES
// =====================================================

/*
Non-Primitive Types - Call by Reference (stores reference in memory)
1. Object (includes arrays, functions, dates, etc.)
2. Array
3. Function
*/

// OBJECT
let person = {
    name: "vaibhav",
    age: 22,
    isStudent: true
};

// ARRAY  
const heroes = ["shaktiman", "naagraj", "doga"];

// FUNCTION
const myFunction = function() {
    console.log("hello vaibhav");
};

// Arrow function (ES6)
const arrowFunction = () => {
    console.log("Arrow function");
};

// =====================================================
// typeof RESULTS FOR NON-PRIMITIVES
// =====================================================

console.log("=== Non-Primitive typeof Results ===");
console.log(typeof person);         // "object"
console.log(typeof heroes);         // "object" (arrays are objects)
console.log(typeof myFunction);     // "function"
console.log(typeof arrowFunction);  // "function"

// Other object types
console.log(typeof new Date());     // "object"
console.log(typeof new RegExp());   // "object"
console.log(typeof null);           // "object" (quirk)

// =====================================================
// COMPLETE typeof OPERATOR REFERENCE
// =====================================================

/*
typeof Operator Results:

Value Type                  | typeof Result
---------------------------|---------------
undefined                  | "undefined"
Boolean                    | "boolean"  
Number                     | "number"
String                     | "string"
BigInt                     | "bigint"
Symbol                     | "symbol"
Function                   | "function"
Object (including null)    | "object"
*/

// =====================================================
// TYPE CHECKING BEST PRACTICES
// =====================================================

// Better ways to check types:

// Check for null specifically
function isNull(value) {
    return value === null;
}

// Check for array
function isArray(value) {
    return Array.isArray(value);
}

// Check for object (excluding null and arrays)
function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Check for function
function isFunction(value) {
    return typeof value === "function";
}

// Examples
console.log("=== Type Checking Examples ===");
console.log(isNull(null));          // true
console.log(isArray(heroes));       // true
console.log(isObject(person));      // true
console.log(isFunction(myFunction)); // true

// =====================================================
// JavaScript is Dynamically Typed
// =====================================================

/*
JavaScript is dynamically typed, meaning:
- You don't need to specify variable types
- Variables can hold different types at different times
- Type checking happens at runtime
*/

let dynamicVar = "I'm a string";
console.log(typeof dynamicVar); // "string"

dynamicVar = 42;
console.log(typeof dynamicVar); // "number"

dynamicVar = true;
console.log(typeof dynamicVar); // "boolean"
