// ========================================
// ADVANCED JAVASCRIPT CONCEPTS PRACTICE
// ========================================

console.log("🚀 ADVANCED JS CONCEPTS PRACTICE STARTED 🚀\n");

// ========================================
// 1. SYMBOLS - UNIQUE IDENTIFIERS
// ========================================

console.log("🔑 1. SYMBOLS - UNIQUE IDENTIFIERS");
console.log("===================================");

// Creating symbols
const symbol1 = Symbol('description');
const symbol2 = Symbol('description');
const symbol3 = Symbol();

console.log("Symbols:", { symbol1, symbol2, symbol3 });
console.log("Symbols are unique:", symbol1 === symbol2); // false
console.log("Symbol description:", symbol1.description);

// Symbols as object properties
const user = {
    [Symbol('id')]: 123,
    [Symbol('secret')]: 'hidden data',
    name: 'John',
    age: 30
};

console.log("Object with symbols:", user);
console.log("Symbol properties are hidden from Object.keys()");

// Symbol.for() - Global symbol registry
const globalSymbol1 = Symbol.for('shared');
const globalSymbol2 = Symbol.for('shared');
console.log("Global symbols are shared:", globalSymbol1 === globalSymbol2);

// Well-known symbols
const iterableObject = {
    [Symbol.iterator]() {
        let index = 0;
        const data = ['a', 'b', 'c'];
        
        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

console.log("Iterable object:", [...iterableObject]);

console.log("\n");

// ========================================
// 2. GENERATORS AND ITERATORS
// ========================================

console.log("🔄 2. GENERATORS AND ITERATORS");
console.log("=================================");

// Basic generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return 'finished';
}

const gen = numberGenerator();
console.log("Generator values:");
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 'finished', done: true }

// Generator with infinite sequence
function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibGen = fibonacciGenerator();
const fibNumbers = [];
for (let i = 0; i < 8; i++) {
    fibNumbers.push(fibGen.next().value);
}
console.log("Fibonacci sequence:", fibNumbers);

// Generator with parameters
function* parameterGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const rangeGen = parameterGenerator(5, 10);
console.log("Range generator:", [...rangeGen]);

// Async generator
async function* asyncDataGenerator() {
    const data = ['a', 'b', 'c'];
    
    for (const item of data) {
        await new Promise(resolve => setTimeout(resolve, 100));
        yield item;
    }
}

console.log("\n");

// ========================================
// 3. PROXIES - OBJECT INTERCEPTION
// ========================================

console.log("🎭 3. PROXIES - OBJECT INTERCEPTION");
console.log("====================================");

// Basic proxy
const target = { name: 'John', age: 30 };
const handler = {
    get(target, prop, receiver) {
        console.log(`Getting property: ${prop}`);
        return target[prop];
    },
    set(target, prop, value, receiver) {
        console.log(`Setting property: ${prop} = ${value}`);
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        console.log(`Checking if property exists: ${prop}`);
        return prop in target;
    }
};

const proxy = new Proxy(target, handler);
console.log("Proxy usage:");
proxy.name; // Triggers get trap
proxy.age = 31; // Triggers set trap
'name' in proxy; // Triggers has trap

// Validation proxy
const validationHandler = {
    set(target, prop, value) {
        if (prop === 'age' && (typeof value !== 'number' || value < 0)) {
            throw new Error('Age must be a positive number');
        }
        if (prop === 'email' && !value.includes('@')) {
            throw new Error('Invalid email format');
        }
        
        target[prop] = value;
        return true;
    }
};

const userProxy = new Proxy({}, validationHandler);
try {
    userProxy.age = 25;
    userProxy.email = 'john@example.com';
    console.log("Validation proxy:", userProxy);
} catch (error) {
    console.error("Validation error:", error.message);
}

// Logging proxy
const loggingHandler = {
    get(target, prop) {
        const value = target[prop];
        console.log(`Accessed: ${prop} = ${value}`);
        return value;
    },
    set(target, prop, value) {
        console.log(`Modified: ${prop} = ${value}`);
        target[prop] = value;
        return true;
    }
};

const logProxy = new Proxy({ name: 'Alice' }, loggingHandler);
logProxy.name;
logProxy.name = 'Bob';

console.log("\n");

// ========================================
// 4. REFLECT API - OBJECT OPERATIONS
// ========================================

console.log("🔍 4. REFLECT API - OBJECT OPERATIONS");
console.log("=======================================");

const obj = { x: 1, y: 2 };

// Reflect.get()
console.log("Reflect.get:", Reflect.get(obj, 'x'));

// Reflect.set()
Reflect.set(obj, 'z', 3);
console.log("After Reflect.set:", obj);

// Reflect.has()
console.log("Reflect.has 'x':", Reflect.has(obj, 'x'));
console.log("Reflect.has 'w':", Reflect.has(obj, 'w'));

// Reflect.ownKeys()
console.log("Reflect.ownKeys:", Reflect.ownKeys(obj));

// Reflect.construct()
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = Reflect.construct(Person, ['John', 30]);
console.log("Reflect.construct:", person);

// Reflect.apply()
function greet(name, greeting) {
    return `${greeting}, ${name}!`;
}

const result = Reflect.apply(greet, null, ['Alice', 'Hello']);
console.log("Reflect.apply:", result);

console.log("\n");

// ========================================
// 5. WEAKMAP AND WEAKSET
// ========================================

console.log("💪 5. WEAKMAP AND WEAKSET");
console.log("============================");

// WeakMap - keys are objects, weakly referenced
const weakMap = new WeakMap();
let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakMap.set(obj1, 'data for obj1');
weakMap.set(obj2, 'data for obj2');

console.log("WeakMap get:", weakMap.get(obj1));
console.log("WeakMap has:", weakMap.has(obj2));

// WeakSet - stores objects, weakly referenced
const weakSet = new WeakSet();
let user1 = { name: 'Alice' };
let user2 = { name: 'Bob' };

weakSet.add(user1);
weakSet.add(user2);

console.log("WeakSet has user1:", weakSet.has(user1));
console.log("WeakSet has user2:", weakSet.has(user2));

// Memory management demonstration
obj1 = null; // obj1 can be garbage collected
user1 = null; // user1 can be garbage collected

console.log("After setting references to null, objects can be garbage collected");

console.log("\n");

// ========================================
// 6. TYPED ARRAYS AND ARRAY BUFFERS
// ========================================

console.log("📊 6. TYPED ARRAYS AND ARRAY BUFFERS");
console.log("======================================");

// ArrayBuffer - raw binary data
const buffer = new ArrayBuffer(16);
console.log("ArrayBuffer size:", buffer.byteLength);

// TypedArray views
const int32View = new Int32Array(buffer);
const uint8View = new Uint8Array(buffer);

// Set values
int32View[0] = 42;
int32View[1] = 100;

console.log("Int32Array view:", int32View);
console.log("Uint8Array view:", uint8View);

// DataView for flexible data access
const dataView = new DataView(buffer);
dataView.setFloat64(8, 3.14159, true); // little-endian
console.log("DataView float64:", dataView.getFloat64(8, true));

// Creating typed arrays from existing data
const numbers = [1, 2, 3, 4, 5];
const int8Array = new Int8Array(numbers);
const float32Array = new Float32Array(numbers);

console.log("Int8Array:", int8Array);
console.log("Float32Array:", float32Array);

console.log("\n");

// ========================================
// 7. INTERNATIONALIZATION (INTL)
// ========================================

console.log("🌍 7. INTERNATIONALIZATION (INTL)");
console.log("===================================");

// Number formatting
const number = 1234567.89;
const usNumber = new Intl.NumberFormat('en-US').format(number);
const deNumber = new Intl.NumberFormat('de-DE').format(number);
const jpNumber = new Intl.NumberFormat('ja-JP').format(number);

console.log("Number formatting:");
console.log("US:", usNumber);
console.log("Germany:", deNumber);
console.log("Japan:", jpNumber);

// Currency formatting
const price = 1234.56;
const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
const eur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);

console.log("Currency formatting:");
console.log("USD:", usd);
console.log("EUR:", eur);

// Date formatting
const date = new Date();
const usDate = new Intl.DateTimeFormat('en-US').format(date);
const deDate = new Intl.DateTimeFormat('de-DE').format(date);
const jpDate = new Intl.DateTimeFormat('ja-JP').format(date);

console.log("Date formatting:");
console.log("US:", usDate);
console.log("Germany:", deDate);
console.log("Japan:", jpDate);

// Relative time formatting
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log("Relative time:", rtf.format(-1, 'day')); // "yesterday"

console.log("\n");

// ========================================
// 8. PRACTICAL EXAMPLES
// ========================================

console.log("💡 8. PRACTICAL EXAMPLES");
console.log("=========================");

// Example 1: Private properties using symbols
const _privateData = Symbol('privateData');
const _privateMethod = Symbol('privateMethod');

class SecureClass {
    constructor() {
        this[_privateData] = 'secret information';
    }
    
    [_privateMethod]() {
        return 'private method called';
    }
    
    publicMethod() {
        return this[_privateMethod]() + ' from ' + this[_privateData];
    }
}

const secure = new SecureClass();
console.log("Secure class public method:", secure.publicMethod());
// console.log(secure[_privateData]); // This would work but shows the pattern

// Example 2: Observable object using Proxy
function createObservable(obj, onChange) {
    return new Proxy(obj, {
        set(target, prop, value) {
            const oldValue = target[prop];
            target[prop] = value;
            onChange(prop, oldValue, value);
            return true;
        }
    });
}

const observable = createObservable({ name: 'John' }, (prop, oldVal, newVal) => {
    console.log(`Property ${prop} changed from ${oldVal} to ${newVal}`);
});

observable.name = 'Jane';

// Example 3: Generator-based state machine
function* stateMachine() {
    let state = 'idle';
    
    while (true) {
        const action = yield state;
        
        switch (state) {
            case 'idle':
                if (action === 'start') state = 'running';
                break;
            case 'running':
                if (action === 'pause') state = 'paused';
                else if (action === 'stop') state = 'idle';
                break;
            case 'paused':
                if (action === 'resume') state = 'running';
                else if (action === 'stop') state = 'idle';
                break;
        }
    }
}

const machine = stateMachine();
console.log("State machine:", machine.next().value); // 'idle'
console.log("State machine:", machine.next('start').value); // 'running'
console.log("State machine:", machine.next('pause').value); // 'paused'

console.log("\n");

// ========================================
// 9. PRACTICE EXERCISES
// ========================================

console.log("🎯 9. PRACTICE EXERCISES");
console.log("=========================");

console.log("Try these exercises:");
console.log("1. Create a symbol-based private property system");
console.log("2. Implement a generator that yields prime numbers");
console.log("3. Build a proxy-based validation system");
console.log("4. Create a WeakMap-based cache with TTL");
console.log("5. Implement a typed array-based image processor");

// Exercise 1: Symbol-based private properties
const _counter = Symbol('counter');
const _increment = Symbol('increment');

class Counter {
    constructor() {
        this[_counter] = 0;
    }
    
    [_increment]() {
        this[_counter]++;
    }
    
    getCount() {
        return this[_counter];
    }
    
    increment() {
        this[_increment]();
        return this.getCount();
    }
}

const counter = new Counter();
console.log("Exercise 1 - Symbol-based private properties:");
console.log("Initial count:", counter.getCount());
console.log("After increment:", counter.increment());

// Exercise 2: Prime number generator
function* primeGenerator() {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    let num = 2;
    while (true) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

const primeGen = primeGenerator();
const primes = [];
for (let i = 0; i < 5; i++) {
    primes.push(primeGen.next().value);
}
console.log("Exercise 2 - Prime numbers:", primes);

// Exercise 3: Proxy-based validation
function createValidatedObject(schema) {
    return new Proxy({}, {
        set(target, prop, value) {
            if (schema[prop]) {
                const validator = schema[prop];
                if (!validator(value)) {
                    throw new Error(`Invalid value for ${prop}: ${value}`);
                }
            }
            target[prop] = value;
            return true;
        }
    });
}

const userSchema = {
    age: (value) => typeof value === 'number' && value >= 0 && value <= 150,
    email: (value) => typeof value === 'string' && value.includes('@'),
    name: (value) => typeof value === 'string' && value.length > 0
};

const validatedUser = createValidatedObject(userSchema);
try {
    validatedUser.name = 'John';
    validatedUser.age = 30;
    validatedUser.email = 'john@example.com';
    console.log("Exercise 3 - Validated object:", validatedUser);
} catch (error) {
    console.error("Validation error:", error.message);
}

console.log("\n🚀 ADVANCED JS CONCEPTS PRACTICE COMPLETED! 🚀");
console.log("Practice these advanced concepts regularly!");