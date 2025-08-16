// ES6+ Modern JavaScript Features - Complete Guide

// =====================================================
// LET AND CONST (ES6)
// =====================================================

console.log("=== LET AND CONST ===");

// Block scoping
if (true) {
    let blockScoped = "I'm block scoped";
    const alsoBlockScoped = "Me too";
    var functionScoped = "I'm function scoped";
}

// console.log(blockScoped); // ReferenceError
// console.log(alsoBlockScoped); // ReferenceError
console.log("functionScoped:", functionScoped); // Works

// Const must be initialized
// const uninitialized; // SyntaxError

// Const doesn't mean immutable for objects/arrays
const obj = { name: "John" };
obj.name = "Jane"; // This works
obj.age = 25; // This works too
console.log("Modified const object:", obj);

// =====================================================
// ARROW FUNCTIONS (ES6)
// =====================================================

console.log("\n=== ARROW FUNCTIONS ===");

// Traditional function
function traditional(x) {
    return x * 2;
}

// Arrow function
const arrow = x => x * 2;

console.log("Traditional:", traditional(5));
console.log("Arrow:", arrow(5));

// Multiple parameters
const add = (a, b) => a + b;
console.log("Add:", add(3, 4));

// No parameters
const greet = () => "Hello World!";
console.log("Greet:", greet());

// Block body
const complexArrow = (x, y) => {
    const result = x * y;
    return result + 10;
};
console.log("Complex arrow:", complexArrow(3, 4));

// Arrow functions and 'this'
const obj2 = {
    name: "Arrow Example",
    regularMethod: function() {
        console.log("Regular method this:", this.name);
        
        // Arrow function inherits 'this' from enclosing scope
        const arrowInside = () => {
            console.log("Arrow inside this:", this.name);
        };
        arrowInside();
    },
    
    arrowMethod: () => {
        // 'this' is not the object, but the global scope
        console.log("Arrow method this:", this.name); // undefined
    }
};

obj2.regularMethod();
obj2.arrowMethod();

// =====================================================
// TEMPLATE LITERALS (ES6)
// =====================================================

console.log("\n=== TEMPLATE LITERALS ===");

const name = "Alice";
const age = 25;

// String interpolation
const message = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log("Template literal:", message);

// Multi-line strings
const multiLine = `
    This is a
    multi-line string
    without concatenation
`;
console.log("Multi-line:", multiLine);

// Expression evaluation
const calculation = `The result is ${10 + 5 * 2}`;
console.log("Expression:", calculation);

// Tagged template literals
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<strong>${values[i]}</strong>` : '';
        return result + string + value;
    }, '');
}

const highlighted = highlight`Hello ${name}, you are ${age} years old!`;
console.log("Tagged template:", highlighted);

// =====================================================
// DESTRUCTURING (ES6)
// =====================================================

console.log("\n=== DESTRUCTURING ===");

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log("Array destructuring:", {first, second, rest});

// Skipping elements
const [a, , c] = numbers;
console.log("Skipping elements:", {a, c});

// Default values
const [x, y, z = 10] = [1, 2];
console.log("Default values:", {x, y, z});

// Object destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

const {name: personName, age: personAge} = person;
console.log("Object destructuring with rename:", {personName, personAge});

// Nested destructuring
const user = {
    id: 1,
    profile: {
        name: "Alice",
        settings: {
            theme: "dark",
            notifications: true
        }
    }
};

const {
    profile: {
        name: userName,
        settings: {theme}
    }
} = user;

console.log("Nested destructuring:", {userName, theme});

// Function parameter destructuring
function processUser({name, age, city = "Unknown"}) {
    console.log(`Processing user: ${name}, ${age}, ${city}`);
}

processUser({name: "Bob", age: 25});

// =====================================================
// SPREAD AND REST OPERATORS (ES6)
// =====================================================

console.log("\n=== SPREAD AND REST OPERATORS ===");

// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Array spread:", combined);

// Spread with objects
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const merged = {...obj1, ...obj2};
console.log("Object spread:", merged);

// Overriding properties
const original = {name: "John", age: 30};
const updated = {...original, age: 31, city: "Boston"};
console.log("Property override:", updated);

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Rest parameters:", sum(1, 2, 3, 4, 5));

// Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log("Rest in destructuring:", {head, tail});

// =====================================================
// DEFAULT PARAMETERS (ES6)
// =====================================================

console.log("\n=== DEFAULT PARAMETERS ===");

function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log("Default params 1:", greetUser());
console.log("Default params 2:", greetUser("Alice"));
console.log("Default params 3:", greetUser("Bob", "Hi"));

// Default with expressions
function createUser(name, id = Math.random().toString(36)) {
    return {name, id};
}

console.log("Default expression:", createUser("Alice"));

// =====================================================
// ENHANCED OBJECT LITERALS (ES6)
// =====================================================

console.log("\n=== ENHANCED OBJECT LITERALS ===");

const firstName = "John";
const lastName = "Doe";

// Property shorthand
const personShorthand = {
    firstName,
    lastName,
    fullName() { // Method shorthand
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log("Enhanced object:", personShorthand);
console.log("Method call:", personShorthand.fullName());

// Computed property names
const prop = "dynamicProperty";
const value = "dynamicValue";

const dynamicObj = {
    [prop]: value,
    [`${prop}Modified`]: value + " modified"
};

console.log("Computed properties:", dynamicObj);

// =====================================================
// CLASSES (ES6)
// =====================================================

console.log("\n=== CLASSES ===");

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
    
    // Static method
    static createDog(name) {
        return new Animal(name, "Dog");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks!`;
    }
    
    getBeed() {
        return this.breed;
    }
}

const genericAnimal = new Animal("Buddy", "Unknown");
const dog = new Dog("Max", "Golden Retriever");
const staticDog = Animal.createDog("Rex");

console.log("Generic animal:", genericAnimal.speak());
console.log("Dog:", dog.speak());
console.log("Dog breed:", dog.getBeed());
console.log("Static dog:", staticDog.speak());

// =====================================================
// MODULES (ES6) - Simulated
// =====================================================

console.log("\n=== MODULES (SIMULATED) ===");

// In a real module system, you would have separate files
// Here we simulate with objects

// math.js (simulated)
const MathModule = {
    PI: 3.14159,
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
    default: function calculator(operation, a, b) {
        switch (operation) {
            case 'add': return this.add(a, b);
            case 'multiply': return this.multiply(a, b);
            default: return null;
        }
    }
};

// Usage (simulated import)
const {add, multiply, PI} = MathModule;
const calculator = MathModule.default;

console.log("Module usage:", add(5, 3));
console.log("Module PI:", PI);
console.log("Default export:", calculator('multiply', 4, 5));

// =====================================================
// PROMISES (ES6)
// =====================================================

console.log("\n=== PROMISES ===");

// Creating a promise
function asyncOperation(shouldSucceed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Operation successful!");
            } else {
                reject(new Error("Operation failed!"));
            }
        }, 100);
    });
}

// Using promises
asyncOperation(true)
    .then(result => {
        console.log("Promise resolved:", result);
        return "Next step";
    })
    .then(result => {
        console.log("Chained then:", result);
    })
    .catch(error => {
        console.log("Promise rejected:", error.message);
    });

// Promise.all
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log("Promise.all:", values);
    });

// =====================================================
// ASYNC/AWAIT (ES2017)
// =====================================================

console.log("\n=== ASYNC/AWAIT ===");

async function asyncFunction() {
    try {
        console.log("Starting async operation...");
        
        const result1 = await asyncOperation(true);
        console.log("First result:", result1);
        
        const result2 = await asyncOperation(true);
        console.log("Second result:", result2);
        
        return "All operations completed";
    } catch (error) {
        console.log("Async error:", error.message);
    }
}

asyncFunction().then(result => {
    console.log("Async function result:", result);
});

// =====================================================
// SYMBOLS (ES6)
// =====================================================

console.log("\n=== SYMBOLS ===");

// Creating symbols
const sym1 = Symbol();
const sym2 = Symbol("description");
const sym3 = Symbol("description");

console.log("Symbols are unique:", sym2 === sym3); // false

// Symbols as object keys
const uniqueKey = Symbol("uniqueKey");
const symbolObj = {
    [uniqueKey]: "This is a symbol property",
    regularProperty: "This is regular"
};

console.log("Symbol property:", symbolObj[uniqueKey]);
console.log("Object keys:", Object.keys(symbolObj)); // Only regular properties
console.log("Object symbols:", Object.getOwnPropertySymbols(symbolObj));

// Global symbols
const globalSym1 = Symbol.for("global");
const globalSym2 = Symbol.for("global");
console.log("Global symbols are equal:", globalSym1 === globalSym2); // true

// =====================================================
// ITERATORS AND GENERATORS (ES6)
// =====================================================

console.log("\n=== ITERATORS AND GENERATORS ===");

// Generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return "Done";
}

const gen = numberGenerator();
console.log("Generator next 1:", gen.next());
console.log("Generator next 2:", gen.next());
console.log("Generator next 3:", gen.next());
console.log("Generator next 4:", gen.next());

// Generator with loop
function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacciGenerator();
console.log("Fibonacci sequence:");
for (let i = 0; i < 5; i++) {
    console.log(fib.next().value);
}

// =====================================================
// MAP AND SET (ES6)
// =====================================================

console.log("\n=== MAP AND SET ===");

// Map
const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set(1, "number key");

console.log("Map size:", map.size);
console.log("Map get name:", map.get("name"));
console.log("Map has age:", map.has("age"));

// Iterating over map
console.log("Map entries:");
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Set
const set = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("Set (unique values):", set);
console.log("Set size:", set.size);

set.add(6);
set.delete(1);
console.log("Modified set:", set);

// =====================================================
// OPTIONAL CHAINING (ES2020)
// =====================================================

console.log("\n=== OPTIONAL CHAINING ===");

const userOptional = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Boston"
    }
};

const userIncomplete = {
    name: "Bob"
};

// Safe property access
console.log("Complete user city:", userOptional?.address?.city);
console.log("Incomplete user city:", userIncomplete?.address?.city);

// Safe method calling
const userWithMethod = {
    getName: () => "Charlie"
};

console.log("Method exists:", userWithMethod?.getName?.());
console.log("Method doesn't exist:", userIncomplete?.getName?.());

// =====================================================
// NULLISH COALESCING (ES2020)
// =====================================================

console.log("\n=== NULLISH COALESCING ===");

const nullValue = null;
const undefinedValue = undefined;
const emptyString = "";
const zero = 0;
const falseValue = false;

// ?? only checks for null/undefined
console.log("null ?? 'default':", nullValue ?? "default");
console.log("undefined ?? 'default':", undefinedValue ?? "default");
console.log("'' ?? 'default':", emptyString ?? "default"); // Returns empty string
console.log("0 ?? 'default':", zero ?? "default"); // Returns 0
console.log("false ?? 'default':", falseValue ?? "default"); // Returns false

// Compare with ||
console.log("'' || 'default':", emptyString || "default");
console.log("0 || 'default':", zero || "default");

// =====================================================
// PRIVATE FIELDS (ES2022)
// =====================================================

console.log("\n=== PRIVATE FIELDS ===");

class Counter {
    #count = 0; // Private field
    
    increment() {
        this.#count++;
    }
    
    decrement() {
        this.#count--;
    }
    
    getValue() {
        return this.#count;
    }
    
    // Private method
    #reset() {
        this.#count = 0;
    }
    
    resetPublic() {
        this.#reset();
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log("Counter value:", counter.getValue());

// console.log(counter.#count); // SyntaxError: Private field '#count' must be declared in an enclosing class

// =====================================================
// PRACTICAL MODERN JAVASCRIPT EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: API fetch with async/await
async function fetchUserData(userId) {
    try {
        // Simulated API call
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    id: userId,
                    name: "John Doe",
                    email: "john@example.com"
                });
            }, 100);
        });
        
        return response;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;
    }
}

fetchUserData(123).then(user => {
    console.log("Fetched user:", user);
});

// Example 2: Modern object manipulation
class UserManager {
    #users = new Map();
    
    addUser(user) {
        const {id, ...userData} = user;
        this.#users.set(id, userData);
    }
    
    getUser(id) {
        return this.#users.get(id);
    }
    
    updateUser(id, updates) {
        const existingUser = this.#users.get(id);
        if (existingUser) {
            this.#users.set(id, {...existingUser, ...updates});
        }
    }
    
    getAllUsers() {
        return Array.from(this.#users.entries()).map(([id, user]) => ({id, ...user}));
    }
}

const userManager = new UserManager();
userManager.addUser({id: 1, name: "Alice", email: "alice@example.com"});
userManager.addUser({id: 2, name: "Bob", email: "bob@example.com"});
userManager.updateUser(1, {name: "Alice Johnson"});

console.log("All users:", userManager.getAllUsers());

// Example 3: Functional programming with modern features
const numbers2 = [1, 2, 3, 4, 5];

const result = numbers2
    .map(n => n * 2)
    .filter(n => n > 4)
    .reduce((sum, n) => sum + n, 0);

console.log("Functional chain result:", result);

// Array methods with destructuring
const users = [
    {name: "Alice", age: 25, active: true},
    {name: "Bob", age: 30, active: false},
    {name: "Charlie", age: 35, active: true}
];

const activeUsers = users
    .filter(({active}) => active)
    .map(({name, age}) => ({name, age}));

console.log("Active users:", activeUsers);