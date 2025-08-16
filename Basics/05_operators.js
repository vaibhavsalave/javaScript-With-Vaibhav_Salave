// JavaScript Operators - Complete Guide

// =====================================================
// ARITHMETIC OPERATORS
// =====================================================

console.log("=== ARITHMETIC OPERATORS ===");

let a = 10;
let b = 3;

console.log("Addition (+):", a + b);        // 13
console.log("Subtraction (-):", a - b);     // 7
console.log("Multiplication (*):", a * b);  // 30
console.log("Division (/):", a / b);        // 3.333...
console.log("Modulus (%):", a % b);         // 1 (remainder)
console.log("Exponentiation (**):", a ** b); // 1000 (10^3)

// Increment and Decrement
let counter = 5;
console.log("Pre-increment (++counter):", ++counter);   // 6
console.log("Post-increment (counter++):", counter++);  // 6, then becomes 7
console.log("Counter after post-increment:", counter);  // 7

let counter2 = 5;
console.log("Pre-decrement (--counter2):", --counter2); // 4
console.log("Post-decrement (counter2--):", counter2--); // 4, then becomes 3
console.log("Counter2 after post-decrement:", counter2); // 3

// =====================================================
// ASSIGNMENT OPERATORS
// =====================================================

console.log("\n=== ASSIGNMENT OPERATORS ===");

let x = 10;
console.log("Initial value:", x);

x += 5;  // x = x + 5
console.log("After x += 5:", x);  // 15

x -= 3;  // x = x - 3
console.log("After x -= 3:", x);  // 12

x *= 2;  // x = x * 2
console.log("After x *= 2:", x);  // 24

x /= 4;  // x = x / 4
console.log("After x /= 4:", x);  // 6

x %= 4;  // x = x % 4
console.log("After x %= 4:", x);  // 2

x **= 3; // x = x ** 3
console.log("After x **= 3:", x); // 8

// =====================================================
// COMPARISON OPERATORS
// =====================================================

console.log("\n=== COMPARISON OPERATORS ===");

let num1 = 5;
let num2 = 10;
let str1 = "5";

console.log("Equal (==):", num1 == str1);        // true (type coercion)
console.log("Strict Equal (===):", num1 === str1); // false (no coercion)
console.log("Not Equal (!=):", num1 != str1);    // false
console.log("Strict Not Equal (!==):", num1 !== str1); // true

console.log("Greater than (>):", num2 > num1);   // true
console.log("Less than (<):", num1 < num2);      // true
console.log("Greater or Equal (>=):", num1 >= 5); // true
console.log("Less or Equal (<=):", num1 <= 5);   // true

// =====================================================
// LOGICAL OPERATORS
// =====================================================

console.log("\n=== LOGICAL OPERATORS ===");

let isTrue = true;
let isFalse = false;

console.log("AND (&&):", isTrue && isFalse);     // false
console.log("OR (||):", isTrue || isFalse);      // true
console.log("NOT (!):", !isTrue);                // false

// Short-circuit evaluation
console.log("Short-circuit AND:", false && console.log("This won't execute"));
console.log("Short-circuit OR:", true || console.log("This won't execute"));

// Logical assignment operators (ES2021)
let value1;
let value2 = "default";

value1 ||= "fallback";  // value1 = value1 || "fallback"
console.log("Logical OR assignment:", value1); // "fallback"

value2 &&= "new value"; // value2 = value2 && "new value"
console.log("Logical AND assignment:", value2); // "new value"

// =====================================================
// BITWISE OPERATORS
// =====================================================

console.log("\n=== BITWISE OPERATORS ===");

let bit1 = 5;  // 101 in binary
let bit2 = 3;  // 011 in binary

console.log("AND (&):", bit1 & bit2);    // 1 (001)
console.log("OR (|):", bit1 | bit2);     // 7 (111)
console.log("XOR (^):", bit1 ^ bit2);    // 6 (110)
console.log("NOT (~):", ~bit1);          // -6 (inverts all bits)
console.log("Left shift (<<):", bit1 << 1);  // 10 (1010)
console.log("Right shift (>>):", bit1 >> 1); // 2 (10)
console.log("Zero-fill right shift (>>>):", bit1 >>> 1); // 2

// =====================================================
// TERNARY (CONDITIONAL) OPERATOR
// =====================================================

console.log("\n=== TERNARY OPERATOR ===");

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote); // "Yes"

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade:", grade); // "B"

// =====================================================
// TYPE OPERATORS
// =====================================================

console.log("\n=== TYPE OPERATORS ===");

let obj = { name: "John" };
let arr = [1, 2, 3];
let func = function() {};

console.log("typeof obj:", typeof obj);       // "object"
console.log("typeof arr:", typeof arr);       // "object"
console.log("typeof func:", typeof func);     // "function"

// instanceof operator
console.log("obj instanceof Object:", obj instanceof Object);   // true
console.log("arr instanceof Array:", arr instanceof Array);     // true
console.log("func instanceof Function:", func instanceof Function); // true

// =====================================================
// STRING OPERATORS
// =====================================================

console.log("\n=== STRING OPERATORS ===");

let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName); // "John Doe"

// Template literals (ES6)
let greeting = `Hello, ${firstName} ${lastName}!`;
console.log("Template literal:", greeting); // "Hello, John Doe!"

// =====================================================
// NULLISH COALESCING OPERATOR (ES2020)
// =====================================================

console.log("\n=== NULLISH COALESCING OPERATOR ===");

let nullValue = null;
let undefinedValue = undefined;
let emptyString = "";
let zero = 0;

// ?? returns right side only if left side is null or undefined
console.log("null ?? 'default':", nullValue ?? "default");           // "default"
console.log("undefined ?? 'default':", undefinedValue ?? "default"); // "default"
console.log("'' ?? 'default':", emptyString ?? "default");           // "" (empty string is not null/undefined)
console.log("0 ?? 'default':", zero ?? "default");                   // 0 (zero is not null/undefined)

// Compare with OR operator
console.log("'' || 'default':", emptyString || "default");           // "default"
console.log("0 || 'default':", zero || "default");                   // "default"

// =====================================================
// OPTIONAL CHAINING OPERATOR (ES2020)
// =====================================================

console.log("\n=== OPTIONAL CHAINING OPERATOR ===");

let user = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Boston"
    }
};

let userWithoutAddress = {
    name: "Bob"
};

// Safe property access
console.log("user.address?.street:", user.address?.street);                    // "123 Main St"
console.log("userWithoutAddress.address?.street:", userWithoutAddress.address?.street); // undefined

// Safe method calling
let userWithMethod = {
    getName: function() { return "Charlie"; }
};

console.log("userWithMethod.getName?.():", userWithMethod.getName?.()); // "Charlie"
console.log("userWithoutAddress.getName?.():", userWithoutAddress.getName?.()); // undefined

// =====================================================
// OPERATOR PRECEDENCE
// =====================================================

console.log("\n=== OPERATOR PRECEDENCE ===");

// Precedence determines order of operations
let result1 = 2 + 3 * 4;        // 14 (not 20, multiplication first)
let result2 = (2 + 3) * 4;      // 20 (parentheses first)

console.log("2 + 3 * 4 =", result1);
console.log("(2 + 3) * 4 =", result2);

// Common precedence order (highest to lowest):
// 1. Parentheses ()
// 2. Exponentiation **
// 3. Multiplication *, Division /, Modulus %
// 4. Addition +, Subtraction -
// 5. Comparison operators
// 6. Logical operators
// 7. Assignment operators

// =====================================================
// PRACTICAL EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Swap variables without temp variable
let p = 5, q = 10;
console.log("Before swap: p =", p, ", q =", q);
p = p + q;  // p = 15
q = p - q;  // q = 5
p = p - q;  // p = 10
console.log("After swap: p =", p, ", q =", q);

// Check if number is even or odd
function isEven(num) {
    return num % 2 === 0;
}
console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false

// Find maximum of two numbers
function max(a, b) {
    return a > b ? a : b;
}
console.log("Max of 5 and 8:", max(5, 8)); // 8

// Check if variable has value (not null, undefined, or empty)
function hasValue(variable) {
    return variable != null && variable !== "";
}
console.log("hasValue(''):", hasValue(""));       // false
console.log("hasValue('hello'):", hasValue("hello")); // true
console.log("hasValue(null):", hasValue(null));   // false