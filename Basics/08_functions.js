// JavaScript Functions - Complete Guide

// =====================================================
// FUNCTION DECLARATIONS
// =====================================================

console.log("=== FUNCTION DECLARATIONS ===");

// Basic function declaration
function greet() {
    console.log("Hello World!");
}

greet(); // Call the function

// Function with parameters
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Alice");
greetUser("Bob");

// Function with multiple parameters
function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(5, 3);
console.log("5 + 3 =", result);

// Function with default parameters (ES6)
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetWithDefault(); // Uses default
greetWithDefault("John"); // Uses provided value

// Function with return value
function multiply(x, y) {
    return x * y;
}

console.log("4 * 6 =", multiply(4, 6));

// =====================================================
// FUNCTION EXPRESSIONS
// =====================================================

console.log("\n=== FUNCTION EXPRESSIONS ===");

// Anonymous function expression
let sayHello = function() {
    console.log("Hello from function expression!");
};

sayHello();

// Named function expression
let factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log("5! =", factorial(5));

// Function expression with parameters
let divide = function(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log("10 / 2 =", divide(10, 2));
console.log("10 / 0 =", divide(10, 0));

// =====================================================
// ARROW FUNCTIONS (ES6)
// =====================================================

console.log("\n=== ARROW FUNCTIONS ===");

// Basic arrow function
let square = (x) => {
    return x * x;
};

console.log("5² =", square(5));

// Arrow function with single expression (implicit return)
let cube = x => x * x * x;
console.log("3³ =", cube(3));

// Arrow function with multiple parameters
let sum = (a, b) => a + b;
console.log("7 + 3 =", sum(7, 3));

// Arrow function with no parameters
let getCurrentTime = () => new Date().toLocaleTimeString();
console.log("Current time:", getCurrentTime());

// Arrow function with object return (parentheses needed)
let createPerson = (name, age) => ({
    name: name,
    age: age,
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
});

let person1 = createPerson("Alice", 25);
console.log(person1);
console.log(person1.greet());

// =====================================================
// FUNCTION PARAMETERS
// =====================================================

console.log("\n=== FUNCTION PARAMETERS ===");

// Rest parameters (...)
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("Sum of 1,2,3,4,5:", sumAll(1, 2, 3, 4, 5));
console.log("Sum of 10,20:", sumAll(10, 20));

// Destructuring parameters
function displayUser({name, age, city}) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

displayUser({name: "John", age: 30, city: "New York"});

// Array destructuring in parameters
function getFirstTwo([first, second]) {
    return {first, second};
}

console.log("First two:", getFirstTwo([1, 2, 3, 4, 5]));

// Mixed parameters
function processData(id, {name, email}, ...tags) {
    console.log(`ID: ${id}`);
    console.log(`Name: ${name}, Email: ${email}`);
    console.log(`Tags: ${tags.join(", ")}`);
}

processData(1, {name: "Alice", email: "alice@email.com"}, "admin", "active", "premium");

// =====================================================
// HIGHER-ORDER FUNCTIONS
// =====================================================

console.log("\n=== HIGHER-ORDER FUNCTIONS ===");

// Function that takes another function as parameter
function calculator(operation, a, b) {
    return operation(a, b);
}

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply2 = (x, y) => x * y;

console.log("Calculator add:", calculator(add, 10, 5));
console.log("Calculator subtract:", calculator(subtract, 10, 5));
console.log("Calculator multiply:", calculator(multiply2, 10, 5));

// Function that returns another function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log("Double 7:", double(7));
console.log("Triple 7:", triple(7));

// Callback functions
function processArray(arr, callback) {
    let result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
let squared = processArray(numbers, x => x * x);
let doubled = processArray(numbers, x => x * 2);

console.log("Original:", numbers);
console.log("Squared:", squared);
console.log("Doubled:", doubled);

// =====================================================
// CLOSURES
// =====================================================

console.log("\n=== CLOSURES ===");

// Basic closure
function outerFunction(x) {
    // Outer scope variable
    let outerVariable = x;
    
    // Inner function (closure)
    function innerFunction(y) {
        // Has access to outerVariable
        return outerVariable + y;
    }
    
    return innerFunction;
}

let addTen = outerFunction(10);
console.log("Closure result:", addTen(5)); // 15

// Practical closure example - Counter
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

let counter1 = createCounter();
let counter2 = createCounter();

console.log("Counter 1:", counter1.increment()); // 1
console.log("Counter 1:", counter1.increment()); // 2
console.log("Counter 2:", counter2.increment()); // 1
console.log("Counter 1 current:", counter1.getCount()); // 2

// Module pattern using closure
let calculator2 = (function() {
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
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

// Method chaining
let calcResult = calculator2.add(10).multiply(2).subtract(5).getResult();
console.log("Calculator result:", calcResult); // 15

// =====================================================
// FUNCTION SCOPE AND HOISTING
// =====================================================

console.log("\n=== FUNCTION SCOPE AND HOISTING ===");

// Function declarations are hoisted
console.log("Hoisted function:", hoistedFunction()); // Works!

function hoistedFunction() {
    return "I was called before I was declared!";
}

// Function expressions are NOT hoisted
try {
    console.log(notHoisted()); // This will throw an error
} catch (error) {
    console.log("Error:", error.message);
}

var notHoisted = function() {
    return "I'm not hoisted";
};

// Variable scope in functions
function scopeExample() {
    var functionScoped = "I'm function scoped";
    let blockScoped = "I'm block scoped";
    
    if (true) {
        var innerFunction = "I'm also function scoped";
        let innerBlock = "I'm block scoped too";
        
        console.log("Inside block:", functionScoped); // Works
        console.log("Inside block:", blockScoped); // Works
    }
    
    console.log("Outside block:", innerFunction); // Works
    // console.log("Outside block:", innerBlock); // Would throw error
}

scopeExample();

// =====================================================
// IIFE (Immediately Invoked Function Expression)
// =====================================================

console.log("\n=== IIFE ===");

// Basic IIFE
(function() {
    console.log("IIFE executed immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello from IIFE, ${name}!`);
})("World");

// IIFE returning value
let iifieResult = (function(a, b) {
    return a + b;
})(5, 3);

console.log("IIFE result:", iifieResult);

// IIFE for module pattern
let myModule = (function() {
    let privateVariable = "I'm private";
    let privateFunction = function() {
        return "Private function called";
    };
    
    return {
        publicMethod: function() {
            return `Public method accessing: ${privateVariable}`;
        },
        callPrivate: function() {
            return privateFunction();
        }
    };
})();

console.log(myModule.publicMethod());
console.log(myModule.callPrivate());
// console.log(myModule.privateVariable); // undefined

// =====================================================
// RECURSION
// =====================================================

console.log("\n=== RECURSION ===");

// Basic recursion - Factorial
function factorialRecursive(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    // Recursive case
    return n * factorialRecursive(n - 1);
}

console.log("5! =", factorialRecursive(5));

// Recursion - Fibonacci
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log("8th Fibonacci:", fibonacciRecursive(8));

// Recursion with arrays - Sum
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

console.log("Sum array [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5]));

// Tail recursion example
function countdown(n) {
    console.log(n);
    if (n > 0) {
        countdown(n - 1);
    }
}

console.log("Countdown from 5:");
countdown(5);

// =====================================================
// THIS KEYWORD IN FUNCTIONS
// =====================================================

console.log("\n=== THIS KEYWORD ===");

// Global context
function globalThis() {
    console.log("Global this:", this === globalThis); // true in browser, false in Node.js strict mode
}

globalThis();

// Object method
let person2 = {
    name: "John",
    age: 30,
    sayHello: function() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
    },
    // Arrow function doesn't have its own 'this'
    sayHelloArrow: () => {
        console.log("Arrow function this:", this); // Refers to global/module scope
    }
};

person2.sayHello();
person2.sayHelloArrow();

// Call, Apply, and Bind
function introduce() {
    console.log(`Hi, I'm ${this.name} from ${this.city}`);
}

let person3 = {name: "Alice", city: "Boston"};
let person4 = {name: "Bob", city: "Chicago"};

// Call - immediate invocation
introduce.call(person3);
introduce.call(person4);

// Apply - with array of arguments
function introduceWithAge(greeting, age) {
    console.log(`${greeting}, I'm ${this.name}, ${age} years old, from ${this.city}`);
}

introduceWithAge.apply(person3, ["Hello", 25]);

// Bind - returns new function
let boundIntroduce = introduce.bind(person4);
boundIntroduce();

// =====================================================
// PRACTICAL EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Utility functions
let utils = {
    // Check if number is prime
    isPrime: function(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    },
    
    // Generate random number between min and max
    randomBetween: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    // Capitalize first letter of each word
    capitalize: function(str) {
        return str.split(' ')
                 .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                 .join(' ');
    }
};

console.log("Is 17 prime?", utils.isPrime(17));
console.log("Random 1-10:", utils.randomBetween(1, 10));
console.log("Capitalize:", utils.capitalize("hello world javascript"));

// Example 2: Array manipulation functions
function arrayUtils() {
    return {
        // Remove duplicates
        unique: function(arr) {
            return [...new Set(arr)];
        },
        
        // Group array elements by a property
        groupBy: function(arr, key) {
            return arr.reduce((groups, item) => {
                const group = item[key];
                groups[group] = groups[group] || [];
                groups[group].push(item);
                return groups;
            }, {});
        },
        
        // Find max value in array of objects
        maxBy: function(arr, key) {
            return arr.reduce((max, item) => 
                item[key] > max[key] ? item : max
            );
        }
    };
}

let arrUtils = arrayUtils();
let testArray = [1, 2, 2, 3, 4, 4, 5];
let people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

console.log("Unique:", arrUtils.unique(testArray));
console.log("Group by age:", arrUtils.groupBy(people, 'age'));
console.log("Oldest person:", arrUtils.maxBy(people, 'age'));

// Example 3: Function composition
function compose(...functions) {
    return function(value) {
        return functions.reduceRight((acc, fn) => fn(acc), value);
    };
}

let addOne = x => x + 1;
let multiplyByTwo = x => x * 2;
let square2 = x => x * x;

let composedFunction = compose(square2, multiplyByTwo, addOne);
console.log("Composed function (5):", composedFunction(5)); // ((5+1)*2)^2 = 144

// Example 4: Memoization
function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Cache hit!");
            return cache[key];
        }
        console.log("Computing...");
        let result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

let memoizedFib = memoize(function(n) {
    if (n <= 1) return n;
    return memoizedFib(n - 1) + memoizedFib(n - 2);
});

console.log("Memoized Fibonacci(10):", memoizedFib(10));
console.log("Memoized Fibonacci(10) again:", memoizedFib(10)); // Cache hit!