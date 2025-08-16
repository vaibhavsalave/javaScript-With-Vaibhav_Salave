// ========================================
// FUNCTION PATTERNS & ADVANCED CONCEPTS
// ========================================

console.log("🚀 FUNCTION PATTERNS PRACTICE STARTED 🚀\n");

// ========================================
// 1. FUNCTION DECLARATIONS AND EXPRESSIONS
// ========================================

console.log("📝 1. FUNCTION DECLARATIONS AND EXPRESSIONS");
console.log("===========================================");

// Function declaration (hoisted)
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression (not hoisted)
const greetExpression = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function expression
const greetArrow = (name) => `Hello, ${name}!`;

// Arrow function with multiple parameters and body
const calculateArea = (width, height) => {
    const area = width * height;
    return `Area is ${area} square units`;
};

// Arrow function with single parameter (parentheses optional)
const double = x => x * 2;

console.log("Function declaration:", greet('John'));
console.log("Function expression:", greetExpression('Jane'));
console.log("Arrow function:", greetArrow('Bob'));
console.log("Calculate area:", calculateArea(5, 3));
console.log("Double 7:", double(7));

console.log("\n");

// ========================================
// 2. FUNCTION PARAMETERS AND ARGUMENTS
// ========================================

console.log("🔧 2. FUNCTION PARAMETERS AND ARGUMENTS");
console.log("========================================");

// Default parameters
function createUser(name, age = 18, city = 'Unknown') {
    return { name, age, city };
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Destructuring parameters
function processUser({ name, age, email = 'no-email@example.com' }) {
    return `User ${name} (${age}) - ${email}`;
}

// Parameter destructuring with arrays
function processCoordinates([x, y, z = 0]) {
    return `Position: (${x}, ${y}, ${z})`;
}

console.log("Default parameters:", createUser('Alice'));
console.log("Default parameters with some values:", createUser('Bob', 25));
console.log("All parameters:", createUser('Charlie', 30, 'New York'));

console.log("Rest parameters sum:", sum(1, 2, 3, 4, 5));
console.log("Rest parameters sum:", sum(10, 20));

const user = { name: 'John', age: 30 };
console.log("Destructured parameters:", processUser(user));

const coordinates = [10, 20];
console.log("Array destructuring:", processCoordinates(coordinates));

console.log("\n");

// ========================================
// 3. HIGHER-ORDER FUNCTIONS
// ========================================

console.log("🔄 3. HIGHER-ORDER FUNCTIONS");
console.log("==============================");

// Function that returns a function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

// Function that takes a function as parameter
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Function that returns a function with closure
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        getValue() {
            return count;
        },
        reset() {
            count = initialValue;
            return count;
        }
    };
}

// Function composition
function compose(...functions) {
    return function(value) {
        return functions.reduceRight((result, fn) => fn(result), value);
    };
}

const doubleValue = createMultiplier(2);
const tripleValue = createMultiplier(3);

console.log("Double 5:", doubleValue(5));
console.log("Triple 5:", tripleValue(5));

const numbers = [1, 2, 3, 4, 5];
const doubled = applyOperation(numbers, doubleValue);
const tripled = applyOperation(numbers, tripleValue);

console.log("Original numbers:", numbers);
console.log("Doubled:", doubled);
console.log("Tripled:", tripled);

const counter = createCounter(10);
console.log("Initial counter value:", counter.getValue());
console.log("After increment:", counter.increment());
console.log("After increment:", counter.increment());
console.log("After decrement:", counter.decrement());
console.log("Reset counter:", counter.reset());

// Function composition example
const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const square = x => x ** 2;

const composedFunction = compose(square, multiplyByTwo, addOne);
console.log("Composed function f(x) = (x+1)*2^2, f(3):", composedFunction(3));

console.log("\n");

// ========================================
// 4. CLOSURES AND LEXICAL SCOPING
// ========================================

console.log("🔒 4. CLOSURES AND LEXICAL SCOPING");
console.log("====================================");

// Basic closure
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeter('Hello');
const sayGoodbye = createGreeter('Goodbye');

console.log("Hello greeter:", sayHello('John'));
console.log("Goodbye greeter:", sayGoodbye('Jane'));

// Closure with private variables
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        getBalance() {
            return balance;
        },
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited $${amount}. New balance: $${balance}`;
            }
            return 'Invalid deposit amount';
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Withdrew $${amount}. New balance: $${balance}`;
            }
            return 'Insufficient funds or invalid amount';
        }
    };
}

const account = createBankAccount(100);
console.log("Initial balance:", account.getBalance());
console.log("Deposit:", account.deposit(50));
console.log("Withdraw:", account.withdraw(30));
console.log("Current balance:", account.getBalance());

// Closure with loop variables (common pitfall)
function createCounters(count) {
    const counters = [];
    
    for (let i = 0; i < count; i++) {
        counters.push(function() {
            return i;
        });
    }
    
    return counters;
}

const counters = createCounters(3);
console.log("Counter 0:", counters[0]());
console.log("Counter 1:", counters[1]());
console.log("Counter 2:", counters[2]());

console.log("\n");

// ========================================
// 5. CURRYING AND PARTIAL APPLICATION
// ========================================

console.log("🍛 5. CURRYING AND PARTIAL APPLICATION");
console.log("=======================================");

// Basic currying
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...moreArgs) {
            return curried.apply(this, args.concat(moreArgs));
        };
    };
}

// Curried function example
const curriedAdd = curry((a, b, c) => a + b + c);
console.log("Curried add (1)(2)(3):", curriedAdd(1)(2)(3));
console.log("Curried add (1, 2)(3):", curriedAdd(1, 2)(3));
console.log("Curried add (1, 2, 3):", curriedAdd(1, 2, 3));

// Partial application
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn.apply(this, presetArgs.concat(laterArgs));
    };
}

const addTen = partial((a, b) => a + b, 10);
console.log("Add 10 to 5:", addTen(5));

// Practical currying example
const formatCurrency = (currency, amount) => `${currency}${amount.toFixed(2)}`;
const formatUSD = partial(formatCurrency, '$');
const formatEUR = partial(formatCurrency, '€');

console.log("USD format:", formatUSD(25.99));
console.log("EUR format:", formatEUR(25.99));

console.log("\n");

// ========================================
// 6. MEMOIZATION AND CACHING
// ========================================

console.log("💾 6. MEMOIZATION AND CACHING");
console.log("===============================");

// Simple memoization
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log(`Cache hit for ${key}`);
            return cache.get(key);
        }
        
        console.log(`Cache miss for ${key}`);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Fibonacci with memoization
const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log("Fibonacci 10:", fibonacci(10));
console.log("Fibonacci 10 (cached):", fibonacci(10));

// Memoization with TTL (Time To Live)
function memoizeWithTTL(fn, ttl = 60000) { // Default 1 minute
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        const now = Date.now();
        
        if (cache.has(key)) {
            const { value, timestamp } = cache.get(key);
            if (now - timestamp < ttl) {
                return value;
            }
            cache.delete(key);
        }
        
        const result = fn.apply(this, args);
        cache.set(key, { value: result, timestamp: now });
        return result;
    };
}

const expensiveOperation = memoizeWithTTL((n) => {
    console.log(`Performing expensive operation with ${n}`);
    return n * n;
}, 5000); // 5 second TTL

console.log("Expensive operation 5:", expensiveOperation(5));
console.log("Expensive operation 5 (cached):", expensiveOperation(5));

console.log("\n");

// ========================================
// 7. FUNCTION DECORATORS AND WRAPPERS
// ========================================

console.log("🎨 7. FUNCTION DECORATORS AND WRAPPERS");
console.log("=======================================");

// Timing decorator
function timing(fn) {
    return function(...args) {
        const start = performance.now();
        const result = fn.apply(this, args);
        const end = performance.now();
        console.log(`${fn.name} took ${(end - start).toFixed(2)}ms`);
        return result;
    };
}

// Logging decorator
function logging(fn) {
    return function(...args) {
        console.log(`Calling ${fn.name} with arguments:`, args);
        const result = fn.apply(this, args);
        console.log(`${fn.name} returned:`, result);
        return result;
    };
}

// Retry decorator
function retry(fn, maxAttempts = 3, delay = 1000) {
    return function(...args) {
        let lastError;
        
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return fn.apply(this, args);
            } catch (error) {
                lastError = error;
                console.log(`Attempt ${attempt} failed:`, error.message);
                
                if (attempt < maxAttempts) {
                    console.log(`Retrying in ${delay}ms...`);
                    // In real implementation, you'd use setTimeout
                    // setTimeout(() => {}, delay);
                }
            }
        }
        
        throw lastError;
    };
}

// Apply decorators
const decoratedFunction = timing(logging(function add(a, b) {
    // Simulate some work
    const start = Date.now();
    while (Date.now() - start < 10) {}
    return a + b;
}));

console.log("Decorated function result:", decoratedFunction(5, 3));

// Validation decorator
function validate(validator) {
    return function(target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        
        descriptor.value = function(...args) {
            if (!validator(...args)) {
                throw new Error(`Validation failed for ${propertyKey}`);
            }
            return originalMethod.apply(this, args);
        };
        
        return descriptor;
    };
}

// Example class with validation
class Calculator {
    @validate((a, b) => typeof a === 'number' && typeof b === 'number')
    add(a, b) {
        return a + b;
    }
}

console.log("\n");

// ========================================
// 8. PRACTICAL EXAMPLES
// ========================================

console.log("💡 8. PRACTICAL EXAMPLES");
console.log("=========================");

// Example 1: Event emitter
function createEventEmitter() {
    const events = {};
    
    return {
        on(event, callback) {
            if (!events[event]) {
                events[event] = [];
            }
            events[event].push(callback);
        },
        
        emit(event, data) {
            if (events[event]) {
                events[event].forEach(callback => callback(data));
            }
        },
        
        off(event, callback) {
            if (events[event]) {
                events[event] = events[event].filter(cb => cb !== callback);
            }
        }
    };
}

const emitter = createEventEmitter();
emitter.on('userLogin', (user) => {
    console.log(`User ${user.name} logged in`);
});
emitter.on('userLogin', (user) => {
    console.log(`Sending welcome email to ${user.email}`);
});

emitter.emit('userLogin', { name: 'John', email: 'john@example.com' });

// Example 2: Pipeline processing
function createPipeline(...functions) {
    return function(input) {
        return functions.reduce((result, fn) => fn(result), input);
    };
}

const textPipeline = createPipeline(
    text => text.toLowerCase(),
    text => text.replace(/[^a-z\s]/g, ''),
    text => text.split(/\s+/),
    words => words.filter(word => word.length > 3),
    words => words.length
);

const sampleText = "Hello, World! This is a sample text with some words.";
console.log("Pipeline result:", textPipeline(sampleText));

// Example 3: Debounced function
function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

const debouncedSearch = debounce((query) => {
    console.log(`Searching for: ${query}`);
}, 300);

// Simulate rapid input
debouncedSearch('a');
debouncedSearch('ab');
debouncedSearch('abc');
debouncedSearch('abcd');

console.log("\n");

// ========================================
// 9. PRACTICE EXERCISES
// ========================================

console.log("🎯 9. PRACTICE EXERCISES");
console.log("=========================");

console.log("Try these exercises:");
console.log("1. Create a throttle function that limits function execution frequency");
console.log("2. Implement a once function that only allows a function to be called once");
console.log("3. Build a pipe function (left-to-right composition)");
console.log("4. Create a function that can be paused and resumed");
console.log("5. Implement a function that can be cancelled");

// Exercise 1: Throttle function
function throttle(fn, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const throttledLog = throttle((msg) => console.log(`Throttled: ${msg}`), 1000);
console.log("Exercise 1 - Throttle:");
throttledLog('Message 1');
throttledLog('Message 2');
throttledLog('Message 3');

// Exercise 2: Once function
function once(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}

const expensiveCalculation = once((n) => {
    console.log('Performing expensive calculation...');
    return n * n;
});

console.log("Exercise 2 - Once function:");
console.log("First call:", expensiveCalculation(5));
console.log("Second call:", expensiveCalculation(5));

// Exercise 3: Pipe function
function pipe(...functions) {
    return function(value) {
        return functions.reduce((result, fn) => fn(result), value);
    };
}

const pipeResult = pipe(
    x => x + 1,
    x => x * 2,
    x => x ** 2
)(3);

console.log("Exercise 3 - Pipe result:", pipeResult);

console.log("\n🚀 FUNCTION PATTERNS PRACTICE COMPLETED! 🚀");
console.log("Practice these advanced function concepts regularly!");