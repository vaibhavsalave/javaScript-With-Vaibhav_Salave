// Variables Practice - Hands-On Exercises

/*
🎯 PRACTICE OBJECTIVES:
Complete these exercises to master JavaScript variables!

DIFFICULTY LEVELS:
🟢 BEGINNER - Basic concepts
🟡 INTERMEDIATE - Practical applications  
🔴 ADVANCED - Complex scenarios

INSTRUCTIONS:
1. Read each exercise carefully
2. Write your solution below each problem
3. Test your code by running the file
4. Check your answers with the provided solutions
*/

console.log("=== VARIABLES PRACTICE EXERCISES ===\n");

// =====================================================
// 🟢 BEGINNER EXERCISES
// =====================================================

console.log("🟢 BEGINNER LEVEL\n");

/*
EXERCISE 1: Variable Declaration
Create variables for a user profile:
- name (string): "John Doe"
- age (number): 25
- isActive (boolean): true
- email (string): "john@example.com"

Use const for values that won't change, let for values that might change.
*/

console.log("--- Exercise 1: Variable Declaration ---");

// 👉 YOUR SOLUTION HERE:
const name = "John Doe";
let age = 25;
const isActive = true;
const email = "john@example.com";

console.log(`Name: ${name}, Age: ${age}, Active: ${isActive}, Email: ${email}`);

/*
EXERCISE 2: Variable Reassignment
Start with these variables and update them:
- score starts at 0, increase by 10, then by 5
- level starts at 1, increase by 1 each time score changes
- gameOver starts as false, set to true when score > 10
*/

console.log("\n--- Exercise 2: Variable Reassignment ---");

// 👉 YOUR SOLUTION HERE:
let score = 0;
let level = 1;
let gameOver = false;

console.log(`Initial - Score: ${score}, Level: ${level}, Game Over: ${gameOver}`);

score += 10;
level += 1;
console.log(`After +10 - Score: ${score}, Level: ${level}, Game Over: ${gameOver}`);

score += 5;
level += 1;
gameOver = score > 10;
console.log(`After +5 - Score: ${score}, Level: ${level}, Game Over: ${gameOver}`);

/*
EXERCISE 3: Scope Practice
Fix the scope issues in this code:
*/

console.log("\n--- Exercise 3: Scope Practice ---");

function scopeTest() {
    // 👉 YOUR SOLUTION HERE (fix the scope issues):
    let message = "Hello from function scope";
    
    if (true) {
        let blockMessage = "Hello from block scope";
        console.log(message); // Should work
        console.log(blockMessage); // Should work
    }
    
    console.log(message); // Should work
    // console.log(blockMessage); // Should NOT work (commented out)
}

scopeTest();

// =====================================================
// 🟡 INTERMEDIATE EXERCISES
// =====================================================

console.log("\n🟡 INTERMEDIATE LEVEL\n");

/*
EXERCISE 4: Shopping Cart Variables
Create a shopping cart system with variables for:
- items array (empty initially)
- total price (0 initially)
- tax rate (8.5%)
- customer info object

Then simulate adding items and calculating totals.
*/

console.log("--- Exercise 4: Shopping Cart Variables ---");

// 👉 YOUR SOLUTION HERE:
let items = [];
let totalPrice = 0;
const taxRate = 0.085;
const customerInfo = {
    name: "Alice Smith",
    email: "alice@example.com",
    membershipLevel: "Gold"
};

// Simulate adding items
const item1 = { name: "Laptop", price: 999.99, id: 1 };
const item2 = { name: "Mouse", price: 29.99, id: 2 };

items.push(item1, item2);
totalPrice = items.reduce((sum, item) => sum + item.price, 0);
const taxAmount = totalPrice * taxRate;
const finalTotal = totalPrice + taxAmount;

console.log("Shopping Cart:", items);
console.log(`Subtotal: $${totalPrice.toFixed(2)}`);
console.log(`Tax (${taxRate * 100}%): $${taxAmount.toFixed(2)}`);
console.log(`Total: $${finalTotal.toFixed(2)}`);
console.log("Customer:", customerInfo);

/*
EXERCISE 5: Temperature Converter
Create variables and functions to convert between Celsius and Fahrenheit:
- celsius and fahrenheit variables
- conversion formulas
- display results
*/

console.log("\n--- Exercise 5: Temperature Converter ---");

// 👉 YOUR SOLUTION HERE:
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C = ${fahrenheit}°F`);

// Convert back
celsius = (fahrenheit - 32) * 5/9;
console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);

// Test with different values
const temperatures = [0, 32, 100];
temperatures.forEach(temp => {
    const celsiusToFahr = (temp * 9/5) + 32;
    const fahrToCelsius = (temp - 32) * 5/9;
    console.log(`${temp}°C = ${celsiusToFahr}°F | ${temp}°F = ${fahrToCelsius.toFixed(2)}°C`);
});

/*
EXERCISE 6: Counter System
Create a counter with:
- current count
- increment/decrement functions using closures
- min/max limits
- reset functionality
*/

console.log("\n--- Exercise 6: Counter System ---");

// 👉 YOUR SOLUTION HERE:
function createCounter(initialValue = 0, min = -10, max = 10) {
    let count = initialValue;
    
    return {
        get current() {
            return count;
        },
        
        increment() {
            if (count < max) {
                count++;
            }
            return count;
        },
        
        decrement() {
            if (count > min) {
                count--;
            }
            return count;
        },
        
        reset() {
            count = initialValue;
            return count;
        },
        
        getInfo() {
            return {
                current: count,
                min: min,
                max: max,
                canIncrement: count < max,
                canDecrement: count > min
            };
        }
    };
}

const counter = createCounter(5, 0, 15);
console.log("Initial:", counter.getInfo());
console.log("After increment:", counter.increment());
console.log("After decrement:", counter.decrement());
console.log("After reset:", counter.reset());

// =====================================================
// 🔴 ADVANCED EXERCISES
// =====================================================

console.log("\n🔴 ADVANCED LEVEL\n");

/*
EXERCISE 7: Variable Performance Comparison
Compare performance between different variable declaration methods:
- var vs let vs const
- measure creation and access times
*/

console.log("--- Exercise 7: Variable Performance Comparison ---");

// 👉 YOUR SOLUTION HERE:
function measurePerformance(testName, testFunction, iterations = 100000) {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        testFunction();
    }
    const end = performance.now();
    const duration = end - start;
    console.log(`${testName}: ${duration.toFixed(2)}ms`);
    return duration;
}

// Test var declarations
function testVar() {
    var x = 1;
    var y = 2;
    var z = x + y;
}

// Test let declarations  
function testLet() {
    let x = 1;
    let y = 2;
    let z = x + y;
}

// Test const declarations
function testConst() {
    const x = 1;
    const y = 2;
    const z = x + y;
}

console.log("Performance Comparison (100,000 iterations):");
measurePerformance("var declarations", testVar);
measurePerformance("let declarations", testLet);
measurePerformance("const declarations", testConst);

/*
EXERCISE 8: Memory Management Exercise
Create a system to demonstrate memory usage with different variable types:
- track object creation and cleanup
- demonstrate memory leaks and how to avoid them
*/

console.log("\n--- Exercise 8: Memory Management Exercise ---");

// 👉 YOUR SOLUTION HERE:
class MemoryTracker {
    constructor() {
        this.objects = new Map();
        this.createdCount = 0;
        this.cleanedCount = 0;
    }
    
    createObject(id, data) {
        const obj = {
            id: id,
            data: data,
            created: new Date(),
            size: JSON.stringify(data).length
        };
        
        this.objects.set(id, obj);
        this.createdCount++;
        return obj;
    }
    
    cleanupObject(id) {
        if (this.objects.has(id)) {
            this.objects.delete(id);
            this.cleanedCount++;
            return true;
        }
        return false;
    }
    
    getStats() {
        const totalSize = Array.from(this.objects.values())
            .reduce((sum, obj) => sum + obj.size, 0);
            
        return {
            activeObjects: this.objects.size,
            created: this.createdCount,
            cleaned: this.cleanedCount,
            totalSize: totalSize,
            memoryEfficiency: this.cleanedCount / this.createdCount * 100
        };
    }
    
    demonstrateMemoryLeak() {
        // Create objects without cleanup (memory leak)
        for (let i = 0; i < 1000; i++) {
            this.createObject(`leak_${i}`, { value: Math.random() });
        }
    }
    
    demonstrateProperCleanup() {
        // Create and properly cleanup objects
        const ids = [];
        for (let i = 0; i < 1000; i++) {
            const id = `proper_${i}`;
            ids.push(id);
            this.createObject(id, { value: Math.random() });
        }
        
        // Cleanup all created objects
        ids.forEach(id => this.cleanupObject(id));
    }
}

const memTracker = new MemoryTracker();

console.log("Before operations:", memTracker.getStats());

memTracker.demonstrateMemoryLeak();
console.log("After memory leak simulation:", memTracker.getStats());

memTracker.demonstrateProperCleanup();
console.log("After proper cleanup:", memTracker.getStats());

/*
EXERCISE 9: Advanced Scope Challenge
Create a complex scope scenario with nested functions, closures, and hoisting:
*/

console.log("\n--- Exercise 9: Advanced Scope Challenge ---");

// 👉 YOUR SOLUTION HERE:
function complexScopeChallenge() {
    var globalVar = "I'm global to this function";
    let blockVar = "I'm in function scope";
    const constVar = "I'm constant in function scope";
    
    console.log("1. Initial values:");
    console.log(`globalVar: ${globalVar}, blockVar: ${blockVar}, constVar: ${constVar}`);
    
    function innerFunction() {
        var globalVar = "I'm shadowing the outer globalVar";
        let innerBlockVar = "I'm inner block scoped";
        
        console.log("2. Inside inner function:");
        console.log(`globalVar: ${globalVar}, innerBlockVar: ${innerBlockVar}`);
        console.log(`Accessing outer blockVar: ${blockVar}`);
        console.log(`Accessing outer constVar: ${constVar}`);
        
        if (true) {
            let blockVar = "I'm shadowing in block scope";
            const nestedConst = "I'm nested in block";
            
            console.log("3. Inside if block:");
            console.log(`blockVar (shadowed): ${blockVar}`);
            console.log(`nestedConst: ${nestedConst}`);
            console.log(`globalVar: ${globalVar}`);
        }
        
        console.log("4. After if block:");
        console.log(`blockVar (restored): ${blockVar}`);
        console.log(`globalVar: ${globalVar}`);
    }
    
    innerFunction();
    
    console.log("5. Back in main function:");
    console.log(`globalVar: ${globalVar}, blockVar: ${blockVar}, constVar: ${constVar}`);
}

complexScopeChallenge();

// =====================================================
// 💡 BONUS CHALLENGES
// =====================================================

console.log("\n💡 BONUS CHALLENGES\n");

/*
BONUS 1: Variable Validator
Create a system that validates variable names according to JavaScript rules:
*/

console.log("--- Bonus 1: Variable Validator ---");

// 👉 YOUR SOLUTION HERE:
function validateVariableName(name) {
    const rules = {
        startsWithLetter: /^[a-zA-Z_$]/.test(name),
        containsOnlyValid: /^[a-zA-Z0-9_$]*$/.test(name),
        notReserved: !['var', 'let', 'const', 'function', 'class', 'if', 'else', 'for', 'while'].includes(name),
        notEmpty: name.length > 0
    };
    
    const isValid = Object.values(rules).every(rule => rule);
    
    return {
        name: name,
        isValid: isValid,
        rules: rules,
        errors: Object.entries(rules)
            .filter(([key, value]) => !value)
            .map(([key]) => {
                switch(key) {
                    case 'startsWithLetter': return 'Must start with letter, $, or _';
                    case 'containsOnlyValid': return 'Contains invalid characters';
                    case 'notReserved': return 'Cannot use reserved keywords';
                    case 'notEmpty': return 'Cannot be empty';
                    default: return 'Unknown error';
                }
            })
    };
}

const testNames = ['validName', '123invalid', 'var', 'my-var', '_valid', '$valid', ''];
testNames.forEach(name => {
    const result = validateVariableName(name);
    console.log(`"${name}": ${result.isValid ? '✅ Valid' : '❌ Invalid'}`);
    if (!result.isValid) {
        console.log(`  Errors: ${result.errors.join(', ')}`);
    }
});

/*
BONUS 2: Variable Type Guesser
Create a function that analyzes a value and suggests the best variable declaration type:
*/

console.log("\n--- Bonus 2: Variable Type Guesser ---");

// 👉 YOUR SOLUTION HERE:
function suggestVariableType(value, willChange = false, context = 'general') {
    let suggestion = 'let'; // default
    let reason = 'Default choice for variables that might change';
    
    // Check if value will never change
    if (!willChange) {
        if (typeof value === 'object' && value !== null) {
            if (Array.isArray(value)) {
                suggestion = 'const';
                reason = 'Arrays are typically const (reference constant, content mutable)';
            } else {
                suggestion = 'const';
                reason = 'Objects are typically const (reference constant, content mutable)';
            }
        } else if (typeof value === 'function') {
            suggestion = 'const';
            reason = 'Functions should be const to prevent reassignment';
        } else if (context === 'config' || context === 'constant') {
            suggestion = 'const';
            reason = 'Configuration values and constants should use const';
        } else {
            suggestion = 'const';
            reason = 'Primitive values that won\'t change should use const';
        }
    }
    
    // Special cases where let is preferred
    if (willChange) {
        if (context === 'loop') {
            suggestion = 'let';
            reason = 'Loop variables should use let for proper scoping';
        } else if (context === 'condition') {
            suggestion = 'let';
            reason = 'Variables that change based on conditions should use let';
        }
    }
    
    return {
        value: value,
        type: typeof value,
        suggestion: suggestion,
        reason: reason,
        example: `${suggestion} myVariable = ${JSON.stringify(value)};`
    };
}

const testValues = [
    { value: 42, willChange: false, context: 'constant' },
    { value: "Hello", willChange: true, context: 'general' },
    { value: [1, 2, 3], willChange: false, context: 'general' },
    { value: {name: "John"}, willChange: false, context: 'general' },
    { value: 0, willChange: true, context: 'loop' },
    { value: () => {}, willChange: false, context: 'general' }
];

testValues.forEach((test, index) => {
    const result = suggestVariableType(test.value, test.willChange, test.context);
    console.log(`\nTest ${index + 1}:`);
    console.log(`Value: ${JSON.stringify(test.value)} (${result.type})`);
    console.log(`Suggestion: ${result.suggestion}`);
    console.log(`Reason: ${result.reason}`);
    console.log(`Example: ${result.example}`);
});

// =====================================================
// 🎯 PRACTICE COMPLETION
// =====================================================

console.log("\n🎯 VARIABLES PRACTICE COMPLETE!");
console.log("✅ Completed all beginner, intermediate, and advanced exercises");
console.log("✅ Demonstrated proper variable usage patterns");
console.log("✅ Practiced scope, memory management, and performance");
console.log("🚀 Ready for real-world JavaScript development!");