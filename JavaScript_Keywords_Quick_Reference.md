# JavaScript Keywords Quick Reference Card 🚀

## Most Common Keywords (Daily Use)

### Variable Declaration
```javascript
const name = "John";        // Constant (preferred)
let age = 25;              // Mutable variable
var oldWay = "avoid";      // Legacy (avoid)
```

### Functions
```javascript
function greet(name) {      // Function declaration
    return `Hello ${name}`;
}

const arrow = (x) => x * 2; // Arrow function
```

### Control Flow
```javascript
if (condition) {            // Conditional
    // code
} else if (other) {
    // code
} else {
    // code
}

switch (value) {            // Multiple conditions
    case 1: break;
    case 2: break;
    default: break;
}
```

### Loops
```javascript
for (let i = 0; i < 5; i++) {     // Traditional for
    console.log(i);
}

for (const item of array) {        // For arrays
    console.log(item);
}

while (condition) {                 // While loop
    // code
}
```

### Classes
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello ${this.name}`;
    }
}

class Student extends Person {      // Inheritance
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
}
```

### Async/Await
```javascript
async function fetchData() {
    try {
        const data = await apiCall();
        return data;
    } catch (error) {
        console.error(error);
    }
}
```

### Error Handling
```javascript
try {
    riskyOperation();
} catch (error) {
    handleError(error);
} finally {
    cleanup();
}
```

## Quick Usage Examples

### Creating Objects
```javascript
const user = {
    name: "John",
    age: 30,
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};
```

### Array Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n));
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

### Template Literals
```javascript
const name = "Alice";
const age = 25;
const message = `Hello ${name}, you are ${age} years old`;
```

### Destructuring
```javascript
const { name, age } = user;
const [first, second, ...rest] = array;
```

### Spread Operator
```javascript
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, newProp: "value" };
```

## Common Patterns

### Default Parameters
```javascript
function greet(name = "Guest") {
    return `Hello ${name}`;
}
```

### Rest Parameters
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}
```

### Arrow Functions with Objects
```javascript
const createUser = (name, age) => ({ name, age });
```

### Conditional (Ternary) Operator
```javascript
const status = age >= 18 ? "adult" : "minor";
```

### Nullish Coalescing
```javascript
const value = input ?? "default";
```

### Optional Chaining
```javascript
const userName = user?.profile?.name;
```

## Best Practices Checklist ✅

- [ ] Use `const` by default
- [ ] Use `let` only when reassignment needed
- [ ] Avoid `var` completely
- [ ] Use meaningful variable names
- [ ] Handle errors with try/catch
- [ ] Use template literals instead of concatenation
- [ ] Prefer arrow functions for simple operations
- [ ] Use async/await over callbacks
- [ ] Always use `===` instead of `==`
- [ ] Use strict mode (`"use strict"`)

## Common Mistakes to Avoid ❌

```javascript
// ❌ Don't do this
var x = 10;
if (x == "10") { }           // Use ===
function() { }                // Missing name
for (i = 0; i < 5; i++) { } // Missing let/const

// ✅ Do this instead
const x = 10;
if (x === "10") { }          // Strict comparison
function myFunction() { }     // Named function
for (let i = 0; i < 5; i++) { } // Proper declaration
```

## Memory Tips 🧠

- **`const`** = Constant (like a final exam - can't change)
- **`let`** = Let it change (like a variable in math)
- **`var`** = Very old (avoid like the plague)
- **`function`** = Function (like a machine that does work)
- **`class`** = Class (like a blueprint for objects)
- **`async`** = Asynchronous (like ordering food - you wait)
- **`await`** = Wait (like waiting for your food to be ready)

---

**Remember**: JavaScript keywords are like building blocks - learn them well and you can build anything! 🏗️