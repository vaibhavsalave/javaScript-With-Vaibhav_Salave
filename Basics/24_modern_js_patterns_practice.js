// ========================================
// MODERN JAVASCRIPT PATTERNS & BEST PRACTICES
// ========================================

console.log("🚀 MODERN JS PATTERNS PRACTICE STARTED 🚀\n");

// ========================================
// 1. DESIGN PATTERNS - CREATIONAL
// ========================================

console.log("🏗️ 1. DESIGN PATTERNS - CREATIONAL");
console.log("=====================================");

// Singleton Pattern
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        
        this.data = [];
        Singleton.instance = this;
        return this;
    }
    
    addItem(item) {
        this.data.push(item);
    }
    
    getItems() {
        return [...this.data];
    }
    
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();
console.log("Singleton instances are the same:", singleton1 === singleton2);

singleton1.addItem('Item 1');
singleton2.addItem('Item 2');
console.log("Shared data:", singleton1.getItems());

// Factory Pattern
class UserFactory {
    static createUser(type, data) {
        switch (type) {
            case 'admin':
                return new AdminUser(data);
            case 'regular':
                return new RegularUser(data);
            case 'guest':
                return new GuestUser(data);
            default:
                throw new Error(`Unknown user type: ${type}`);
        }
    }
}

class AdminUser {
    constructor(data) {
        this.role = 'admin';
        this.permissions = ['read', 'write', 'delete', 'admin'];
        Object.assign(this, data);
    }
}

class RegularUser {
    constructor(data) {
        this.role = 'user';
        this.permissions = ['read', 'write'];
        Object.assign(this, data);
    }
}

class GuestUser {
    constructor(data) {
        this.role = 'guest';
        this.permissions = ['read'];
        Object.assign(this, data);
    }
}

const admin = UserFactory.createUser('admin', { name: 'Admin User' });
const regular = UserFactory.createUser('regular', { name: 'Regular User' });
console.log("Factory created users:", { admin, regular });

// Builder Pattern
class QueryBuilder {
    constructor() {
        this.query = {
            select: [],
            from: '',
            where: [],
            orderBy: [],
            limit: null
        };
    }
    
    select(...fields) {
        this.query.select = fields;
        return this;
    }
    
    from(table) {
        this.query.from = table;
        return this;
    }
    
    where(condition) {
        this.query.where.push(condition);
        return this;
    }
    
    orderBy(field, direction = 'ASC') {
        this.query.orderBy.push({ field, direction });
        return this;
    }
    
    limit(count) {
        this.query.limit = count;
        return this;
    }
    
    build() {
        return this.query;
    }
    
    toString() {
        let sql = `SELECT ${this.query.select.join(', ') || '*'} FROM ${this.query.from}`;
        
        if (this.query.where.length > 0) {
            sql += ` WHERE ${this.query.where.join(' AND ')}`;
        }
        
        if (this.query.orderBy.length > 0) {
            const orderClause = this.query.orderBy
                .map(order => `${order.field} ${order.direction}`)
                .join(', ');
            sql += ` ORDER BY ${orderClause}`;
        }
        
        if (this.query.limit) {
            sql += ` LIMIT ${this.query.limit}`;
        }
        
        return sql;
    }
}

const query = new QueryBuilder()
    .select('id', 'name', 'email')
    .from('users')
    .where('active = true')
    .where('age > 18')
    .orderBy('name', 'ASC')
    .limit(10);

console.log("Builder pattern query:", query.build());
console.log("SQL string:", query.toString());

console.log("\n");

// ========================================
// 2. DESIGN PATTERNS - STRUCTURAL
// ========================================

console.log("🔧 2. DESIGN PATTERNS - STRUCTURAL");
console.log("====================================");

// Adapter Pattern
class OldAPI {
    request(data) {
        return `Old API: ${JSON.stringify(data)}`;
    }
}

class NewAPI {
    fetch(endpoint, options) {
        return `New API: ${endpoint} with ${JSON.stringify(options)}`;
    }
}

class APIAdapter {
    constructor(oldAPI) {
        this.oldAPI = oldAPI;
    }
    
    fetch(endpoint, options) {
        // Convert new API format to old API format
        const oldFormat = {
            endpoint,
            ...options
        };
        return this.oldAPI.request(oldFormat);
    }
}

const oldAPI = new OldAPI();
const adapter = new APIAdapter(oldAPI);
console.log("Adapter pattern:", adapter.fetch('/users', { method: 'GET' }));

// Decorator Pattern
class Coffee {
    cost() {
        return 2;
    }
    
    description() {
        return 'Simple coffee';
    }
}

class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    cost() {
        return this.coffee.cost();
    }
    
    description() {
        return this.coffee.description();
    }
}

class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.5;
    }
    
    description() {
        return this.coffee.description() + ', milk';
    }
}

class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 0.2;
    }
    
    description() {
        return this.coffee.description() + ', sugar';
    }
}

const coffee = new Coffee();
const coffeeWithMilk = new MilkDecorator(coffee);
const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);

console.log("Decorator pattern:");
console.log("Simple coffee:", coffee.description(), `$${coffee.cost()}`);
console.log("With milk:", coffeeWithMilk.description(), `$${coffeeWithMilk.cost()}`);
console.log("With milk and sugar:", coffeeWithMilkAndSugar.description(), `$${coffeeWithMilkAndSugar.cost()}`);

// Facade Pattern
class ComplexSystem {
    methodA() {
        console.log('Complex method A executed');
        return 'A';
    }
    
    methodB() {
        console.log('Complex method B executed');
        return 'B';
    }
    
    methodC() {
        console.log('Complex method C executed');
        return 'C';
    }
}

class SystemFacade {
    constructor() {
        this.system = new ComplexSystem();
    }
    
    simpleOperation() {
        const resultA = this.system.methodA();
        const resultB = this.system.methodB();
        return `${resultA} + ${resultB}`;
    }
    
    complexOperation() {
        const resultA = this.system.methodA();
        const resultB = this.system.methodB();
        const resultC = this.system.methodC();
        return `${resultA} + ${resultB} + ${resultC}`;
    }
}

const facade = new SystemFacade();
console.log("Facade simple operation:", facade.simpleOperation());
console.log("Facade complex operation:", facade.complexOperation());

console.log("\n");

// ========================================
// 3. DESIGN PATTERNS - BEHAVIORAL
// ========================================

console.log("🎭 3. DESIGN PATTERNS - BEHAVIORAL");
console.log("====================================");

// Observer Pattern
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}

class Subject extends EventEmitter {
    constructor() {
        super();
        this.state = {};
    }
    
    setState(newState) {
        const oldState = { ...this.state };
        this.state = { ...this.state, ...newState };
        this.emit('stateChanged', { oldState, newState: this.state });
    }
    
    getState() {
        return { ...this.state };
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    
    update(data) {
        console.log(`Observer ${this.name} received update:`, data);
    }
}

const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.on('stateChanged', (data) => observer1.update(data));
subject.on('stateChanged', (data) => observer2.update(data));

subject.setState({ user: 'John' });
subject.setState({ theme: 'dark' });

// Strategy Pattern
class PaymentStrategy {
    pay(amount) {
        throw new Error('pay method must be implemented');
    }
}

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        return `Paid $${amount} using Credit Card`;
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        return `Paid $${amount} using PayPal`;
    }
}

class CryptoPayment extends PaymentStrategy {
    pay(amount) {
        return `Paid $${amount} using Cryptocurrency`;
    }
}

class PaymentProcessor {
    constructor() {
        this.strategy = null;
    }
    
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    
    processPayment(amount) {
        if (!this.strategy) {
            throw new Error('Payment strategy not set');
        }
        return this.strategy.pay(amount);
    }
}

const processor = new PaymentProcessor();
const strategies = {
    creditCard: new CreditCardPayment(),
    paypal: new PayPalPayment(),
    crypto: new CryptoPayment()
};

console.log("Strategy pattern:");
Object.entries(strategies).forEach(([name, strategy]) => {
    processor.setStrategy(strategy);
    console.log(`${name}:`, processor.processPayment(100));
});

// Command Pattern
class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }
    
    execute() {
        throw new Error('execute method must be implemented');
    }
    
    undo() {
        throw new Error('undo method must be implemented');
    }
}

class LightOnCommand extends Command {
    execute() {
        return this.receiver.turnOn();
    }
    
    undo() {
        return this.receiver.turnOff();
    }
}

class LightOffCommand extends Command {
    execute() {
        return this.receiver.turnOff();
    }
    
    undo() {
        return this.receiver.turnOn();
    }
}

class Light {
    turnOn() {
        return 'Light is ON';
    }
    
    turnOff() {
        return 'Light is OFF';
    }
}

class RemoteControl {
    constructor() {
        this.commands = [];
        this.history = [];
    }
    
    setCommand(command) {
        this.commands.push(command);
    }
    
    pressButton() {
        if (this.commands.length > 0) {
            const command = this.commands.shift();
            this.history.push(command);
            return command.execute();
        }
        return 'No command set';
    }
    
    undo() {
        if (this.history.length > 0) {
            const command = this.history.pop();
            return command.undo();
        }
        return 'Nothing to undo';
    }
}

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOn);
remote.setCommand(lightOff);

console.log("Command pattern:");
console.log("Button 1:", remote.pressButton());
console.log("Button 2:", remote.pressButton());
console.log("Undo:", remote.undo());

console.log("\n");

// ========================================
// 4. MODERN JAVASCRIPT PATTERNS
// ========================================

console.log("🚀 4. MODERN JAVASCRIPT PATTERNS");
console.log("==================================");

// Module Pattern with IIFE
const Calculator = (function() {
    // Private variables
    let history = [];
    
    // Private methods
    function addToHistory(operation, result) {
        history.push({ operation, result, timestamp: new Date() });
        if (history.length > 10) {
            history.shift(); // Keep only last 10 operations
        }
    }
    
    // Public API
    return {
        add(a, b) {
            const result = a + b;
            addToHistory(`${a} + ${b}`, result);
            return result;
        },
        
        subtract(a, b) {
            const result = a - b;
            addToHistory(`${a} - ${b}`, result);
            return result;
        },
        
        multiply(a, b) {
            const result = a * b;
            addToHistory(`${a} * ${b}`, result);
            return result;
        },
        
        divide(a, b) {
            if (b === 0) {
                throw new Error('Division by zero');
            }
            const result = a / b;
            addToHistory(`${a} / ${b}`, result);
            return result;
        },
        
        getHistory() {
            return [...history];
        },
        
        clearHistory() {
            history = [];
        }
    };
})();

console.log("Module pattern calculator:");
console.log("Add:", Calculator.add(5, 3));
console.log("Multiply:", Calculator.multiply(4, 6));
console.log("History:", Calculator.getHistory());

// Revealing Module Pattern
const UserModule = (function() {
    let users = [];
    let nextId = 1;
    
    function validateUser(user) {
        return user.name && user.email && user.age >= 0;
    }
    
    function findUserById(id) {
        return users.find(user => user.id === id);
    }
    
    return {
        addUser(userData) {
            if (!validateUser(userData)) {
                throw new Error('Invalid user data');
            }
            
            const user = { ...userData, id: nextId++ };
            users.push(user);
            return user;
        },
        
        getUser(id) {
            const user = findUserById(id);
            if (!user) {
                throw new Error('User not found');
            }
            return { ...user };
        },
        
        updateUser(id, updates) {
            const user = findUserById(id);
            if (!user) {
                throw new Error('User not found');
            }
            
            Object.assign(user, updates);
            return { ...user };
        },
        
        deleteUser(id) {
            const index = users.findIndex(user => user.id === id);
            if (index === -1) {
                throw new Error('User not found');
            }
            
            return users.splice(index, 1)[0];
        },
        
        getAllUsers() {
            return users.map(user => ({ ...user }));
        },
        
        getUserCount() {
            return users.length;
        }
    };
})();

console.log("Revealing module pattern:");
const user1 = UserModule.addUser({ name: 'John', email: 'john@example.com', age: 30 });
const user2 = UserModule.addUser({ name: 'Jane', email: 'jane@example.com', age: 25 });
console.log("Users:", UserModule.getAllUsers());
console.log("User count:", UserModule.getUserCount());

// Mixin Pattern
const EventMixin = {
    on(event, handler) {
        if (!this._events) {
            this._events = {};
        }
        if (!this._events[event]) {
            this._events[event] = [];
        }
        this._events[event].push(handler);
    },
    
    off(event, handler) {
        if (this._events && this._events[event]) {
            this._events[event] = this._events[event].filter(h => h !== handler);
        }
    },
    
    emit(event, data) {
        if (this._events && this._events[event]) {
            this._events[event].forEach(handler => handler(data));
        }
    }
};

const ValidationMixin = {
    validate(rules) {
        const errors = [];
        
        Object.entries(rules).forEach(([field, rule]) => {
            if (rule.required && !this[field]) {
                errors.push(`${field} is required`);
            }
            
            if (rule.minLength && this[field] && this[field].length < rule.minLength) {
                errors.push(`${field} must be at least ${rule.minLength} characters`);
            }
            
            if (rule.pattern && this[field] && !rule.pattern.test(this[field])) {
                errors.push(`${field} format is invalid`);
            }
        });
        
        return errors;
    }
};

// Apply mixins to a class
class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

// Apply mixins
Object.assign(Product.prototype, EventMixin, ValidationMixin);

const product = new Product('Laptop', 999, 'High-performance laptop');
product.on('priceChanged', (newPrice) => {
    console.log(`Price changed to $${newPrice}`);
});

const validationRules = {
    name: { required: true, minLength: 3 },
    price: { required: true },
    description: { required: true, minLength: 10 }
};

const validationErrors = product.validate(validationRules);
console.log("Validation errors:", validationErrors);

console.log("\n");

// ========================================
// 5. FUNCTIONAL PROGRAMMING PATTERNS
// ========================================

console.log("⚡ 5. FUNCTIONAL PROGRAMMING PATTERNS");
console.log("=====================================");

// Pure functions
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const square = x => x * x;

console.log("Pure functions:", {
    add: add(5, 3),
    multiply: multiply(4, 6),
    square: square(7)
});

// Function composition
const compose = (...functions) => (value) => {
    return functions.reduceRight((result, fn) => fn(result), value);
};

const pipe = (...functions) => (value) => {
    return functions.reduce((result, fn) => fn(result), value);
};

const addOne = x => x + 1;
const double = x => x * 2;
const squareNum = x => x ** 2;

const composed = compose(squareNum, double, addOne);
const piped = pipe(addOne, double, squareNum);

console.log("Function composition:", {
    composed: composed(3), // (3+1)*2^2 = 16
    piped: piped(3)        // (3+1)*2^2 = 16
});

// Partial application and currying
const partial = (fn, ...presetArgs) => {
    return function(...laterArgs) {
        return fn.apply(this, presetArgs.concat(laterArgs));
    };
};

const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...moreArgs) {
            return curried.apply(this, args.concat(moreArgs));
        };
    };
};

const formatCurrency = (currency, amount) => `${currency}${amount.toFixed(2)}`;
const formatUSD = partial(formatCurrency, '$');
const formatEUR = partial(formatCurrency, '€');

const curriedAdd = curry((a, b, c) => a + b + c);

console.log("Partial application and currying:", {
    usd: formatUSD(25.99),
    eur: formatEUR(25.99),
    curried: curriedAdd(1)(2)(3)
});

// Immutability helpers
const updateObject = (obj, path, value) => {
    const newObj = { ...obj };
    let current = newObj;
    
    for (let i = 0; i < path.length - 1; i++) {
        current[path[i]] = { ...current[path[i]] };
        current = current[path[i]];
    }
    
    current[path[path.length - 1]] = value;
    return newObj;
};

const updateArray = (arr, index, value) => {
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
};

const user = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York'
    },
    hobbies: ['reading', 'gaming']
};

const updatedUser = updateObject(user, ['address', 'city'], 'Los Angeles');
const updatedHobbies = updateArray(user.hobbies, 1, 'coding');

console.log("Immutability helpers:", {
    original: user,
    updatedUser,
    updatedHobbies
});

// Higher-order functions
const map = (fn, arr) => arr.map(fn);
const filter = (predicate, arr) => arr.filter(predicate);
const reduce = (fn, initial, arr) => arr.reduce(fn, initial);

const numbers = [1, 2, 3, 4, 5];
const doubled = map(x => x * 2, numbers);
const evens = filter(x => x % 2 === 0, numbers);
const sum = reduce((acc, x) => acc + x, 0, numbers);

console.log("Higher-order functions:", {
    original: numbers,
    doubled,
    evens,
    sum
});

console.log("\n");

// ========================================
// 6. PRACTICAL EXAMPLES
// ========================================

console.log("💡 6. PRACTICAL EXAMPLES");
console.log("=========================");

// Example 1: State management system
class Store {
    constructor(reducer, initialState = {}) {
        this.reducer = reducer;
        this.state = initialState;
        this.listeners = [];
        this.dispatch = this.dispatch.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.getState = this.getState.bind(this);
    }
    
    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener(this.state));
    }
    
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            const index = this.listeners.indexOf(listener);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        };
    }
    
    getState() {
        return this.state;
    }
}

// Reducer function
const todoReducer = (state = { todos: [], filter: 'all' }, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.text, completed: false }]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case 'SET_FILTER':
            return { ...state, filter: action.filter };
        default:
            return state;
    }
};

// Create store
const store = new Store(todoReducer);

// Subscribe to changes
const unsubscribe = store.subscribe((state) => {
    console.log('State updated:', state);
});

// Dispatch actions
store.dispatch({ type: 'ADD_TODO', text: 'Learn JavaScript' });
store.dispatch({ type: 'ADD_TODO', text: 'Build a project' });
store.dispatch({ type: 'TOGGLE_TODO', id: store.getState().todos[0].id });
store.dispatch({ type: 'SET_FILTER', filter: 'completed' });

unsubscribe();

// Example 2: Middleware system
const createMiddleware = (...middlewares) => {
    return (store) => (next) => (action) => {
        let index = -1;
        
        const executeMiddleware = (i) => {
            if (i <= index) {
                throw new Error('next() called multiple times');
            }
            index = i;
            
            if (i === middlewares.length) {
                return next(action);
            }
            
            const middleware = middlewares[i];
            return middleware(store)(executeMiddleware.bind(null, i + 1))(action);
        };
        
        return executeMiddleware(0);
    };
};

// Example middleware
const logger = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    const result = next(action);
    console.log('Next state:', store.getState());
    return result;
};

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }
    return next(action);
};

// Example 3: Plugin system
class PluginManager {
    constructor() {
        this.plugins = new Map();
        this.hooks = new Map();
    }
    
    registerPlugin(name, plugin) {
        this.plugins.set(name, plugin);
        
        if (plugin.hooks) {
            Object.entries(plugin.hooks).forEach(([hookName, handler]) => {
                if (!this.hooks.has(hookName)) {
                    this.hooks.set(hookName, []);
                }
                this.hooks.get(hookName).push(handler);
            });
        }
        
        if (plugin.init) {
            plugin.init();
        }
    }
    
    executeHook(hookName, data) {
        const handlers = this.hooks.get(hookName) || [];
        return handlers.reduce((result, handler) => handler(result), data);
    }
    
    getPlugin(name) {
        return this.plugins.get(name);
    }
}

// Example plugin
const loggingPlugin = {
    name: 'logging',
    hooks: {
        'beforeAction': (action) => {
            console.log('Before action:', action);
            return action;
        },
        'afterAction': (result) => {
            console.log('After action:', result);
            return result;
        }
    },
    init() {
        console.log('Logging plugin initialized');
    }
};

const pluginManager = new PluginManager();
pluginManager.registerPlugin('logging', loggingPlugin);

console.log("\n");

// ========================================
// 7. PRACTICE EXERCISES
// ========================================

console.log("🎯 7. PRACTICE EXERCISES");
console.log("=========================");

console.log("Try these exercises:");
console.log("1. Implement a memoization decorator");
console.log("2. Create a chainable API builder");
console.log("3. Build a simple dependency injection container");
console.log("4. Implement a pub/sub event system");
console.log("5. Create a simple caching system");

// Exercise 1: Memoization decorator
function memoize(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const cache = new Map();
    
    descriptor.value = function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log('Cache hit for:', key);
            return cache.get(key);
        }
        
        console.log('Cache miss for:', key);
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
    };
    
    return descriptor;
}

class MathOperations {
    @memoize
    fibonacci(n) {
        if (n <= 1) return n;
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
}

const math = new MathOperations();
console.log("Exercise 1 - Memoization decorator:");
console.log("Fibonacci 10:", math.fibonacci(10));
console.log("Fibonacci 10 (cached):", math.fibonacci(10));

// Exercise 2: Chainable API builder
class QueryBuilder {
    constructor() {
        this.query = {
            select: [],
            from: '',
            where: [],
            orderBy: [],
            limit: null
        };
    }
    
    select(...fields) {
        this.query.select = fields;
        return this;
    }
    
    from(table) {
        this.query.from = table;
        return this;
    }
    
    where(condition) {
        this.query.where.push(condition);
        return this;
    }
    
    orderBy(field, direction = 'ASC') {
        this.query.orderBy.push({ field, direction });
        return this;
    }
    
    limit(count) {
        this.query.limit = count;
        return this;
    }
    
    build() {
        return this.query;
    }
}

const queryBuilder = new QueryBuilder();
const builtQuery = queryBuilder
    .select('id', 'name', 'email')
    .from('users')
    .where('active = true')
    .orderBy('name', 'ASC')
    .limit(10)
    .build();

console.log("Exercise 2 - Chainable API:", builtQuery);

// Exercise 3: Simple dependency injection
class Container {
    constructor() {
        this.services = new Map();
        this.singletons = new Map();
    }
    
    register(name, factory, options = {}) {
        this.services.set(name, { factory, singleton: options.singleton || false });
    }
    
    resolve(name) {
        const service = this.services.get(name);
        if (!service) {
            throw new Error(`Service '${name}' not registered`);
        }
        
        if (service.singleton) {
            if (!this.singletons.has(name)) {
                this.singletons.set(name, service.factory());
            }
            return this.singletons.get(name);
        }
        
        return service.factory();
    }
}

const container = new Container();
container.register('logger', () => ({ log: (msg) => console.log(msg) }), { singleton: true });
container.register('config', () => ({ apiUrl: 'https://api.example.com' }), { singleton: true });

const logger = container.resolve('logger');
const config = container.resolve('config');

console.log("Exercise 3 - Dependency injection:", { logger, config });

console.log("\n🚀 MODERN JS PATTERNS PRACTICE COMPLETED! 🚀");
console.log("Practice these design patterns and best practices regularly!");