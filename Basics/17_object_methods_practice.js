// ========================================
// OBJECT METHODS & MANIPULATION PRACTICE
// ========================================

console.log("🚀 OBJECT METHODS PRACTICE STARTED 🚀\n");

// ========================================
// 1. OBJECT CREATION METHODS
// ========================================

console.log("🏗️ 1. OBJECT CREATION METHODS");
console.log("==============================");

// Object literal
const person1 = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Object constructor
const person2 = new Object();
person2.name = 'Jane';
person2.age = 25;
person2.city = 'Los Angeles';

// Object.create() with prototype
const personProto = {
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

const person3 = Object.create(personProto);
person3.name = 'Bob';
person3.age = 35;

// Factory function
function createPerson(name, age, city) {
    return {
        name,
        age,
        city,
        greet() {
            return `Hi, I'm ${this.name} from ${this.city}`;
        }
    };
}

const person4 = createPerson('Alice', 28, 'Chicago');

console.log("Person 1:", person1);
console.log("Person 2:", person2);
console.log("Person 3:", person3);
console.log("Person 3 greeting:", person3.greet());
console.log("Person 4:", person4);
console.log("Person 4 greeting:", person4.greet());

console.log("\n");

// ========================================
// 2. OBJECT PROPERTY METHODS
// ========================================

console.log("🔑 2. OBJECT PROPERTY METHODS");
console.log("==============================");

const config = {
    apiKey: 'abc123',
    baseUrl: 'https://api.example.com',
    timeout: 5000
};

// Object.keys() - Get array of property names
const propertyNames = Object.keys(config);
console.log("Property names:", propertyNames);

// Object.values() - Get array of property values
const propertyValues = Object.values(config);
console.log("Property values:", propertyValues);

// Object.entries() - Get array of [key, value] pairs
const propertyEntries = Object.entries(config);
console.log("Property entries:", propertyEntries);

// Object.hasOwnProperty() - Check if property exists
console.log("Has apiKey:", config.hasOwnProperty('apiKey'));
console.log("Has secretKey:", config.hasOwnProperty('secretKey'));

// in operator - Alternative way to check property existence
console.log("'apiKey' in config:", 'apiKey' in config);
console.log("'secretKey' in config:", 'secretKey' in config);

console.log("\n");

// ========================================
// 3. OBJECT MANIPULATION METHODS
// ========================================

console.log("⚙️ 3. OBJECT MANIPULATION METHODS");
console.log("==================================");

const originalUser = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

// Object.assign() - Copy properties from one object to another
const userCopy = Object.assign({}, originalUser);
console.log("User copy:", userCopy);

const userWithRole = Object.assign({}, originalUser, { role: 'admin' });
console.log("User with role:", userWithRole);

// Spread operator for object copying
const userSpread = { ...originalUser, department: 'Engineering' };
console.log("User with spread:", userSpread);

// Object.freeze() - Make object immutable
const frozenUser = Object.freeze({ ...originalUser });
console.log("Frozen user:", frozenUser);
// frozenUser.age = 31; // This will fail in strict mode

// Object.seal() - Prevent adding/removing properties but allow modification
const sealedUser = Object.seal({ ...originalUser });
sealedUser.age = 31; // This works
// sealedUser.newProp = 'value'; // This will fail
console.log("Sealed user:", sealedUser);

console.log("\n");

// ========================================
// 4. OBJECT DESCRIPTORS AND PROPERTIES
// ========================================

console.log("📝 4. OBJECT DESCRIPTORS AND PROPERTIES");
console.log("========================================");

const product = {};

// Object.defineProperty() - Define property with specific attributes
Object.defineProperty(product, 'name', {
    value: 'Laptop',
    writable: false, // Cannot be changed
    enumerable: true, // Will appear in loops
    configurable: false // Cannot be deleted or reconfigured
});

Object.defineProperty(product, 'price', {
    value: 999,
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(product, 'id', {
    value: 'LAP001',
    writable: false,
    enumerable: false, // Won't appear in loops
    configurable: false
});

console.log("Product:", product);
console.log("Product keys:", Object.keys(product)); // 'id' won't appear
console.log("Product entries:", Object.entries(product));

// Get property descriptor
const nameDescriptor = Object.getOwnPropertyDescriptor(product, 'name');
console.log("Name property descriptor:", nameDescriptor);

console.log("\n");

// ========================================
// 5. OBJECT PROTOTYPE AND INHERITANCE
// ========================================

console.log("🧬 5. OBJECT PROTOTYPE AND INHERITANCE");
console.log("=======================================");

// Constructor function
function Animal(name, species) {
    this.name = name;
    this.species = species;
}

Animal.prototype.makeSound = function() {
    return `${this.name} makes a sound`;
};

Animal.prototype.getInfo = function() {
    return `${this.name} is a ${this.species}`;
};

// Create instances
const dog = new Animal('Buddy', 'Dog');
const cat = new Animal('Whiskers', 'Cat');

console.log("Dog:", dog);
console.log("Dog sound:", dog.makeSound());
console.log("Dog info:", dog.getInfo());

// Check prototype
console.log("Is dog instance of Animal:", dog instanceof Animal);
console.log("Dog prototype:", Object.getPrototypeOf(dog));
console.log("Animal prototype:", Animal.prototype);

// Prototype chain
console.log("Dog hasOwnProperty makeSound:", dog.hasOwnProperty('makeSound'));
console.log("Dog hasOwnProperty name:", dog.hasOwnProperty('name'));

console.log("\n");

// ========================================
// 6. OBJECT UTILITY METHODS
// ========================================

console.log("🛠️ 6. OBJECT UTILITY METHODS");
console.log("==============================");

const data = {
    user: {
        name: 'John',
        profile: {
            email: 'john@example.com',
            preferences: {
                theme: 'dark',
                language: 'en'
            }
        }
    },
    settings: {
        notifications: true,
        autoSave: false
    }
};

// Deep cloning with JSON (simple objects only)
const dataClone = JSON.parse(JSON.stringify(data));
console.log("Data clone:", dataClone);

// Object.is() - Strict equality comparison
console.log("Object.is(0, -0):", Object.is(0, -0));
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));
console.log("Object.is(5, 5):", Object.is(5, 5));

// Object.getOwnPropertyNames() - Get all property names including non-enumerable
const allProps = Object.getOwnPropertyNames(product);
console.log("All product properties:", allProps);

// Object.getOwnPropertySymbols() - Get symbol properties
const symbolKey = Symbol('secretKey');
const objWithSymbols = {
    [symbolKey]: 'secret value',
    normalKey: 'normal value'
};

const symbols = Object.getOwnPropertySymbols(objWithSymbols);
console.log("Symbol properties:", symbols);

console.log("\n");

// ========================================
// 7. PRACTICAL EXAMPLES
// ========================================

console.log("💡 7. PRACTICAL EXAMPLES");
console.log("=========================");

// Example 1: Configuration management
class ConfigManager {
    constructor(defaultConfig = {}) {
        this.config = Object.freeze({ ...defaultConfig });
    }
    
    get(key) {
        return this.config[key];
    }
    
    has(key) {
        return key in this.config;
    }
    
    getAll() {
        return { ...this.config };
    }
}

const appConfig = new ConfigManager({
    apiUrl: 'https://api.app.com',
    timeout: 30000,
    retries: 3
});

console.log("App config:", appConfig.getAll());
console.log("Has timeout:", appConfig.has('timeout'));
console.log("API URL:", appConfig.get('apiUrl'));

// Example 2: Object validation
function validateUser(user) {
    const requiredFields = ['name', 'email', 'age'];
    const missingFields = requiredFields.filter(field => !(field in user));
    
    if (missingFields.length > 0) {
        return {
            isValid: false,
            errors: missingFields.map(field => `${field} is required`)
        };
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
        return {
            isValid: false,
            errors: ['Invalid email format']
        };
    }
    
    // Validate age
    if (user.age < 0 || user.age > 150) {
        return {
            isValid: false,
            errors: ['Age must be between 0 and 150']
        };
    }
    
    return { isValid: true, errors: [] };
}

const testUser1 = { name: 'John', email: 'john@example.com', age: 30 };
const testUser2 = { name: 'Jane', email: 'invalid-email', age: -5 };

console.log("User 1 validation:", validateUser(testUser1));
console.log("User 2 validation:", validateUser(testUser2));

// Example 3: Object transformation
const rawData = [
    { id: 1, name: 'Product A', category: 'electronics', price: 100 },
    { id: 2, name: 'Product B', category: 'clothing', price: 50 },
    { id: 3, name: 'Product C', category: 'electronics', price: 200 },
    { id: 4, name: 'Product D', category: 'books', price: 25 }
];

// Group by category
const groupedByCategory = rawData.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(product);
    return acc;
}, {});

console.log("Products grouped by category:", groupedByCategory);

// Calculate total by category
const totalByCategory = rawData.reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + product.price;
    return acc;
}, {});

console.log("Total price by category:", totalByCategory);

console.log("\n");

// ========================================
// 8. PRACTICE EXERCISES
// ========================================

console.log("🎯 8. PRACTICE EXERCISES");
console.log("=========================");

console.log("Try these exercises:");
console.log("1. Create a function that deep clones nested objects");
console.log("2. Implement object property watcher with getters/setters");
console.log("3. Create a function that merges objects deeply");
console.log("4. Build an object cache with TTL (time to live)");
console.log("5. Create an object validator with custom rules");

// Exercise 1: Deep clone function
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    
    const cloned = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

const nestedObj = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York'
    },
    hobbies: ['reading', 'gaming']
};

const clonedNested = deepClone(nestedObj);
console.log("Exercise 1 - Deep cloned object:", clonedNested);

// Exercise 2: Object property watcher
function createWatchedObject(obj, onChange) {
    const watched = {};
    
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];
            
            Object.defineProperty(watched, key, {
                get() {
                    return value;
                },
                set(newValue) {
                    const oldValue = value;
                    value = newValue;
                    onChange(key, oldValue, newValue);
                },
                enumerable: true,
                configurable: true
            });
        }
    }
    
    return watched;
}

const watchedUser = createWatchedObject(
    { name: 'John', age: 30 },
    (key, oldValue, newValue) => {
        console.log(`Property ${key} changed from ${oldValue} to ${newValue}`);
    }
);

console.log("Exercise 2 - Watched object:");
watchedUser.name = 'Jane';
watchedUser.age = 31;

console.log("\n🚀 OBJECT METHODS PRACTICE COMPLETED! 🚀");
console.log("Practice these object manipulation techniques regularly!");