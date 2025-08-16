#!/usr/bin/env node

// ========================================
// PRACTICE FILES TEST RUNNER
// ========================================

console.log("🚀 JavaScript Practice Files Test Runner");
console.log("========================================\n");

// List of all practice files
const practiceFiles = [
    '16_array_methods_practice.js',
    '17_object_methods_practice.js',
    '18_string_methods_practice.js',
    '19_function_patterns_practice.js',
    '20_async_promises_practice.js',
    '21_es6_modern_features_practice.js',
    '22_advanced_js_concepts_practice.js',
    '23_dom_browser_apis_practice.js',
    '24_modern_js_patterns_practice.js'
];

// Function to run a specific practice file
function runPracticeFile(filename) {
    console.log(`\n📚 Running: ${filename}`);
    console.log("=" .repeat(50));
    
    try {
        require(`./${filename}`);
        console.log(`\n✅ ${filename} completed successfully!`);
    } catch (error) {
        console.error(`\n❌ Error running ${filename}:`, error.message);
    }
}

// Function to run all practice files
function runAllPracticeFiles() {
    console.log("🎯 Running all practice files...\n");
    
    practiceFiles.forEach((file, index) => {
        console.log(`${index + 1}. ${file}`);
    });
    
    console.log("\n" + "=".repeat(50));
    
    practiceFiles.forEach((file, index) => {
        console.log(`\n🔄 Progress: ${index + 1}/${practiceFiles.length}`);
        runPracticeFile(file);
        
        // Add a small delay between files
        if (index < practiceFiles.length - 1) {
            console.log("\n⏳ Waiting 2 seconds before next file...");
            // In a real implementation, you'd use setTimeout
        }
    });
    
    console.log("\n🎉 All practice files completed!");
}

// Function to show available options
function showHelp() {
    console.log("Available commands:");
console.log("  all      - Run all practice files");
console.log("  array    - Run array methods practice");
console.log("  object   - Run object methods practice");
console.log("  string   - Run string methods practice");
console.log("  func     - Run function patterns practice");
console.log("  async    - Run async programming practice");
console.log("  es6      - Run ES6+ features practice");
console.log("  advanced - Run advanced JS concepts practice");
console.log("  dom      - Run DOM & browser APIs practice");
console.log("  patterns - Run modern JS patterns practice");
console.log("  help     - Show this help message");
    console.log("\nExample: node run_practice.js array");
}

// Main execution logic
const command = process.argv[2] || 'help';

switch (command.toLowerCase()) {
    case 'all':
        runAllPracticeFiles();
        break;
    case 'array':
        runPracticeFile('16_array_methods_practice.js');
        break;
    case 'object':
        runPracticeFile('17_object_methods_practice.js');
        break;
    case 'string':
        runPracticeFile('18_string_methods_practice.js');
        break;
    case 'func':
        runPracticeFile('19_function_patterns_practice.js');
        break;
    case 'async':
        runPracticeFile('20_async_promises_practice.js');
        break;
    case 'es6':
        runPracticeFile('21_es6_modern_features_practice.js');
        break;
    case 'advanced':
        runPracticeFile('22_advanced_js_concepts_practice.js');
        break;
    case 'dom':
        runPracticeFile('23_dom_browser_apis_practice.js');
        break;
    case 'patterns':
        runPracticeFile('24_modern_js_patterns_practice.js');
        break;
    case 'help':
    default:
        showHelp();
        break;
}

console.log("\n💡 Tip: Use 'node run_practice.js help' to see all available commands");
console.log("📚 Check the index file (00_practice_files_index.md) for detailed information");