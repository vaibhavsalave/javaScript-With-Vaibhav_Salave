// JavaScript Arrays - Complete Guide

// =====================================================
// ARRAY CREATION
// =====================================================

console.log("=== ARRAY CREATION ===");

// Array literal
let fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);

// Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Empty array
let emptyArray = [];
console.log("Empty array:", emptyArray);

// Array with specific length
let arrayWithLength = new Array(5); // Creates array with 5 empty slots
console.log("Array with length 5:", arrayWithLength);
console.log("Length:", arrayWithLength.length);

// Mixed data types
let mixedArray = [1, "hello", true, null, {name: "John"}, [1, 2, 3]];
console.log("Mixed array:", mixedArray);

// Array.from() - create array from iterable
let stringArray = Array.from("hello");
console.log("From string:", stringArray);

// Array.of() - create array from arguments
let numbersArray = Array.of(1, 2, 3, 4, 5);
console.log("Array.of:", numbersArray);

// =====================================================
// ARRAY ACCESS AND MODIFICATION
// =====================================================

console.log("\n=== ARRAY ACCESS AND MODIFICATION ===");

let colors = ["red", "green", "blue"];
console.log("Original colors:", colors);

// Access elements
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);

// Modify elements
colors[1] = "yellow";
console.log("After modification:", colors);

// Add elements
colors[3] = "purple";
console.log("After adding purple:", colors);

// Array length
console.log("Array length:", colors.length);

// Sparse arrays (gaps in indices)
let sparseArray = [];
sparseArray[0] = "first";
sparseArray[5] = "sixth";
console.log("Sparse array:", sparseArray);
console.log("Length of sparse array:", sparseArray.length);

// =====================================================
// ARRAY METHODS - ADDING/REMOVING ELEMENTS
// =====================================================

console.log("\n=== ADDING/REMOVING ELEMENTS ===");

let animals = ["cat", "dog"];
console.log("Original animals:", animals);

// push() - add to end
animals.push("bird");
console.log("After push:", animals);

// unshift() - add to beginning
animals.unshift("fish");
console.log("After unshift:", animals);

// pop() - remove from end
let lastAnimal = animals.pop();
console.log("Popped:", lastAnimal);
console.log("After pop:", animals);

// shift() - remove from beginning
let firstAnimal = animals.shift();
console.log("Shifted:", firstAnimal);
console.log("After shift:", animals);

// splice() - add/remove at specific index
let food = ["apple", "banana", "orange", "grape"];
console.log("Original food:", food);

// Remove 2 elements starting at index 1
let removed = food.splice(1, 2);
console.log("Removed:", removed);
console.log("After removal:", food);

// Add elements at index 1
food.splice(1, 0, "mango", "kiwi");
console.log("After adding:", food);

// Replace elements
food.splice(2, 1, "pineapple");
console.log("After replacement:", food);

// =====================================================
// ARRAY METHODS - SEARCHING
// =====================================================

console.log("\n=== SEARCHING METHODS ===");

let numbers2 = [1, 2, 3, 4, 5, 3, 6];
console.log("Numbers:", numbers2);

// indexOf() - first occurrence
console.log("Index of 3:", numbers2.indexOf(3));
console.log("Index of 10:", numbers2.indexOf(10)); // -1 if not found

// lastIndexOf() - last occurrence
console.log("Last index of 3:", numbers2.lastIndexOf(3));

// includes() - check if element exists
console.log("Includes 5:", numbers2.includes(5));
console.log("Includes 10:", numbers2.includes(10));

// find() - first element that matches condition
let students = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 20}
];

let student = students.find(s => s.age === 20);
console.log("First student aged 20:", student);

// findIndex() - index of first element that matches
let index = students.findIndex(s => s.name === "Bob");
console.log("Index of Bob:", index);

// findLast() and findLastIndex() (ES2022)
let lastStudent = students.findLast(s => s.age === 20);
console.log("Last student aged 20:", lastStudent);

// =====================================================
// ARRAY METHODS - ITERATION
// =====================================================

console.log("\n=== ITERATION METHODS ===");

let scores = [85, 90, 78, 92, 88];
console.log("Scores:", scores);

// forEach() - execute function for each element
console.log("Using forEach:");
scores.forEach((score, index) => {
    console.log(`Score ${index + 1}: ${score}`);
});

// map() - create new array with transformed elements
let doubled = scores.map(score => score * 2);
console.log("Doubled scores:", doubled);

// filter() - create new array with elements that pass test
let highScores = scores.filter(score => score >= 90);
console.log("High scores (>=90):", highScores);

// reduce() - reduce array to single value
let total = scores.reduce((sum, score) => sum + score, 0);
console.log("Total score:", total);

let average = total / scores.length;
console.log("Average score:", average.toFixed(2));

// reduceRight() - reduce from right to left
let concatenated = ["a", "b", "c", "d"].reduceRight((acc, val) => acc + val);
console.log("Concatenated right to left:", concatenated);

// some() - check if at least one element passes test
let hasHighScore = scores.some(score => score >= 95);
console.log("Has score >= 95:", hasHighScore);

// every() - check if all elements pass test
let allPassing = scores.every(score => score >= 70);
console.log("All scores >= 70:", allPassing);

// =====================================================
// ARRAY METHODS - TRANSFORMATION
// =====================================================

console.log("\n=== TRANSFORMATION METHODS ===");

let letters = ["b", "a", "c", "d"];
console.log("Original letters:", letters);

// sort() - sort elements (modifies original array)
let sortedLetters = [...letters].sort(); // Using spread to avoid modifying original
console.log("Sorted letters:", sortedLetters);

// sort() with custom compare function
let numbers3 = [10, 5, 20, 15];
let sortedNumbers = [...numbers3].sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

// Sort objects
let products = [
    {name: "Laptop", price: 999},
    {name: "Mouse", price: 25},
    {name: "Keyboard", price: 75}
];

let sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Sorted by price:", sortedByPrice);

// reverse() - reverse array order
let reversed = [...letters].reverse();
console.log("Reversed letters:", reversed);

// slice() - extract portion of array (doesn't modify original)
let portion = numbers3.slice(1, 3);
console.log("Slice(1,3):", portion);
console.log("Original unchanged:", numbers3);

// concat() - join arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let combined = arr1.concat(arr2, arr3);
console.log("Concatenated:", combined);

// join() - convert array to string
let words = ["Hello", "World", "JavaScript"];
let sentence = words.join(" ");
console.log("Joined with spaces:", sentence);

// =====================================================
// ARRAY DESTRUCTURING (ES6)
// =====================================================

console.log("\n=== ARRAY DESTRUCTURING ===");

let coordinates = [10, 20, 30];

// Basic destructuring
let [x, y, z] = coordinates;
console.log(`x: ${x}, y: ${y}, z: ${z}`);

// Skip elements
let [first, , third] = coordinates;
console.log(`First: ${first}, Third: ${third}`);

// Default values
let [a, b, c, d = 40] = coordinates;
console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);

// Rest parameter
let numbers4 = [1, 2, 3, 4, 5];
let [head, ...tail] = numbers4;
console.log("Head:", head);
console.log("Tail:", tail);

// Swapping variables
let var1 = "hello";
let var2 = "world";
[var1, var2] = [var2, var1];
console.log(`var1: ${var1}, var2: ${var2}`);

// =====================================================
// SPREAD OPERATOR WITH ARRAYS (ES6)
// =====================================================

console.log("\n=== SPREAD OPERATOR ===");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Combine arrays
let combined2 = [...array1, ...array2];
console.log("Combined with spread:", combined2);

// Copy array
let copied = [...array1];
console.log("Copied array:", copied);

// Add elements
let extended = [0, ...array1, 7, 8];
console.log("Extended array:", extended);

// Convert string to array
let charArray = [..."hello"];
console.log("String to array:", charArray);

// Find max/min in array
let values = [3, 7, 1, 9, 2];
let max = Math.max(...values);
let min = Math.min(...values);
console.log(`Max: ${max}, Min: ${min}`);

// =====================================================
// MULTIDIMENSIONAL ARRAYS
// =====================================================

console.log("\n=== MULTIDIMENSIONAL ARRAYS ===");

// 2D array (matrix)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);
console.log("Element at [1][2]:", matrix[1][2]); // 6

// Iterate through 2D array
console.log("Matrix elements:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`[${i}][${j}] = ${matrix[i][j]}`);
    }
}

// Flatten 2D array
let flattened = matrix.flat();
console.log("Flattened matrix:", flattened);

// 3D array
let cube = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];

console.log("3D array:", cube);
console.log("Element at [1][0][1]:", cube[1][0][1]); // 6

// =====================================================
// ARRAY-LIKE OBJECTS
// =====================================================

console.log("\n=== ARRAY-LIKE OBJECTS ===");

// Convert arguments object to array (in function)
function exampleFunction() {
    console.log("Arguments object:", arguments);
    let argsArray = Array.from(arguments);
    console.log("Converted to array:", argsArray);
    
    // Or using spread
    let argsArray2 = [...arguments];
    console.log("Using spread:", argsArray2);
}

exampleFunction(1, 2, 3, "hello");

// Convert NodeList to array (simulated)
let nodeListLike = {
    0: "element1",
    1: "element2",
    2: "element3",
    length: 3
};

let convertedArray = Array.from(nodeListLike);
console.log("Converted array-like:", convertedArray);

// =====================================================
// PRACTICAL EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Remove duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];
console.log("Remove duplicates:", removeDuplicates(duplicateNumbers));

// Example 2: Group array elements
function groupBy(arr, key) {
    return arr.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
}

let employees = [
    {name: "Alice", department: "IT"},
    {name: "Bob", department: "HR"},
    {name: "Charlie", department: "IT"},
    {name: "Diana", department: "Finance"}
];

console.log("Grouped by department:", groupBy(employees, 'department'));

// Example 3: Array intersection
function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

let set1 = [1, 2, 3, 4, 5];
let set2 = [3, 4, 5, 6, 7];
console.log("Intersection:", intersection(set1, set2));

// Example 4: Array difference
function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

console.log("Difference:", difference(set1, set2));

// Example 5: Chunk array
function chunk(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

let longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Chunked (size 3):", chunk(longArray, 3));

// Example 6: Shuffle array
function shuffle(arr) {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

let deck = ["A", "K", "Q", "J", "10", "9", "8", "7"];
console.log("Original deck:", deck);
console.log("Shuffled deck:", shuffle(deck));

// Example 7: Array statistics
function arrayStats(arr) {
    if (arr.length === 0) return null;
    
    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = sum / arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sorted = [...arr].sort((a, b) => a - b);
    let median = sorted.length % 2 === 0
        ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
        : sorted[Math.floor(sorted.length / 2)];
    
    return { sum, avg, min, max, median };
}

let testScores = [85, 92, 78, 96, 88, 76, 89, 94];
console.log("Array statistics:", arrayStats(testScores));

// Example 8: Binary search (sorted array)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log("Binary search for 7:", binarySearch(sortedArray, 7));
console.log("Binary search for 6:", binarySearch(sortedArray, 6));