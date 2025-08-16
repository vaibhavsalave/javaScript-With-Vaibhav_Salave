// Functions Practice - Hands-On Exercises

/*
🎯 FUNCTION MASTERY OBJECTIVES:
Learn all aspects of JavaScript functions through practical exercises!

TOPICS COVERED:
🔸 Function declarations & expressions
🔸 Arrow functions & parameters
🔸 Closures & scope
🔸 Higher-order functions
🔸 Async functions & callbacks
🔸 Function performance & optimization

DIFFICULTY LEVELS:
🟢 BEGINNER - Basic function concepts
🟡 INTERMEDIATE - Advanced patterns
🔴 ADVANCED - Complex implementations
*/

console.log("=== FUNCTIONS PRACTICE EXERCISES ===\n");

// =====================================================
// 🟢 BEGINNER EXERCISES
// =====================================================

console.log("🟢 BEGINNER LEVEL\n");

/*
EXERCISE 1: Basic Function Creation
Create different types of functions that perform simple calculations:
*/

console.log("--- Exercise 1: Basic Function Creation ---");

// Function Declaration
function calculateArea(length, width) {
    return length * width;
}

// Function Expression
const calculatePerimeter = function(length, width) {
    return 2 * (length + width);
};

// Arrow Function
const calculateDiagonal = (length, width) => {
    return Math.sqrt(length * length + width * width);
};

// Arrow Function (concise)
const calculateAverage = (a, b) => (a + b) / 2;

// Test all functions
const length = 5, width = 3;
console.log(`Rectangle ${length}x${width}:`);
console.log(`Area: ${calculateArea(length, width)}`);
console.log(`Perimeter: ${calculatePerimeter(length, width)}`);
console.log(`Diagonal: ${calculateDiagonal(length, width).toFixed(2)}`);
console.log(`Average dimension: ${calculateAverage(length, width)}`);

/*
EXERCISE 2: Parameters and Default Values
Create functions with various parameter configurations:
*/

console.log("\n--- Exercise 2: Parameters and Default Values ---");

// Default parameters
function greetUser(name = "Guest", timeOfDay = "day") {
    return `Good ${timeOfDay}, ${name}!`;
}

// Rest parameters
function calculateSum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Destructuring parameters
function createUser({name, age, email = "not provided"}) {
    return {
        name: name,
        age: age,
        email: email,
        created: new Date()
    };
}

// Test parameter functions
console.log(greetUser()); // Default values
console.log(greetUser("Alice", "morning")); // Custom values
console.log(`Sum: ${calculateSum(1, 2, 3, 4, 5)}`);
console.log("New user:", createUser({name: "Bob", age: 25}));

/*
EXERCISE 3: Return Values and Early Returns
Practice different return patterns:
*/

console.log("\n--- Exercise 3: Return Values and Early Returns ---");

// Multiple return points
function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

// Returning objects
function getStudentInfo(name, scores) {
    if (!name || !Array.isArray(scores)) {
        return {error: "Invalid input"};
    }
    
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return {
        name: name,
        scores: scores,
        average: average.toFixed(2),
        grade: getGrade(average)
    };
}

// Test return patterns
console.log("Grades:", [95, 82, 67, 59].map(score => `${score}: ${getGrade(score)}`));
console.log("Student info:", getStudentInfo("Alice", [85, 92, 78, 88]));

// =====================================================
// 🟡 INTERMEDIATE EXERCISES
// =====================================================

console.log("\n🟡 INTERMEDIATE LEVEL\n");

/*
EXERCISE 4: Closures and Private Variables
Create functions that demonstrate closure concepts:
*/

console.log("--- Exercise 4: Closures and Private Variables ---");

// Bank account with private balance
function createBankAccount(initialBalance = 0) {
    let balance = initialBalance;
    let transactionHistory = [];
    
    function addTransaction(type, amount) {
        transactionHistory.push({
            type: type,
            amount: amount,
            timestamp: new Date(),
            balanceAfter: balance
        });
    }
    
    return {
        deposit(amount) {
            if (amount <= 0) {
                throw new Error("Deposit amount must be positive");
            }
            balance += amount;
            addTransaction('deposit', amount);
            return balance;
        },
        
        withdraw(amount) {
            if (amount <= 0) {
                throw new Error("Withdrawal amount must be positive");
            }
            if (amount > balance) {
                throw new Error("Insufficient funds");
            }
            balance -= amount;
            addTransaction('withdrawal', amount);
            return balance;
        },
        
        getBalance() {
            return balance;
        },
        
        getHistory() {
            return [...transactionHistory]; // Return copy
        }
    };
}

// Test bank account closure
const account = createBankAccount(100);
console.log(`Initial balance: $${account.getBalance()}`);
console.log(`After deposit $50: $${account.deposit(50)}`);
console.log(`After withdrawal $30: $${account.withdraw(30)}`);
console.log("Transaction history:", account.getHistory());

/*
EXERCISE 5: Higher-Order Functions
Create and use functions that work with other functions:
*/

console.log("\n--- Exercise 5: Higher-Order Functions ---");

// Function that returns a function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

// Function that takes functions as parameters
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Function composition
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

// Curry function for flexible parameters
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

// Test higher-order functions
const double = createMultiplier(2);
const triple = createMultiplier(3);
const numbers = [1, 2, 3, 4, 5];

console.log("Original numbers:", numbers);
console.log("Doubled:", applyOperation(numbers, double));
console.log("Tripled:", applyOperation(numbers, triple));

// Function composition example
const addOne = x => x + 1;
const square = x => x * x;
const addOneThenSquare = compose(square, addOne);

console.log("Compose (3+1)²:", addOneThenSquare(3)); // (3+1)² = 16

// Curry example
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
const add5 = curriedAdd(5);
const add5and3 = add5(3);

console.log("Curried addition 5+3+7:", add5and3(7)); // 15

/*
EXERCISE 6: Array Processing Functions
Create utility functions for array manipulation:
*/

console.log("\n--- Exercise 6: Array Processing Functions ---");

// Custom array methods
const ArrayUtils = {
    // Custom map implementation
    customMap(array, callback) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(callback(array[i], i, array));
        }
        return result;
    },
    
    // Custom filter implementation
    customFilter(array, predicate) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            if (predicate(array[i], i, array)) {
                result.push(array[i]);
            }
        }
        return result;
    },
    
    // Custom reduce implementation
    customReduce(array, callback, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : array[0];
        let startIndex = initialValue !== undefined ? 0 : 1;
        
        for (let i = startIndex; i < array.length; i++) {
            accumulator = callback(accumulator, array[i], i, array);
        }
        return accumulator;
    },
    
    // Find unique elements
    unique(array) {
        return this.customFilter(array, (item, index) => 
            array.indexOf(item) === index
        );
    },
    
    // Group array elements
    groupBy(array, keyFn) {
        return this.customReduce(array, (groups, item) => {
            const key = keyFn(item);
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(item);
            return groups;
        }, {});
    }
};

// Test array utilities
const testArray = [1, 2, 3, 4, 5, 2, 3, 6];
const students = [
    {name: "Alice", grade: "A", age: 20},
    {name: "Bob", grade: "B", age: 19},
    {name: "Charlie", grade: "A", age: 21},
    {name: "Diana", grade: "C", age: 20}
];

console.log("Original array:", testArray);
console.log("Squared:", ArrayUtils.customMap(testArray, x => x * x));
console.log("Even numbers:", ArrayUtils.customFilter(testArray, x => x % 2 === 0));
console.log("Sum:", ArrayUtils.customReduce(testArray, (sum, x) => sum + x, 0));
console.log("Unique:", ArrayUtils.unique(testArray));
console.log("Students by grade:", ArrayUtils.groupBy(students, student => student.grade));

// =====================================================
// 🔴 ADVANCED EXERCISES
// =====================================================

console.log("\n🔴 ADVANCED LEVEL\n");

/*
EXERCISE 7: Function Memoization
Implement memoization for performance optimization:
*/

console.log("--- Exercise 7: Function Memoization ---");

// Memoization decorator
function memoize(fn, keyGenerator = (...args) => JSON.stringify(args)) {
    const cache = new Map();
    
    const memoized = function(...args) {
        const key = keyGenerator(...args);
        
        if (cache.has(key)) {
            console.log(`Cache hit for ${key}`);
            return cache.get(key);
        }
        
        console.log(`Computing for ${key}`);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
    
    // Add cache inspection methods
    memoized.cache = cache;
    memoized.clearCache = () => cache.clear();
    memoized.cacheSize = () => cache.size;
    
    return memoized;
}

// Expensive function to memoize
function expensiveFibonacci(n) {
    if (n <= 1) return n;
    return expensiveFibonacci(n - 1) + expensiveFibonacci(n - 2);
}

// Memoized version
const memoizedFibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

// Performance test
console.time("Memoized Fibonacci(35)");
console.log(`Fibonacci(35) = ${memoizedFibonacci(35)}`);
console.timeEnd("Memoized Fibonacci(35)");

console.log(`Cache size: ${memoizedFibonacci.cacheSize()}`);

/*
EXERCISE 8: Async Function Patterns
Practice with promises, async/await, and error handling:
*/

console.log("\n--- Exercise 8: Async Function Patterns ---");

// Simulate async operations
function simulateAsyncOperation(data, delay = 1000, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`Operation failed for: ${data}`));
            } else {
                resolve(`Processed: ${data}`);
            }
        }, delay);
    });
}

// Promise-based function
function processDataPromise(dataArray) {
    return Promise.all(
        dataArray.map(data => simulateAsyncOperation(data, 100))
    );
}

// Async/await function
async function processDataAsync(dataArray) {
    try {
        const results = [];
        for (const data of dataArray) {
            const result = await simulateAsyncOperation(data, 100);
            results.push(result);
        }
        return results;
    } catch (error) {
        throw new Error(`Async processing failed: ${error.message}`);
    }
}

// Retry mechanism
async function withRetry(asyncFn, maxRetries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await asyncFn();
        } catch (error) {
            if (attempt === maxRetries) {
                throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);
            }
            console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// Test async functions
async function testAsyncFunctions() {
    const testData = ["item1", "item2", "item3"];
    
    try {
        console.log("Testing Promise.all approach:");
        const promiseResults = await processDataPromise(testData);
        console.log("Promise results:", promiseResults);
        
        console.log("\nTesting async/await approach:");
        const asyncResults = await processDataAsync(testData);
        console.log("Async results:", asyncResults);
        
        console.log("\nTesting retry mechanism:");
        let attemptCount = 0;
        const unreliableOperation = () => {
            attemptCount++;
            return simulateAsyncOperation("retry-test", 100, attemptCount < 3);
        };
        
        const retryResult = await withRetry(unreliableOperation, 3, 200);
        console.log("Retry result:", retryResult);
        
    } catch (error) {
        console.error("Async test error:", error.message);
    }
}

// Run async tests
testAsyncFunctions();

/*
EXERCISE 9: Function Performance Optimization
Compare different function approaches for performance:
*/

console.log("\n--- Exercise 9: Function Performance Optimization ---");

// Performance testing utility
function performanceTest(testName, testFn, iterations = 100000) {
    const start = performance.now();
    
    for (let i = 0; i < iterations; i++) {
        testFn(i);
    }
    
    const end = performance.now();
    const duration = end - start;
    console.log(`${testName}: ${duration.toFixed(2)}ms`);
    return duration;
}

// Different approaches for the same problem
const approaches = {
    // Regular function
    regularFunction: function(n) {
        return n * n + 2 * n + 1;
    },
    
    // Arrow function
    arrowFunction: (n) => n * n + 2 * n + 1,
    
    // Inline calculation
    inlineCalculation: (n) => {
        const squared = n * n;
        const doubled = 2 * n;
        return squared + doubled + 1;
    },
    
    // Using Math.pow
    mathPowFunction: (n) => Math.pow(n, 2) + 2 * n + 1,
    
    // Optimized with variable reuse
    optimizedFunction: (n) => {
        const result = n * (n + 2) + 1;
        return result;
    }
};

// Run performance tests
console.log("Performance comparison (100,000 iterations):");
Object.entries(approaches).forEach(([name, fn]) => {
    performanceTest(name, fn);
});

// =====================================================
// 💡 BONUS CHALLENGES
// =====================================================

console.log("\n💡 BONUS CHALLENGES\n");

/*
BONUS 1: Function Builder Pattern
Create a function that builds other functions dynamically:
*/

console.log("--- Bonus 1: Function Builder Pattern ---");

class FunctionBuilder {
    constructor() {
        this.operations = [];
    }
    
    add(value) {
        this.operations.push(x => x + value);
        return this;
    }
    
    multiply(value) {
        this.operations.push(x => x * value);
        return this;
    }
    
    filter(predicate) {
        this.operations.push(x => Array.isArray(x) ? x.filter(predicate) : x);
        return this;
    }
    
    map(transform) {
        this.operations.push(x => Array.isArray(x) ? x.map(transform) : transform(x));
        return this;
    }
    
    build() {
        return (input) => {
            return this.operations.reduce((result, operation) => {
                return operation(result);
            }, input);
        };
    }
    
    reset() {
        this.operations = [];
        return this;
    }
}

// Test function builder
const mathFunction = new FunctionBuilder()
    .add(5)
    .multiply(2)
    .add(10)
    .build();

console.log("Function builder result (3):", mathFunction(3)); // ((3+5)*2)+10 = 26

const arrayProcessor = new FunctionBuilder()
    .filter(x => x > 5)
    .map(x => x * 2)
    .build();

console.log("Array processor:", arrayProcessor([1, 6, 3, 8, 2, 9])); // [12, 16, 18]

/*
BONUS 2: Function Registry System
Create a system to register and manage functions:
*/

console.log("\n--- Bonus 2: Function Registry System ---");

class FunctionRegistry {
    constructor() {
        this.functions = new Map();
        this.middleware = [];
    }
    
    register(name, fn, metadata = {}) {
        this.functions.set(name, {
            function: fn,
            metadata: {
                registered: new Date(),
                callCount: 0,
                ...metadata
            }
        });
        return this;
    }
    
    addMiddleware(middlewareFn) {
        this.middleware.push(middlewareFn);
        return this;
    }
    
    call(name, ...args) {
        if (!this.functions.has(name)) {
            throw new Error(`Function '${name}' not registered`);
        }
        
        const entry = this.functions.get(name);
        entry.metadata.callCount++;
        entry.metadata.lastCalled = new Date();
        
        // Apply middleware
        let result = entry.function;
        for (const middleware of this.middleware) {
            result = middleware(result, name, args);
        }
        
        return typeof result === 'function' ? result(...args) : result;
    }
    
    getStats(name) {
        return this.functions.has(name) ? this.functions.get(name).metadata : null;
    }
    
    listFunctions() {
        return Array.from(this.functions.keys());
    }
}

// Test function registry
const registry = new FunctionRegistry();

// Register functions
registry
    .register('add', (a, b) => a + b, { description: 'Adds two numbers' })
    .register('multiply', (a, b) => a * b, { description: 'Multiplies two numbers' })
    .register('greet', (name) => `Hello, ${name}!`, { description: 'Greets a person' });

// Add logging middleware
registry.addMiddleware((fn, name, args) => {
    console.log(`Calling function '${name}' with args:`, args);
    return fn;
});

// Test registry
console.log("Addition result:", registry.call('add', 5, 3));
console.log("Multiplication result:", registry.call('multiply', 4, 6));
console.log("Greeting result:", registry.call('greet', 'Alice'));

console.log("Function stats:", registry.getStats('add'));
console.log("Available functions:", registry.listFunctions());

// =====================================================
// 🎯 PRACTICE COMPLETION
// =====================================================

console.log("\n🎯 FUNCTIONS PRACTICE COMPLETE!");
console.log("✅ Mastered function declarations, expressions, and arrows");
console.log("✅ Implemented closures and higher-order functions");
console.log("✅ Built async patterns and error handling");
console.log("✅ Optimized function performance and memory usage");
console.log("✅ Created advanced function patterns and utilities");
console.log("🚀 Ready for professional JavaScript function usage!");