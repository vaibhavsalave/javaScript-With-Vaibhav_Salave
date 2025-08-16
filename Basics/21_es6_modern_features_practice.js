// ========================================
// ES6+ MODERN FEATURES PRACTICE
// ========================================

console.log("🚀 ES6+ MODERN FEATURES PRACTICE STARTED 🚀\n");

// ========================================
// 1. DESTRUCTURING ASSIGNMENT
// ========================================

console.log("🎯 1. DESTRUCTURING ASSIGNMENT");
console.log("================================");

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log("Array destructuring:", { first, second, rest });

// Object destructuring
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA',
    hobbies: ['reading', 'gaming']
};

const { name, age, ...otherDetails } = person;
console.log("Object destructuring:", { name, age, otherDetails });

// Nested destructuring
const company = {
    name: 'TechCorp',
    address: {
        street: '123 Tech St',
        city: 'Silicon Valley',
        country: 'USA'
    },
    employees: [
        { id: 1, name: 'Alice', role: 'Developer' },
        { id: 2, name: 'Bob', role: 'Designer' }
    ]
};

const { 
    name: companyName, 
    address: { city: companyCity }, 
    employees: [firstEmployee] 
} = company;

console.log("Nested destructuring:", { companyName, companyCity, firstEmployee });

// Destructuring with default values
const settings = { theme: 'dark' };
const { theme, language = 'en', notifications = true } = settings;
console.log("Destructuring with defaults:", { theme, language, notifications });

// Destructuring function parameters
function processUser({ name, age, email = 'no-email@example.com' }) {
    return `User: ${name} (${age}) - ${email}`;
}

console.log("Function parameter destructuring:", processUser({ name: 'Jane', age: 25 }));

console.log("\n");

// ========================================
// 2. SPREAD OPERATOR
// ========================================

console.log("📤 2. SPREAD OPERATOR");
console.log("=======================");

// Array spreading
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'lettuce'];
const allFood = [...fruits, ...vegetables, 'potato'];
console.log("Spread arrays:", allFood);

// Object spreading
const baseConfig = { timeout: 5000, retries: 3 };
const userConfig = { timeout: 10000, apiKey: 'abc123' };
const finalConfig = { ...baseConfig, ...userConfig };
console.log("Spread objects:", finalConfig);

// Function arguments spreading
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Spread function arguments:", sum(1, 2, 3, 4, 5));

// Copying arrays and objects
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
const originalObject = { x: 1, y: 2 };
const copiedObject = { ...originalObject };

console.log("Original array:", originalArray);
console.log("Copied array:", copiedArray);
console.log("Arrays are different objects:", originalArray !== copiedArray);

// Conditional spreading
const isProduction = false;
const productionConfig = { debug: false, logging: 'error' };
const developmentConfig = { debug: true, logging: 'verbose' };

const config = {
    baseUrl: 'https://api.example.com',
    ...(isProduction ? productionConfig : developmentConfig)
};

console.log("Conditional spreading:", config);

console.log("\n");

// ========================================
// 3. TEMPLATE LITERALS
// ========================================

console.log("📝 3. TEMPLATE LITERALS");
console.log("=========================");

// Basic template literals
const userName = 'Alice';
const userAge = 28;
const greeting = `Hello, ${userName}! You are ${userAge} years old.`;
console.log("Basic template literal:", greeting);

// Multi-line strings
const multiLineText = `
    This is a multi-line
    template literal that
    preserves formatting
    and line breaks.
`;
console.log("Multi-line template:", multiLineText);

// Expression evaluation
const price = 29.99;
const quantity = 3;
const total = price * quantity;
const receipt = `
    Receipt:
    Price per item: $${price}
    Quantity: ${quantity}
    Total: $${total.toFixed(2)}
`;
console.log("Expression evaluation:", receipt);

// Tagged templates
function highlight(strings, ...values) {
    let result = '';
    strings.forEach((string, i) => {
        result += string;
        if (values[i]) {
            result += `**${values[i]}**`;
        }
    });
    return result;
}

const highlightedText = highlight`Hello ${userName}, you are ${userAge} years old!`;
console.log("Tagged template:", highlightedText);

// Template literal with conditional logic
const userStatus = 'active';
const statusMessage = `
    User Status: ${userStatus === 'active' ? '🟢 Active' : '🔴 Inactive'}
    Last Login: ${new Date().toLocaleDateString()}
    ${userStatus === 'active' ? 'Welcome back!' : 'Please log in.'}
`;
console.log("Conditional template:", statusMessage);

console.log("\n");

// ========================================
// 4. ARROW FUNCTIONS
// ========================================

console.log("🏹 4. ARROW FUNCTIONS");
console.log("=======================");

// Basic arrow functions
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = x => x ** 2;

console.log("Arrow functions:", {
    add: add(5, 3),
    multiply: multiply(4, 6),
    square: square(7)
});

// Arrow functions with object return
const createUser = (name, age) => ({ name, age, isAdult: age >= 18 });
console.log("Object return arrow function:", createUser('Bob', 25));

// Arrow functions in array methods
const numbers2 = [1, 2, 3, 4, 5];
const doubled = numbers2.map(n => n * 2);
const evens = numbers2.filter(n => n % 2 === 0);
const sum = numbers2.reduce((acc, n) => acc + n, 0);

console.log("Arrow functions in array methods:", {
    original: numbers2,
    doubled,
    evens,
    sum
});

// Arrow functions with multiple statements
const processData = (data) => {
    const filtered = data.filter(item => item.value > 0);
    const transformed = filtered.map(item => ({ ...item, processed: true }));
    return transformed;
};

const testData = [
    { id: 1, value: 10 },
    { id: 2, value: -5 },
    { id: 3, value: 20 }
];

console.log("Multi-statement arrow function:", processData(testData));

// Arrow functions and 'this' context
const calculator = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: function(factor) {
        return this.numbers.map(n => n * factor);
    },
    // Arrow function preserves 'this' from outer scope
    getNumbers: () => this.numbers
};

console.log("Calculator multiplyBy:", calculator.multiplyBy(2));

console.log("\n");

// ========================================
// 5. DEFAULT PARAMETERS
// ========================================

console.log("⚙️ 5. DEFAULT PARAMETERS");
console.log("==========================");

// Function with default parameters
function createProfile(name, age = 18, city = 'Unknown', isActive = true) {
    return { name, age, city, isActive };
}

console.log("Default parameters:", {
    allDefaults: createProfile('John'),
    someDefaults: createProfile('Jane', 25),
    noDefaults: createProfile('Bob', 30, 'New York', false)
});

// Default parameters with expressions
function createId(prefix = 'ID', timestamp = Date.now()) {
    return `${prefix}_${timestamp}`;
}

console.log("Default parameters with expressions:", {
    id1: createId(),
    id2: createId('USER'),
    id3: createId('ORDER', 1234567890)
});

// Default parameters and destructuring
function processConfig({ 
    apiUrl = 'https://api.example.com',
    timeout = 5000,
    retries = 3,
    ...otherOptions 
} = {}) {
    return { apiUrl, timeout, retries, otherOptions };
}

console.log("Default parameters with destructuring:", {
    noConfig: processConfig(),
    partialConfig: processConfig({ timeout: 10000 }),
    fullConfig: processConfig({ 
        apiUrl: 'https://custom.api.com',
        timeout: 15000,
        retries: 5,
        debug: true
    })
});

console.log("\n");

// ========================================
// 6. REST PARAMETERS
// ========================================

console.log("📦 6. REST PARAMETERS");
console.log("=======================");

// Function with rest parameters
function collectData(primary, secondary, ...additional) {
    return {
        primary,
        secondary,
        additional,
        totalCount: 2 + additional.length
    };
}

console.log("Rest parameters:", collectData('A', 'B', 'C', 'D', 'E'));

// Rest parameters with destructuring
function processItems(first, second, ...rest) {
    return {
        first,
        second,
        rest,
        restCount: rest.length
    };
}

console.log("Rest with destructuring:", processItems('Item1', 'Item2', 'Item3', 'Item4'));

// Rest parameters in arrow functions
const combineArrays = (...arrays) => arrays.flat();
const arrays = [[1, 2], [3, 4], [5, 6]];
console.log("Rest in arrow function:", combineArrays(...arrays));

// Rest parameters for object properties
function extractUserInfo({ name, email, ...otherInfo }) {
    return {
        basicInfo: { name, email },
        additionalInfo: otherInfo
    };
}

const userInfo = {
    name: 'John',
    email: 'john@example.com',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'gaming']
};

console.log("Rest for object properties:", extractUserInfo(userInfo));

console.log("\n");

// ========================================
// 7. MODULES AND IMPORTS
// ========================================

console.log("📚 7. MODULES AND IMPORTS");
console.log("===========================");

// Note: In a real environment, these would be separate files
// This is a demonstration of the syntax

// Simulating module exports
const mathUtils = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

const stringUtils = {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    reverse: (str) => str.split('').reverse().join(''),
    truncate: (str, length) => str.length > length ? str.slice(0, length) + '...' : str
};

// Simulating named exports
export const { add, subtract, multiply, divide } = mathUtils;
export const { capitalize, reverse, truncate } = stringUtils;

// Simulating default export
export default class Calculator {
    constructor() {
        this.history = [];
    }
    
    calculate(operation, a, b) {
        let result;
        switch (operation) {
            case 'add': result = add(a, b); break;
            case 'subtract': result = subtract(a, b); break;
            case 'multiply': result = multiply(a, b); break;
            case 'divide': result = divide(a, b); break;
            default: throw new Error('Unknown operation');
        }
        
        this.history.push({ operation, a, b, result });
        return result;
    }
    
    getHistory() {
        return this.history;
    }
}

// Simulating import statements (these would be in another file)
// import { add, multiply } from './mathUtils.js';
// import Calculator from './Calculator.js';
// import * as utils from './stringUtils.js';

console.log("Module simulation:", {
    mathUtils: Object.keys(mathUtils),
    stringUtils: Object.keys(stringUtils)
});

console.log("\n");

// ========================================
// 8. CLASSES AND INHERITANCE
// ========================================

console.log("🏗️ 8. CLASSES AND INHERITANCE");
console.log("===============================");

// Basic class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
    
    start() {
        return `${this.getInfo()} is starting...`;
    }
}

// Class inheritance
class Car extends Vehicle {
    constructor(make, model, year, fuelType) {
        super(make, model, year);
        this.fuelType = fuelType;
    }
    
    getInfo() {
        return `${super.getInfo()} (${this.fuelType})`;
    }
    
    honk() {
        return 'Beep! Beep!';
    }
}

// Class with static methods
class MathHelper {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static PI = 3.14159;
}

// Class with getters and setters
class BankAccount {
    constructor(initialBalance = 0) {
        this._balance = initialBalance;
    }
    
    get balance() {
        return this._balance;
    }
    
    set balance(value) {
        if (value < 0) {
            throw new Error('Balance cannot be negative');
        }
        this._balance = value;
    }
    
    deposit(amount) {
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}`;
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
        return `Withdrew $${amount}. New balance: $${this.balance}`;
    }
}

// Using classes
const vehicle = new Vehicle('Toyota', 'Camry', 2020);
const car = new Car('Honda', 'Civic', 2021, 'Gasoline');
const account = new BankAccount(1000);

console.log("Classes and inheritance:", {
    vehicle: vehicle.getInfo(),
    car: car.getInfo(),
    carHonk: car.honk(),
    mathAdd: MathHelper.add(5, 3),
    mathPI: MathHelper.PI,
    accountBalance: account.balance,
    deposit: account.deposit(500),
    withdraw: account.withdraw(200)
});

console.log("\n");

// ========================================
// 9. MODERN ARRAY AND OBJECT METHODS
// ========================================

console.log("🔄 9. MODERN ARRAY AND OBJECT METHODS");
console.log("=======================================");

// Array.from() - Create array from array-like objects
const arrayFromString = Array.from('Hello');
const arrayFromSet = Array.from(new Set([1, 2, 2, 3, 3, 4]));
const arrayFromMap = Array.from(new Map([['a', 1], ['b', 2]]));

console.log("Array.from examples:", {
    fromString: arrayFromString,
    fromSet: arrayFromSet,
    fromMap: arrayFromMap
});

// Array.of() - Create array from arguments
const arrayOf = Array.of(1, 2, 3, 4, 5);
console.log("Array.of:", arrayOf);

// find() and findIndex()
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

const userOver30 = users.find(user => user.age > 30);
const userOver30Index = users.findIndex(user => user.age > 30);

console.log("Find methods:", {
    userOver30,
    userOver30Index
});

// includes() for arrays
const colors = ['red', 'green', 'blue'];
console.log("Array includes:", {
    hasRed: colors.includes('red'),
    hasYellow: colors.includes('yellow')
});

// Object methods
const obj = { a: 1, b: 2, c: 3 };

const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);

console.log("Object methods:", {
    keys,
    values,
    entries
});

// Object.assign() and spread for merging
const defaults = { theme: 'light', language: 'en' };
const userPrefs = { theme: 'dark' };
const merged = Object.assign({}, defaults, userPrefs);
const mergedSpread = { ...defaults, ...userPrefs };

console.log("Object merging:", {
    defaults,
    userPrefs,
    merged,
    mergedSpread
});

console.log("\n");

// ========================================
// 10. PRACTICAL EXAMPLES
// ========================================

console.log("💡 10. PRACTICAL EXAMPLES");
console.log("==========================");

// Example 1: Configuration builder
class ConfigBuilder {
    constructor() {
        this.config = {};
    }
    
    setBaseUrl(url) {
        this.config.baseUrl = url;
        return this;
    }
    
    setTimeout(timeout) {
        this.config.timeout = timeout;
        return this;
    }
    
    setRetries(retries) {
        this.config.retries = retries;
        return this;
    }
    
    setHeaders(headers) {
        this.config.headers = { ...this.config.headers, ...headers };
        return this;
    }
    
    build() {
        return { ...this.config };
    }
}

const config = new ConfigBuilder()
    .setBaseUrl('https://api.example.com')
    .setTimeout(5000)
    .setRetries(3)
    .setHeaders({ 'Authorization': 'Bearer token123' })
    .build();

console.log("Configuration builder:", config);

// Example 2: Data transformer
class DataTransformer {
    static transform(data, transformations) {
        return data.map(item => {
            let transformed = { ...item };
            
            transformations.forEach(({ field, transform, condition }) => {
                if (!condition || condition(transformed)) {
                    transformed[field] = transform(transformed[field]);
                }
            });
            
            return transformed;
        });
    }
}

const sampleData = [
    { id: 1, name: 'john doe', age: 25, status: 'active' },
    { id: 2, name: 'jane smith', age: 30, status: 'inactive' },
    { id: 3, name: 'bob johnson', age: 35, status: 'active' }
];

const transformations = [
    { field: 'name', transform: name => name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') },
    { field: 'age', transform: age => age + ' years old' },
    { field: 'status', transform: status => status.toUpperCase(), condition: item => item.status === 'active' }
];

const transformedData = DataTransformer.transform(sampleData, transformations);
console.log("Data transformer:", transformedData);

// Example 3: Event system with modern features
class EventSystem {
    constructor() {
        this.events = new Map();
    }
    
    on(event, callback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        this.events.get(event).push(callback);
    }
    
    emit(event, ...data) {
        const callbacks = this.events.get(event) || [];
        callbacks.forEach(callback => callback(...data));
    }
    
    off(event, callback) {
        const callbacks = this.events.get(event) || [];
        const index = callbacks.indexOf(callback);
        if (index > -1) {
            callbacks.splice(index, 1);
        }
    }
    
    once(event, callback) {
        const onceCallback = (...args) => {
            callback(...args);
            this.off(event, onceCallback);
        };
        this.on(event, onceCallback);
    }
}

const eventSystem = new EventSystem();

eventSystem.on('userLogin', (user) => {
    console.log(`User ${user.name} logged in`);
});

eventSystem.once('userLogout', (user) => {
    console.log(`User ${user.name} logged out (one-time event)`);
});

// Simulate events
eventSystem.emit('userLogin', { name: 'John', id: 123 });
eventSystem.emit('userLogout', { name: 'John', id: 123 });
eventSystem.emit('userLogout', { name: 'John', id: 123 }); // Won't trigger

console.log("\n");

// ========================================
// 11. PRACTICE EXERCISES
// ========================================

console.log("🎯 11. PRACTICE EXERCISES");
console.log("==========================");

console.log("Try these exercises:");
console.log("1. Create a function that uses destructuring to swap array elements");
console.log("2. Implement a class with private fields using # syntax");
console.log("3. Build a function that uses rest parameters to create a shopping cart");
console.log("4. Create a tagged template that formats currency");
console.log("5. Implement a function that uses modern array methods to find duplicates");

// Exercise 1: Array element swapping with destructuring
function swapArrayElements(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

const testArray = [1, 2, 3, 4, 5];
console.log("Exercise 1 - Array swapping:", swapArrayElements([...testArray], 0, 4));

// Exercise 2: Shopping cart with rest parameters
function createShoppingCart(...items) {
    const cart = {
        items: items.map((item, index) => ({ ...item, id: index + 1 })),
        getTotal() {
            return this.items.reduce((total, item) => total + item.price, 0);
        },
        addItem(item) {
            this.items.push({ ...item, id: this.items.length + 1 });
        }
    };
    
    return cart;
}

const cart = createShoppingCart(
    { name: 'Laptop', price: 999 },
    { name: 'Mouse', price: 25 }
);

console.log("Exercise 2 - Shopping cart:", {
    items: cart.items,
    total: cart.getTotal()
});

// Exercise 3: Find duplicates with modern array methods
function findDuplicates(arr) {
    const counts = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    
    return Object.entries(counts)
        .filter(([item, count]) => count > 1)
        .map(([item, count]) => ({ item, count }));
}

const duplicateArray = [1, 2, 2, 3, 4, 4, 4, 5];
console.log("Exercise 3 - Find duplicates:", findDuplicates(duplicateArray));

console.log("\n🚀 ES6+ MODERN FEATURES PRACTICE COMPLETED! 🚀");
console.log("Practice these modern JavaScript features regularly!");