// JavaScript Loops - Complete Guide

// =====================================================
// FOR LOOP
// =====================================================

console.log("=== FOR LOOP ===");

// Basic for loop
console.log("Numbers 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop with different increments
console.log("\nEven numbers from 0 to 10:");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Reverse loop
console.log("\nCountdown from 5 to 1:");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Nested for loops
console.log("\nMultiplication table (3x3):");
for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}

// =====================================================
// WHILE LOOP
// =====================================================

console.log("\n=== WHILE LOOP ===");

// Basic while loop
console.log("While loop - counting to 3:");
let count = 1;
while (count <= 3) {
    console.log("Count:", count);
    count++;
}

// While loop with condition
console.log("\nFinding first power of 2 greater than 100:");
let power = 1;
let base = 2;
while (Math.pow(base, power) <= 100) {
    console.log(`2^${power} = ${Math.pow(base, power)}`);
    power++;
}
console.log(`First power greater than 100: 2^${power} = ${Math.pow(base, power)}`);

// Input validation simulation
console.log("\nPassword validation simulation:");
let attempts = 0;
let maxAttempts = 3;
let correctPassword = "secret123";
let userInput = "wrong"; // Simulating user input

while (userInput !== correctPassword && attempts < maxAttempts) {
    attempts++;
    console.log(`Attempt ${attempts}: Password incorrect`);
    
    // Simulate different inputs
    if (attempts === 1) userInput = "password";
    else if (attempts === 2) userInput = "secret123";
}

if (userInput === correctPassword) {
    console.log("Access granted!");
} else {
    console.log("Access denied. Too many attempts.");
}

// =====================================================
// DO-WHILE LOOP
// =====================================================

console.log("\n=== DO-WHILE LOOP ===");

// Basic do-while loop
console.log("Do-while loop - executes at least once:");
let num = 10;
do {
    console.log("Number:", num);
    num++;
} while (num < 10); // This condition is false, but loop runs once

// Menu simulation
console.log("\nMenu simulation:");
let choice;
let menuCount = 0;

do {
    menuCount++;
    console.log("=== MENU ===");
    console.log("1. View Profile");
    console.log("2. Settings");
    console.log("3. Exit");
    
    // Simulate user choice
    if (menuCount === 1) choice = 1;
    else if (menuCount === 2) choice = 2;
    else choice = 3;
    
    switch (choice) {
        case 1:
            console.log("Viewing profile...");
            break;
        case 2:
            console.log("Opening settings...");
            break;
        case 3:
            console.log("Goodbye!");
            break;
        default:
            console.log("Invalid choice");
    }
} while (choice !== 3);

// =====================================================
// FOR-IN LOOP (for objects)
// =====================================================

console.log("\n=== FOR-IN LOOP ===");

// Iterating over object properties
let person = {
    name: "John",
    age: 30,
    city: "New York",
    profession: "Developer"
};

console.log("Person details:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// For-in with arrays (not recommended)
console.log("\nFor-in with array (gets indices):");
let colors = ["red", "green", "blue"];
for (let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}

// For-in with inherited properties
console.log("\nFor-in with prototype properties:");
function Vehicle(type) {
    this.type = type;
}
Vehicle.prototype.wheels = 4;

let car = new Vehicle("car");
car.brand = "Toyota";

for (let prop in car) {
    console.log(`${prop}: ${car[prop]}`);
}

// Using hasOwnProperty to filter
console.log("\nFiltering own properties:");
for (let prop in car) {
    if (car.hasOwnProperty(prop)) {
        console.log(`Own property - ${prop}: ${car[prop]}`);
    }
}

// =====================================================
// FOR-OF LOOP (for iterables)
// =====================================================

console.log("\n=== FOR-OF LOOP ===");

// Iterating over arrays
console.log("For-of with array:");
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For-of with strings
console.log("\nFor-of with string:");
let word = "Hello";
for (let char of word) {
    console.log(char);
}

// For-of with array entries (index and value)
console.log("\nFor-of with array entries:");
for (let [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}

// For-of with Set
console.log("\nFor-of with Set:");
let uniqueNumbers = new Set([1, 2, 3, 3, 4, 5]);
for (let number of uniqueNumbers) {
    console.log(number);
}

// For-of with Map
console.log("\nFor-of with Map:");
let userRoles = new Map([
    ["john", "admin"],
    ["jane", "user"],
    ["bob", "moderator"]
]);

for (let [username, role] of userRoles) {
    console.log(`${username}: ${role}`);
}

// =====================================================
// LOOP CONTROL STATEMENTS
// =====================================================

console.log("\n=== LOOP CONTROL STATEMENTS ===");

// Break statement
console.log("Break statement - stop when found:");
let numbers = [1, 3, 7, 9, 12, 15, 18];
let target = 12;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        console.log(`Found ${target} at index ${i}`);
        break; // Exit the loop
    }
    console.log(`Checking: ${numbers[i]}`);
}

// Continue statement
console.log("\nContinue statement - skip even numbers:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip rest of iteration
    }
    console.log(`Odd number: ${i}`);
}

// Labeled break (for nested loops)
console.log("\nLabeled break in nested loops:");
outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log(`Breaking outer loop at i=${i}, j=${j}`);
            break outer; // Break outer loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}

// Labeled continue
console.log("\nLabeled continue in nested loops:");
outer2: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            console.log(`Skipping inner loop at i=${i}, j=${j}`);
            continue outer2; // Continue outer loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}

// =====================================================
// PRACTICAL EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Find prime numbers
function findPrimes(limit) {
    let primes = [];
    
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primes.push(num);
        }
    }
    
    return primes;
}

console.log("Prime numbers up to 20:", findPrimes(20));

// Example 2: Fibonacci sequence
function fibonacci(n) {
    let sequence = [];
    let a = 0, b = 1;
    
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return sequence;
}

console.log("First 10 Fibonacci numbers:", fibonacci(10));

// Example 3: Array manipulation
let scores = [85, 92, 78, 96, 88];

console.log("\nOriginal scores:", scores);

// Calculate average
let sum = 0;
for (let score of scores) {
    sum += score;
}
let average = sum / scores.length;
console.log("Average score:", average.toFixed(2));

// Find highest score
let highest = scores[0];
for (let score of scores) {
    if (score > highest) {
        highest = score;
    }
}
console.log("Highest score:", highest);

// Count scores above average
let aboveAverage = 0;
for (let score of scores) {
    if (score > average) {
        aboveAverage++;
    }
}
console.log("Scores above average:", aboveAverage);

// Example 4: Object processing
let products = [
    { name: "Laptop", price: 999, category: "Electronics" },
    { name: "Book", price: 15, category: "Education" },
    { name: "Phone", price: 699, category: "Electronics" },
    { name: "Pen", price: 2, category: "Stationery" }
];

console.log("\nProduct analysis:");

// Group by category
let categories = {};
for (let product of products) {
    if (!categories[product.category]) {
        categories[product.category] = [];
    }
    categories[product.category].push(product);
}

for (let category in categories) {
    console.log(`${category}: ${categories[category].length} products`);
}

// Find expensive products (price > 50)
console.log("\nExpensive products (>$50):");
for (let product of products) {
    if (product.price > 50) {
        console.log(`${product.name}: $${product.price}`);
    }
}

// Example 5: Pattern printing
console.log("\nStar patterns:");

// Right triangle
console.log("Right triangle:");
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Pyramid
console.log("\nPyramid:");
for (let i = 1; i <= 5; i++) {
    let spaces = " ".repeat(5 - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
}