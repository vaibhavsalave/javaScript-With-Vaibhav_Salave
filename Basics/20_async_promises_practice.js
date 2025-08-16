// ========================================
// ASYNC PROGRAMMING & PROMISES PRACTICE
// ========================================

console.log("🚀 ASYNC PROGRAMMING PRACTICE STARTED 🚀\n");

// ========================================
// 1. CALLBACKS AND ASYNCHRONOUS PATTERNS
// ========================================

console.log("📞 1. CALLBACKS AND ASYNCHRONOUS PATTERNS");
console.log("==========================================");

// Basic callback pattern
function fetchUserData(userId, callback) {
    console.log(`Fetching user data for ID: ${userId}`);
    
    // Simulate async operation
    setTimeout(() => {
        const user = {
            id: userId,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30
        };
        
        callback(null, user);
    }, 1000);
}

// Callback usage
fetchUserData(123, (error, user) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('User data received:', user);
    }
});

// Callback hell example (problematic pattern)
function getUserProfile(userId, callback) {
    fetchUserData(userId, (error, user) => {
        if (error) {
            callback(error);
            return;
        }
        
        // Simulate fetching user posts
        setTimeout(() => {
            const posts = [
                { id: 1, title: 'First Post', content: 'Hello World' },
                { id: 2, title: 'Second Post', content: 'Learning JavaScript' }
            ];
            
            // Simulate fetching user friends
            setTimeout(() => {
                const friends = [
                    { id: 456, name: 'Jane Smith' },
                    { id: 789, name: 'Bob Johnson' }
                ];
                
                const profile = {
                    user,
                    posts,
                    friends
                };
                
                callback(null, profile);
            }, 500);
        }, 800);
    });
}

// Usage of callback hell
getUserProfile(123, (error, profile) => {
    if (error) {
        console.error('Error fetching profile:', error);
    } else {
        console.log('Complete profile:', profile);
    }
});

console.log("\n");

// ========================================
// 2. PROMISES - BASIC CONCEPTS
// ========================================

console.log("🤝 2. PROMISES - BASIC CONCEPTS");
console.log("=================================");

// Creating promises
const simplePromise = new Promise((resolve, reject) => {
    const random = Math.random();
    
    if (random > 0.5) {
        resolve(`Success! Random number: ${random}`);
    } else {
        reject(`Failed! Random number: ${random}`);
    }
});

// Promise states demonstration
console.log("Promise state:", simplePromise);

// Consuming promises
simplePromise
    .then(result => {
        console.log('Promise resolved:', result);
    })
    .catch(error => {
        console.log('Promise rejected:', error);
    });

// Promise with async operation
function fetchDataPromise(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for user ${userId}...`);
        
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: 'John Doe',
                    email: 'john@example.com'
                });
            } else {
                reject(new Error('Invalid user ID'));
            }
        }, 1000);
    });
}

// Using the promise
fetchDataPromise(123)
    .then(user => {
        console.log('User data:', user);
        return user.name; // Return value for next .then()
    })
    .then(name => {
        console.log('User name:', name);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

console.log("\n");

// ========================================
// 3. PROMISE CHAINING AND COMPOSITION
// ========================================

console.log("⛓️ 3. PROMISE CHAINING AND COMPOSITION");
console.log("========================================");

// Promise chaining
function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'First Post', userId },
                { id: 2, title: 'Second Post', userId }
            ]);
        }, 500);
    });
}

function fetchUserComments(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: 'Great post!', userId },
                { id: 2, text: 'Interesting content', userId }
            ]);
        }, 300);
    });
}

// Chaining promises
fetchDataPromise(123)
    .then(user => {
        console.log('Step 1: User data fetched:', user.name);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log('Step 2: Posts fetched:', posts.length);
        return fetchUserComments(123);
    })
    .then(comments => {
        console.log('Step 3: Comments fetched:', comments.length);
        return { message: 'All data loaded successfully' };
    })
    .then(result => {
        console.log('Final result:', result);
    })
    .catch(error => {
        console.error('Chain error:', error.message);
    });

// Promise.all() - Wait for all promises to resolve
const promises = [
    fetchDataPromise(123),
    fetchUserPosts(123),
    fetchUserComments(123)
];

Promise.all(promises)
    .then(([user, posts, comments]) => {
        console.log('All data loaded with Promise.all:');
        console.log('User:', user.name);
        console.log('Posts:', posts.length);
        console.log('Comments:', comments.length);
    })
    .catch(error => {
        console.error('Promise.all error:', error.message);
    });

// Promise.race() - First promise to resolve/reject wins
const racePromises = [
    new Promise(resolve => setTimeout(() => resolve('Fast'), 100)),
    new Promise(resolve => setTimeout(() => resolve('Medium'), 500)),
    new Promise(resolve => setTimeout(() => resolve('Slow'), 1000))
];

Promise.race(racePromises)
    .then(result => {
        console.log('Promise.race winner:', result);
    });

// Promise.allSettled() - Wait for all promises to settle (resolve or reject)
const mixedPromises = [
    Promise.resolve('Success'),
    Promise.reject(new Error('Failure')),
    new Promise(resolve => setTimeout(() => resolve('Delayed'), 200))
];

Promise.allSettled(mixedPromises)
    .then(results => {
        console.log('Promise.allSettled results:');
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index}: Fulfilled with ${result.value}`);
            } else {
                console.log(`Promise ${index}: Rejected with ${result.reason.message}`);
            }
        });
    });

console.log("\n");

// ========================================
// 4. ASYNC/AWAIT SYNTAX
// ========================================

console.log("⏳ 4. ASYNC/AWAIT SYNTAX");
console.log("==========================");

// Basic async function
async function getUserProfileAsync(userId) {
    try {
        console.log('Starting to fetch user profile...');
        
        const user = await fetchDataPromise(userId);
        console.log('User data fetched:', user.name);
        
        const posts = await fetchUserPosts(userId);
        console.log('Posts fetched:', posts.length);
        
        const comments = await fetchUserComments(userId);
        console.log('Comments fetched:', comments.length);
        
        return {
            user,
            posts,
            comments,
            timestamp: new Date().toISOString()
        };
    } catch (error) {
        console.error('Error in async function:', error.message);
        throw error; // Re-throw to be handled by caller
    }
}

// Using async function
getUserProfileAsync(123)
    .then(profile => {
        console.log('Complete profile (async/await):', profile);
    })
    .catch(error => {
        console.error('Profile fetch failed:', error.message);
    });

// Async function with multiple concurrent operations
async function getUserProfileConcurrent(userId) {
    try {
        console.log('Fetching data concurrently...');
        
        // Start all promises at the same time
        const [user, posts, comments] = await Promise.all([
            fetchDataPromise(userId),
            fetchUserPosts(userId),
            fetchUserComments(userId)
        ]);
        
        return { user, posts, comments };
    } catch (error) {
        console.error('Concurrent fetch error:', error.message);
        throw error;
    }
}

// Using concurrent async function
getUserProfileConcurrent(123)
    .then(profile => {
        console.log('Concurrent profile fetch result:', profile);
    })
    .catch(error => {
        console.error('Concurrent fetch failed:', error.message);
    });

console.log("\n");

// ========================================
// 5. ERROR HANDLING IN ASYNC CODE
// ========================================

console.log("🚨 5. ERROR HANDLING IN ASYNC CODE");
console.log("====================================");

// Error handling with try-catch
async function robustDataFetch(userId) {
    try {
        const user = await fetchDataPromise(userId);
        return user;
    } catch (error) {
        console.log('Caught error in robustDataFetch:', error.message);
        // Return default user or re-throw
        return {
            id: userId,
            name: 'Unknown User',
            email: 'unknown@example.com'
        };
    }
}

// Error handling with .catch()
async function fetchWithFallback(userId) {
    const user = await fetchDataPromise(userId)
        .catch(error => {
            console.log('Using fallback for user:', userId);
            return {
                id: userId,
                name: 'Fallback User',
                email: 'fallback@example.com'
            };
        });
    
    return user;
}

// Testing error handling
robustDataFetch(-1)
    .then(user => {
        console.log('Robust fetch result:', user);
    });

fetchWithFallback(-1)
    .then(user => {
        console.log('Fallback fetch result:', user);
    });

// Error handling with Promise.all
async function handleMultipleRequests(userIds) {
    const promises = userIds.map(id => 
        fetchDataPromise(id).catch(error => ({
            id,
            error: error.message,
            name: 'Error User',
            email: 'error@example.com'
        }))
    );
    
    const results = await Promise.all(promises);
    return results;
}

handleMultipleRequests([123, -1, 456])
    .then(results => {
        console.log('Multiple requests with error handling:', results);
    });

console.log("\n");

// ========================================
// 6. ADVANCED PROMISE PATTERNS
// ========================================

console.log("🚀 6. ADVANCED PROMISE PATTERNS");
console.log("=================================");

// Promise timeout wrapper
function withTimeout(promise, timeoutMs) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Operation timed out after ${timeoutMs}ms`));
        }, timeoutMs);
    });
    
    return Promise.race([promise, timeoutPromise]);
}

// Retry mechanism
async function withRetry(fn, maxRetries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxRetries) {
                throw error;
            }
            
            console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// Promise queue (sequential execution)
class PromiseQueue {
    constructor() {
        this.queue = [];
        this.running = false;
    }
    
    add(promiseFn) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                promiseFn,
                resolve,
                reject
            });
            
            this.process();
        });
    }
    
    async process() {
        if (this.running || this.queue.length === 0) {
            return;
        }
        
        this.running = true;
        
        while (this.queue.length > 0) {
            const { promiseFn, resolve, reject } = this.queue.shift();
            
            try {
                const result = await promiseFn();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
        
        this.running = false;
    }
}

// Using advanced patterns
const queue = new PromiseQueue();

// Add tasks to queue
queue.add(() => fetchDataPromise(123))
    .then(user => console.log('Queued task 1 completed:', user.name));

queue.add(() => fetchUserPosts(123))
    .then(posts => console.log('Queued task 2 completed:', posts.length));

// Test timeout
withTimeout(fetchDataPromise(123), 500)
    .then(user => console.log('User fetched within timeout:', user.name))
    .catch(error => console.log('Timeout test result:', error.message));

// Test retry
withRetry(
    () => fetchDataPromise(123),
    3,
    100
).then(user => console.log('Retry successful:', user.name));

console.log("\n");

// ========================================
// 7. PRACTICAL EXAMPLES
// ========================================

console.log("💡 7. PRACTICAL EXAMPLES");
console.log("=========================");

// Example 1: API client with retry and timeout
class ApiClient {
    constructor(baseUrl, options = {}) {
        this.baseUrl = baseUrl;
        this.timeout = options.timeout || 5000;
        this.retries = options.retries || 3;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        
        const fetchWithTimeout = () => {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);
            
            return fetch(url, {
                ...options,
                signal: controller.signal
            }).finally(() => clearTimeout(timeoutId));
        };
        
        return withRetry(fetchWithTimeout, this.retries);
    }
    
    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }
    
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }
}

// Example 2: Data processing pipeline
async function processDataPipeline(data) {
    const steps = [
        async (data) => {
            console.log('Step 1: Validating data...');
            await new Promise(resolve => setTimeout(resolve, 200));
            return data.filter(item => item.value > 0);
        },
        async (data) => {
            console.log('Step 2: Transforming data...');
            await new Promise(resolve => setTimeout(resolve, 300));
            return data.map(item => ({ ...item, processed: true }));
        },
        async (data) => {
            console.log('Step 3: Aggregating data...');
            await new Promise(resolve => setTimeout(resolve, 250));
            return {
                count: data.length,
                total: data.reduce((sum, item) => sum + item.value, 0),
                items: data
            };
        }
    ];
    
    let result = data;
    for (const step of steps) {
        result = await step(result);
    }
    
    return result;
}

// Test data pipeline
const testData = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: -5 } // This will be filtered out
];

processDataPipeline(testData)
    .then(result => {
        console.log('Pipeline result:', result);
    });

// Example 3: Rate limiting
class RateLimiter {
    constructor(maxRequests, timeWindow) {
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = [];
    }
    
    async execute(fn) {
        const now = Date.now();
        
        // Remove old requests outside the time window
        this.requests = this.requests.filter(time => now - time < this.timeWindow);
        
        if (this.requests.length >= this.maxRequests) {
            const oldestRequest = this.requests[0];
            const waitTime = this.timeWindow - (now - oldestRequest);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
        
        this.requests.push(now);
        return fn();
    }
}

const rateLimiter = new RateLimiter(3, 1000); // Max 3 requests per second

// Test rate limiting
for (let i = 0; i < 5; i++) {
    rateLimiter.execute(async () => {
        console.log(`Rate limited request ${i + 1} executed at ${new Date().toISOString()}`);
        return `Result ${i + 1}`;
    }).then(result => console.log(result));
}

console.log("\n");

// ========================================
// 8. PRACTICE EXERCISES
// ========================================

console.log("🎯 8. PRACTICE EXERCISES");
console.log("=========================");

console.log("Try these exercises:");
console.log("1. Create a function that implements promise cancellation");
console.log("2. Build a promise pool that limits concurrent operations");
console.log("3. Implement a promise-based event emitter");
console.log("4. Create a function that converts callback-based code to promises");
console.log("5. Build a promise-based cache with automatic expiration");

// Exercise 1: Promise cancellation
function createCancellablePromise(executor) {
    let cancelled = false;
    
    const promise = new Promise((resolve, reject) => {
        executor(
            value => !cancelled && resolve(value),
            error => !cancelled && reject(error)
        );
    });
    
    promise.cancel = () => {
        cancelled = true;
    };
    
    return promise;
}

const cancellableFetch = createCancellablePromise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched'), 2000);
});

cancellableFetch
    .then(data => console.log('Exercise 1 - Cancellable promise result:', data))
    .catch(error => console.log('Exercise 1 - Error:', error));

// Cancel after 1 second
setTimeout(() => {
    console.log('Exercise 1 - Cancelling promise...');
    cancellableFetch.cancel();
}, 1000);

// Exercise 2: Promise pool
class PromisePool {
    constructor(maxConcurrent) {
        this.maxConcurrent = maxConcurrent;
        this.running = 0;
        this.queue = [];
    }
    
    async add(promiseFn) {
        if (this.running >= this.maxConcurrent) {
            // Wait for a slot to become available
            await new Promise(resolve => this.queue.push(resolve));
        }
        
        this.running++;
        
        try {
            return await promiseFn();
        } finally {
            this.running--;
            if (this.queue.length > 0) {
                this.queue.shift()(); // Resolve next waiting promise
            }
        }
    }
}

const pool = new PromisePool(2);

// Test promise pool
for (let i = 0; i < 5; i++) {
    pool.add(async () => {
        console.log(`Exercise 2 - Task ${i + 1} started`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Exercise 2 - Task ${i + 1} completed`);
        return `Result ${i + 1}`;
    }).then(result => console.log(result));
}

console.log("\n🚀 ASYNC PROGRAMMING PRACTICE COMPLETED! 🚀");
console.log("Practice these asynchronous patterns regularly!");