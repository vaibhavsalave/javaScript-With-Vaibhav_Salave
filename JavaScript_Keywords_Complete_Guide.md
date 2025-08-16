# JavaScript Keywords Complete Guide 📚

## Table of Contents
1. [Variable Declaration Keywords](#variable-declaration-keywords)
2. [Function Keywords](#function-keywords)
3. [Control Flow Keywords](#control-flow-keywords)
4. [Loop Keywords](#loop-keywords)
5. [Object and Class Keywords](#object-and-class-keywords)
6. [Module Keywords](#module-keywords)
7. [Error Handling Keywords](#error-handling-keywords)
8. [Async/Await Keywords](#asyncawait-keywords)
9. [Type Keywords](#type-keywords)
10. [Other Important Keywords](#other-important-keywords)

---

## Variable Declaration Keywords 🔐

### `var` (Legacy - Avoid in Modern Code)
- **Usage**: Function-scoped variable declaration
- **Scope**: Function scope (not block scope)
- **Hoisting**: Yes, initialized with `undefined`
- **Redeclaration**: Allowed
- **Example**:
```javascript
function example() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable!
    }
    console.log(x); // 20
}
```

### `let` (Modern - Preferred)
- **Usage**: Block-scoped variable declaration
- **Scope**: Block scope (if, for, while blocks)
- **Hoisting**: Yes, but not initialized (Temporal Dead Zone)
- **Redeclaration**: Not allowed in same scope
- **Example**:
```javascript
if (true) {
    let x = 10;
    // let x = 20; // Error: Cannot redeclare
}
// console.log(x); // Error: x is not defined
```

### `const` (Modern - Preferred)
- **Usage**: Block-scoped constant declaration
- **Scope**: Block scope
- **Hoisting**: Yes, but not initialized
- **Redeclaration**: Not allowed
- **Reassignment**: Not allowed (but object content can change)
- **Example**:
```javascript
const PI = 3.14159;
// PI = 3.14; // Error: Cannot reassign

const user = {name: "John"};
user.name = "Jane"; // This works (modifying content)
// user = {}; // Error: Cannot reassign reference
```

---

## Function Keywords 🔄

### `function`
- **Usage**: Function declaration
- **Hoisting**: Yes (entire function is hoisted)
- **Example**:
```javascript
// Function declaration
function greet(name) {
    return `Hello ${name}!`;
}

// Function expression
const greetFunc = function(name) {
    return `Hello ${name}!`;
};
```

### `return`
- **Usage**: Exit function and return value
- **Example**:
```javascript
function add(a, b) {
    return a + b; // Function exits here
    console.log("This never runs");
}
```

### `arguments` (Legacy)
- **Usage**: Array-like object containing function arguments
- **Note**: Not available in arrow functions
- **Example**:
```javascript
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
```

---

## Control Flow Keywords 🚦

### `if`, `else`, `else if`
- **Usage**: Conditional execution
- **Example**:
```javascript
if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}
```

### `switch`, `case`, `default`, `break`
- **Usage**: Multiple condition checking
- **Example**:
```javascript
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}
```

### `throw`
- **Usage**: Create and throw custom errors
- **Example**:
```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
```

---

## Loop Keywords 🔁

### `for`
- **Usage**: Known number of iterations
- **Example**:
```javascript
// Traditional for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of loop (ES6)
for (const item of array) {
    console.log(item);
}

// for...in loop (object properties)
for (const key in object) {
    console.log(`${key}: ${object[key]}`);
}
```

### `while`
- **Usage**: Unknown iterations, condition at start
- **Example**:
```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

### `do...while`
- **Usage**: At least one iteration guaranteed
- **Example**:
```javascript
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);
```

### `continue`
- **Usage**: Skip current iteration
- **Example**:
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // Skip 2
    console.log(i); // 0, 1, 3, 4
}
```

### `break`
- **Usage**: Exit loop or switch
- **Example**:
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break; // Exit at 5
    console.log(i); // 0, 1, 2, 3, 4
}
```

---

## Object and Class Keywords 🏗️

### `class`
- **Usage**: Define a class (ES6)
- **Example**:
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}
```

### `constructor`
- **Usage**: Special method for class initialization
- **Example**:
```javascript
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
```

### `extends`
- **Usage**: Create class inheritance
- **Example**:
```javascript
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call parent constructor
        this.grade = grade;
    }
}
```

### `super`
- **Usage**: Call parent class methods/constructor
- **Example**:
```javascript
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // Call parent constructor
        this.subject = subject;
    }
    
    greet() {
        return super.greet() + ` and I teach ${this.subject}`;
    }
}
```

### `new`
- **Usage**: Create instance of class/constructor
- **Example**:
```javascript
const person = new Person("John", 30);
const car = new Car("Toyota", "Camry");
```

### `this`
- **Usage**: Reference to current object/context
- **Example**:
```javascript
const obj = {
    name: "Object",
    greet() {
        console.log(`Hello from ${this.name}`);
    }
};
```

### `static`
- **Usage**: Define class methods that belong to class, not instances
- **Example**:
```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static PI = 3.14159;
}

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.PI); // 3.14159
```

---

## Module Keywords 📦

### `import`
- **Usage**: Import from modules
- **Example**:
```javascript
// Named imports
import { useState, useEffect } from 'react';

// Default import
import React from 'react';

// Namespace import
import * as utils from './utils.js';

// Dynamic import
const module = await import('./dynamic-module.js');
```

### `export`
- **Usage**: Export from modules
- **Example**:
```javascript
// Named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }

// Default export
export default class Calculator {}

// Export list
export { add, subtract, multiply };
```

---

## Error Handling Keywords ⚠️

### `try`, `catch`, `finally`
- **Usage**: Handle errors gracefully
- **Example**:
```javascript
try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error("Error occurred:", error.message);
} finally {
    console.log("This always runs");
}
```

---

## Async/Await Keywords ⏱️

### `async`
- **Usage**: Declare async function
- **Example**:
```javascript
async function fetchData() {
    const response = await fetch('/api/data');
    return response.json();
}
```

### `await`
- **Usage**: Wait for Promise to resolve
- **Example**:
```javascript
async function processUser() {
    try {
        const user = await fetchUser(123);
        const posts = await fetchPosts(user.id);
        return { user, posts };
    } catch (error) {
        console.error("Failed:", error);
    }
}
```

---

## Type Keywords 🔍

### `typeof`
- **Usage**: Check data type
- **Example**:
```javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (bug in JS)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```

### `instanceof`
- **Usage**: Check if object is instance of class
- **Example**:
```javascript
class Animal {}
class Dog extends Animal {}

const dog = new Dog();
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
```

### `in`
- **Usage**: Check if property exists in object
- **Example**:
```javascript
const user = { name: "John", age: 30 };
console.log("name" in user);  // true
console.log("email" in user); // false
```

---

## Other Important Keywords 🔑

### `delete`
- **Usage**: Remove property from object
- **Example**:
```javascript
const user = { name: "John", age: 30 };
delete user.age;
console.log(user); // { name: "John" }
```

### `void`
- **Usage**: Evaluate expression and return undefined
- **Example**:
```javascript
const result = void (2 + 2); // undefined
```

### `yield`
- **Usage**: Pause and resume generator function
- **Example**:
```javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

### `debugger`
- **Usage**: Set breakpoint in code
- **Example**:
```javascript
function processData(data) {
    debugger; // Code execution stops here in dev tools
    return data.map(item => item * 2);
}
```

### `with` (Deprecated)
- **Usage**: Add object to scope chain (avoid using)
- **Example**:
```javascript
// DON'T USE - deprecated and problematic
with (Math) {
    console.log(PI); // Math.PI
    console.log(abs(-5)); // Math.abs(-5)
}
```

---

## Reserved Keywords (Cannot Use as Identifiers) 🚫

These words are reserved and cannot be used as variable names, function names, or identifiers:

```javascript
// Future reserved keywords
await, enum, implements, interface, package, private, protected, public, static, yield

// Strict mode reserved
let, const, eval, arguments

// Other reserved
abstract, boolean, byte, char, class, debugger, double, export, extends, final, float, goto, import, int, long, native, short, super, synchronized, throws, transient, volatile
```

---

## Best Practices 💡

1. **Use `const` by default** - Only use `let` when you need to reassign
2. **Avoid `var`** - Use `let` and `const` instead
3. **Use meaningful names** - Make your code self-documenting
4. **Handle errors** - Always use try/catch for risky operations
5. **Use strict mode** - Add `"use strict";` at the top of your files
6. **Prefer arrow functions** - For simple functions and when you need lexical `this`
7. **Use template literals** - Instead of string concatenation
8. **Handle async properly** - Use async/await instead of callbacks when possible

---

## Summary 📋

JavaScript keywords provide the building blocks for:
- **Variable management** (`let`, `const`, `var`)
- **Function creation** (`function`, `return`)
- **Control flow** (`if`, `switch`, `for`, `while`)
- **Object-oriented programming** (`class`, `extends`, `super`)
- **Error handling** (`try`, `catch`, `finally`)
- **Asynchronous programming** (`async`, `await`)
- **Type checking** (`typeof`, `instanceof`)

Understanding these keywords and their proper usage is essential for writing clean, maintainable JavaScript code!