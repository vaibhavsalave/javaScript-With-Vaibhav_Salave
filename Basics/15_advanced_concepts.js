// JavaScript Advanced Concepts - Detailed Theory & Implementation

/*
🚀 ADVANCED JAVASCRIPT THEORY:

This file covers advanced JavaScript concepts that are essential for
professional development. Topics include:

1. Advanced Asynchronous Programming
2. Design Patterns
3. Performance Optimization
4. Memory Management
5. Module Systems
6. Metaprogramming
7. Advanced Error Handling
8. Functional Programming Patterns
*/

console.log("=== ADVANCED JAVASCRIPT CONCEPTS ===");

// =====================================================
// 1. ADVANCED ASYNCHRONOUS PROGRAMMING
// =====================================================

console.log("\n=== ADVANCED ASYNC PROGRAMMING ===");

/*
⚡ ASYNC THEORY:

CALLBACK HELL PROBLEM:
- Nested callbacks create pyramid of doom
- Difficult to read and maintain
- Error handling becomes complex

PROMISES SOLUTION:
- Chainable .then() methods
- Better error handling with .catch()
- Cleaner code structure

ASYNC/AWAIT EVOLUTION:
- Synchronous-looking asynchronous code
- Better error handling with try/catch
- More readable and maintainable
*/

// Promise-based utility functions
class AsyncUtilities {
    
    // Delay function with promise
    static delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Timeout wrapper for promises
    static timeout(promise, ms) {
        return Promise.race([
            promise,
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms)
            )
        ]);
    }

    // Retry function with exponential backoff
    static async retry(fn, maxAttempts = 3, baseDelay = 1000) {
        let lastError;
        
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return await fn();
            } catch (error) {
                lastError = error;
                
                if (attempt === maxAttempts) {
                    throw new Error(`Failed after ${maxAttempts} attempts: ${error.message}`);
                }
                
                // Exponential backoff
                const delay = baseDelay * Math.pow(2, attempt - 1);
                console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
                await this.delay(delay);
            }
        }
    }

    // Parallel processing with concurrency limit
    static async mapConcurrent(items, asyncFn, concurrency = 3) {
        const results = [];
        const executing = [];

        for (const item of items) {
            const promise = asyncFn(item).then(result => {
                executing.splice(executing.indexOf(promise), 1);
                return result;
            });

            results.push(promise);
            executing.push(promise);

            if (executing.length >= concurrency) {
                await Promise.race(executing);
            }
        }

        return Promise.all(results);
    }

    // Sequential processing (one after another)
    static async mapSequential(items, asyncFn) {
        const results = [];
        for (const item of items) {
            results.push(await asyncFn(item));
        }
        return results;
    }
}

// Example usage of advanced async patterns
async function demonstrateAsyncPatterns() {
    console.log("--- ASYNC PATTERNS DEMO ---");

    // Simulated async operations
    const fetchData = async (id) => {
        await AsyncUtilities.delay(Math.random() * 1000);
        if (Math.random() < 0.3) throw new Error(`Failed to fetch data ${id}`);
        return `Data ${id}`;
    };

    try {
        // 1. Retry with exponential backoff
        console.log("1. Retry with backoff:");
        const retryResult = await AsyncUtilities.retry(() => fetchData(1), 3);
        console.log("Retry result:", retryResult);

        // 2. Concurrent processing with limit
        console.log("2. Concurrent processing:");
        const items = [1, 2, 3, 4, 5, 6, 7, 8];
        const concurrentResults = await AsyncUtilities.mapConcurrent(
            items, 
            async (id) => fetchData(id), 
            3
        );
        console.log("Concurrent results:", concurrentResults);

        // 3. Timeout handling
        console.log("3. Timeout handling:");
        const timeoutResult = await AsyncUtilities.timeout(
            fetchData(999), 
            500
        );
        console.log("Timeout result:", timeoutResult);

    } catch (error) {
        console.log("Async error:", error.message);
    }
}

// Run async demo
demonstrateAsyncPatterns();

// =====================================================
// 2. DESIGN PATTERNS
// =====================================================

console.log("\n=== DESIGN PATTERNS ===");

/*
🎨 DESIGN PATTERNS THEORY:

WHAT ARE DESIGN PATTERNS?
- Reusable solutions to common programming problems
- Proven approaches to software design
- Improve code maintainability and readability

COMMON JAVASCRIPT PATTERNS:
1. Singleton - Single instance
2. Factory - Object creation
3. Observer - Event notification
4. Module - Encapsulation
5. Decorator - Extend functionality
*/

// 1. SINGLETON PATTERN
class ConfigManager {
    constructor() {
        if (ConfigManager.instance) {
            return ConfigManager.instance;
        }
        
        this.config = new Map();
        this.loadTime = new Date();
        ConfigManager.instance = this;
    }

    set(key, value) {
        this.config.set(key, value);
    }

    get(key) {
        return this.config.get(key);
    }

    getAll() {
        return Object.fromEntries(this.config);
    }
}

// 2. FACTORY PATTERN
class ShapeFactory {
    static createShape(type, ...args) {
        switch (type.toLowerCase()) {
            case 'circle':
                return new Circle(...args);
            case 'rectangle':
                return new Rectangle(...args);
            case 'triangle':
                return new Triangle(...args);
            default:
                throw new Error(`Unknown shape type: ${type}`);
        }
    }
}

class Circle {
    constructor(radius) {
        this.type = 'circle';
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle {
    constructor(width, height) {
        this.type = 'rectangle';
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
}

class Triangle {
    constructor(base, height) {
        this.type = 'triangle';
        this.base = base;
        this.height = height;
    }
    
    area() {
        return 0.5 * this.base * this.height;
    }
}

// 3. OBSERVER PATTERN
class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    on(event, listener) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event).push(listener);
    }

    off(event, listener) {
        if (this.events.has(event)) {
            const listeners = this.events.get(event);
            const index = listeners.indexOf(listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        }
    }

    emit(event, ...args) {
        if (this.events.has(event)) {
            this.events.get(event).forEach(listener => {
                try {
                    listener(...args);
                } catch (error) {
                    console.error('Event listener error:', error);
                }
            });
        }
    }

    once(event, listener) {
        const onceWrapper = (...args) => {
            listener(...args);
            this.off(event, onceWrapper);
        };
        this.on(event, onceWrapper);
    }
}

// 4. DECORATOR PATTERN
class Coffee {
    constructor() {
        this.description = "Simple coffee";
        this.cost = 2.00;
    }

    getDescription() {
        return this.description;
    }

    getCost() {
        return this.cost;
    }
}

class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getDescription() {
        return this.coffee.getDescription();
    }

    getCost() {
        return this.coffee.getCost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    getDescription() {
        return this.coffee.getDescription() + ", Milk";
    }

    getCost() {
        return this.coffee.getCost() + 0.50;
    }
}

class SugarDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    getDescription() {
        return this.coffee.getDescription() + ", Sugar";
    }

    getCost() {
        return this.coffee.getCost() + 0.25;
    }
}

// Design patterns usage examples
console.log("--- DESIGN PATTERNS DEMO ---");

// Singleton
const config1 = new ConfigManager();
const config2 = new ConfigManager();
config1.set('apiUrl', 'https://api.example.com');
console.log("Singleton test:", config1 === config2); // true
console.log("Config value:", config2.get('apiUrl'));

// Factory
const shapes = [
    ShapeFactory.createShape('circle', 5),
    ShapeFactory.createShape('rectangle', 4, 6),
    ShapeFactory.createShape('triangle', 3, 4)
];
console.log("Factory shapes:", shapes.map(s => ({ type: s.type, area: s.area() })));

// Observer
const emitter = new EventEmitter();
emitter.on('userLogin', (user) => console.log(`User ${user} logged in`));
emitter.on('userLogin', (user) => console.log(`Sending welcome email to ${user}`));
emitter.emit('userLogin', 'john_doe');

// Decorator
let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log("Decorated coffee:", coffee.getDescription(), "$" + coffee.getCost());

// =====================================================
// 3. FUNCTIONAL PROGRAMMING PATTERNS
// =====================================================

console.log("\n=== FUNCTIONAL PROGRAMMING ===");

/*
🔧 FUNCTIONAL PROGRAMMING THEORY:

CORE PRINCIPLES:
1. Pure Functions - No side effects, same input = same output
2. Immutability - Don't modify existing data
3. Higher-Order Functions - Functions that take/return functions
4. Function Composition - Combine simple functions

BENEFITS:
- Predictable code behavior
- Easier testing and debugging
- Better parallelization
- Reduced bugs from side effects
*/

// Pure function utilities
class FunctionalUtils {
    
    // Curry function - Convert f(a, b, c) to f(a)(b)(c)
    static curry(fn) {
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

    // Compose functions - Apply functions right to left
    static compose(...fns) {
        return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
    }

    // Pipe functions - Apply functions left to right
    static pipe(...fns) {
        return (value) => fns.reduce((acc, fn) => fn(acc), value);
    }

    // Memoization - Cache function results
    static memoize(fn) {
        const cache = new Map();
        return (...args) => {
            const key = JSON.stringify(args);
            if (cache.has(key)) {
                return cache.get(key);
            }
            const result = fn(...args);
            cache.set(key, result);
            return result;
        };
    }

    // Partial application
    static partial(fn, ...presetArgs) {
        return (...remainingArgs) => fn(...presetArgs, ...remainingArgs);
    }

    // Debounce function
    static debounce(fn, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), delay);
        };
    }

    // Throttle function
    static throttle(fn, limit) {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                fn(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Functional programming examples
console.log("--- FUNCTIONAL PROGRAMMING DEMO ---");

// 1. Pure functions and composition
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = (x) => x * x;

const curriedAdd = FunctionalUtils.curry(add);
const add5 = curriedAdd(5);
console.log("Curried add:", add5(3)); // 8

// Function composition
const addThenSquare = FunctionalUtils.compose(square, add5);
console.log("Compose result:", addThenSquare(3)); // (3+5)² = 64

// Pipe (more readable left-to-right)
const squareThenAdd5 = FunctionalUtils.pipe(square, add5);
console.log("Pipe result:", squareThenAdd5(3)); // 3² + 5 = 14

// 2. Memoization for expensive calculations
const fibonacci = FunctionalUtils.memoize((n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.time("Fibonacci with memoization");
console.log("Fibonacci(40):", fibonacci(40));
console.timeEnd("Fibonacci with memoization");

// 3. Array functional methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(n => n % 2 === 0)           // Even numbers
    .map(n => n * n)                    // Square them
    .reduce((sum, n) => sum + n, 0);    // Sum them up

console.log("Functional array processing:", result); // 220

// =====================================================
// 4. MEMORY MANAGEMENT & PERFORMANCE
// =====================================================

console.log("\n=== MEMORY MANAGEMENT ===");

/*
🧠 MEMORY MANAGEMENT THEORY:

JAVASCRIPT MEMORY MODEL:
1. Stack - Primitive values, function calls
2. Heap - Objects, arrays, functions
3. Garbage Collection - Automatic memory cleanup

COMMON MEMORY LEAKS:
1. Global variables that aren't cleared
2. Event listeners not removed
3. Closures holding references
4. Circular references
5. Detached DOM nodes

PERFORMANCE OPTIMIZATION:
1. Object pooling
2. Lazy loading
3. Efficient data structures
4. Minimize DOM manipulations
*/

// Object Pool Pattern for memory optimization
class ObjectPool {
    constructor(createFn, resetFn, maxSize = 100) {
        this.createFn = createFn;
        this.resetFn = resetFn;
        this.maxSize = maxSize;
        this.pool = [];
        this.created = 0;
        this.reused = 0;
    }

    acquire() {
        if (this.pool.length > 0) {
            this.reused++;
            return this.pool.pop();
        } else {
            this.created++;
            return this.createFn();
        }
    }

    release(obj) {
        if (this.pool.length < this.maxSize) {
            this.resetFn(obj);
            this.pool.push(obj);
        }
    }

    getStats() {
        return {
            created: this.created,
            reused: this.reused,
            poolSize: this.pool.length,
            efficiency: this.reused / (this.created + this.reused) * 100
        };
    }
}

// Example: Vector pool for game development
class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

const vectorPool = new ObjectPool(
    () => new Vector2D(),
    (vector) => vector.set(0, 0)
);

// Performance monitoring utilities
class PerformanceMonitor {
    static measureFunction(fn, name = 'function') {
        return (...args) => {
            const start = performance.now();
            const result = fn(...args);
            const end = performance.now();
            console.log(`${name} took ${(end - start).toFixed(2)}ms`);
            return result;
        };
    }

    static measureMemory() {
        if (performance.memory) {
            return {
                used: Math.round(performance.memory.usedJSHeapSize / 1048576),
                total: Math.round(performance.memory.totalJSHeapSize / 1048576),
                limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
            };
        }
        return { message: 'Memory API not available' };
    }

    static profileFunction(fn, iterations = 1000) {
        const times = [];
        
        for (let i = 0; i < iterations; i++) {
            const start = performance.now();
            fn();
            const end = performance.now();
            times.push(end - start);
        }

        times.sort((a, b) => a - b);
        
        return {
            min: times[0].toFixed(2),
            max: times[times.length - 1].toFixed(2),
            avg: (times.reduce((a, b) => a + b) / times.length).toFixed(2),
            median: times[Math.floor(times.length / 2)].toFixed(2)
        };
    }
}

// Memory management examples
console.log("--- MEMORY MANAGEMENT DEMO ---");

// Object pooling
const vectors = [];
for (let i = 0; i < 10000; i++) {
    const vector = vectorPool.acquire();
    vector.set(Math.random() * 100, Math.random() * 100);
    vectors.push(vector);
}

// Release vectors back to pool
vectors.forEach(vector => vectorPool.release(vector));
console.log("Vector pool stats:", vectorPool.getStats());

// Performance profiling
const expensiveFunction = () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        sum += Math.sqrt(i);
    }
    return sum;
};

console.log("Function profiling:", PerformanceMonitor.profileFunction(expensiveFunction, 100));
console.log("Memory usage:", PerformanceMonitor.measureMemory());

// =====================================================
// 5. METAPROGRAMMING
// =====================================================

console.log("\n=== METAPROGRAMMING ===");

/*
🎭 METAPROGRAMMING THEORY:

WHAT IS METAPROGRAMMING?
- Code that manipulates code
- Programs that write or modify programs
- Runtime code generation and modification

JAVASCRIPT METAPROGRAMMING TOOLS:
1. Proxy - Intercept object operations
2. Reflect - Programmatic object manipulation
3. Symbol - Unique property keys
4. defineProperty - Property descriptors
5. eval/Function constructor - Dynamic code execution
*/

// Advanced Proxy examples
class SmartObject {
    constructor(target = {}) {
        this._target = target;
        this._history = [];
        this._validators = new Map();
        
        return new Proxy(this._target, {
            get: (target, prop, receiver) => {
                if (prop.startsWith('_')) {
                    return Reflect.get(this, prop);
                }
                
                this._history.push({ type: 'get', property: prop, timestamp: Date.now() });
                return Reflect.get(target, prop, receiver);
            },
            
            set: (target, prop, value, receiver) => {
                // Validation
                if (this._validators.has(prop)) {
                    const validator = this._validators.get(prop);
                    if (!validator(value)) {
                        throw new Error(`Validation failed for property ${prop}`);
                    }
                }
                
                const oldValue = target[prop];
                this._history.push({ 
                    type: 'set', 
                    property: prop, 
                    oldValue, 
                    newValue: value, 
                    timestamp: Date.now() 
                });
                
                return Reflect.set(target, prop, value, receiver);
            },
            
            has: (target, prop) => {
                if (prop.startsWith('_')) return Reflect.has(this, prop);
                return Reflect.has(target, prop);
            },
            
            deleteProperty: (target, prop) => {
                this._history.push({ 
                    type: 'delete', 
                    property: prop, 
                    timestamp: Date.now() 
                });
                return Reflect.deleteProperty(target, prop);
            }
        });
    }

    addValidator(property, validator) {
        this._validators.set(property, validator);
    }

    getHistory() {
        return this._history.slice();
    }

    clearHistory() {
        this._history.length = 0;
    }
}

// Dynamic class creation
class ClassFactory {
    static createClass(className, properties, methods = {}) {
        const ClassConstructor = {
            [className]: function(initialValues = {}) {
                properties.forEach(prop => {
                    this[prop] = initialValues[prop] || null;
                });
            }
        }[className];

        // Add methods to prototype
        Object.keys(methods).forEach(methodName => {
            ClassConstructor.prototype[methodName] = methods[methodName];
        });

        // Add toString method
        ClassConstructor.prototype.toString = function() {
            const props = properties.map(prop => `${prop}: ${this[prop]}`).join(', ');
            return `${className}(${props})`;
        };

        return ClassConstructor;
    }
}

// Metaprogramming examples
console.log("--- METAPROGRAMMING DEMO ---");

// Smart object with proxy
const smartUser = new SmartObject();
smartUser.addValidator('age', (value) => typeof value === 'number' && value >= 0);
smartUser.addValidator('email', (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

try {
    smartUser.name = 'John Doe';
    smartUser.age = 30;
    smartUser.email = 'john@example.com';
    
    console.log('Smart object access:', smartUser.name);
    console.log('Smart object history:', smartUser.getHistory());
    
    // This will throw validation error
    // smartUser.age = -5;
} catch (error) {
    console.log('Validation error:', error.message);
}

// Dynamic class creation
const Person = ClassFactory.createClass('Person', ['name', 'age', 'city'], {
    greet() {
        return `Hello, I'm ${this.name} from ${this.city}`;
    },
    
    isAdult() {
        return this.age >= 18;
    }
});

const person = new Person({ name: 'Alice', age: 25, city: 'New York' });
console.log('Dynamic class:', person.toString());
console.log('Dynamic method:', person.greet());

// Symbol-based metaprogramming
const SecretData = (() => {
    const secret = Symbol('secret');
    const history = Symbol('history');
    
    return class {
        constructor(data) {
            this[secret] = data;
            this[history] = [];
        }
        
        access(key) {
            this[history].push({ action: 'access', key, timestamp: Date.now() });
            return this[secret][key];
        }
        
        getHistory() {
            return this[history].slice();
        }
        
        // Method to get symbol for external access if needed
        static getSecretSymbol() {
            return secret;
        }
    };
})();

const secretObj = new SecretData({ apiKey: 'super-secret-key', token: 'abc123' });
console.log('Secret access:', secretObj.access('apiKey'));
console.log('Secret history:', secretObj.getHistory());

console.log("\n🎯 Advanced concepts complete!");
console.log("💪 You now understand professional JavaScript patterns!");
console.log("🚀 Ready for enterprise-level development!");