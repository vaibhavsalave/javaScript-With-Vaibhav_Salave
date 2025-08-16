// JavaScript Comparison Operators and Type Coercion - Complete Guide

// =====================================================
// BASIC COMPARISON OPERATORS
// =====================================================

console.log("=== BASIC COMPARISON OPERATORS ===");

let a = 5;
let b = 10;
let c = 5;

// Greater than
console.log("10 > 5:", b > a);                          // true
console.log("5 > 10:", a > b);                          // false
console.log("5 > 5:", a > c);                           // false

// Less than
console.log("5 < 10:", a < b);                          // true
console.log("10 < 5:", b < a);                          // false
console.log("5 < 5:", a < c);                           // false

// Greater than or equal to
console.log("10 >= 5:", b >= a);                        // true
console.log("5 >= 5:", a >= c);                         // true
console.log("5 >= 10:", a >= b);                        // false

// Less than or equal to
console.log("5 <= 10:", a <= b);                        // true
console.log("5 <= 5:", a <= c);                         // true
console.log("10 <= 5:", b <= a);                        // false

// =====================================================
// EQUALITY OPERATORS
// =====================================================

console.log("\n=== EQUALITY OPERATORS ===");

// Loose equality (==) - performs type coercion
console.log("5 == 5:", 5 == 5);                         // true
console.log("5 == '5':", 5 == '5');                     // true (type coercion)
console.log("1 == true:", 1 == true);                   // true
console.log("0 == false:", 0 == false);                 // true
console.log("'' == false:", '' == false);               // true
console.log("null == undefined:", null == undefined);   // true

// Strict equality (===) - no type coercion
console.log("5 === 5:", 5 === 5);                       // true
console.log("5 === '5':", 5 === '5');                   // false (different types)
console.log("1 === true:", 1 === true);                 // false
console.log("0 === false:", 0 === false);               // false
console.log("'' === false:", '' === false);             // false
console.log("null === undefined:", null === undefined); // false

// Loose inequality (!=)
console.log("5 != '6':", 5 != '6');                     // true
console.log("5 != '5':", 5 != '5');                     // false (type coercion)

// Strict inequality (!==)
console.log("5 !== '5':", 5 !== '5');                   // true (different types)
console.log("5 !== 5:", 5 !== 5);                       // false

// =====================================================
// STRING COMPARISONS
// =====================================================

console.log("\n=== STRING COMPARISONS ===");

// Lexicographic (dictionary) order
console.log("'apple' < 'banana':", 'apple' < 'banana'); // true
console.log("'Zebra' < 'apple':", 'Zebra' < 'apple');   // true (uppercase letters come first)
console.log("'10' < '2':", '10' < '2');                 // true (string comparison, not numeric)

// Case-sensitive comparisons
console.log("'Apple' === 'apple':", 'Apple' === 'apple'); // false
console.log("'Apple'.toLowerCase() === 'apple':", 'Apple'.toLowerCase() === 'apple'); // true

// Unicode code point comparisons
console.log("'A'.charCodeAt(0):", 'A'.charCodeAt(0));   // 65
console.log("'a'.charCodeAt(0):", 'a'.charCodeAt(0));   // 97
console.log("'A' < 'a':", 'A' < 'a');                   // true

// =====================================================
// TYPE COERCION IN COMPARISONS
// =====================================================

console.log("\n=== TYPE COERCION IN COMPARISONS ===");

// String to number coercion
console.log("'2' > 1:", '2' > 1);                       // true (converts '2' to 2)
console.log("'02' > 1:", '02' > 1);                     // true (converts '02' to 2)
console.log("'10' > '2':", '10' > '2');                 // false (string comparison)
console.log("'10' > 2:", '10' > 2);                     // true (converts '10' to 10)

// Boolean to number coercion
console.log("true > 0:", true > 0);                     // true (converts true to 1)
console.log("false < 1:", false < 1);                   // true (converts false to 0)
console.log("true == 1:", true == 1);                   // true

// Null comparisons
console.log("null > 0:", null > 0);                     // false (null converts to 0)
console.log("null == 0:", null == 0);                   // false (special case)
console.log("null >= 0:", null >= 0);                   // true (null converts to 0)
console.log("null < 1:", null < 1);                     // true

// Undefined comparisons
console.log("undefined > 0:", undefined > 0);           // false (undefined converts to NaN)
console.log("undefined == 0:", undefined == 0);         // false
console.log("undefined < 1:", undefined < 1);           // false (NaN comparisons are always false)

// =====================================================
// NaN COMPARISONS
// =====================================================

console.log("\n=== NaN COMPARISONS ===");

console.log("NaN === NaN:", NaN === NaN);               // false (NaN is not equal to itself)
console.log("NaN == NaN:", NaN == NaN);                 // false
console.log("NaN > 0:", NaN > 0);                       // false
console.log("NaN < 0:", NaN < 0);                       // false
console.log("NaN >= 0:", NaN >= 0);                     // false

// Checking for NaN
console.log("isNaN(NaN):", isNaN(NaN));                 // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));   // true
console.log("isNaN('hello'):", isNaN('hello'));         // true (coerces to NaN)
console.log("Number.isNaN('hello'):", Number.isNaN('hello')); // false (no coercion)

// =====================================================
// OBJECT COMPARISONS
// =====================================================

console.log("\n=== OBJECT COMPARISONS ===");

// Objects are compared by reference, not value
let obj1 = {name: "John"};
let obj2 = {name: "John"};
let obj3 = obj1;

console.log("obj1 === obj2:", obj1 === obj2);           // false (different objects)
console.log("obj1 === obj3:", obj1 === obj3);           // true (same reference)

// Array comparisons
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log("arr1 === arr2:", arr1 === arr2);           // false (different arrays)
console.log("arr1 === arr3:", arr1 === arr3);           // true (same reference)

// Object to primitive coercion
let objWithValueOf = {
    valueOf: function() { return 42; }
};

let objWithToString = {
    toString: function() { return "hello"; }
};

console.log("objWithValueOf == 42:", objWithValueOf == 42); // true
console.log("objWithToString == 'hello':", objWithToString == 'hello'); // true

// =====================================================
// SPECIAL CASES AND EDGE CASES
// =====================================================

console.log("\n=== SPECIAL CASES ===");

// Empty array and string coercion
console.log("[] == '':", [] == '');                     // true
console.log("[] == 0:", [] == 0);                       // true
console.log("[] == false:", [] == false);               // true
console.log("[0] == false:", [0] == false);             // true
console.log("[1] == true:", [1] == true);               // true
console.log("[1,2] == '1,2':", [1,2] == '1,2');         // true

// Multiple type coercions
console.log("'0' == false:", '0' == false);             // true
console.log("'0' === false:", '0' === false);           // false
console.log("0 == false:", 0 == false);                 // true
console.log("'' == 0:", '' == 0);                       // true

// Infinity comparisons
console.log("Infinity > 1000000:", Infinity > 1000000); // true
console.log("-Infinity < -1000000:", -Infinity < -1000000); // true
console.log("Infinity === Infinity:", Infinity === Infinity); // true

// =====================================================
// LOGICAL OPERATORS IN COMPARISONS
// =====================================================

console.log("\n=== LOGICAL OPERATORS ===");

let x = 5;
let y = 10;
let z = 15;

// AND (&&) - returns first falsy value or last value
console.log("true && true:", true && true);             // true
console.log("true && false:", true && false);           // false
console.log("5 && 10:", 5 && 10);                       // 10
console.log("0 && 10:", 0 && 10);                       // 0
console.log("'hello' && 'world':", 'hello' && 'world'); // "world"

// OR (||) - returns first truthy value or last value
console.log("true || false:", true || false);           // true
console.log("false || false:", false || false);         // false
console.log("0 || 5:", 0 || 5);                         // 5
console.log("'' || 'default':", '' || 'default');       // "default"

// NOT (!) - converts to boolean and negates
console.log("!true:", !true);                           // false
console.log("!false:", !false);                         // true
console.log("!0:", !0);                                 // true
console.log("!'hello':", !'hello');                     // false
console.log("!!5:", !!5);                               // true (double negation)

// Complex logical expressions
console.log("x > 0 && y < 20:", x > 0 && y < 20);       // true
console.log("x > 10 || y > 5:", x > 10 || y > 5);       // true
console.log("!(x > y):", !(x > y));                     // true

// =====================================================
// TERNARY OPERATOR
// =====================================================

console.log("\n=== TERNARY OPERATOR ===");

let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log("Age status:", status);                     // "adult"

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade:", grade);                           // "B"

// Ternary with expressions
let num1 = 10;
let num2 = 5;
let operation = "add";
let result = operation === "add" ? num1 + num2 : num1 - num2;
console.log("Operation result:", result);               // 15

// =====================================================
// COMPARISON FUNCTIONS
// =====================================================

console.log("\n=== COMPARISON FUNCTIONS ===");

// Safe equality check
function isEqual(a, b) {
    // Handle NaN case
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }
    return a === b;
}

console.log("isEqual(5, 5):", isEqual(5, 5));           // true
console.log("isEqual(5, '5'):", isEqual(5, '5'));       // false
console.log("isEqual(NaN, NaN):", isEqual(NaN, NaN));   // true

// Deep equality for objects
function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || b == null) return false;
    
    if (typeof a !== typeof b) return false;
    
    if (typeof a !== 'object') return false;
    
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    
    if (keysA.length !== keysB.length) return false;
    
    for (let key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    
    return true;
}

let obj4 = {name: "John", age: 30};
let obj5 = {name: "John", age: 30};
let obj6 = {name: "Jane", age: 30};

console.log("deepEqual(obj4, obj5):", deepEqual(obj4, obj5)); // true
console.log("deepEqual(obj4, obj6):", deepEqual(obj4, obj6)); // false

// Number comparison with tolerance
function almostEqual(a, b, tolerance = 0.0001) {
    return Math.abs(a - b) < tolerance;
}

console.log("almostEqual(0.1 + 0.2, 0.3):", almostEqual(0.1 + 0.2, 0.3)); // true
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);                     // false

// =====================================================
// PRACTICAL EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Form validation
function validateForm(data) {
    let errors = [];
    
    // Check required fields
    if (!data.name || data.name.trim() === '') {
        errors.push("Name is required");
    }
    
    if (!data.email || data.email.trim() === '') {
        errors.push("Email is required");
    } else if (!data.email.includes('@')) {
        errors.push("Invalid email format");
    }
    
    // Check age
    if (data.age !== undefined && data.age !== null) {
        if (typeof data.age !== 'number' || data.age < 0 || data.age > 150) {
            errors.push("Invalid age");
        }
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

let formData1 = {name: "John", email: "john@example.com", age: 25};
let formData2 = {name: "", email: "invalid-email", age: -5};

console.log("Valid form:", validateForm(formData1));
console.log("Invalid form:", validateForm(formData2));

// Example 2: Sorting with custom comparison
let students = [
    {name: "Alice", grade: 85},
    {name: "Bob", grade: 92},
    {name: "Charlie", grade: 78},
    {name: "Diana", grade: 92}
];

// Sort by grade (descending), then by name (ascending)
students.sort((a, b) => {
    if (a.grade !== b.grade) {
        return b.grade - a.grade; // Higher grade first
    }
    return a.name.localeCompare(b.name); // Alphabetical order
});

console.log("Sorted students:", students);

// Example 3: Range checking
function isInRange(value, min, max, inclusive = true) {
    if (typeof value !== 'number' || isNaN(value)) {
        return false;
    }
    
    if (inclusive) {
        return value >= min && value <= max;
    } else {
        return value > min && value < max;
    }
}

console.log("isInRange(5, 1, 10):", isInRange(5, 1, 10));           // true
console.log("isInRange(10, 1, 10, false):", isInRange(10, 1, 10, false)); // false

// Example 4: Version comparison
function compareVersions(version1, version2) {
    let v1Parts = version1.split('.').map(Number);
    let v2Parts = version2.split('.').map(Number);
    
    let maxLength = Math.max(v1Parts.length, v2Parts.length);
    
    for (let i = 0; i < maxLength; i++) {
        let v1Part = v1Parts[i] || 0;
        let v2Part = v2Parts[i] || 0;
        
        if (v1Part > v2Part) return 1;
        if (v1Part < v2Part) return -1;
    }
    
    return 0;
}

console.log("compareVersions('1.2.3', '1.2.4'):", compareVersions('1.2.3', '1.2.4')); // -1
console.log("compareVersions('2.0.0', '1.9.9'):", compareVersions('2.0.0', '1.9.9')); // 1
console.log("compareVersions('1.0', '1.0.0'):", compareVersions('1.0', '1.0.0'));     // 0

// =====================================================
// BEST PRACTICES
// =====================================================

console.log("\n=== BEST PRACTICES ===");

// 1. Always use === and !== for equality checks
console.log("Use === instead of ==");

// 2. Be explicit about type conversion
function safeCompare(a, b) {
    return Number(a) === Number(b);
}

// 3. Handle null and undefined explicitly
function isValidValue(value) {
    return value !== null && value !== undefined && value !== '';
}

// 4. Use Number.isNaN() instead of isNaN()
console.log("Use Number.isNaN() for NaN checking");

// 5. For floating point comparisons, use tolerance
function compareFloats(a, b, epsilon = Number.EPSILON) {
    return Math.abs(a - b) < epsilon;
}

console.log("compareFloats(0.1 + 0.2, 0.3):", compareFloats(0.1 + 0.2, 0.3)); // true



