// JavaScript Scope and Closures - Complete Guide

// =====================================================
// GLOBAL SCOPE
// =====================================================

console.log("=== GLOBAL SCOPE ===");

// Variables declared outside any function have global scope
var globalVar = "I'm global with var";
let globalLet = "I'm global with let";
const globalConst = "I'm global with const";

// Undeclared variables become global (avoid this!)
function createGlobalAccidentally() {
    // Without var, let, or const - becomes global
    accidentalGlobal = "Oops, I'm global!";
}

createGlobalAccidentally();
console.log("Accidental global:", accidentalGlobal);

// Global variables are properties of the global object
console.log("globalVar in global object:", 'globalVar' in globalThis);
console.log("globalLet in global object:", 'globalLet' in globalThis); // false with let/const

// Function to demonstrate global access
function accessGlobals() {
    console.log("Accessing globals from function:");
    console.log("globalVar:", globalVar);
    console.log("globalLet:", globalLet);
    console.log("globalConst:", globalConst);
}

accessGlobals();

// =====================================================
// FUNCTION SCOPE
// =====================================================

console.log("\n=== FUNCTION SCOPE ===");

function functionScopeExample() {
    var functionVar = "I'm function scoped";
    let functionLet = "I'm also function scoped";
    const functionConst = "Me too, function scoped";
    
    console.log("Inside function:");
    console.log("functionVar:", functionVar);
    console.log("functionLet:", functionLet);
    console.log("functionConst:", functionConst);
    
    // Inner function can access outer function's variables
    function innerFunction() {
        console.log("Inner function accessing outer variables:");
        console.log("functionVar from inner:", functionVar);
        console.log("functionLet from inner:", functionLet);
    }
    
    innerFunction();
}

functionScopeExample();

// Try to access function-scoped variables from outside
try {
    console.log(functionVar); // This will throw an error
} catch (error) {
    console.log("Error accessing function variable:", error.message);
}

// Var hoisting in functions
function hoistingExample() {
    console.log("Before declaration:", typeof hoistedVar); // undefined, not error
    
    var hoistedVar = "I'm hoisted";
    
    console.log("After declaration:", hoistedVar);
}

hoistingExample();

// =====================================================
// BLOCK SCOPE (ES6)
// =====================================================

console.log("\n=== BLOCK SCOPE ===");

function blockScopeExample() {
    console.log("Function start");
    
    if (true) {
        var blockVar = "var is not block scoped";
        let blockLet = "let is block scoped";
        const blockConst = "const is block scoped";
        
        console.log("Inside block:");
        console.log("blockVar:", blockVar);
        console.log("blockLet:", blockLet);
        console.log("blockConst:", blockConst);
    }
    
    console.log("Outside block:");
    console.log("blockVar:", blockVar); // Accessible (var is function scoped)
    
    try {
        console.log("blockLet:", blockLet); // Error - block scoped
    } catch (error) {
        console.log("blockLet error:", error.message);
    }
    
    try {
        console.log("blockConst:", blockConst); // Error - block scoped
    } catch (error) {
        console.log("blockConst error:", error.message);
    }
}

blockScopeExample();

// For loop scope
console.log("\nFor loop scope:");

// Problem with var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i:", i), 10); // All print 3
}

// Solution with let
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 20); // Prints 0, 1, 2
}

// =====================================================
// LEXICAL SCOPE
// =====================================================

console.log("\n=== LEXICAL SCOPE ===");

function outerFunction() {
    let outerVariable = "I'm in outer function";
    
    function innerFunction() {
        let innerVariable = "I'm in inner function";
        
        // Inner function has access to outer function's variables
        console.log("From inner function:");
        console.log("outerVariable:", outerVariable);
        console.log("innerVariable:", innerVariable);
        
        function deeplyNestedFunction() {
            let deepVariable = "I'm deeply nested";
            
            // Has access to all outer scopes
            console.log("From deeply nested function:");
            console.log("outerVariable:", outerVariable);
            console.log("innerVariable:", innerVariable);
            console.log("deepVariable:", deepVariable);
        }
        
        return deeplyNestedFunction;
    }
    
    return innerFunction;
}

let myInnerFunction = outerFunction();
let myDeeplyNested = myInnerFunction();
myDeeplyNested();

// =====================================================
// CLOSURES
// =====================================================

console.log("\n=== CLOSURES ===");

// Basic closure
function createClosure() {
    let privateVariable = "I'm private";
    let counter = 0;
    
    return function() {
        counter++;
        console.log(`${privateVariable} - Called ${counter} times`);
        return counter;
    };
}

let myClosure = createClosure();
myClosure(); // Called 1 times
myClosure(); // Called 2 times
myClosure(); // Called 3 times

// Multiple closures share the same scope
function createMultipleClosures() {
    let sharedVariable = 0;
    
    return {
        increment: function() {
            sharedVariable++;
            console.log("Incremented to:", sharedVariable);
        },
        decrement: function() {
            sharedVariable--;
            console.log("Decremented to:", sharedVariable);
        },
        getValue: function() {
            return sharedVariable;
        }
    };
}

let counter = createMultipleClosures();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log("Current value:", counter.getValue()); // 1

// Closure with parameters
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15

// =====================================================
// PRACTICAL CLOSURE EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL CLOSURE EXAMPLES ===");

// Example 1: Module pattern
const Calculator = (function() {
    let result = 0;
    
    return {
        add: function(x) {
            result += x;
            return this;
        },
        subtract: function(x) {
            result -= x;
            return this;
        },
        multiply: function(x) {
            result *= x;
            return this;
        },
        divide: function(x) {
            if (x !== 0) {
                result /= x;
            }
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

// Method chaining with closures
let calculationResult = Calculator
    .add(10)
    .multiply(2)
    .subtract(5)
    .getResult();

console.log("Calculator result:", calculationResult); // 15

// Example 2: Private variables and methods
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    let transactionHistory = [];
    
    function addTransaction(type, amount) {
        transactionHistory.push({
            type: type,
            amount: amount,
            date: new Date(),
            balance: balance
        });
    }
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                addTransaction('deposit', amount);
                console.log(`Deposited $${amount}. New balance: $${balance}`);
            }
            return this;
        },
        
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                addTransaction('withdrawal', amount);
                console.log(`Withdrew $${amount}. New balance: $${balance}`);
            } else {
                console.log("Invalid withdrawal amount");
            }
            return this;
        },
        
        getBalance: function() {
            return balance;
        },
        
        getHistory: function() {
            return [...transactionHistory]; // Return copy to prevent modification
        }
    };
}

let account = createBankAccount(100);
account.deposit(50).withdraw(30);
console.log("Account balance:", account.getBalance());
console.log("Transaction history:", account.getHistory());

// Example 3: Function factory with closures
function createValidator(type) {
    const validationRules = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    };
    
    const regex = validationRules[type];
    
    return function(value) {
        if (!regex) {
            return { valid: false, error: "Unknown validation type" };
        }
        
        const valid = regex.test(value);
        return {
            valid: valid,
            error: valid ? null : `Invalid ${type} format`
        };
    };
}

let emailValidator = createValidator('email');
let phoneValidator = createValidator('phone');

console.log("Email validation:", emailValidator("test@example.com"));
console.log("Phone validation:", phoneValidator("123-456-7890"));

// =====================================================
// SCOPE CHAIN
// =====================================================

console.log("\n=== SCOPE CHAIN ===");

let globalScopeVar = "Global";

function level1() {
    let level1Var = "Level 1";
    
    function level2() {
        let level2Var = "Level 2";
        
        function level3() {
            let level3Var = "Level 3";
            
            // Scope chain: level3 -> level2 -> level1 -> global
            console.log("Scope chain access:");
            console.log("level3Var:", level3Var);     // Own scope
            console.log("level2Var:", level2Var);     // Parent scope
            console.log("level1Var:", level1Var);     // Grandparent scope
            console.log("globalScopeVar:", globalScopeVar); // Global scope
        }
        
        return level3;
    }
    
    return level2;
}

let nestedFunction = level1()();
nestedFunction();

// =====================================================
// TEMPORAL DEAD ZONE
// =====================================================

console.log("\n=== TEMPORAL DEAD ZONE ===");

function temporalDeadZoneExample() {
    console.log("Before let declaration");
    
    // Accessing 'x' here would throw ReferenceError
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    
    let x = 10;
    console.log("After let declaration:", x);
    
    // Same applies to const
    // console.log(y); // ReferenceError
    const y = 20;
    console.log("Const variable:", y);
}

temporalDeadZoneExample();

// =====================================================
// CLOSURE COMMON PITFALLS
// =====================================================

console.log("\n=== CLOSURE PITFALLS ===");

// Pitfall 1: Loop with var
console.log("Pitfall 1 - Loop with var:");
var functions = [];

for (var i = 0; i < 3; i++) {
    functions[i] = function() {
        console.log("var i:", i); // All will print 3
    };
}

functions[0](); // 3
functions[1](); // 3
functions[2](); // 3

// Solution 1: Use let
console.log("Solution 1 - Use let:");
var functionsLet = [];

for (let i = 0; i < 3; i++) {
    functionsLet[i] = function() {
        console.log("let i:", i); // Will print 0, 1, 2
    };
}

functionsLet[0](); // 0
functionsLet[1](); // 1
functionsLet[2](); // 2

// Solution 2: IIFE
console.log("Solution 2 - IIFE:");
var functionsIIFE = [];

for (var i = 0; i < 3; i++) {
    functionsIIFE[i] = (function(index) {
        return function() {
            console.log("IIFE index:", index);
        };
    })(i);
}

functionsIIFE[0](); // 0
functionsIIFE[1](); // 1
functionsIIFE[2](); // 2

// =====================================================
// MEMORY AND PERFORMANCE CONSIDERATIONS
// =====================================================

console.log("\n=== MEMORY CONSIDERATIONS ===");

// Memory leak example (avoid this)
function createMemoryLeak() {
    let largeData = new Array(1000000).fill('data');
    
    return function() {
        // This function keeps a reference to largeData
        console.log("Function called, large data size:", largeData.length);
    };
}

// The largeData array won't be garbage collected as long as the returned function exists
let leakyFunction = createMemoryLeak();

// Better approach - only keep what you need
function createOptimizedClosure() {
    let largeData = new Array(1000000).fill('data');
    let dataSize = largeData.length; // Extract only what you need
    
    // largeData can now be garbage collected
    largeData = null;
    
    return function() {
        console.log("Function called, data size was:", dataSize);
    };
}

let optimizedFunction = createOptimizedClosure();
optimizedFunction();

// =====================================================
// ADVANCED CLOSURE PATTERNS
// =====================================================

console.log("\n=== ADVANCED CLOSURE PATTERNS ===");

// Memoization using closures
function memoize(fn) {
    let cache = {};
    
    return function(...args) {
        let key = JSON.stringify(args);
        
        if (key in cache) {
            console.log("Cache hit for:", args);
            return cache[key];
        }
        
        console.log("Computing for:", args);
        let result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Expensive function to memoize
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let memoizedFib = memoize(fibonacci);

console.log("First call - Fib(10):", memoizedFib(10));
console.log("Second call - Fib(10):", memoizedFib(10)); // Cache hit

// Partial application using closures
function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn.apply(this, [...fixedArgs, ...remainingArgs]);
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

let multiplyBy2 = partial(multiply, 2);
let multiplyBy2And3 = partial(multiply, 2, 3);

console.log("Partial application:");
console.log("multiplyBy2(5, 6):", multiplyBy2(5, 6)); // 2 * 5 * 6 = 60
console.log("multiplyBy2And3(4):", multiplyBy2And3(4)); // 2 * 3 * 4 = 24

// Currying using closures
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

let curriedMultiply = curry(multiply);

console.log("Currying:");
console.log("curriedMultiply(2)(3)(4):", curriedMultiply(2)(3)(4)); // 24
console.log("curriedMultiply(2, 3)(4):", curriedMultiply(2, 3)(4)); // 24