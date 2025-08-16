// JavaScript Type Conversion and Operations - Complete Guide

// =====================================================
// BASIC TYPE CONVERSION
// =====================================================

console.log("=== BASIC TYPE CONVERSION ===");

let score = 33;
console.log("Original score type:", typeof score); // number

let str = "44";
console.log("String type:", typeof str); // string

let valInNumber = Number(str);
console.log("Converted to number:", typeof valInNumber, valInNumber); // number 44

// =====================================================
// NUMBER CONVERSION EXAMPLES
// =====================================================

console.log("\n=== NUMBER CONVERSION ===");

// String to Number
console.log("Number('123'):", Number('123'));           // 123
console.log("Number('123.45'):", Number('123.45'));     // 123.45
console.log("Number('123abc'):", Number('123abc'));     // NaN
console.log("Number(''):", Number(''));                 // 0
console.log("Number('   '):", Number('   '));           // 0

// Boolean to Number
console.log("Number(true):", Number(true));             // 1
console.log("Number(false):", Number(false));           // 0

// Null and Undefined to Number
console.log("Number(null):", Number(null));             // 0
console.log("Number(undefined):", Number(undefined));   // NaN

// Other conversion methods
console.log("parseInt('123.99'):", parseInt('123.99')); // 123
console.log("parseFloat('123.99'):", parseFloat('123.99')); // 123.99
console.log("parseInt('123abc'):", parseInt('123abc')); // 123
console.log("+'123':", +'123');                         // 123 (unary plus)

// =====================================================
// STRING CONVERSION EXAMPLES
// =====================================================

console.log("\n=== STRING CONVERSION ===");

// Number to String
console.log("String(123):", String(123));               // "123"
console.log("String(123.45):", String(123.45));         // "123.45"
console.log("(123).toString():", (123).toString());     // "123"

// Boolean to String
console.log("String(true):", String(true));             // "true"
console.log("String(false):", String(false));           // "false"

// Null and Undefined to String
console.log("String(null):", String(null));             // "null"
console.log("String(undefined):", String(undefined));   // "undefined"

// Template literal conversion
let num = 42;
console.log("Template literal:", `The number is ${num}`); // "The number is 42"

// =====================================================
// BOOLEAN CONVERSION EXAMPLES
// =====================================================

console.log("\n=== BOOLEAN CONVERSION ===");

// Falsy values (convert to false)
console.log("Boolean(false):", Boolean(false));         // false
console.log("Boolean(0):", Boolean(0));                 // false
console.log("Boolean(-0):", Boolean(-0));               // false
console.log("Boolean(0n):", Boolean(0n));               // false (BigInt zero)
console.log("Boolean(''):", Boolean(''));               // false
console.log("Boolean(null):", Boolean(null));           // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN));             // false

// Truthy values (convert to true)
console.log("Boolean(1):", Boolean(1));                 // true
console.log("Boolean(-1):", Boolean(-1));               // true
console.log("Boolean('hello'):", Boolean('hello'));     // true
console.log("Boolean('0'):", Boolean('0'));             // true (string "0")
console.log("Boolean([]):", Boolean([]));               // true (empty array)
console.log("Boolean({}):", Boolean({}));               // true (empty object)
console.log("Boolean(function(){}):", Boolean(function(){})); // true

// =====================================================
// IMPLICIT TYPE CONVERSION (COERCION)
// =====================================================

console.log("\n=== IMPLICIT TYPE CONVERSION ===");

// Addition with different types
console.log("'5' + 3:", '5' + 3);                       // "53" (string concatenation)
console.log("5 + '3':", 5 + '3');                       // "53" (string concatenation)
console.log("'5' + '3':", '5' + '3');                   // "53" (string concatenation)
console.log("5 + 3:", 5 + 3);                           // 8 (numeric addition)

// Subtraction, multiplication, division (always numeric)
console.log("'10' - '3':", '10' - '3');                 // 7
console.log("'10' * '3':", '10' * '3');                 // 30
console.log("'10' / '2':", '10' / '2');                 // 5
console.log("'10' % '3':", '10' % '3');                 // 1

// Mixed operations
console.log("'5' - 2:", '5' - 2);                       // 3
console.log("'5' * 2:", '5' * 2);                       // 10
console.log("'abc' - 2:", 'abc' - 2);                   // NaN

// Boolean in operations
console.log("true + true:", true + true);               // 2
console.log("true + false:", true + false);             // 1
console.log("true * 5:", true * 5);                     // 5
console.log("false * 5:", false * 5);                   // 0

// =====================================================
// COMPARISON COERCION
// =====================================================

console.log("\n=== COMPARISON COERCION ===");

// Loose equality (==) vs Strict equality (===)
console.log("5 == '5':", 5 == '5');                     // true (coercion)
console.log("5 === '5':", 5 === '5');                   // false (no coercion)

console.log("true == 1:", true == 1);                   // true
console.log("true === 1:", true === 1);                 // false

console.log("false == 0:", false == 0);                 // true
console.log("false === 0:", false === 0);               // false

console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

// Array and object comparisons
console.log("[] == '':", [] == '');                     // true
console.log("[] == 0:", [] == 0);                       // true
console.log("[1] == 1:", [1] == 1);                     // true
console.log("[1,2] == '1,2':", [1,2] == '1,2');         // true

// =====================================================
// SPECIAL CASES AND EDGE CASES
// =====================================================

console.log("\n=== SPECIAL CASES ===");

// NaN behavior
console.log("NaN === NaN:", NaN === NaN);               // false
console.log("isNaN(NaN):", isNaN(NaN));                 // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));   // true
console.log("isNaN('hello'):", isNaN('hello'));         // true (coerces to NaN)
console.log("Number.isNaN('hello'):", Number.isNaN('hello')); // false (no coercion)

// Infinity
console.log("1/0:", 1/0);                               // Infinity
console.log("-1/0:", -1/0);                             // -Infinity
console.log("typeof Infinity:", typeof Infinity);       // "number"

// Object to primitive conversion
let obj = {
    valueOf: function() { return 42; },
    toString: function() { return "object"; }
};
console.log("obj + 0:", obj + 0);                       // 42 (uses valueOf)
console.log("obj + '':", obj + '');                     // "42" (uses valueOf then toString)

let obj2 = {
    toString: function() { return "hello"; }
};
console.log("obj2 + '':", obj2 + '');                   // "hello" (uses toString)

// =====================================================
// ARITHMETIC OPERATIONS
// =====================================================

console.log("\n=== ARITHMETIC OPERATIONS ===");

let value = 3;
let negValue = -value;
console.log("Negation (-3):", negValue);                // -3

// String concatenation vs numeric addition
let str1 = "hello";
let str2 = "vaibhav";
let str3 = str1 + str2;
console.log("String concatenation:", str3);             // "hellovaibhav"

// Complex string/number operations
console.log("'1' + 2:", '1' + 2);                      // "12"
console.log("1 + '2':", 1 + '2');                      // "12"
console.log("'1' + 2 + 2:", '1' + 2 + 2);              // "122"
console.log("1 + 2 + '2':", 1 + 2 + '2');              // "32"

// Tricky conversions
console.log("true + true:", true + true);               // 2
console.log("+true:", +true);                           // 1
console.log("+'':", +'');                               // 0
console.log("+'hello':", +'hello');                     // NaN

// Assignment operations
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log("Multiple assignment:", {num1, num2, num3}); // all 4

// Increment/Decrement
let gameCounter = 100;
console.log("Pre-increment:", ++gameCounter);           // 101
console.log("Post-increment:", gameCounter++);          // 101 (then becomes 102)
console.log("Final value:", gameCounter);               // 102

// =====================================================
// ADVANCED CONVERSION EXAMPLES
// =====================================================

console.log("\n=== ADVANCED CONVERSIONS ===");

// Array to string conversion
console.log("[1,2,3].toString():", [1,2,3].toString()); // "1,2,3"
console.log("[1,2,3] + '':", [1,2,3] + '');             // "1,2,3"
console.log("String([1,2,3]):", String([1,2,3]));       // "1,2,3"

// Object to string conversion
console.log("{}.toString():", {}.toString());           // "[object Object]"
console.log("String({a:1}):", String({a:1}));           // "[object Object]"

// Date conversion
let date = new Date();
console.log("Date to string:", String(date));
console.log("Date to number:", Number(date));           // timestamp
console.log("+date:", +date);                           // timestamp

// Function conversion
function myFunc() { return 42; }
console.log("String(function):", String(myFunc));       // function source code
console.log("Boolean(function):", Boolean(myFunc));     // true

// =====================================================
// JSON CONVERSION
// =====================================================

console.log("\n=== JSON CONVERSION ===");

let complexObj = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding"],
    address: {
        city: "New York",
        country: "USA"
    }
};

// Object to JSON string
let jsonString = JSON.stringify(complexObj);
console.log("JSON stringify:", jsonString);

// JSON string to object
let parsedObj = JSON.parse(jsonString);
console.log("JSON parse:", parsedObj);

// JSON with special values
let specialObj = {
    name: "test",
    undefinedProp: undefined,
    nullProp: null,
    functionProp: function() { return "hello"; },
    dateProp: new Date()
};

console.log("JSON with special values:", JSON.stringify(specialObj));
// Note: undefined and functions are omitted, dates become strings

// =====================================================
// TYPE CHECKING UTILITIES
// =====================================================

console.log("\n=== TYPE CHECKING UTILITIES ===");

function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function isString(value) {
    return typeof value === 'string';
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isArray(value) {
    return Array.isArray(value);
}

function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isNull(value) {
    return value === null;
}

function isUndefined(value) {
    return value === undefined;
}

function isFunction(value) {
    return typeof value === 'function';
}

// Test the utilities
let testValues = [
    42, "hello", true, null, undefined, [], {}, function(){}, NaN, Infinity
];

testValues.forEach(value => {
    console.log(`Value: ${value}, Type: ${getType(value)}, isNumber: ${isNumber(value)}`);
});

// =====================================================
// SAFE CONVERSION FUNCTIONS
// =====================================================

console.log("\n=== SAFE CONVERSION FUNCTIONS ===");

function safeNumber(value, defaultValue = 0) {
    const converted = Number(value);
    return isNaN(converted) ? defaultValue : converted;
}

function safeString(value, defaultValue = '') {
    if (value === null || value === undefined) {
        return defaultValue;
    }
    return String(value);
}

function safeBoolean(value) {
    return Boolean(value);
}

function safeInteger(value, defaultValue = 0) {
    const converted = parseInt(value);
    return isNaN(converted) ? defaultValue : converted;
}

function safeFloat(value, defaultValue = 0.0) {
    const converted = parseFloat(value);
    return isNaN(converted) ? defaultValue : converted;
}

// Test safe conversions
console.log("safeNumber('123'):", safeNumber('123'));           // 123
console.log("safeNumber('abc'):", safeNumber('abc'));           // 0
console.log("safeNumber('abc', -1):", safeNumber('abc', -1));   // -1

console.log("safeString(null):", safeString(null));             // ""
console.log("safeString(123):", safeString(123));               // "123"

console.log("safeInteger('123.99'):", safeInteger('123.99'));   // 123
console.log("safeFloat('123.99'):", safeFloat('123.99'));       // 123.99

// =====================================================
// PRACTICAL EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: User input validation and conversion
function processUserAge(input) {
    const age = safeNumber(input);
    
    if (age <= 0) {
        return "Please enter a valid age";
    } else if (age < 18) {
        return "Minor";
    } else if (age < 65) {
        return "Adult";
    } else {
        return "Senior";
    }
}

console.log("processUserAge('25'):", processUserAge('25'));     // "Adult"
console.log("processUserAge('abc'):", processUserAge('abc'));   // "Please enter a valid age"

// Example 2: Form data processing
function processFormData(formData) {
    return {
        name: safeString(formData.name, 'Anonymous'),
        age: safeNumber(formData.age, 0),
        email: safeString(formData.email),
        isSubscribed: safeBoolean(formData.isSubscribed),
        score: safeFloat(formData.score, 0.0)
    };
}

let rawFormData = {
    name: "John Doe",
    age: "30",
    email: "john@example.com",
    isSubscribed: "true",
    score: "95.5"
};

console.log("Processed form data:", processFormData(rawFormData));

// Example 3: Mathematical operations with type safety
function calculate(operation, a, b) {
    const numA = safeNumber(a);
    const numB = safeNumber(b);
    
    switch (operation) {
        case 'add':
            return numA + numB;
        case 'subtract':
            return numA - numB;
        case 'multiply':
            return numA * numB;
        case 'divide':
            return numB !== 0 ? numA / numB : 'Cannot divide by zero';
        case 'modulo':
            return numB !== 0 ? numA % numB : 'Cannot modulo by zero';
        case 'power':
            return Math.pow(numA, numB);
        default:
            return 'Unknown operation';
    }
}

console.log("calculate('add', '10', '5'):", calculate('add', '10', '5'));       // 15
console.log("calculate('divide', '10', '0'):", calculate('divide', '10', '0')); // "Cannot divide by zero"
console.log("calculate('power', '2', '3'):", calculate('power', '2', '3'));     // 8
    
/*  
   1) if store the value   in varaible is null   
        
        then typeof the variable is   object 

        when conert this varaible in  in number and store in another varaible 
        
         then value is  give a Zero

   2) value is undefiend  
         then typeof undefined 

         conversion in number then value NaN
  3) boolean 
       typeof  boolean 

       convert Number  true 1 and false 0  
*/

// if we do string is empty  and convert it boolean then give output as false

// if string avlai  then give a true 

let num =  33 ;

let stringNumber =  String(num) // type of num is string and store in stringNumber 

//***********************************************************Operations */

    let value =  3 ;
    let negvalue = -value 
    console.log(negvalue)  //  - 3 

    // string 1st assign value  "hello" and  string 2nd assign value  "vaibhav"

    let str1 = "hello" 
    let str2 = "vaibhav" 
    let str3 =  str1 + str2 ;

    console.log(str3); // hello vaibhav

    console.log("1" + 2);  // 12
    console.log(1+ "2");  //12
    console.log("1" +2 +2); //122
    console.log(1+2+ "2"); //32

//     triciy conversion 

  console.log(true); // true 

  console.log( +true); // 1

  //console.log(true+); // error

  console.log(+""); // 0
 
    let num1 ,num2 , num3  ;
    num1 = num2 =num3 = 2+2 ; // 4 


    let gameCounter = 100 
    gameCounter++ ;   // ++gameCounter 
    console.log(gameCounter); //101
    
  
  
  
    
    
    
    
    