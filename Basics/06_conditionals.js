// JavaScript Conditionals - Complete Guide

// =====================================================
// IF STATEMENT
// =====================================================

console.log("=== IF STATEMENT ===");

let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside!");
}

// Simple condition
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

// =====================================================
// IF-ELSE STATEMENT
// =====================================================

console.log("\n=== IF-ELSE STATEMENT ===");

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else {
    console.log("Grade: Not A");
}

// =====================================================
// IF-ELSE IF-ELSE CHAIN
// =====================================================

console.log("\n=== IF-ELSE IF-ELSE CHAIN ===");

let marks = 78;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// =====================================================
// NESTED IF STATEMENTS
// =====================================================

console.log("\n=== NESTED IF STATEMENTS ===");

let weather = "sunny";
let hasUmbrella = false;

if (weather === "rainy") {
    if (hasUmbrella) {
        console.log("You can go out safely.");
    } else {
        console.log("Take an umbrella or stay inside.");
    }
} else {
    console.log("Weather is fine, enjoy your day!");
}

// =====================================================
// LOGICAL OPERATORS IN CONDITIONS
// =====================================================

console.log("\n=== LOGICAL OPERATORS IN CONDITIONS ===");

let username = "admin";
let password = "12345";

// AND operator (&&)
if (username === "admin" && password === "12345") {
    console.log("Login successful!");
} else {
    console.log("Invalid credentials!");
}

// OR operator (||)
let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's weekend!");
} else {
    console.log("It's a weekday.");
}

// NOT operator (!)
let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Please log in to continue.");
}

// Complex conditions
let userAge = 25;
let hasLicense = true;
let hasInsurance = true;

if (userAge >= 18 && hasLicense && hasInsurance) {
    console.log("You can drive!");
} else {
    console.log("You cannot drive.");
}

// =====================================================
// SWITCH STATEMENT
// =====================================================

console.log("\n=== SWITCH STATEMENT ===");

let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day name:", dayName); // Wednesday

// =====================================================
// SWITCH WITHOUT BREAK (FALL-THROUGH)
// =====================================================

console.log("\n=== SWITCH FALL-THROUGH ===");

let month = "February";

switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("Winter season");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring season");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer season");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Autumn season");
        break;
    default:
        console.log("Invalid month");
}

// =====================================================
// SWITCH WITH EXPRESSIONS
// =====================================================

console.log("\n=== SWITCH WITH EXPRESSIONS ===");

let grade = "B";
let gpa;

switch (grade) {
    case "A":
        gpa = 4.0;
        break;
    case "B":
        gpa = 3.0;
        break;
    case "C":
        gpa = 2.0;
        break;
    case "D":
        gpa = 1.0;
        break;
    case "F":
        gpa = 0.0;
        break;
    default:
        gpa = "Invalid grade";
}

console.log(`Grade ${grade} corresponds to GPA: ${gpa}`);

// =====================================================
// TERNARY OPERATOR
// =====================================================

console.log("\n=== TERNARY OPERATOR ===");

// Basic ternary
let studentAge = 20;
let eligibility = studentAge >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);

// Ternary for assignment
let number = -5;
let type = number >= 0 ? "Positive" : "Negative";
console.log(`${number} is ${type}`);

// Ternary in function return
function getDiscount(isMember) {
    return isMember ? 0.1 : 0;
}
console.log("Member discount:", getDiscount(true));   // 0.1
console.log("Non-member discount:", getDiscount(false)); // 0

// =====================================================
// NESTED TERNARY OPERATORS
// =====================================================

console.log("\n=== NESTED TERNARY OPERATORS ===");

let testScore = 85;
let letterGrade = testScore >= 90 ? "A" :
                  testScore >= 80 ? "B" :
                  testScore >= 70 ? "C" :
                  testScore >= 60 ? "D" : "F";

console.log(`Score ${testScore} = Grade ${letterGrade}`);

// More complex nested ternary
let time = 14; // 24-hour format
let greeting = time < 12 ? "Good morning" :
               time < 18 ? "Good afternoon" :
               "Good evening";

console.log(greeting);

// =====================================================
// TRUTHY AND FALSY VALUES
// =====================================================

console.log("\n=== TRUTHY AND FALSY VALUES ===");

// Falsy values: false, 0, "", null, undefined, NaN
let falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach((value, index) => {
    if (value) {
        console.log(`Value ${index} is truthy:`, value);
    } else {
        console.log(`Value ${index} is falsy:`, value);
    }
});

// Truthy values: everything else
let truthyValues = [true, 1, "hello", [], {}, function() {}];

truthyValues.forEach((value, index) => {
    if (value) {
        console.log(`Value ${index} is truthy:`, typeof value);
    }
});

// =====================================================
// PRACTICAL EXAMPLES
// =====================================================

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: User authentication
function authenticateUser(username, password) {
    if (!username || !password) {
        return "Username and password are required";
    }
    
    if (username === "admin" && password === "admin123") {
        return "Admin login successful";
    } else if (username === "user" && password === "user123") {
        return "User login successful";
    } else {
        return "Invalid credentials";
    }
}

console.log(authenticateUser("admin", "admin123"));
console.log(authenticateUser("user", "wrong"));
console.log(authenticateUser("", "password"));

// Example 2: Calculate shipping cost
function calculateShipping(weight, distance, isPriority) {
    let baseCost;
    
    if (weight <= 1) {
        baseCost = 5;
    } else if (weight <= 5) {
        baseCost = 10;
    } else {
        baseCost = 15;
    }
    
    // Add distance multiplier
    if (distance > 100) {
        baseCost *= 1.5;
    }
    
    // Priority shipping
    if (isPriority) {
        baseCost *= 2;
    }
    
    return baseCost;
}

console.log("Shipping cost:", calculateShipping(2, 150, true)); // $30

// Example 3: Determine season based on month
function getSeason(month) {
    switch (month.toLowerCase()) {
        case "december":
        case "january":
        case "february":
            return "Winter";
        case "march":
        case "april":
        case "may":
            return "Spring";
        case "june":
        case "july":
        case "august":
            return "Summer";
        case "september":
        case "october":
        case "november":
            return "Autumn";
        default:
            return "Invalid month";
    }
}

console.log("Season for March:", getSeason("March"));

// Example 4: Password strength checker
function checkPasswordStrength(password) {
    if (!password) {
        return "Password is required";
    }
    
    let score = 0;
    let feedback = [];
    
    if (password.length >= 8) {
        score++;
    } else {
        feedback.push("At least 8 characters");
    }
    
    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        feedback.push("At least one uppercase letter");
    }
    
    if (/[a-z]/.test(password)) {
        score++;
    } else {
        feedback.push("At least one lowercase letter");
    }
    
    if (/[0-9]/.test(password)) {
        score++;
    } else {
        feedback.push("At least one number");
    }
    
    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    } else {
        feedback.push("At least one special character");
    }
    
    let strength = score >= 5 ? "Very Strong" :
                   score >= 4 ? "Strong" :
                   score >= 3 ? "Medium" :
                   score >= 2 ? "Weak" : "Very Weak";
    
    return {
        strength: strength,
        score: score,
        feedback: feedback
    };
}

console.log("Password strength:", checkPasswordStrength("MyPass123!"));
console.log("Password strength:", checkPasswordStrength("weak"));