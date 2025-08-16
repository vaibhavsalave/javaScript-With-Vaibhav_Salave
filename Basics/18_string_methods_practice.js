// ========================================
// STRING METHODS & MANIPULATION PRACTICE
// ========================================

console.log("🚀 STRING METHODS PRACTICE STARTED 🚀\n");

// ========================================
// 1. STRING CREATION AND CONVERSION
// ========================================

console.log("🏗️ 1. STRING CREATION AND CONVERSION");
console.log("=====================================");

// String literals
const singleQuotes = 'Hello World';
const doubleQuotes = "Hello World";
const backticks = `Hello World`;

// String constructor
const stringObj = new String('Hello World');

// Template literals
const name = 'John';
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old`;

// String conversion
const number = 42;
const boolean = true;
const array = [1, 2, 3];
const object = { key: 'value' };

const stringFromNumber = String(number);
const stringFromBoolean = String(boolean);
const stringFromArray = String(array);
const stringFromObject = String(object);

console.log("Single quotes:", singleQuotes);
console.log("Double quotes:", doubleQuotes);
console.log("Backticks:", backticks);
console.log("String object:", stringObj);
console.log("Template literal:", greeting);
console.log("String from number:", stringFromNumber);
console.log("String from boolean:", stringFromBoolean);
console.log("String from array:", stringFromArray);
console.log("String from object:", stringFromObject);

console.log("\n");

// ========================================
// 2. STRING PROPERTIES AND LENGTH
// ========================================

console.log("📏 2. STRING PROPERTIES AND LENGTH");
console.log("===================================");

const sampleString = "JavaScript is awesome!";
const emptyString = "";
const multiLineString = `This is a
multi-line
string`;

console.log("Sample string:", sampleString);
console.log("Length:", sampleString.length);
console.log("Empty string length:", emptyString.length);
console.log("Multi-line string length:", multiLineString.length);

// Accessing characters
console.log("First character:", sampleString[0]);
console.log("Last character:", sampleString[sampleString.length - 1]);
console.log("Character at index 5:", sampleString.charAt(5));

// String immutability demonstration
let mutableString = "Hello";
console.log("Original:", mutableString);
mutableString = mutableString + " World";
console.log("After concatenation:", mutableString);

console.log("\n");

// ========================================
// 3. STRING SEARCHING METHODS
// ========================================

console.log("🔍 3. STRING SEARCHING METHODS");
console.log("===============================");

const searchText = "JavaScript is a programming language. JavaScript is popular.";

// indexOf() - Find first occurrence
console.log("First 'JavaScript':", searchText.indexOf('JavaScript'));
console.log("First 'Python':", searchText.indexOf('Python')); // Returns -1 if not found

// lastIndexOf() - Find last occurrence
console.log("Last 'JavaScript':", searchText.lastIndexOf('JavaScript'));

// search() - Search with regex
console.log("Search for 'programming':", searchText.search('programming'));
console.log("Search with regex (capital letters):", searchText.search(/[A-Z]/));

// includes() - Check if string contains substring
console.log("Contains 'programming':", searchText.includes('programming'));
console.log("Contains 'Python':", searchText.includes('Python'));

// startsWith() - Check if string starts with substring
console.log("Starts with 'JavaScript':", searchText.startsWith('JavaScript'));
console.log("Starts with 'Python':", searchText.startsWith('Python'));

// endsWith() - Check if string ends with substring
console.log("Ends with 'popular.':", searchText.endsWith('popular.'));
console.log("Ends with 'JavaScript':", searchText.endsWith('JavaScript'));

console.log("\n");

// ========================================
// 4. STRING EXTRACTION METHODS
// ========================================

console.log("✂️ 4. STRING EXTRACTION METHODS");
console.log("=================================");

const extractText = "Hello World JavaScript";

// slice() - Extract portion of string
console.log("Original text:", extractText);
console.log("Slice (0, 5):", extractText.slice(0, 5));
console.log("Slice (6, 11):", extractText.slice(6, 11));
console.log("Slice (-10):", extractText.slice(-10)); // Last 10 characters
console.log("Slice (6):", extractText.slice(6)); // From index 6 to end

// substring() - Similar to slice but different behavior with negative indices
console.log("Substring (0, 5):", extractText.substring(0, 5));
console.log("Substring (6, 11):", extractText.substring(6, 11));

// substr() - Deprecated but still works (start, length)
console.log("Substr (6, 5):", extractText.substr(6, 5));

// charAt() and charCodeAt()
console.log("Character at index 7:", extractText.charAt(7));
console.log("Character code at index 7:", extractText.charCodeAt(7));

console.log("\n");

// ========================================
// 5. STRING MODIFICATION METHODS
// ========================================

console.log("🔧 5. STRING MODIFICATION METHODS");
console.log("==================================");

const modifyText = "  Hello World  ";

// trim() - Remove whitespace from both ends
console.log("Original:", `"${modifyText}"`);
console.log("Trimmed:", `"${modifyText.trim()}"`);

// trimStart() and trimEnd() - Remove whitespace from specific end
console.log("Trim start:", `"${modifyText.trimStart()}"`);
console.log("Trim end:", `"${modifyText.trimEnd()}"`);

// toUpperCase() and toLowerCase()
const caseText = "JavaScript Programming";
console.log("Original:", caseText);
console.log("Uppercase:", caseText.toUpperCase());
console.log("Lowercase:", caseText.toLowerCase());

// replace() - Replace first occurrence
const replaceText = "JavaScript is great. JavaScript is powerful.";
console.log("Original:", replaceText);
console.log("Replace 'JavaScript' with 'Python':", replaceText.replace('JavaScript', 'Python'));

// replaceAll() - Replace all occurrences
console.log("Replace all 'JavaScript' with 'Python':", replaceText.replaceAll('JavaScript', 'Python'));

// replace() with regex - Replace all occurrences
console.log("Replace all with regex:", replaceText.replace(/JavaScript/g, 'Python'));

console.log("\n");

// ========================================
// 6. STRING SPLITTING AND JOINING
// ========================================

console.log("🔗 6. STRING SPLITTING AND JOINING");
console.log("====================================");

const splitText = "apple,banana,orange,grape";

// split() - Split string into array
console.log("Original text:", splitText);
console.log("Split by comma:", splitText.split(','));
console.log("Split by comma (limit 2):", splitText.split(',', 2));
console.log("Split by space:", "Hello World JavaScript".split(' '));
console.log("Split by empty string:", "Hello".split('')); // Split into characters

// join() - Join array into string
const fruits = ['apple', 'banana', 'orange'];
console.log("Fruits array:", fruits);
console.log("Joined with comma:", fruits.join(','));
console.log("Joined with space:", fruits.join(' '));
console.log("Joined with dash:", fruits.join(' - '));

// Practical example: CSV processing
const csvData = "name,age,city\nJohn,30,New York\nJane,25,Los Angeles";
const lines = csvData.split('\n');
const headers = lines[0].split(',');
const data = lines.slice(1).map(line => {
    const values = line.split(',');
    const row = {};
    headers.forEach((header, index) => {
        row[header] = values[index];
    });
    return row;
});

console.log("CSV headers:", headers);
console.log("CSV data:", data);

console.log("\n");

// ========================================
// 7. STRING COMPARISON AND TESTING
// ========================================

console.log("⚖️ 7. STRING COMPARISON AND TESTING");
console.log("=====================================");

// String comparison
const str1 = "apple";
const str2 = "banana";
const str3 = "Apple";

console.log("'apple' < 'banana':", str1 < str2);
console.log("'banana' > 'apple':", str2 > str1);
console.log("'apple' === 'Apple':", str1 === str3);
console.log("'apple' === 'apple':", str1 === 'apple');

// localeCompare() - Locale-aware comparison
console.log("'apple' localeCompare 'Apple':", str1.localeCompare(str3));
console.log("'apple' localeCompare 'banana':", str1.localeCompare(str2));

// String testing methods
const testString = "Hello123World";

// Test if string contains only letters
const onlyLetters = /^[A-Za-z]+$/.test(testString);
console.log("Contains only letters:", onlyLetters);

// Test if string contains numbers
const hasNumbers = /\d/.test(testString);
console.log("Contains numbers:", hasNumbers);

// Test if string is alphanumeric
const isAlphanumeric = /^[A-Za-z0-9]+$/.test(testString);
console.log("Is alphanumeric:", isAlphanumeric);

console.log("\n");

// ========================================
// 8. TEMPLATE LITERALS AND ADVANCED FEATURES
// ========================================

console.log("🎨 8. TEMPLATE LITERALS AND ADVANCED FEATURES");
console.log("==============================================");

// Basic template literals
const userName = "Alice";
const userAge = 28;
const userCity = "Boston";

const userProfile = `
    Name: ${userName}
    Age: ${userAge}
    City: ${userCity}
    Status: ${userAge >= 18 ? 'Adult' : 'Minor'}
`;

console.log("User profile:", userProfile);

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
console.log("Highlighted text:", highlightedText);

// Multi-line strings
const multiLineTemplate = `
    This is a multi-line
    template literal that
    preserves formatting
    and line breaks.
`;

console.log("Multi-line template:", multiLineTemplate);

// Expression evaluation in templates
const price = 29.99;
const quantity = 3;
const total = price * quantity;

const receipt = `
    Receipt:
    Price per item: $${price}
    Quantity: ${quantity}
    Total: $${total.toFixed(2)}
`;

console.log("Receipt:", receipt);

console.log("\n");

// ========================================
// 9. PRACTICAL EXAMPLES
// ========================================

console.log("💡 9. PRACTICAL EXAMPLES");
console.log("=========================");

// Example 1: Text analyzer
function analyzeText(text) {
    const words = text.trim().split(/\s+/);
    const characters = text.replace(/\s/g, '');
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    
    return {
        wordCount: words.length,
        characterCount: characters.length,
        sentenceCount: sentences.length,
        paragraphCount: paragraphs.length,
        averageWordLength: characters.length / words.length,
        longestWord: words.reduce((longest, current) => 
            current.length > longest.length ? current : longest, '')
    };
}

const sampleText = `JavaScript is a programming language. It is widely used for web development.

This language is versatile and powerful. Many developers love it for its flexibility.`;

const analysis = analyzeText(sampleText);
console.log("Text analysis:", analysis);

// Example 2: String formatter
function formatString(template, data) {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
        return data[key] !== undefined ? data[key] : match;
    });
}

const emailTemplate = "Hello {name}, your order {orderId} has been {status}.";
const emailData = {
    name: "John",
    orderId: "ORD-12345",
    status: "shipped"
};

const formattedEmail = formatString(emailTemplate, emailData);
console.log("Formatted email:", formattedEmail);

// Example 3: Password strength checker
function checkPasswordStrength(password) {
    const checks = {
        length: password.length >= 8,
        hasLowercase: /[a-z]/.test(password),
        hasUppercase: /[A-Z]/.test(password),
        hasNumbers: /\d/.test(password),
        hasSpecialChars: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    const score = Object.values(checks).filter(Boolean).length;
    let strength = 'weak';
    
    if (score >= 4) strength = 'strong';
    else if (score >= 3) strength = 'medium';
    
    return { checks, score, strength };
}

const passwords = ['weak', 'Password123', 'Str0ng!P@ss'];
passwords.forEach(pwd => {
    const result = checkPasswordStrength(pwd);
    console.log(`Password "${pwd}": ${result.strength} (score: ${result.score})`);
});

console.log("\n");

// ========================================
// 10. PRACTICE EXERCISES
// ========================================

console.log("🎯 10. PRACTICE EXERCISES");
console.log("==========================");

console.log("Try these exercises:");
console.log("1. Create a function that counts vowels in a string");
console.log("2. Implement a function that reverses words in a sentence");
console.log("3. Build a function that finds the most common character");
console.log("4. Create a function that validates email format");
console.log("5. Implement a function that converts text to title case");

// Exercise 1: Count vowels
function countVowels(text) {
    const vowels = text.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
}

console.log("\nExercise 1 - Vowels in 'Hello World':", countVowels('Hello World'));

// Exercise 2: Reverse words
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

console.log("Exercise 2 - Reversed words:", reverseWords('JavaScript is awesome'));

// Exercise 3: Most common character
function mostCommonChar(text) {
    const charCount = {};
    const cleanText = text.replace(/\s/g, '').toLowerCase();
    
    for (const char of cleanText) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    return Object.entries(charCount).reduce((max, [char, count]) => 
        count > max.count ? { char, count } : max, { char: '', count: 0 });
}

console.log("Exercise 3 - Most common character:", mostCommonChar('Hello World'));

// Exercise 4: Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const testEmails = ['test@example.com', 'invalid-email', 'user@domain'];
testEmails.forEach(email => {
    console.log(`Email "${email}" is valid:`, validateEmail(email));
});

// Exercise 5: Title case conversion
function toTitleCase(text) {
    return text.replace(/\w\S*/g, word => 
        word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    );
}

console.log("Exercise 5 - Title case:", toTitleCase('hello world javascript'));

console.log("\n🚀 STRING METHODS PRACTICE COMPLETED! 🚀");
console.log("Practice these string manipulation techniques regularly!");