// JavaScript Practical Examples - Real-World Applications

/*
🎯 PRACTICAL JAVASCRIPT THEORY:

This file contains real-world examples that demonstrate how JavaScript concepts
are applied in actual development scenarios. Each example includes:

1. Problem description
2. Theoretical approach
3. Step-by-step implementation
4. Best practices
5. Common pitfalls to avoid
6. Performance considerations
*/

console.log("=== PRACTICAL JAVASCRIPT EXAMPLES ===");

// =====================================================
// 1. USER AUTHENTICATION SYSTEM
// =====================================================

console.log("\n=== USER AUTHENTICATION SYSTEM ===");

/*
🔐 AUTHENTICATION THEORY:

WHAT IT DOES:
- Validates user credentials
- Manages user sessions
- Handles login/logout functionality
- Provides role-based access control

REAL-WORLD USAGE:
- Login forms on websites
- User registration systems
- Admin panels
- Secure areas of applications
*/

class UserAuthentication {
    constructor() {
        this.users = new Map(); // Store users in memory (in real apps, use database)
        this.sessions = new Map(); // Active user sessions
        this.currentUser = null;
    }

    // Register new user with validation
    register(username, password, email, role = 'user') {
        // Input validation
        if (!username || username.length < 3) {
            throw new Error('Username must be at least 3 characters');
        }
        
        if (!password || password.length < 6) {
            throw new Error('Password must be at least 6 characters');
        }
        
        if (!this.validateEmail(email)) {
            throw new Error('Invalid email format');
        }
        
        // Check if user already exists
        if (this.users.has(username)) {
            throw new Error('Username already exists');
        }
        
        // Hash password (simplified - use bcrypt in real apps)
        const hashedPassword = this.hashPassword(password);
        
        // Store user
        this.users.set(username, {
            username,
            password: hashedPassword,
            email,
            role,
            createdAt: new Date(),
            isActive: true
        });
        
        return { message: 'User registered successfully', username };
    }

    // User login with session management
    login(username, password) {
        const user = this.users.get(username);
        
        if (!user) {
            throw new Error('User not found');
        }
        
        if (!user.isActive) {
            throw new Error('Account is deactivated');
        }
        
        if (!this.verifyPassword(password, user.password)) {
            throw new Error('Invalid password');
        }
        
        // Create session
        const sessionId = this.generateSessionId();
        this.sessions.set(sessionId, {
            username,
            loginTime: new Date(),
            lastActivity: new Date()
        });
        
        this.currentUser = username;
        
        return {
            message: 'Login successful',
            sessionId,
            user: {
                username: user.username,
                email: user.email,
                role: user.role
            }
        };
    }

    // Logout and destroy session
    logout(sessionId) {
        if (this.sessions.has(sessionId)) {
            this.sessions.delete(sessionId);
            this.currentUser = null;
            return { message: 'Logged out successfully' };
        }
        throw new Error('Invalid session');
    }

    // Check if user has permission
    hasPermission(sessionId, requiredRole) {
        const session = this.sessions.get(sessionId);
        if (!session) return false;
        
        const user = this.users.get(session.username);
        if (!user) return false;
        
        const roleHierarchy = { user: 1, admin: 2, superadmin: 3 };
        return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
    }

    // Helper methods
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    hashPassword(password) {
        // Simplified hashing (use bcrypt in production)
        return btoa(password + 'salt');
    }

    verifyPassword(password, hashedPassword) {
        return this.hashPassword(password) === hashedPassword;
    }

    generateSessionId() {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }
}

// Usage example
const auth = new UserAuthentication();

try {
    // Register users
    console.log(auth.register('john_doe', 'password123', 'john@example.com'));
    console.log(auth.register('admin_user', 'admin123', 'admin@example.com', 'admin'));

    // Login user
    const loginResult = auth.login('john_doe', 'password123');
    console.log(loginResult);

    // Check permissions
    console.log('Has user permission:', auth.hasPermission(loginResult.sessionId, 'user'));
    console.log('Has admin permission:', auth.hasPermission(loginResult.sessionId, 'admin'));

} catch (error) {
    console.log('Auth error:', error.message);
}

// =====================================================
// 2. SHOPPING CART SYSTEM
// =====================================================

console.log("\n=== SHOPPING CART SYSTEM ===");

/*
🛒 SHOPPING CART THEORY:

WHAT IT DOES:
- Manages items in a shopping cart
- Calculates totals with tax and discounts
- Handles quantity updates
- Manages cart persistence

REAL-WORLD USAGE:
- E-commerce websites
- Online stores
- Restaurant ordering systems
- Subscription services
*/

class ShoppingCart {
    constructor(taxRate = 0.08, discountThreshold = 100) {
        this.items = new Map();
        this.taxRate = taxRate;
        this.discountThreshold = discountThreshold;
        this.coupons = new Map([
            ['SAVE10', { type: 'percentage', value: 0.10, minAmount: 50 }],
            ['FLAT20', { type: 'fixed', value: 20, minAmount: 100 }]
        ]);
    }

    // Add item to cart
    addItem(product) {
        const { id, name, price, category } = product;
        
        // Validate product
        if (!id || !name || price <= 0) {
            throw new Error('Invalid product data');
        }

        if (this.items.has(id)) {
            // Update quantity if item exists
            const existingItem = this.items.get(id);
            existingItem.quantity += 1;
            existingItem.subtotal = existingItem.quantity * existingItem.price;
        } else {
            // Add new item
            this.items.set(id, {
                id,
                name,
                price,
                category,
                quantity: 1,
                subtotal: price,
                addedAt: new Date()
            });
        }

        return this.getCartSummary();
    }

    // Update item quantity
    updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            return this.removeItem(productId);
        }

        if (this.items.has(productId)) {
            const item = this.items.get(productId);
            item.quantity = quantity;
            item.subtotal = item.quantity * item.price;
            return this.getCartSummary();
        }

        throw new Error('Product not found in cart');
    }

    // Remove item from cart
    removeItem(productId) {
        if (this.items.has(productId)) {
            this.items.delete(productId);
            return this.getCartSummary();
        }
        throw new Error('Product not found in cart');
    }

    // Apply coupon code
    applyCoupon(couponCode) {
        const coupon = this.coupons.get(couponCode);
        if (!coupon) {
            throw new Error('Invalid coupon code');
        }

        const subtotal = this.getSubtotal();
        if (subtotal < coupon.minAmount) {
            throw new Error(`Minimum order amount $${coupon.minAmount} required for this coupon`);
        }

        return coupon;
    }

    // Calculate subtotal
    getSubtotal() {
        return Array.from(this.items.values())
            .reduce((total, item) => total + item.subtotal, 0);
    }

    // Calculate tax
    getTax(subtotal) {
        return subtotal * this.taxRate;
    }

    // Calculate discount
    getDiscount(subtotal, coupon = null) {
        let discount = 0;

        // Volume discount
        if (subtotal >= this.discountThreshold) {
            discount += subtotal * 0.05; // 5% volume discount
        }

        // Coupon discount
        if (coupon) {
            if (coupon.type === 'percentage') {
                discount += subtotal * coupon.value;
            } else if (coupon.type === 'fixed') {
                discount += coupon.value;
            }
        }

        return Math.min(discount, subtotal); // Don't discount more than subtotal
    }

    // Get complete cart summary
    getCartSummary(couponCode = null) {
        const items = Array.from(this.items.values());
        const subtotal = this.getSubtotal();
        
        let coupon = null;
        try {
            if (couponCode) {
                coupon = this.applyCoupon(couponCode);
            }
        } catch (error) {
            // Coupon invalid, continue without it
        }

        const discount = this.getDiscount(subtotal, coupon);
        const discountedSubtotal = subtotal - discount;
        const tax = this.getTax(discountedSubtotal);
        const total = discountedSubtotal + tax;

        return {
            items,
            itemCount: items.length,
            totalQuantity: items.reduce((sum, item) => sum + item.quantity, 0),
            subtotal: Number(subtotal.toFixed(2)),
            discount: Number(discount.toFixed(2)),
            tax: Number(tax.toFixed(2)),
            total: Number(total.toFixed(2)),
            appliedCoupon: coupon ? couponCode : null
        };
    }

    // Clear cart
    clear() {
        this.items.clear();
        return { message: 'Cart cleared successfully' };
    }

    // Get cart items by category
    getItemsByCategory() {
        const itemsByCategory = {};
        
        for (const item of this.items.values()) {
            if (!itemsByCategory[item.category]) {
                itemsByCategory[item.category] = [];
            }
            itemsByCategory[item.category].push(item);
        }

        return itemsByCategory;
    }
}

// Usage example
const cart = new ShoppingCart();

try {
    // Add products to cart
    console.log(cart.addItem({ id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' }));
    console.log(cart.addItem({ id: 2, name: 'Mouse', price: 29.99, category: 'Electronics' }));
    console.log(cart.addItem({ id: 3, name: 'Book', price: 19.99, category: 'Books' }));

    // Update quantity
    console.log(cart.updateQuantity(1, 2));

    // Apply coupon
    console.log(cart.getCartSummary('SAVE10'));

    // Get items by category
    console.log('Items by category:', cart.getItemsByCategory());

} catch (error) {
    console.log('Cart error:', error.message);
}

// =====================================================
// 3. DATA VALIDATION SYSTEM
// =====================================================

console.log("\n=== DATA VALIDATION SYSTEM ===");

/*
✅ VALIDATION THEORY:

WHAT IT DOES:
- Validates user input data
- Provides detailed error messages
- Supports custom validation rules
- Handles complex nested objects

REAL-WORLD USAGE:
- Form validation
- API request validation
- Database input validation
- Configuration validation
*/

class DataValidator {
    constructor() {
        this.rules = {
            required: (value) => value !== null && value !== undefined && value !== '',
            email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            phone: (value) => /^\+?[\d\s-()]{10,}$/.test(value),
            url: (value) => /^https?:\/\/.+\..+/.test(value),
            minLength: (value, min) => value && value.length >= min,
            maxLength: (value, max) => value && value.length <= max,
            min: (value, min) => Number(value) >= min,
            max: (value, max) => Number(value) <= max,
            pattern: (value, regex) => new RegExp(regex).test(value),
            alphanumeric: (value) => /^[a-zA-Z0-9]+$/.test(value),
            numeric: (value) => /^\d+$/.test(value),
            alpha: (value) => /^[a-zA-Z]+$/.test(value)
        };
    }

    // Validate single field
    validateField(value, rules, fieldName = 'field') {
        const errors = [];

        for (const [rule, ruleValue] of Object.entries(rules)) {
            if (!this.rules[rule]) {
                errors.push(`Unknown validation rule: ${rule}`);
                continue;
            }

            let isValid = false;
            
            if (rule === 'required') {
                isValid = this.rules[rule](value);
                if (!isValid) {
                    errors.push(`${fieldName} is required`);
                }
            } else if (value !== null && value !== undefined && value !== '') {
                // Only validate non-empty values for non-required rules
                if (typeof ruleValue === 'boolean' && ruleValue) {
                    isValid = this.rules[rule](value);
                } else {
                    isValid = this.rules[rule](value, ruleValue);
                }

                if (!isValid) {
                    errors.push(this.getErrorMessage(fieldName, rule, ruleValue));
                }
            }
        }

        return errors;
    }

    // Validate entire object
    validate(data, schema) {
        const errors = {};
        let isValid = true;

        for (const [fieldName, rules] of Object.entries(schema)) {
            const value = this.getNestedValue(data, fieldName);
            const fieldErrors = this.validateField(value, rules, fieldName);

            if (fieldErrors.length > 0) {
                errors[fieldName] = fieldErrors;
                isValid = false;
            }
        }

        return {
            isValid,
            errors,
            data: isValid ? data : null
        };
    }

    // Get nested object value using dot notation
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    // Generate error messages
    getErrorMessage(fieldName, rule, ruleValue) {
        const messages = {
            email: `${fieldName} must be a valid email address`,
            phone: `${fieldName} must be a valid phone number`,
            url: `${fieldName} must be a valid URL`,
            minLength: `${fieldName} must be at least ${ruleValue} characters long`,
            maxLength: `${fieldName} must be no more than ${ruleValue} characters long`,
            min: `${fieldName} must be at least ${ruleValue}`,
            max: `${fieldName} must be no more than ${ruleValue}`,
            alphanumeric: `${fieldName} must contain only letters and numbers`,
            numeric: `${fieldName} must contain only numbers`,
            alpha: `${fieldName} must contain only letters`,
            pattern: `${fieldName} format is invalid`
        };

        return messages[rule] || `${fieldName} is invalid`;
    }

    // Add custom validation rule
    addRule(name, validator, errorMessage) {
        this.rules[name] = validator;
        if (errorMessage) {
            this.getErrorMessage = (fieldName, rule, ruleValue) => {
                if (rule === name) {
                    return errorMessage.replace('{field}', fieldName).replace('{value}', ruleValue);
                }
                return this.getErrorMessage(fieldName, rule, ruleValue);
            };
        }
    }
}

// Usage example
const validator = new DataValidator();

// Define validation schema
const userSchema = {
    'name': { required: true, minLength: 2, maxLength: 50, alpha: true },
    'email': { required: true, email: true },
    'phone': { phone: true },
    'age': { required: true, min: 18, max: 100 },
    'website': { url: true },
    'profile.bio': { maxLength: 500 }
};

// Test data
const userData1 = {
    name: 'JohnDoe',
    email: 'john@example.com',
    phone: '+1-555-123-4567',
    age: 25,
    website: 'https://johndoe.com',
    profile: {
        bio: 'Software developer with 5 years of experience'
    }
};

const userData2 = {
    name: 'J',
    email: 'invalid-email',
    age: 15
};

console.log('Valid user validation:', validator.validate(userData1, userSchema));
console.log('Invalid user validation:', validator.validate(userData2, userSchema));

// Add custom validation rule
validator.addRule('strongPassword', 
    (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
    '{field} must be at least 8 characters with uppercase, lowercase, number, and special character'
);

// =====================================================
// 4. TASK SCHEDULER SYSTEM
// =====================================================

console.log("\n=== TASK SCHEDULER SYSTEM ===");

/*
⏰ SCHEDULER THEORY:

WHAT IT DOES:
- Schedules tasks to run at specific times
- Manages recurring tasks
- Handles task dependencies
- Provides task monitoring and logging

REAL-WORLD USAGE:
- Cron jobs
- Automated reports
- Data synchronization
- Backup systems
*/

class TaskScheduler {
    constructor() {
        this.tasks = new Map();
        this.runningTasks = new Set();
        this.taskHistory = [];
        this.intervalIds = new Map();
    }

    // Schedule a one-time task
    scheduleTask(taskId, taskFunction, delay, options = {}) {
        if (this.tasks.has(taskId)) {
            throw new Error(`Task ${taskId} already exists`);
        }

        const task = {
            id: taskId,
            function: taskFunction,
            type: 'once',
            delay,
            scheduled: new Date(),
            status: 'scheduled',
            ...options
        };

        this.tasks.set(taskId, task);

        const timeoutId = setTimeout(() => {
            this.executeTask(taskId);
        }, delay);

        this.intervalIds.set(taskId, timeoutId);

        return { message: `Task ${taskId} scheduled to run in ${delay}ms` };
    }

    // Schedule a recurring task
    scheduleRecurringTask(taskId, taskFunction, interval, options = {}) {
        if (this.tasks.has(taskId)) {
            throw new Error(`Task ${taskId} already exists`);
        }

        const task = {
            id: taskId,
            function: taskFunction,
            type: 'recurring',
            interval,
            scheduled: new Date(),
            status: 'scheduled',
            executionCount: 0,
            ...options
        };

        this.tasks.set(taskId, task);

        const intervalId = setInterval(() => {
            this.executeTask(taskId);
        }, interval);

        this.intervalIds.set(taskId, intervalId);

        return { message: `Recurring task ${taskId} scheduled with ${interval}ms interval` };
    }

    // Execute task
    async executeTask(taskId) {
        const task = this.tasks.get(taskId);
        if (!task) {
            console.error(`Task ${taskId} not found`);
            return;
        }

        if (this.runningTasks.has(taskId)) {
            console.log(`Task ${taskId} is already running, skipping execution`);
            return;
        }

        this.runningTasks.add(taskId);
        task.status = 'running';
        task.lastExecution = new Date();

        const execution = {
            taskId,
            startTime: new Date(),
            status: 'running'
        };

        try {
            console.log(`Executing task: ${taskId}`);
            
            // Execute the task function
            const result = await task.function();
            
            execution.endTime = new Date();
            execution.duration = execution.endTime - execution.startTime;
            execution.status = 'completed';
            execution.result = result;

            task.status = 'completed';
            task.executionCount = (task.executionCount || 0) + 1;
            task.lastResult = result;

            console.log(`Task ${taskId} completed in ${execution.duration}ms`);

            // Remove one-time tasks after execution
            if (task.type === 'once') {
                this.cancelTask(taskId);
            }

        } catch (error) {
            execution.endTime = new Date();
            execution.duration = execution.endTime - execution.startTime;
            execution.status = 'failed';
            execution.error = error.message;

            task.status = 'failed';
            task.lastError = error.message;

            console.error(`Task ${taskId} failed:`, error.message);
        } finally {
            this.runningTasks.delete(taskId);
            this.taskHistory.push(execution);
        }
    }

    // Cancel a task
    cancelTask(taskId) {
        const intervalId = this.intervalIds.get(taskId);
        if (intervalId) {
            clearTimeout(intervalId);
            clearInterval(intervalId);
            this.intervalIds.delete(taskId);
        }

        const task = this.tasks.get(taskId);
        if (task) {
            task.status = 'cancelled';
            this.tasks.delete(taskId);
        }

        return { message: `Task ${taskId} cancelled` };
    }

    // Get task status
    getTaskStatus(taskId) {
        return this.tasks.get(taskId) || null;
    }

    // Get all tasks
    getAllTasks() {
        return Array.from(this.tasks.values());
    }

    // Get task execution history
    getTaskHistory(taskId = null) {
        if (taskId) {
            return this.taskHistory.filter(execution => execution.taskId === taskId);
        }
        return this.taskHistory;
    }

    // Clean up completed tasks
    cleanup() {
        const completedTasks = [];
        for (const [taskId, task] of this.tasks.entries()) {
            if (task.status === 'completed' && task.type === 'once') {
                completedTasks.push(taskId);
                this.tasks.delete(taskId);
            }
        }
        return { message: `Cleaned up ${completedTasks.length} completed tasks` };
    }
}

// Usage example
const scheduler = new TaskScheduler();

// Define sample tasks
const emailTask = async () => {
    console.log('📧 Sending daily email report...');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate work
    return 'Email sent successfully';
};

const backupTask = async () => {
    console.log('💾 Performing database backup...');
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate work
    return 'Backup completed';
};

const cleanupTask = async () => {
    console.log('🧹 Cleaning up temporary files...');
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate work
    return 'Cleanup completed';
};

// Schedule tasks
console.log(scheduler.scheduleTask('welcome-email', emailTask, 2000));
console.log(scheduler.scheduleRecurringTask('daily-backup', backupTask, 5000));
console.log(scheduler.scheduleRecurringTask('hourly-cleanup', cleanupTask, 3000));

// Check task status after some time
setTimeout(() => {
    console.log('\n📊 Task Status Report:');
    console.log(scheduler.getAllTasks());
    console.log('\n📈 Execution History:');
    console.log(scheduler.getTaskHistory());
}, 8000);

// Cancel recurring task after some time
setTimeout(() => {
    console.log(scheduler.cancelTask('hourly-cleanup'));
}, 10000);

console.log("\n🎉 All practical examples are running!");
console.log("These examples demonstrate real-world JavaScript applications!");
console.log("🚀 Ready to build amazing applications!");