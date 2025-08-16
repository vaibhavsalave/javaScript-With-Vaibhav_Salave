// JavaScript Data Types and Memory Management - Complete Summary

// =====================================================
// DATA TYPES OVERVIEW
// =====================================================

console.log("=== JAVASCRIPT DATA TYPES OVERVIEW ===");

/*
JavaScript is a dynamically typed language with two main categories of data types:

1. PRIMITIVE TYPES (Call by Value - stored in Stack)
   - String
   - Number
   - Boolean 
   - null
   - undefined
   - Symbol (ES6)
   - BigInt (ES2020)

2. NON-PRIMITIVE/REFERENCE TYPES (Call by Reference - stored in Heap)
   - Object (includes arrays, functions, dates, etc.)
   - Array
   - Function
*/

// =====================================================
// PRIMITIVE DATA TYPES - DETAILED
// =====================================================

console.log("\n=== PRIMITIVE DATA TYPES ===");

// 1. STRING
let userName = "John Doe";
let message = 'Hello World';
let template = `User: ${userName}`;
console.log("String examples:", {userName, message, template});

// 2. NUMBER
let age = 25;
let price = 99.99;
let negative = -42;
let infinity = Infinity;
let notANumber = NaN;
console.log("Number examples:", {age, price, negative, infinity, notANumber});

// 3. BOOLEAN
let isActive = true;
let isCompleted = false;
console.log("Boolean examples:", {isActive, isCompleted});

// 4. NULL (intentional absence of value)
let emptyValue = null;
console.log("Null example:", emptyValue);

// 5. UNDEFINED (variable declared but not assigned)
let notAssigned;
let explicitUndefined = undefined;
console.log("Undefined examples:", {notAssigned, explicitUndefined});

// 6. SYMBOL (unique identifiers)
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log("Symbol examples:", {sym1, sym2});
console.log("Symbols are unique:", sym1 === sym2); // false

// 7. BIGINT (large integers)
let bigNumber = 1234567890123456789012345678901234567890n;
let bigFromConstructor = BigInt("1234567890123456789012345678901234567890");
console.log("BigInt examples:", {bigNumber, bigFromConstructor});

// =====================================================
// TYPEOF OPERATOR RESULTS
// =====================================================

console.log("\n=== TYPEOF OPERATOR RESULTS ===");

const typeofExamples = [
    {value: undefined, type: typeof undefined},
    {value: true, type: typeof true},
    {value: 42, type: typeof 42},
    {value: "hello", type: typeof "hello"},
    {value: 123n, type: typeof 123n},
    {value: Symbol(), type: typeof Symbol()},
    {value: null, type: typeof null}, // Known quirk: returns "object"
    {value: {}, type: typeof {}},
    {value: [], type: typeof []}, // Returns "object"
    {value: function(){}, type: typeof function(){}},
    {value: new Date(), type: typeof new Date()},
    {value: /regex/, type: typeof /regex/}
];

typeofExamples.forEach(({value, type}) => {
    console.log(`typeof ${JSON.stringify(value)} = "${type}"`);
});

// =====================================================
// NON-PRIMITIVE DATA TYPES
// =====================================================

console.log("\n=== NON-PRIMITIVE DATA TYPES ===");

// OBJECTS
const person = {
    name: "Alice",
    age: 30,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

// ARRAYS  
const fruits = ["apple", "banana", "orange"];

// FUNCTIONS
function regularFunction() {
    return "I'm a regular function";
}

const arrowFunction = () => "I'm an arrow function";

// DATES
const currentDate = new Date();

// REGULAR EXPRESSIONS
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log("Non-primitive examples:");
console.log("Person object:", person);
console.log("Fruits array:", fruits);
console.log("Regular function:", regularFunction());
console.log("Arrow function:", arrowFunction());
console.log("Current date:", currentDate);
console.log("Email regex:", emailRegex);

// =====================================================
// MEMORY MANAGEMENT: STACK VS HEAP
// =====================================================

console.log("\n=== MEMORY MANAGEMENT: STACK VS HEAP ===");

// STACK MEMORY (Primitives)
console.log("--- STACK MEMORY (Primitives) ---");

let originalName = "John";
let copyName = originalName; // Creates a copy

copyName = "Jane"; // Changing copy doesn't affect original

console.log("Original name:", originalName); // "John"
console.log("Copy name:", copyName);         // "Jane"

// HEAP MEMORY (Objects/References)
console.log("--- HEAP MEMORY (Objects) ---");

let originalUser = {
    name: "Alice",
    email: "alice@example.com"
};

let referencedUser = originalUser; // Creates a reference, not a copy

referencedUser.name = "Alicia"; // Changing reference affects original

console.log("Original user:", originalUser); // {name: "Alicia", email: "alice@example.com"}
console.log("Referenced user:", referencedUser); // Same object

// Copying objects properly
let copiedUser = {...originalUser}; // Shallow copy
copiedUser.name = "Bob";

console.log("After shallow copy:");
console.log("Original user:", originalUser); // {name: "Alicia", email: "alice@example.com"}
console.log("Copied user:", copiedUser);     // {name: "Bob", email: "alice@example.com"}

// =====================================================
// TYPE CONVERSION AND COERCION
// =====================================================

console.log("\n=== TYPE CONVERSION AND COERCION ===");

// Explicit conversion
console.log("--- Explicit Conversion ---");
console.log("String(123):", String(123));           // "123"
console.log("Number('456'):", Number('456'));       // 456
console.log("Boolean(1):", Boolean(1));             // true

// Implicit coercion
console.log("--- Implicit Coercion ---");
console.log("'5' + 3:", '5' + 3);                   // "53" (string concatenation)
console.log("'5' - 3:", '5' - 3);                   // 2 (numeric subtraction)
console.log("true + 1:", true + 1);                 // 2 (boolean to number)

// Falsy and Truthy values
console.log("--- Falsy Values ---");
const falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(value => {
    console.log(`Boolean(${JSON.stringify(value)}) = ${Boolean(value)}`);
});

console.log("--- Truthy Values ---");
const truthyValues = [true, 1, "hello", [], {}, function(){}];
truthyValues.forEach(value => {
    console.log(`Boolean(${typeof value}) = ${Boolean(value)}`);
});

// =====================================================
// ADVANCED TYPE CHECKING
// =====================================================

console.log("\n=== ADVANCED TYPE CHECKING ===");

function getAccurateType(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'date';
    if (value instanceof RegExp) return 'regexp';
    return typeof value;
}

function isPlainObject(value) {
    return value !== null && 
           typeof value === 'object' && 
           !Array.isArray(value) && 
           value.constructor === Object;
}

function isEmpty(value) {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
}

// Test advanced type checking
const testValues = [
    null,
    undefined,
    42,
    "hello",
    [],
    {},
    new Date(),
    /regex/,
    function(){},
    Symbol('test')
];

console.log("Advanced type checking:");
testValues.forEach(value => {
    console.log(`Value: ${JSON.stringify(value) || value.toString()}`);
    console.log(`  Accurate type: ${getAccurateType(value)}`);
    console.log(`  Is plain object: ${isPlainObject(value)}`);
    console.log(`  Is empty: ${isEmpty(value)}`);
    console.log('---');
});

// =====================================================
// OBJECT CREATION PATTERNS
// =====================================================

console.log("\n=== OBJECT CREATION PATTERNS ===");

// 1. Object Literal
const objLiteral = {
    name: "Literal",
    type: "Object Literal"
};

// 2. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hi, I'm ${this.name}`;
    };
}

const personFromConstructor = new Person("Constructor", 25);

// 3. Object.create()
const prototypeObj = {
    greet: function() {
        return `Hello from ${this.name}`;
    }
};

const objFromCreate = Object.create(prototypeObj);
objFromCreate.name = "Created";

// 4. Class (ES6)
class ModernPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hey, I'm ${this.name}`;
    }
}

const personFromClass = new ModernPerson("Class", 30);

// 5. Factory Function
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            return `Greetings, I'm ${this.name}`;
        }
    };
}

const personFromFactory = createPerson("Factory", 35);

console.log("Object creation patterns:");
console.log("Object literal:", objLiteral);
console.log("Constructor:", personFromConstructor.greet());
console.log("Object.create:", objFromCreate.greet());
console.log("Class:", personFromClass.greet());
console.log("Factory:", personFromFactory.greet());

// =====================================================
// GARBAGE COLLECTION AND MEMORY LEAKS
// =====================================================

console.log("\n=== GARBAGE COLLECTION CONCEPTS ===");

// Memory leak example (avoid this)
function createMemoryLeak() {
    let largeArray = new Array(1000000).fill('data');
    
    return function() {
        // This closure keeps largeArray in memory
        console.log(`Array size: ${largeArray.length}`);
    };
}

// Better approach
function createOptimizedFunction() {
    let largeArray = new Array(1000000).fill('data');
    let arraySize = largeArray.length; // Extract only what you need
    
    largeArray = null; // Allow garbage collection
    
    return function() {
        console.log(`Array size was: ${arraySize}`);
    };
}

console.log("Memory management examples:");
// const leakyFunction = createMemoryLeak(); // Keeps large array in memory
const optimizedFunction = createOptimizedFunction(); // Allows garbage collection
optimizedFunction();

// Circular reference (potential memory leak in older browsers)
function createCircularReference() {
    let objA = {};
    let objB = {};
    
    objA.ref = objB;
    objB.ref = objA;
    
    // In modern browsers, this is handled by garbage collector
    // But it's good practice to break circular references manually
    
    return function cleanup() {
        objA.ref = null;
        objB.ref = null;
    };
}

// =====================================================
// PROTOTYPE CHAIN AND INHERITANCE
// =====================================================

console.log("\n=== PROTOTYPE CHAIN ===");

// Constructor function with prototype
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

Animal.prototype.getInfo = function() {
    return `This is ${this.name}`;
};

// Inheritance
function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override parent method
Dog.prototype.speak = function() {
    return `${this.name} barks!`;
};

// Add specific method
Dog.prototype.getBreed = function() {
    return this.breed;
};

const myDog = new Dog("Buddy", "Golden Retriever");

console.log("Prototype chain example:");
console.log("Dog speaks:", myDog.speak());
console.log("Dog info:", myDog.getInfo()); // Inherited from Animal
console.log("Dog breed:", myDog.getBreed());
console.log("Is instance of Dog:", myDog instanceof Dog);
console.log("Is instance of Animal:", myDog instanceof Animal);

// =====================================================
// MODERN JAVASCRIPT FEATURES
// =====================================================

console.log("\n=== MODERN JAVASCRIPT FEATURES ===");

// Destructuring
const userData = {
    id: 1,
    profile: {
        firstName: "John",
        lastName: "Doe",
        preferences: {
            theme: "dark",
            language: "en"
        }
    }
};

// Object destructuring
const {
    id,
    profile: {
        firstName,
        lastName,
        preferences: { theme }
    }
} = userData;

console.log("Destructured values:", {id, firstName, lastName, theme});

// Spread operator
const originalArray = [1, 2, 3];
const extendedArray = [...originalArray, 4, 5];
const originalObject = {a: 1, b: 2};
const extendedObject = {...originalObject, c: 3};

console.log("Spread examples:");
console.log("Extended array:", extendedArray);
console.log("Extended object:", extendedObject);

// Optional chaining and nullish coalescing
const userWithOptional = {
    name: "Alice",
    address: {
        street: "123 Main St"
    }
};

const userWithoutAddress = {
    name: "Bob"
};

console.log("Optional chaining:");
console.log("User with address:", userWithOptional?.address?.street);
console.log("User without address:", userWithoutAddress?.address?.street ?? "No address");

// =====================================================
// PERFORMANCE CONSIDERATIONS
// =====================================================

console.log("\n=== PERFORMANCE CONSIDERATIONS ===");

// Object property access
const obj = {prop: 'value'};

console.time('Dot notation');
for (let i = 0; i < 1000000; i++) {
    obj.prop;
}
console.timeEnd('Dot notation');

console.time('Bracket notation');
for (let i = 0; i < 1000000; i++) {
    obj['prop'];
}
console.timeEnd('Bracket notation');

// Array vs Object for collections
const arrayCollection = new Array(1000).fill(0).map((_, i) => i);
const objectCollection = {};
for (let i = 0; i < 1000; i++) {
    objectCollection[i] = i;
}

console.time('Array iteration');
arrayCollection.forEach(item => item * 2);
console.timeEnd('Array iteration');

console.time('Object iteration');
Object.values(objectCollection).forEach(item => item * 2);
console.timeEnd('Object iteration');

// =====================================================
// BEST PRACTICES SUMMARY
// =====================================================

console.log("\n=== BEST PRACTICES SUMMARY ===");

const bestPractices = {
    variables: [
        "Use const by default, let when reassignment needed",
        "Avoid var due to hoisting issues",
        "Use descriptive variable names",
        "Initialize variables when declaring"
    ],
    
    typeChecking: [
        "Use typeof for primitives",
        "Use Array.isArray() for arrays",
        "Use instanceof for object types",
        "Use === instead of == for comparisons",
        "Handle null and undefined explicitly"
    ],
    
    objects: [
        "Use object literals for simple objects",
        "Use classes for complex objects with methods",
        "Prefer composition over inheritance",
        "Use Object.freeze() for immutable objects",
        "Be careful with circular references"
    ],
    
    memory: [
        "Avoid global variables when possible",
        "Remove event listeners when not needed",
        "Set large objects to null when done",
        "Use weak references (WeakMap, WeakSet) when appropriate",
        "Avoid closures that capture large objects unnecessarily"
    ],
    
    performance: [
        "Cache object property lookups in loops",
        "Use appropriate data structures (Map vs Object)",
        "Minimize DOM manipulations",
        "Use efficient algorithms for data processing",
        "Profile and measure performance bottlenecks"
    ]
};

Object.entries(bestPractices).forEach(([category, practices]) => {
    console.log(`\n${category.toUpperCase()}:`);
    practices.forEach((practice, index) => {
        console.log(`  ${index + 1}. ${practice}`);
    });
});

// =====================================================
// SUMMARY EXAMPLE: COMPLETE DATA TYPE SYSTEM
// =====================================================

console.log("\n=== COMPLETE DATA TYPE SYSTEM EXAMPLE ===");

class DataTypeHelper {
    static getType(value) {
        if (value === null) return 'null';
        if (Array.isArray(value)) return 'array';
        if (value instanceof Date) return 'date';
        if (value instanceof RegExp) return 'regexp';
        if (value instanceof Map) return 'map';
        if (value instanceof Set) return 'set';
        return typeof value;
    }
    
    static isPrimitive(value) {
        const type = typeof value;
        return type === 'string' || 
               type === 'number' || 
               type === 'boolean' || 
               type === 'undefined' || 
               type === 'symbol' || 
               type === 'bigint' || 
               value === null;
    }
    
    static isReference(value) {
        return !this.isPrimitive(value);
    }
    
    static deepClone(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (obj instanceof Date) return new Date(obj);
        if (obj instanceof Array) return obj.map(item => this.deepClone(item));
        if (typeof obj === 'object') {
            const cloned = {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    cloned[key] = this.deepClone(obj[key]);
                }
            }
            return cloned;
        }
    }
    
    static compare(a, b) {
        if (a === b) return true;
        if (a === null || b === null) return false;
        if (typeof a !== typeof b) return false;
        
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) return false;
            return a.every((item, index) => this.compare(item, b[index]));
        }
        
        if (typeof a === 'object') {
            const keysA = Object.keys(a);
            const keysB = Object.keys(b);
            if (keysA.length !== keysB.length) return false;
            return keysA.every(key => this.compare(a[key], b[key]));
        }
        
        return false;
    }
}

// Test the complete system
const testData = [
    null,
    undefined,
    42,
    "hello",
    true,
    Symbol('test'),
    123n,
    [],
    {},
    new Date(),
    /regex/,
    new Map(),
    new Set()
];

console.log("Complete data type analysis:");
testData.forEach(data => {
    console.log(`Value: ${data}, Type: ${DataTypeHelper.getType(data)}, Primitive: ${DataTypeHelper.isPrimitive(data)}`);
});

// Test deep cloning and comparison
const complexObject = {
    name: "Test",
    nested: {
        array: [1, 2, {deep: true}],
        date: new Date()
    }
};

const cloned = DataTypeHelper.deepClone(complexObject);
console.log("\nDeep clone test:");
console.log("Original:", complexObject);
console.log("Cloned:", cloned);
console.log("Are equal:", DataTypeHelper.compare(complexObject, cloned));
console.log("Are same reference:", complexObject === cloned);
       
       

      


