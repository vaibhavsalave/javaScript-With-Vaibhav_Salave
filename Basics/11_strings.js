// JavaScript Strings - Complete Guide

// =====================================================
// STRING CREATION
// =====================================================

console.log("=== STRING CREATION ===");

// String literals
let singleQuotes = 'Hello World';
let doubleQuotes = "Hello World";
let backticks = `Hello World`;

console.log("Single quotes:", singleQuotes);
console.log("Double quotes:", doubleQuotes);
console.log("Backticks:", backticks);

// String constructor
let stringObject = new String("Hello");
console.log("String object:", stringObject);
console.log("Type of string object:", typeof stringObject);

// Primitive vs Object
let primitive = "hello";
let object = new String("hello");
console.log("Primitive === Object:", primitive === object); // false
console.log("Primitive == Object:", primitive == object);   // true

// Escape characters
let escaped = "He said, \"Hello!\" and walked away.\nNext line here.";
console.log("Escaped string:", escaped);

// Raw strings (template literals)
let rawString = String.raw`C:\Users\Documents\file.txt`;
console.log("Raw string:", rawString);

// =====================================================
// TEMPLATE LITERALS (ES6)
// =====================================================

console.log("\n=== TEMPLATE LITERALS ===");

let name = "Alice";
let age = 25;
let city = "New York";

// Basic interpolation
let greeting = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log("Basic interpolation:", greeting);

// Expression in template literals
let calculation = `The result is ${10 + 5 * 2}`;
console.log("Expression:", calculation);

// Multi-line strings
let multiLine = `
    This is a
    multi-line
    string using
    template literals.
`;
console.log("Multi-line:", multiLine);

// Function calls in template literals
function formatName(first, last) {
    return `${first.toUpperCase()} ${last.toUpperCase()}`;
}

let fullName = `Welcome, ${formatName("john", "doe")}!`;
console.log("Function call:", fullName);

// Nested template literals
let message = `User ${name} ${age >= 18 ? `is an adult` : `is a minor`}`;
console.log("Nested:", message);

// =====================================================
// STRING PROPERTIES AND BASIC METHODS
// =====================================================

console.log("\n=== BASIC STRING PROPERTIES AND METHODS ===");

let text = "JavaScript Programming";
console.log("Original text:", text);

// Length property
console.log("Length:", text.length);

// Character access
console.log("First character:", text[0]);
console.log("Last character:", text[text.length - 1]);
console.log("Character at index 4:", text.charAt(4));

// Character code
console.log("Char code at index 0:", text.charCodeAt(0));
console.log("Char from code 74:", String.fromCharCode(74));

// Case conversion
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// =====================================================
// STRING SEARCHING METHODS
// =====================================================

console.log("\n=== STRING SEARCHING METHODS ===");

let sentence = "The quick brown fox jumps over the lazy dog";
console.log("Sentence:", sentence);

// indexOf() - first occurrence
console.log("Index of 'quick':", sentence.indexOf('quick'));
console.log("Index of 'the':", sentence.indexOf('the'));
console.log("Index of 'cat':", sentence.indexOf('cat')); // -1 if not found

// lastIndexOf() - last occurrence
console.log("Last index of 'the':", sentence.lastIndexOf('the'));

// search() - with regex support
console.log("Search for 'fox':", sentence.search('fox'));
console.log("Search with regex:", sentence.search(/[aeiou]/)); // First vowel

// includes() - check if substring exists
console.log("Includes 'brown':", sentence.includes('brown'));
console.log("Includes 'cat':", sentence.includes('cat'));

// startsWith() and endsWith()
console.log("Starts with 'The':", sentence.startsWith('The'));
console.log("Ends with 'dog':", sentence.endsWith('dog'));
console.log("Starts with 'quick' at index 4:", sentence.startsWith('quick', 4));

// =====================================================
// STRING EXTRACTION METHODS
// =====================================================

console.log("\n=== STRING EXTRACTION METHODS ===");

let phrase = "Hello, World! How are you?";
console.log("Original phrase:", phrase);

// substring() - extracts between two indices
console.log("Substring(0, 5):", phrase.substring(0, 5));
console.log("Substring(7, 12):", phrase.substring(7, 12));

// substr() - extracts from start index with length (deprecated)
console.log("Substr(7, 5):", phrase.substr(7, 5));

// slice() - extracts between indices (supports negative indices)
console.log("Slice(0, 5):", phrase.slice(0, 5));
console.log("Slice(-4):", phrase.slice(-4)); // Last 4 characters
console.log("Slice(-10, -6):", phrase.slice(-10, -6));

// split() - convert string to array
console.log("Split by spaces:", phrase.split(' '));
console.log("Split by comma:", phrase.split(','));
console.log("Split with limit:", phrase.split(' ', 3));
console.log("Split each character:", phrase.split(''));

// =====================================================
// STRING MODIFICATION METHODS
// =====================================================

console.log("\n=== STRING MODIFICATION METHODS ===");

let original = "  Hello World  ";
console.log("Original with spaces:", `"${original}"`);

// trim() - remove whitespace from both ends
console.log("Trimmed:", `"${original.trim()}"`);

// trimStart() / trimLeft() - remove from start
console.log("Trim start:", `"${original.trimStart()}"`);

// trimEnd() / trimRight() - remove from end
console.log("Trim end:", `"${original.trimEnd()}"`);

// replace() - replace first occurrence
let text2 = "The cat and the cat";
console.log("Replace first 'cat':", text2.replace('cat', 'dog'));

// replaceAll() - replace all occurrences (ES2021)
console.log("Replace all 'cat':", text2.replaceAll('cat', 'dog'));

// replace() with regex
console.log("Replace with regex:", text2.replace(/cat/g, 'dog'));

// padStart() and padEnd()
let number = "42";
console.log("Pad start:", number.padStart(5, '0'));
console.log("Pad end:", number.padEnd(5, '0'));

// repeat()
console.log("Repeat 'Ha' 3 times:", "Ha".repeat(3));

// =====================================================
// STRING COMPARISON
// =====================================================

console.log("\n=== STRING COMPARISON ===");

let str1 = "apple";
let str2 = "banana";
let str3 = "Apple";

// Basic comparison
console.log("'apple' < 'banana':", str1 < str2);
console.log("'apple' === 'Apple':", str1 === str3);

// Case-insensitive comparison
console.log("Case-insensitive comparison:", str1.toLowerCase() === str3.toLowerCase());

// localeCompare() - locale-sensitive comparison
console.log("Locale compare 'apple' vs 'banana':", str1.localeCompare(str2));
console.log("Locale compare 'banana' vs 'apple':", str2.localeCompare(str1));
console.log("Locale compare equal strings:", str1.localeCompare("apple"));

// =====================================================
// REGULAR EXPRESSIONS WITH STRINGS
// =====================================================

console.log("\n=== REGULAR EXPRESSIONS ===");

let emailText = "Contact us at: info@example.com or support@test.org";
console.log("Email text:", emailText);

// match() - find matches
let emailMatches = emailText.match(/\w+@\w+\.\w+/g);
console.log("Email matches:", emailMatches);

// test() - check if pattern exists
let hasEmail = /\w+@\w+\.\w+/.test(emailText);
console.log("Has email:", hasEmail);

// exec() - get detailed match info
let emailRegex = /(\w+)@(\w+)\.(\w+)/g;
let match;
console.log("Detailed email matches:");
while ((match = emailRegex.exec(emailText)) !== null) {
    console.log(`Full: ${match[0]}, User: ${match[1]}, Domain: ${match[2]}, TLD: ${match[3]}`);
}

// replace with regex and capture groups
let phoneText = "Call us at 123-456-7890 or 987-654-3210";
let formattedPhones = phoneText.replace(/(\d{3})-(\d{3})-(\d{4})/g, '($1) $2-$3');
console.log("Formatted phones:", formattedPhones);

// =====================================================
// STRING UNICODE AND ENCODING
// =====================================================

console.log("\n=== UNICODE AND ENCODING ===");

// Unicode characters
let unicodeStr = "Hello 🌍 World! 😊";
console.log("Unicode string:", unicodeStr);
console.log("Length:", unicodeStr.length); // May not be what you expect

// Code points
console.log("Code point at 6:", unicodeStr.codePointAt(6));
console.log("From code point:", String.fromCodePoint(127757));

// Normalize()
let str = "café";
let normalized = str.normalize();
console.log("Normalized:", normalized);

// UTF-16 encoding issues
let emoji = "👨‍👩‍👧‍👦"; // Family emoji (multiple code units)
console.log("Family emoji length:", emoji.length);

// Proper way to count graphemes
let segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
let segments = [...segmenter.segment(emoji)];
console.log("Actual character count:", segments.length);

// =====================================================
// STRING FORMATTING AND MANIPULATION
// =====================================================

console.log("\n=== STRING FORMATTING ===");

// Number formatting in strings
let price = 1234.56;
let formattedPrice = `$${price.toFixed(2)}`;
console.log("Formatted price:", formattedPrice);

// Locale-specific number formatting
let numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
console.log("Locale formatted:", numberFormatter.format(price));

// Date formatting in strings
let date = new Date();
let dateString = `Today is ${date.toLocaleDateString()}`;
console.log("Date string:", dateString);

// JSON stringification
let obj = {name: "John", age: 30, city: "New York"};
let jsonString = JSON.stringify(obj);
console.log("JSON string:", jsonString);

// URL encoding
let url = "https://example.com/search?q=hello world&type=all";
let encodedUrl = encodeURIComponent(url);
console.log("Encoded URL:", encodedUrl);

// =====================================================
// PRACTICAL EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: String validation functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
    return phoneRegex.test(phone);
}

function isValidPassword(password) {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

console.log("Valid email test:", isValidEmail("user@example.com"));
console.log("Valid phone test:", isValidPhone("(123) 456-7890"));
console.log("Valid password test:", isValidPassword("MyPass123!"));

// Example 2: Text processing functions
function titleCase(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function camelCase(str) {
    return str.split(/[-_\s]+/)
        .map((word, index) => 
            index === 0 ? word.toLowerCase() : 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

function kebabCase(str) {
    return str.split(/[A-Z]/)
        .join('-')
        .toLowerCase()
        .replace(/[-_\s]+/g, '-');
}

let testStr = "hello world example";
console.log("Title case:", titleCase(testStr));
console.log("Camel case:", camelCase("hello-world_example"));
console.log("Kebab case:", kebabCase("HelloWorldExample"));

// Example 3: String templating function
function template(str, data) {
    return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return data[key] || match;
    });
}

let templateStr = "Hello {{name}}, you have {{count}} new messages!";
let templateData = {name: "Alice", count: 5};
console.log("Template result:", template(templateStr, templateData));

// Example 4: String truncation with ellipsis
function truncate(str, maxLength, suffix = '...') {
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength - suffix.length) + suffix;
}

let longText = "This is a very long text that needs to be truncated";
console.log("Truncated:", truncate(longText, 20));

// Example 5: Word count and reading time
function getTextStats(text) {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const readingTime = Math.ceil(words.length / 200); // Average 200 words per minute
    
    return {
        words: words.length,
        characters,
        charactersNoSpaces,
        sentences,
        paragraphs,
        readingTime: `${readingTime} min`
    };
}

let sampleText = `This is a sample text. It has multiple sentences! 
How many words does it contain? Let's find out.

This is a second paragraph. It helps demonstrate the text analysis.`;

console.log("Text stats:", getTextStats(sampleText));

// Example 6: String similarity (Levenshtein distance)
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

console.log("Distance 'kitten' vs 'sitting':", levenshteinDistance("kitten", "sitting"));
console.log("Distance 'hello' vs 'hallo':", levenshteinDistance("hello", "hallo"));