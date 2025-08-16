// ========================================
// DOM MANIPULATION & BROWSER APIS PRACTICE
// ========================================

console.log("🚀 DOM & BROWSER APIS PRACTICE STARTED 🚀\n");

// ========================================
// 1. DOM SELECTORS AND TRAVERSAL
// ========================================

console.log("🎯 1. DOM SELECTORS AND TRAVERSAL");
console.log("===================================");

// Note: In Node.js environment, we'll simulate DOM-like structures
// In real browser, these would work with actual DOM elements

// Simulating DOM elements for demonstration
const createMockElement = (tagName, attributes = {}, children = []) => ({
    tagName: tagName.toUpperCase(),
    attributes,
    children,
    textContent: '',
    innerHTML: '',
    className: attributes.class || '',
    id: attributes.id || '',
    parentElement: null,
    nextElementSibling: null,
    previousElementSibling: null,
    firstElementChild: children[0] || null,
    lastElementChild: children[children.length - 1] || null,
    
    // Simulate querySelector
    querySelector(selector) {
        if (selector.startsWith('#')) {
            return this.children.find(child => child.id === selector.slice(1));
        }
        if (selector.startsWith('.')) {
            return this.children.find(child => child.className.includes(selector.slice(1)));
        }
        return this.children.find(child => child.tagName.toLowerCase() === selector);
    },
    
    // Simulate querySelectorAll
    querySelectorAll(selector) {
        if (selector.startsWith('#')) {
            return this.children.filter(child => child.id === selector.slice(1));
        }
        if (selector.startsWith('.')) {
            return this.children.filter(child => child.className.includes(selector.slice(1)));
        }
        return this.children.filter(child => child.tagName.toLowerCase() === selector);
    }
});

// Create a mock DOM structure
const mockDOM = createMockElement('div', { id: 'app', class: 'container' }, [
    createMockElement('header', { class: 'header' }, [
        createMockElement('h1', { class: 'title' }, []),
        createMockElement('nav', { class: 'navigation' }, [
            createMockElement('a', { href: '#home', class: 'nav-link' }, []),
            createMockElement('a', { href: '#about', class: 'nav-link' }, []),
            createMockElement('a', { href: '#contact', class: 'nav-link' }, [])
        ])
    ]),
    createMockElement('main', { class: 'main-content' }, [
        createMockElement('section', { id: 'hero', class: 'hero-section' }, [
            createMockElement('h2', { class: 'hero-title' }, []),
            createMockElement('p', { class: 'hero-description' }, [])
        ]),
        createMockElement('section', { id: 'features', class: 'features-section' }, [
            createMockElement('div', { class: 'feature-card' }, []),
            createMockElement('div', { class: 'feature-card' }, []),
            createMockElement('div', { class: 'feature-card' }, [])
        ])
    ]),
    createMockElement('footer', { class: 'footer' }, [
        createMockElement('p', { class: 'copyright' }, [])
    ])
]);

// Simulate DOM querying methods
const document = {
    getElementById(id) {
        function findById(element, targetId) {
            if (element.id === targetId) return element;
            for (const child of element.children) {
                const found = findById(child, targetId);
                if (found) return found;
            }
            return null;
        }
        return findById(mockDOM, id);
    },
    
    querySelector(selector) {
        return mockDOM.querySelector(selector);
    },
    
    querySelectorAll(selector) {
        return mockDOM.querySelectorAll(selector);
    },
    
    getElementsByClassName(className) {
        function findByClass(element, targetClass) {
            let results = [];
            if (element.className.includes(targetClass)) {
                results.push(element);
            }
            for (const child of element.children) {
                results = results.concat(findByClass(child, targetClass));
            }
            return results;
        }
        return findByClass(mockDOM, className);
    },
    
    getElementsByTagName(tagName) {
        function findByTag(element, targetTag) {
            let results = [];
            if (element.tagName.toLowerCase() === targetTag.toLowerCase()) {
                results.push(element);
            }
            for (const child of element.children) {
                results = results.concat(findByTag(child, targetTag));
            }
            return results;
        }
        return findByTag(mockDOM, tagName);
    }
};

// Demonstrate DOM selection methods
console.log("DOM Selection Examples:");
console.log("getElementById('hero'):", document.getElementById('hero'));
console.log("querySelector('.nav-link'):", document.querySelector('.nav-link'));
console.log("querySelectorAll('.feature-card'):", document.querySelectorAll('.feature-card'));
console.log("getElementsByClassName('nav-link'):", document.getElementsByClassName('nav-link'));
console.log("getElementsByTagName('section'):", document.getElementsByTagName('section'));

console.log("\n");

// ========================================
// 2. DOM MANIPULATION METHODS
// ========================================

console.log("🔧 2. DOM MANIPULATION METHODS");
console.log("=================================");

// Simulate DOM manipulation methods
const createElement = (tagName, attributes = {}) => {
    const element = createMockElement(tagName, attributes);
    
    // Add manipulation methods
    element.setAttribute = (name, value) => {
        element.attributes[name] = value;
    };
    
    element.getAttribute = (name) => {
        return element.attributes[name];
    };
    
    element.removeAttribute = (name) => {
        delete element.attributes[name];
    };
    
    element.appendChild = (child) => {
        child.parentElement = element;
        element.children.push(child);
        return child;
    };
    
    element.removeChild = (child) => {
        const index = element.children.indexOf(child);
        if (index > -1) {
            element.children.splice(index, 1);
            child.parentElement = null;
            return child;
        }
        throw new Error('Child not found');
    };
    
    element.replaceChild = (newChild, oldChild) => {
        const index = element.children.indexOf(oldChild);
        if (index > -1) {
            element.children[index] = newChild;
            oldChild.parentElement = null;
            newChild.parentElement = element;
            return oldChild;
        }
        throw new Error('Child not found');
    };
    
    element.insertBefore = (newChild, referenceChild) => {
        const index = element.children.indexOf(referenceChild);
        if (index > -1) {
            element.children.splice(index, 0, newChild);
            newChild.parentElement = element;
            return newChild;
        }
        throw new Error('Reference child not found');
    };
    
    element.classList = {
        add(...classes) {
            const currentClasses = element.className.split(' ').filter(c => c);
            classes.forEach(cls => {
                if (!currentClasses.includes(cls)) {
                    currentClasses.push(cls);
                }
            });
            element.className = currentClasses.join(' ');
        },
        
        remove(...classes) {
            const currentClasses = element.className.split(' ').filter(c => c);
            classes.forEach(cls => {
                const index = currentClasses.indexOf(cls);
                if (index > -1) {
                    currentClasses.splice(index, 1);
                }
            });
            element.className = currentClasses.join(' ');
        },
        
        toggle(className) {
            if (element.className.includes(className)) {
                element.classList.remove(className);
                return false;
            } else {
                element.classList.add(className);
                return true;
            }
        },
        
        contains(className) {
            return element.className.includes(className);
        }
    };
    
    return element;
};

// Demonstrate DOM manipulation
const newDiv = createElement('div', { class: 'new-element', id: 'dynamic' });
newDiv.textContent = 'This is a dynamically created element';

console.log("Created element:", newDiv);
console.log("Element attributes:", newDiv.attributes);

// Add to DOM
const mainContent = document.querySelector('.main-content');
mainContent.appendChild(newDiv);

console.log("After appendChild:", mainContent.children.length);

// Manipulate classes
newDiv.classList.add('highlight', 'animated');
console.log("After adding classes:", newDiv.className);

newDiv.classList.toggle('highlight');
console.log("After toggling highlight:", newDiv.className);

console.log("\n");

// ========================================
// 3. EVENT HANDLING AND DELEGATION
// ========================================

console.log("🎭 3. EVENT HANDLING AND DELEGATION");
console.log("=====================================");

// Simulate event handling
class EventTarget {
    constructor() {
        this._events = {};
    }
    
    addEventListener(type, listener, options = {}) {
        if (!this._events[type]) {
            this._events[type] = [];
        }
        this._events[type].push({ listener, options });
    }
    
    removeEventListener(type, listener) {
        if (this._events[type]) {
            this._events[type] = this._events[type].filter(
                event => event.listener !== listener
            );
        }
    }
    
    dispatchEvent(event) {
        if (this._events[event.type]) {
            this._events[event.type].forEach(({ listener, options }) => {
                if (options.once) {
                    this.removeEventListener(event.type, listener);
                }
                listener.call(this, event);
            });
        }
    }
}

// Extend our mock elements with event handling
const addEventHandling = (element) => {
    Object.setPrototypeOf(element, EventTarget.prototype);
    EventTarget.call(element);
    return element;
};

// Create event-aware elements
const button = addEventHandling(createElement('button', { class: 'btn', id: 'clickMe' }));
button.textContent = 'Click Me!';

// Add event listeners
button.addEventListener('click', (event) => {
    console.log('Button clicked!', event);
});

button.addEventListener('click', (event) => {
    console.log('Second click handler');
}, { once: true });

// Simulate event dispatch
const clickEvent = { type: 'click', target: button, timestamp: Date.now() };
button.dispatchEvent(clickEvent);

// Event delegation example
const createEventDelegation = (container, selector, eventType, handler) => {
    container.addEventListener(eventType, (event) => {
        const target = event.target;
        if (target.matches && target.matches(selector)) {
            handler.call(target, event);
        }
    });
};

console.log("\n");

// ========================================
// 4. BROWSER STORAGE APIS
// ========================================

console.log("💾 4. BROWSER STORAGE APIS");
console.log("============================");

// Simulate localStorage
const localStorage = {
    _data: {},
    
    setItem(key, value) {
        this._data[key] = String(value);
        console.log(`localStorage.setItem('${key}', '${value}')`);
    },
    
    getItem(key) {
        const value = this._data[key];
        console.log(`localStorage.getItem('${key}'): ${value}`);
        return value;
    },
    
    removeItem(key) {
        delete this._data[key];
        console.log(`localStorage.removeItem('${key}')`);
    },
    
    clear() {
        this._data = {};
        console.log('localStorage.clear()');
    },
    
    get length() {
        return Object.keys(this._data).length;
    },
    
    key(index) {
        const keys = Object.keys(this._data);
        return keys[index] || null;
    }
};

// Simulate sessionStorage
const sessionStorage = {
    _data: {},
    
    setItem(key, value) {
        this._data[key] = String(value);
        console.log(`sessionStorage.setItem('${key}', '${value}')`);
    },
    
    getItem(key) {
        const value = this._data[key];
        console.log(`sessionStorage.getItem('${key}'): ${value}`);
        return value;
    },
    
    removeItem(key) {
        delete this._data[key];
        console.log(`sessionStorage.removeItem('${key}')`);
    },
    
    clear() {
        this._data = {};
        console.log('sessionStorage.clear()');
    }
};

// Demonstrate storage usage
console.log("Storage APIs Examples:");

// localStorage
localStorage.setItem('user', 'John Doe');
localStorage.setItem('theme', 'dark');
localStorage.setItem('preferences', JSON.stringify({ notifications: true, sound: false }));

console.log("localStorage length:", localStorage.length);
console.log("localStorage key(0):", localStorage.key(0));

const userPrefs = JSON.parse(localStorage.getItem('preferences'));
console.log("Parsed preferences:", userPrefs);

// sessionStorage
sessionStorage.setItem('sessionId', 'abc123');
sessionStorage.setItem('tempData', 'temporary information');

console.log("sessionStorage length:", Object.keys(sessionStorage._data).length);

// Storage utility functions
const storageUtils = {
    setObject(key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    },
    
    getObject(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error parsing stored object:', error);
            return defaultValue;
        }
    },
    
    setWithExpiry(key, value, ttl) {
        const item = {
            value,
            expiry: Date.now() + ttl
        };
        localStorage.setItem(key, JSON.stringify(item));
    },
    
    getWithExpiry(key) {
        try {
            const item = localStorage.getItem(key);
            if (!item) return null;
            
            const parsed = JSON.parse(item);
            if (Date.now() > parsed.expiry) {
                localStorage.removeItem(key);
                return null;
            }
            return parsed.value;
        } catch (error) {
            return null;
        }
    }
};

// Test storage utilities
storageUtils.setObject('userSettings', { language: 'en', timezone: 'UTC' });
const settings = storageUtils.getObject('userSettings');
console.log("Retrieved settings:", settings);

storageUtils.setWithExpiry('tempToken', 'abc123', 5000); // 5 seconds
const token = storageUtils.getWithExpiry('tempToken');
console.log("Retrieved token:", token);

console.log("\n");

// ========================================
// 5. FETCH API AND HTTP REQUESTS
// ========================================

console.log("🌐 5. FETCH API AND HTTP REQUESTS");
console.log("===================================");

// Simulate fetch API
const fetch = async (url, options = {}) => {
    console.log(`Fetching: ${url}`, options);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Simulate different responses based on URL
    if (url.includes('/users')) {
        return {
            ok: true,
            status: 200,
            json: async () => [
                { id: 1, name: 'John Doe', email: 'john@example.com' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            ],
            text: async () => JSON.stringify([
                { id: 1, name: 'John Doe', email: 'john@example.com' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            ])
        };
    }
    
    if (url.includes('/posts')) {
        return {
            ok: true,
            status: 200,
            json: async () => [
                { id: 1, title: 'First Post', content: 'Hello World' },
                { id: 2, title: 'Second Post', content: 'Learning JavaScript' }
            ]
        };
    }
    
    if (url.includes('/error')) {
        return {
            ok: false,
            status: 404,
            statusText: 'Not Found',
            json: async () => ({ error: 'Resource not found' })
        };
    }
    
    // Default response
    return {
        ok: true,
        status: 200,
        json: async () => ({ message: 'Success' }),
        text: async () => 'Success'
    };
};

// Demonstrate fetch usage
const fetchExamples = async () => {
    console.log("Fetch API Examples:");
    
    try {
        // GET request
        const usersResponse = await fetch('/api/users');
        const users = await usersResponse.json();
        console.log("Users:", users);
        
        // POST request
        const createResponse = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'New User',
                email: 'new@example.com'
            })
        });
        
        if (createResponse.ok) {
            const newUser = await createResponse.json();
            console.log("Created user:", newUser);
        }
        
        // Error handling
        const errorResponse = await fetch('/api/error');
        if (!errorResponse.ok) {
            const error = await errorResponse.json();
            console.error("Error response:", error);
        }
        
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

// Run fetch examples
fetchExamples();

// Fetch utility functions
const apiClient = {
    async get(url, options = {}) {
        const response = await fetch(url, {
            method: 'GET',
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    },
    
    async post(url, data, options = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: JSON.stringify(data),
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    },
    
    async put(url, data, options = {}) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            body: JSON.stringify(data),
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    },
    
    async delete(url, options = {}) {
        const response = await fetch(url, {
            method: 'DELETE',
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response.json();
    }
};

console.log("\n");

// ========================================
// 6. PRACTICAL EXAMPLES
// ========================================

console.log("💡 6. PRACTICAL EXAMPLES");
console.log("=========================");

// Example 1: Dynamic form builder
class FormBuilder {
    constructor(container) {
        this.container = container;
        this.fields = [];
    }
    
    addField(type, name, label, options = {}) {
        const field = {
            type,
            name,
            label,
            options,
            element: null
        };
        
        this.fields.push(field);
        this.render();
        return this;
    }
    
    render() {
        this.container.innerHTML = '';
        
        this.fields.forEach(field => {
            const fieldContainer = createElement('div', { class: 'form-field' });
            
            const label = createElement('label', { for: field.name });
            label.textContent = field.label;
            
            let input;
            if (field.type === 'textarea') {
                input = createElement('textarea', { name: field.name, id: field.name });
            } else if (field.type === 'select') {
                input = createElement('select', { name: field.name, id: field.name });
                field.options.forEach(option => {
                    const optionElement = createElement('option', { value: option.value });
                    optionElement.textContent = option.label;
                    input.appendChild(optionElement);
                });
            } else {
                input = createElement('input', { 
                    type: field.type, 
                    name: field.name, 
                    id: field.name,
                    ...field.options
                });
            }
            
            fieldContainer.appendChild(label);
            fieldContainer.appendChild(input);
            this.container.appendChild(fieldContainer);
            
            field.element = input;
        });
    }
    
    getData() {
        const data = {};
        this.fields.forEach(field => {
            if (field.element) {
                data[field.name] = field.element.value || field.element.textContent;
            }
        });
        return data;
    }
    
    validate() {
        const errors = [];
        this.fields.forEach(field => {
            if (field.options.required && (!field.element.value || field.element.value.trim() === '')) {
                errors.push(`${field.label} is required`);
            }
        });
        return errors;
    }
}

// Example 2: Modal system
class Modal {
    constructor(content, options = {}) {
        this.content = content;
        this.options = { ...Modal.defaults, ...options };
        this.element = null;
        this.isOpen = false;
    }
    
    static defaults = {
        width: '500px',
        height: 'auto',
        closeOnOverlayClick: true,
        showCloseButton: true
    };
    
    open() {
        if (this.isOpen) return;
        
        this.element = createElement('div', { class: 'modal-overlay' });
        this.element.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;
        
        const modal = createElement('div', { class: 'modal' });
        modal.style.cssText = `
            background: white;
            border-radius: 8px;
            padding: 20px;
            width: ${this.options.width};
            height: ${this.options.height};
            position: relative;
            max-height: 90vh;
            overflow-y: auto;
        `;
        
        if (this.options.showCloseButton) {
            const closeBtn = createElement('button', { class: 'modal-close' });
            closeBtn.textContent = '×';
            closeBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 15px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
            `;
            closeBtn.addEventListener('click', () => this.close());
            modal.appendChild(closeBtn);
        }
        
        if (typeof this.content === 'string') {
            modal.innerHTML += this.content;
        } else {
            modal.appendChild(this.content);
        }
        
        this.element.appendChild(modal);
        
        if (this.options.closeOnOverlayClick) {
            this.element.addEventListener('click', (e) => {
                if (e.target === this.element) {
                    this.close();
                }
            });
        }
        
        // Simulate adding to document body
        console.log('Modal opened');
        this.isOpen = true;
    }
    
    close() {
        if (!this.isOpen) return;
        
        if (this.element) {
            // Simulate removing from DOM
            console.log('Modal closed');
            this.element = null;
        }
        
        this.isOpen = false;
    }
}

// Example 3: Data table with sorting and filtering
class DataTable {
    constructor(container, data, columns) {
        this.container = container;
        this.data = data;
        this.columns = columns;
        this.filteredData = [...data];
        this.sortColumn = null;
        this.sortDirection = 'asc';
    }
    
    render() {
        this.container.innerHTML = '';
        
        // Create table
        const table = createElement('table', { class: 'data-table' });
        
        // Create header
        const thead = createElement('thead');
        const headerRow = createElement('tr');
        
        this.columns.forEach(column => {
            const th = createElement('th');
            th.textContent = column.label;
            th.style.cursor = 'pointer';
            th.addEventListener('click', () => this.sort(column.key));
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create body
        const tbody = createElement('tbody');
        this.filteredData.forEach(row => {
            const tr = createElement('tr');
            this.columns.forEach(column => {
                const td = createElement('td');
                td.textContent = row[column.key];
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        
        table.appendChild(tbody);
        this.container.appendChild(table);
    }
    
    sort(key) {
        if (this.sortColumn === key) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = key;
            this.sortDirection = 'asc';
        }
        
        this.filteredData.sort((a, b) => {
            const aVal = a[key];
            const bVal = b[key];
            
            if (this.sortDirection === 'asc') {
                return aVal > bVal ? 1 : -1;
            } else {
                return aVal < bVal ? 1 : -1;
            }
        });
        
        this.render();
    }
    
    filter(predicate) {
        this.filteredData = this.data.filter(predicate);
        this.render();
    }
}

console.log("\n");

// ========================================
// 7. PRACTICE EXERCISES
// ========================================

console.log("🎯 7. PRACTICE EXERCISES");
console.log("=========================");

console.log("Try these exercises:");
console.log("1. Create a drag-and-drop interface");
console.log("2. Build a virtual scrolling list");
console.log("3. Implement a custom event system");
console.log("4. Create a router for single-page applications");
console.log("5. Build a state management system");

// Exercise 1: Simple drag and drop
class DragAndDrop {
    constructor(container) {
        this.container = container;
        this.draggedElement = null;
        this.init();
    }
    
    init() {
        this.container.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('draggable')) {
                this.draggedElement = e.target;
                this.draggedElement.style.opacity = '0.5';
            }
        });
        
        this.container.addEventListener('mouseup', () => {
            if (this.draggedElement) {
                this.draggedElement.style.opacity = '1';
                this.draggedElement = null;
            }
        });
        
        this.container.addEventListener('mousemove', (e) => {
            if (this.draggedElement) {
                this.draggedElement.style.position = 'absolute';
                this.draggedElement.style.left = e.clientX + 'px';
                this.draggedElement.style.top = e.clientY + 'px';
            }
        });
    }
}

// Exercise 2: Custom event system
class EventBus {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    once(event, callback) {
        const onceCallback = (data) => {
            callback(data);
            this.off(event, onceCallback);
        };
        this.on(event, onceCallback);
    }
}

// Exercise 3: Simple router
class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentRoute = null;
        this.init();
    }
    
    init() {
        window.addEventListener('popstate', () => this.handleRoute());
        this.handleRoute();
    }
    
    handleRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes['/404'];
        
        if (route && route !== this.currentRoute) {
            this.currentRoute = route;
            route();
        }
    }
    
    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }
}

console.log("\n🚀 DOM & BROWSER APIS PRACTICE COMPLETED! 🚀");
console.log("Practice these web development concepts regularly!");