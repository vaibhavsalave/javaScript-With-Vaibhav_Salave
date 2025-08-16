// ========================================
// ARRAY METHODS PRACTICE - COMPREHENSIVE
// ========================================

console.log("🚀 ARRAY METHODS PRACTICE STARTED 🚀\n");

// ========================================
// 1. TRANSFORMATION METHODS
// ========================================

console.log("📚 1. TRANSFORMATION METHODS");
console.log("=============================");

// map() - Transform each element
const numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers);

const doubled = numbers.map(num => num * 2);
console.log("Doubled with map():", doubled);

const squared = numbers.map(num => num ** 2);
console.log("Squared with map():", squared);

const formatted = numbers.map(num => `Number: ${num}`);
console.log("Formatted with map():", formatted);

// filter() - Select elements based on condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers with filter():", evenNumbers);

const greaterThan3 = numbers.filter(num => num > 3);
console.log("Numbers > 3 with filter():", greaterThan3);

// reduce() - Accumulate values
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum with reduce():", sum);

const product = numbers.reduce((acc, num) => acc * num, 1);
console.log("Product with reduce():", product);

const maxNumber = numbers.reduce((max, num) => Math.max(max, num), numbers[0]);
console.log("Max number with reduce():", maxNumber);

console.log("\n");

// ========================================
// 2. SEARCHING METHODS
// ========================================

console.log("🔍 2. SEARCHING METHODS");
console.log("=======================");

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango'];

// find() - Find first element that matches condition
const firstLongFruit = fruits.find(fruit => fruit.length > 5);
console.log("First fruit with length > 5:", firstLongFruit);

const startsWithB = fruits.find(fruit => fruit.startsWith('b'));
console.log("First fruit starting with 'b':", startsWithB);

// findIndex() - Find index of first matching element
const orangeIndex = fruits.findIndex(fruit => fruit === 'orange');
console.log("Index of 'orange':", orangeIndex);

const longFruitIndex = fruits.findIndex(fruit => fruit.length > 5);
console.log("Index of first long fruit:", longFruitIndex);

// includes() - Check if element exists
console.log("Array includes 'banana':", fruits.includes('banana'));
console.log("Array includes 'pear':", fruits.includes('pear'));

// indexOf() - Find index of element
console.log("Index of 'grape':", fruits.indexOf('grape'));
console.log("Index of 'pear':", fruits.indexOf('pear')); // Returns -1 if not found

console.log("\n");

// ========================================
// 3. SORTING AND REVERSING
// ========================================

console.log("🔄 3. SORTING AND REVERSING");
console.log("============================");

// sort() - Sort elements
const mixedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original mixed numbers:", mixedNumbers);

const sortedAsc = [...mixedNumbers].sort((a, b) => a - b);
console.log("Sorted ascending:", sortedAsc);

const sortedDesc = [...mixedNumbers].sort((a, b) => b - a);
console.log("Sorted descending:", sortedDesc);

// Sort strings
const mixedFruits = ['banana', 'Apple', 'cherry', 'date'];
console.log("Original fruits:", mixedFruits);

const sortedFruits = [...mixedFruits].sort();
console.log("Sorted fruits (alphabetical):", sortedFruits);

const sortedFruitsCaseInsensitive = [...mixedFruits].sort((a, b) => 
    a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log("Sorted fruits (case-insensitive):", sortedFruitsCaseInsensitive);

// reverse() - Reverse array order
const reversedNumbers = [...mixedNumbers].reverse();
console.log("Reversed numbers:", reversedNumbers);

console.log("\n");

// ========================================
// 4. ADDING AND REMOVING ELEMENTS
// ========================================

console.log("➕ 4. ADDING AND REMOVING ELEMENTS");
console.log("==================================");

let dynamicArray = [1, 2, 3];
console.log("Original array:", dynamicArray);

// push() - Add to end
dynamicArray.push(4);
console.log("After push(4):", dynamicArray);

// unshift() - Add to beginning
dynamicArray.unshift(0);
console.log("After unshift(0):", dynamicArray);

// pop() - Remove from end
const lastElement = dynamicArray.pop();
console.log("After pop(), removed:", lastElement, "Array:", dynamicArray);

// shift() - Remove from beginning
const firstElement = dynamicArray.shift();
console.log("After shift(), removed:", firstElement, "Array:", dynamicArray);

// splice() - Remove/Add at specific position
dynamicArray.splice(1, 1, 'inserted');
console.log("After splice(1, 1, 'inserted'):", dynamicArray);

console.log("\n");

// ========================================
// 5. ARRAY SLICING AND CONCATENATION
// ========================================

console.log("✂️ 5. ARRAY SLICING AND CONCATENATION");
console.log("======================================");

const fullArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// slice() - Extract portion of array
const firstThree = fullArray.slice(0, 3);
console.log("First three elements:", firstThree);

const lastThree = fullArray.slice(-3);
console.log("Last three elements:", lastThree);

const middleSection = fullArray.slice(3, 7);
console.log("Middle section (index 3-6):", middleSection);

// concat() - Combine arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combined = array1.concat(array2, array3);
console.log("Combined arrays:", combined);

// Spread operator for concatenation
const spreadCombined = [...array1, ...array2, ...array3];
console.log("Combined with spread:", spreadCombined);

console.log("\n");

// ========================================
// 6. ARRAY TESTING METHODS
// ========================================

console.log("🧪 6. ARRAY TESTING METHODS");
console.log("============================");

const testArray = [2, 4, 6, 8, 10, 12];

// every() - Check if all elements pass test
const allEven = testArray.every(num => num % 2 === 0);
console.log("All numbers are even:", allEven);

const allPositive = testArray.every(num => num > 0);
console.log("All numbers are positive:", allPositive);

// some() - Check if at least one element passes test
const hasMultipleOf3 = testArray.some(num => num % 3 === 0);
console.log("Has multiple of 3:", hasMultipleOf3);

const hasNumberGreaterThan15 = testArray.some(num => num > 15);
console.log("Has number > 15:", hasNumberGreaterThan15);

console.log("\n");

// ========================================
// 7. PRACTICAL EXAMPLES
// ========================================

console.log("💡 7. PRACTICAL EXAMPLES");
console.log("=========================");

// Example 1: Shopping cart calculations
const cart = [
    { name: 'Laptop', price: 999, quantity: 1 },
    { name: 'Mouse', price: 25, quantity: 2 },
    { name: 'Keyboard', price: 75, quantity: 1 },
    { name: 'Headphones', price: 150, quantity: 1 }
];

const totalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
console.log("Shopping cart total:", totalValue);

const expensiveItems = cart.filter(item => item.price > 100);
console.log("Expensive items (>$100):", expensiveItems);

const itemNames = cart.map(item => item.name);
console.log("Item names:", itemNames);

// Example 2: Student grades processing
const students = [
    { name: 'Alice', grades: [85, 90, 92, 88] },
    { name: 'Bob', grades: [78, 85, 80, 82] },
    { name: 'Charlie', grades: [92, 88, 95, 90] },
    { name: 'Diana', grades: [75, 80, 78, 85] }
];

const studentsWithAverages = students.map(student => ({
    name: student.name,
    average: student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
}));

console.log("Students with averages:", studentsWithAverages);

const topStudents = studentsWithAverages.filter(student => student.average >= 85);
console.log("Top students (avg >= 85):", topStudents);

// Example 3: Data transformation
const rawData = [
    'user1,admin,active',
    'user2,user,inactive',
    'user3,moderator,active',
    'user4,user,active',
    'user5,admin,inactive'
];

const processedData = rawData
    .map(line => {
        const [username, role, status] = line.split(',');
        return { username, role, status };
    })
    .filter(user => user.status === 'active')
    .sort((a, b) => a.username.localeCompare(b.username));

console.log("Processed active users:", processedData);

console.log("\n");

// ========================================
// 8. PRACTICE EXERCISES
// ========================================

console.log("🎯 8. PRACTICE EXERCISES");
console.log("=========================");

console.log("Try these exercises:");
console.log("1. Create an array of numbers 1-20 and find all prime numbers");
console.log("2. Given an array of strings, find the longest word");
console.log("3. Create a function that removes duplicates from an array");
console.log("4. Implement a function that flattens nested arrays");
console.log("5. Create a function that groups array elements by a given criteria");

// Exercise 1: Find prime numbers
function findPrimes(max) {
    const numbers = Array.from({length: max}, (_, i) => i + 1);
    return numbers.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

console.log("\nExercise 1 - Prime numbers 1-20:", findPrimes(20));

// Exercise 2: Find longest word
function findLongestWord(words) {
    return words.reduce((longest, current) => 
        current.length > longest.length ? current : longest, '');
}

const wordArray = ['javascript', 'python', 'java', 'c++', 'typescript'];
console.log("Exercise 2 - Longest word:", findLongestWord(wordArray));

// Exercise 3: Remove duplicates
function removeDuplicates(array) {
    return [...new Set(array)];
}

const duplicateArray = [1, 2, 2, 3, 4, 4, 5, 5, 5];
console.log("Exercise 3 - Remove duplicates:", removeDuplicates(duplicateArray));

console.log("\n🚀 ARRAY METHODS PRACTICE COMPLETED! 🚀");
console.log("Practice these methods regularly to master them!");