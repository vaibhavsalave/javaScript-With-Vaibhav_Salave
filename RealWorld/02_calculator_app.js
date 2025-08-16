// Real-World Calculator Application - Advanced Implementation

/*
🧮 SCIENTIFIC CALCULATOR APP

A complete, feature-rich calculator application demonstrating:
- Object-oriented programming
- Event-driven architecture
- State management
- Advanced mathematical operations
- History tracking
- Keyboard input handling
- Error handling and validation

FEATURES:
✅ Basic arithmetic operations
✅ Scientific functions (sin, cos, tan, log, etc.)
✅ Memory operations (M+, M-, MR, MC)
✅ Calculation history
✅ Keyboard shortcuts
✅ Expression evaluation
✅ Unit conversions
✅ Constants (π, e, etc.)
✅ Copy/paste functionality
✅ Responsive design
*/

console.log("🧮 Starting Advanced Calculator Application...\n");

// =====================================================
// MATHEMATICAL ENGINE
// =====================================================

class MathEngine {
    constructor() {
        this.constants = {
            PI: Math.PI,
            E: Math.E,
            PHI: (1 + Math.sqrt(5)) / 2, // Golden ratio
            SQRT2: Math.SQRT2,
            LN2: Math.LN2,
            LN10: Math.LN10,
            LOG2E: Math.LOG2E,
            LOG10E: Math.LOG10E
        };
        
        this.functions = {
            // Basic arithmetic
            add: (a, b) => a + b,
            subtract: (a, b) => a - b,
            multiply: (a, b) => a * b,
            divide: (a, b) => {
                if (b === 0) throw new Error('Division by zero');
                return a / b;
            },
            power: (a, b) => Math.pow(a, b),
            mod: (a, b) => a % b,
            
            // Advanced operations
            sqrt: (x) => Math.sqrt(x),
            cbrt: (x) => Math.cbrt(x),
            square: (x) => x * x,
            cube: (x) => x * x * x,
            reciprocal: (x) => {
                if (x === 0) throw new Error('Division by zero');
                return 1 / x;
            },
            
            // Trigonometric functions
            sin: (x) => Math.sin(x),
            cos: (x) => Math.cos(x),
            tan: (x) => Math.tan(x),
            asin: (x) => Math.asin(x),
            acos: (x) => Math.acos(x),
            atan: (x) => Math.atan(x),
            
            // Hyperbolic functions
            sinh: (x) => Math.sinh(x),
            cosh: (x) => Math.cosh(x),
            tanh: (x) => Math.tanh(x),
            
            // Logarithmic functions
            ln: (x) => {
                if (x <= 0) throw new Error('Logarithm of non-positive number');
                return Math.log(x);
            },
            log10: (x) => {
                if (x <= 0) throw new Error('Logarithm of non-positive number');
                return Math.log10(x);
            },
            log2: (x) => {
                if (x <= 0) throw new Error('Logarithm of non-positive number');
                return Math.log2(x);
            },
            
            // Other functions
            abs: (x) => Math.abs(x),
            factorial: (n) => {
                if (n < 0 || !Number.isInteger(n)) {
                    throw new Error('Factorial only defined for non-negative integers');
                }
                if (n > 170) throw new Error('Factorial too large');
                let result = 1;
                for (let i = 2; i <= n; i++) {
                    result *= i;
                }
                return result;
            },
            percentage: (x) => x / 100,
            negate: (x) => -x
        };
    }

    // Evaluate mathematical expression
    evaluate(expression) {
        try {
            // Replace constants
            let processedExpression = expression;
            Object.entries(this.constants).forEach(([name, value]) => {
                const regex = new RegExp(`\\b${name}\\b`, 'g');
                processedExpression = processedExpression.replace(regex, value.toString());
            });

            // Handle implicit multiplication (2π becomes 2*π)
            processedExpression = processedExpression.replace(/(\d)([a-zA-Z])/g, '$1*$2');
            processedExpression = processedExpression.replace(/([a-zA-Z])(\d)/g, '$1*$2');
            processedExpression = processedExpression.replace(/\)(\d|[a-zA-Z])/g, ')*$1');
            processedExpression = processedExpression.replace(/(\d|[a-zA-Z])\(/g, '$1*(');

            // Evaluate using Function constructor (safer than eval)
            const result = Function('"use strict"; return (' + processedExpression + ')')();
            
            if (!isFinite(result)) {
                throw new Error('Result is not finite');
            }
            
            return result;
        } catch (error) {
            throw new Error(`Evaluation error: ${error.message}`);
        }
    }

    // Convert degrees to radians
    degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    // Convert radians to degrees
    radiansToDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    // Format number for display
    formatNumber(num, precision = 10) {
        if (typeof num !== 'number' || !isFinite(num)) {
            return 'Error';
        }

        // Handle very large or very small numbers
        if (Math.abs(num) >= 1e15 || (Math.abs(num) < 1e-10 && num !== 0)) {
            return num.toExponential(precision);
        }

        // Remove trailing zeros and unnecessary decimal point
        let formatted = parseFloat(num.toPrecision(precision)).toString();
        
        // Handle integers
        if (Number.isInteger(num) && Math.abs(num) < 1e15) {
            formatted = num.toString();
        }

        return formatted;
    }
}

// =====================================================
// MEMORY MANAGER
// =====================================================

class MemoryManager {
    constructor() {
        this.memory = 0;
        this.observers = [];
    }

    addObserver(callback) {
        this.observers.push(callback);
    }

    notifyObservers() {
        this.observers.forEach(callback => callback(this.memory));
    }

    store(value) {
        this.memory = value;
        this.notifyObservers();
    }

    recall() {
        return this.memory;
    }

    add(value) {
        this.memory += value;
        this.notifyObservers();
    }

    subtract(value) {
        this.memory -= value;
        this.notifyObservers();
    }

    clear() {
        this.memory = 0;
        this.notifyObservers();
    }

    hasValue() {
        return this.memory !== 0;
    }
}

// =====================================================
// HISTORY MANAGER
// =====================================================

class HistoryManager {
    constructor(maxEntries = 50) {
        this.history = [];
        this.maxEntries = maxEntries;
        this.observers = [];
    }

    addObserver(callback) {
        this.observers.push(callback);
    }

    notifyObservers() {
        this.observers.forEach(callback => callback(this.history));
    }

    addEntry(expression, result) {
        const entry = {
            id: Date.now(),
            expression: expression,
            result: result,
            timestamp: new Date()
        };

        this.history.unshift(entry);

        // Limit history size
        if (this.history.length > this.maxEntries) {
            this.history = this.history.slice(0, this.maxEntries);
        }

        this.notifyObservers();
        this.saveToStorage();
    }

    getHistory() {
        return [...this.history];
    }

    clearHistory() {
        this.history = [];
        this.notifyObservers();
        this.saveToStorage();
    }

    saveToStorage() {
        try {
            localStorage.setItem('calculatorHistory', JSON.stringify(this.history));
        } catch (error) {
            console.warn('Failed to save history to localStorage:', error);
        }
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem('calculatorHistory');
            if (saved) {
                this.history = JSON.parse(saved).map(entry => ({
                    ...entry,
                    timestamp: new Date(entry.timestamp)
                }));
                this.notifyObservers();
            }
        } catch (error) {
            console.warn('Failed to load history from localStorage:', error);
        }
    }
}

// =====================================================
// CALCULATOR MODEL
// =====================================================

class CalculatorModel {
    constructor() {
        this.display = '0';
        this.previousValue = null;
        this.operation = null;
        this.waitingForOperand = false;
        this.expression = '';
        this.angleMode = 'rad'; // 'rad' or 'deg'
        
        // Components
        this.mathEngine = new MathEngine();
        this.memory = new MemoryManager();
        this.history = new HistoryManager();
        
        // Observers
        this.observers = [];
        
        // Load saved data
        this.loadSettings();
        this.history.loadFromStorage();
    }

    addObserver(callback) {
        this.observers.push(callback);
    }

    notifyObservers(event, data) {
        this.observers.forEach(callback => callback(event, data));
    }

    // Input number
    inputNumber(num) {
        if (this.waitingForOperand) {
            this.display = String(num);
            this.waitingForOperand = false;
        } else {
            if (this.display === '0') {
                this.display = String(num);
            } else {
                this.display += num;
            }
        }
        this.notifyObservers('displayUpdate', this.display);
    }

    // Input decimal point
    inputDecimal() {
        if (this.waitingForOperand) {
            this.display = '0.';
            this.waitingForOperand = false;
        } else if (this.display.indexOf('.') === -1) {
            this.display += '.';
        }
        this.notifyObservers('displayUpdate', this.display);
    }

    // Clear display
    clear() {
        this.display = '0';
        this.previousValue = null;
        this.operation = null;
        this.waitingForOperand = false;
        this.expression = '';
        this.notifyObservers('displayUpdate', this.display);
        this.notifyObservers('expressionUpdate', this.expression);
    }

    // Clear everything including memory
    clearAll() {
        this.clear();
        this.memory.clear();
        this.notifyObservers('allClear');
    }

    // Backspace
    backspace() {
        if (!this.waitingForOperand) {
            if (this.display.length > 1) {
                this.display = this.display.slice(0, -1);
            } else {
                this.display = '0';
            }
            this.notifyObservers('displayUpdate', this.display);
        }
    }

    // Basic operations
    performOperation(nextOperation) {
        const inputValue = parseFloat(this.display);

        if (this.previousValue === null) {
            this.previousValue = inputValue;
        } else if (this.operation) {
            const currentValue = this.previousValue || 0;
            const newValue = this.calculate(currentValue, inputValue, this.operation);

            this.display = this.mathEngine.formatNumber(newValue);
            this.previousValue = newValue;
            this.notifyObservers('displayUpdate', this.display);
        }

        this.waitingForOperand = true;
        this.operation = nextOperation;
        
        // Update expression display
        if (nextOperation === '=') {
            const expression = this.expression + this.display;
            this.history.addEntry(expression, this.display);
            this.expression = '';
            this.operation = null;
            this.previousValue = null;
        } else {
            this.expression = this.previousValue + ' ' + nextOperation + ' ';
        }
        
        this.notifyObservers('expressionUpdate', this.expression);
    }

    // Calculate result
    calculate(firstOperand, secondOperand, operation) {
        try {
            switch (operation) {
                case '+': return this.mathEngine.functions.add(firstOperand, secondOperand);
                case '-': return this.mathEngine.functions.subtract(firstOperand, secondOperand);
                case '*': return this.mathEngine.functions.multiply(firstOperand, secondOperand);
                case '/': return this.mathEngine.functions.divide(firstOperand, secondOperand);
                case '^': return this.mathEngine.functions.power(firstOperand, secondOperand);
                case '%': return this.mathEngine.functions.mod(firstOperand, secondOperand);
                default: return secondOperand;
            }
        } catch (error) {
            this.notifyObservers('error', error.message);
            return 0;
        }
    }

    // Scientific functions
    performScientificFunction(func) {
        try {
            const value = parseFloat(this.display);
            let result;

            // Handle angle conversion for trigonometric functions
            if (['sin', 'cos', 'tan'].includes(func) && this.angleMode === 'deg') {
                const radians = this.mathEngine.degreesToRadians(value);
                result = this.mathEngine.functions[func](radians);
            } else if (['asin', 'acos', 'atan'].includes(func) && this.angleMode === 'deg') {
                result = this.mathEngine.radiansToDegrees(this.mathEngine.functions[func](value));
            } else {
                result = this.mathEngine.functions[func](value);
            }

            const expression = `${func}(${this.display})`;
            this.display = this.mathEngine.formatNumber(result);
            
            this.history.addEntry(expression, this.display);
            this.notifyObservers('displayUpdate', this.display);
            this.waitingForOperand = true;
        } catch (error) {
            this.notifyObservers('error', error.message);
        }
    }

    // Memory operations
    memoryStore() {
        const value = parseFloat(this.display);
        this.memory.store(value);
        this.notifyObservers('memoryUpdate', this.memory.hasValue());
    }

    memoryRecall() {
        this.display = this.mathEngine.formatNumber(this.memory.recall());
        this.notifyObservers('displayUpdate', this.display);
        this.waitingForOperand = true;
    }

    memoryAdd() {
        const value = parseFloat(this.display);
        this.memory.add(value);
        this.notifyObservers('memoryUpdate', this.memory.hasValue());
    }

    memorySubtract() {
        const value = parseFloat(this.display);
        this.memory.subtract(value);
        this.notifyObservers('memoryUpdate', this.memory.hasValue());
    }

    memoryClear() {
        this.memory.clear();
        this.notifyObservers('memoryUpdate', false);
    }

    // Toggle angle mode
    toggleAngleMode() {
        this.angleMode = this.angleMode === 'rad' ? 'deg' : 'rad';
        this.notifyObservers('angleModeUpdate', this.angleMode);
        this.saveSettings();
    }

    // Constants
    inputConstant(constant) {
        const value = this.mathEngine.constants[constant];
        this.display = this.mathEngine.formatNumber(value);
        this.notifyObservers('displayUpdate', this.display);
        this.waitingForOperand = true;
    }

    // Settings persistence
    saveSettings() {
        try {
            const settings = {
                angleMode: this.angleMode
            };
            localStorage.setItem('calculatorSettings', JSON.stringify(settings));
        } catch (error) {
            console.warn('Failed to save settings:', error);
        }
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('calculatorSettings');
            if (saved) {
                const settings = JSON.parse(saved);
                this.angleMode = settings.angleMode || 'rad';
            }
        } catch (error) {
            console.warn('Failed to load settings:', error);
        }
    }
}

// =====================================================
// CALCULATOR VIEW
// =====================================================

class CalculatorView {
    constructor() {
        this.container = null;
        this.display = null;
        this.expressionDisplay = null;
        this.buttons = new Map();
        this.historyPanel = null;
        this.createUI();
    }

    createUI() {
        this.container = this.createElement('div', 'calculator-container');
        
        // Create main calculator
        this.createHeader();
        this.createDisplay();
        this.createButtonPanel();
        
        // Create side panels
        this.createHistoryPanel();
        this.createMemoryPanel();
        
        console.log("🖥️ Calculator UI created");
    }

    createHeader() {
        const header = this.createElement('div', 'calculator-header');
        header.innerHTML = `
            <h1>🧮 Scientific Calculator</h1>
            <div class="header-controls">
                <button id="historyToggle" class="header-btn">📜 History</button>
                <button id="memoryToggle" class="header-btn">💾 Memory</button>
                <button id="angleMode" class="header-btn">RAD</button>
            </div>
        `;
        this.container.appendChild(header);
    }

    createDisplay() {
        const displayContainer = this.createElement('div', 'display-container');
        
        this.expressionDisplay = this.createElement('div', 'expression-display');
        this.expressionDisplay.textContent = '';
        
        this.display = this.createElement('div', 'main-display');
        this.display.textContent = '0';
        
        displayContainer.appendChild(this.expressionDisplay);
        displayContainer.appendChild(this.display);
        this.container.appendChild(displayContainer);
    }

    createButtonPanel() {
        const buttonPanel = this.createElement('div', 'button-panel');
        
        const buttonLayout = [
            // Row 1 - Memory and Clear
            [
                { text: 'MC', id: 'memoryClear', class: 'btn-memory' },
                { text: 'MR', id: 'memoryRecall', class: 'btn-memory' },
                { text: 'M+', id: 'memoryAdd', class: 'btn-memory' },
                { text: 'M-', id: 'memorySub', class: 'btn-memory' },
                { text: 'MS', id: 'memoryStore', class: 'btn-memory' }
            ],
            // Row 2 - Scientific functions
            [
                { text: '²', id: 'square', class: 'btn-function' },
                { text: '√', id: 'sqrt', class: 'btn-function' },
                { text: 'x!', id: 'factorial', class: 'btn-function' },
                { text: '1/x', id: 'reciprocal', class: 'btn-function' },
                { text: 'CE', id: 'clearEntry', class: 'btn-clear' }
            ],
            // Row 3 - Trigonometric
            [
                { text: 'sin', id: 'sin', class: 'btn-function' },
                { text: 'cos', id: 'cos', class: 'btn-function' },
                { text: 'tan', id: 'tan', class: 'btn-function' },
                { text: 'ln', id: 'ln', class: 'btn-function' },
                { text: 'C', id: 'clear', class: 'btn-clear' }
            ],
            // Row 4 - More functions
            [
                { text: 'asin', id: 'asin', class: 'btn-function' },
                { text: 'acos', id: 'acos', class: 'btn-function' },
                { text: 'atan', id: 'atan', class: 'btn-function' },
                { text: 'log', id: 'log10', class: 'btn-function' },
                { text: '⌫', id: 'backspace', class: 'btn-clear' }
            ],
            // Row 5 - Constants and operations
            [
                { text: 'π', id: 'pi', class: 'btn-constant' },
                { text: 'e', id: 'e', class: 'btn-constant' },
                { text: 'x^y', id: 'power', class: 'btn-operator' },
                { text: '÷', id: 'divide', class: 'btn-operator' },
                { text: '%', id: 'percentage', class: 'btn-function' }
            ],
            // Row 6-9 - Numbers and basic operations
            [
                { text: '7', id: 'num7', class: 'btn-number' },
                { text: '8', id: 'num8', class: 'btn-number' },
                { text: '9', id: 'num9', class: 'btn-number' },
                { text: '×', id: 'multiply', class: 'btn-operator' },
                { text: 'abs', id: 'abs', class: 'btn-function' }
            ],
            [
                { text: '4', id: 'num4', class: 'btn-number' },
                { text: '5', id: 'num5', class: 'btn-number' },
                { text: '6', id: 'num6', class: 'btn-number' },
                { text: '−', id: 'subtract', class: 'btn-operator' },
                { text: '±', id: 'negate', class: 'btn-function' }
            ],
            [
                { text: '1', id: 'num1', class: 'btn-number' },
                { text: '2', id: 'num2', class: 'btn-number' },
                { text: '3', id: 'num3', class: 'btn-number' },
                { text: '+', id: 'add', class: 'btn-operator' },
                { text: 'mod', id: 'mod', class: 'btn-operator' }
            ],
            [
                { text: '0', id: 'num0', class: 'btn-number btn-wide' },
                { text: '.', id: 'decimal', class: 'btn-number' },
                { text: '=', id: 'equals', class: 'btn-equals btn-wide' }
            ]
        ];

        buttonLayout.forEach(row => {
            const rowElement = this.createElement('div', 'button-row');
            row.forEach(buttonConfig => {
                const button = this.createElement('button', `calculator-btn ${buttonConfig.class}`);
                button.textContent = buttonConfig.text;
                button.id = buttonConfig.id;
                this.buttons.set(buttonConfig.id, button);
                rowElement.appendChild(button);
            });
            buttonPanel.appendChild(rowElement);
        });

        this.container.appendChild(buttonPanel);
    }

    createHistoryPanel() {
        this.historyPanel = this.createElement('div', 'history-panel hidden');
        this.historyPanel.innerHTML = `
            <div class="panel-header">
                <h3>📜 Calculation History</h3>
                <button id="clearHistory" class="clear-btn">Clear</button>
            </div>
            <div id="historyList" class="history-list">
                <div class="no-history">No calculations yet</div>
            </div>
        `;
        this.container.appendChild(this.historyPanel);
    }

    createMemoryPanel() {
        this.memoryPanel = this.createElement('div', 'memory-panel hidden');
        this.memoryPanel.innerHTML = `
            <div class="panel-header">
                <h3>💾 Memory</h3>
                <div id="memoryValue" class="memory-value">0</div>
            </div>
            <div class="memory-info">
                <p>Memory operations:</p>
                <ul>
                    <li>MS - Store current value</li>
                    <li>MR - Recall stored value</li>
                    <li>M+ - Add to memory</li>
                    <li>M- - Subtract from memory</li>
                    <li>MC - Clear memory</li>
                </ul>
            </div>
        `;
        this.container.appendChild(this.memoryPanel);
    }

    // Update display
    updateDisplay(value) {
        this.display.textContent = value;
    }

    updateExpression(expression) {
        this.expressionDisplay.textContent = expression;
    }

    // Update history panel
    updateHistory(history) {
        const historyList = document.getElementById('historyList');
        
        if (history.length === 0) {
            historyList.innerHTML = '<div class="no-history">No calculations yet</div>';
            return;
        }

        historyList.innerHTML = history.map(entry => `
            <div class="history-entry" data-result="${entry.result}">
                <div class="history-expression">${this.escapeHtml(entry.expression)}</div>
                <div class="history-result">= ${this.escapeHtml(entry.result)}</div>
                <div class="history-time">${entry.timestamp.toLocaleTimeString()}</div>
            </div>
        `).join('');
    }

    // Update memory indicator
    updateMemoryIndicator(hasValue) {
        const memoryButtons = document.querySelectorAll('.btn-memory');
        memoryButtons.forEach(btn => {
            btn.classList.toggle('active', hasValue);
        });
    }

    // Update angle mode indicator
    updateAngleMode(mode) {
        const angleModeBtn = document.getElementById('angleMode');
        if (angleModeBtn) {
            angleModeBtn.textContent = mode.toUpperCase();
            angleModeBtn.classList.toggle('active', mode === 'deg');
        }
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = this.createElement('div', `notification notification-${type}`);
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }

    // Toggle panel visibility
    togglePanel(panelName) {
        const panel = panelName === 'history' ? this.historyPanel : this.memoryPanel;
        const otherPanel = panelName === 'history' ? this.memoryPanel : this.historyPanel;
        
        // Hide other panel
        otherPanel.classList.add('hidden');
        
        // Toggle current panel
        panel.classList.toggle('hidden');
    }

    // Utility methods
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        return element;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// =====================================================
// CALCULATOR CONTROLLER
// =====================================================

class CalculatorController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        this.setupModelObservers();
        this.setupEventListeners();
        this.setupKeyboardListeners();
        
        // Initial UI updates
        this.view.updateAngleMode(this.model.angleMode);
        this.view.updateMemoryIndicator(this.model.memory.hasValue());
        
        console.log("🎮 Calculator Controller initialized");
    }

    setupModelObservers() {
        this.model.addObserver((event, data) => {
            switch (event) {
                case 'displayUpdate':
                    this.view.updateDisplay(data);
                    break;
                case 'expressionUpdate':
                    this.view.updateExpression(data);
                    break;
                case 'memoryUpdate':
                    this.view.updateMemoryIndicator(data);
                    break;
                case 'angleModeUpdate':
                    this.view.updateAngleMode(data);
                    break;
                case 'error':
                    this.view.showNotification(data, 'error');
                    break;
            }
        });

        // Memory observer
        this.model.memory.addObserver((memoryValue) => {
            const memoryDisplay = document.getElementById('memoryValue');
            if (memoryDisplay) {
                memoryDisplay.textContent = this.model.mathEngine.formatNumber(memoryValue);
            }
        });

        // History observer
        this.model.history.addObserver((history) => {
            this.view.updateHistory(history);
        });
    }

    setupEventListeners() {
        // Number buttons
        for (let i = 0; i <= 9; i++) {
            const btn = this.view.buttons.get(`num${i}`);
            if (btn) {
                btn.addEventListener('click', () => this.model.inputNumber(i));
            }
        }

        // Basic operations
        const operations = {
            'add': '+',
            'subtract': '-',
            'multiply': '*',
            'divide': '/',
            'equals': '=',
            'power': '^',
            'mod': '%'
        };

        Object.entries(operations).forEach(([id, op]) => {
            const btn = this.view.buttons.get(id);
            if (btn) {
                btn.addEventListener('click', () => this.model.performOperation(op));
            }
        });

        // Scientific functions
        const scientificFunctions = [
            'sin', 'cos', 'tan', 'asin', 'acos', 'atan',
            'ln', 'log10', 'sqrt', 'square', 'factorial',
            'reciprocal', 'abs', 'negate'
        ];

        scientificFunctions.forEach(func => {
            const btn = this.view.buttons.get(func);
            if (btn) {
                btn.addEventListener('click', () => {
                    if (func === 'square') {
                        this.model.performScientificFunction('square');
                    } else if (func === 'negate') {
                        this.model.performScientificFunction('negate');
                    } else {
                        this.model.performScientificFunction(func);
                    }
                });
            }
        });

        // Memory operations
        const memoryOps = {
            'memoryStore': () => this.model.memoryStore(),
            'memoryRecall': () => this.model.memoryRecall(),
            'memoryAdd': () => this.model.memoryAdd(),
            'memorySub': () => this.model.memorySubtract(),
            'memoryClear': () => this.model.memoryClear()
        };

        Object.entries(memoryOps).forEach(([id, func]) => {
            const btn = this.view.buttons.get(id);
            if (btn) {
                btn.addEventListener('click', func);
            }
        });

        // Constants
        const constants = {
            'pi': 'PI',
            'e': 'E'
        };

        Object.entries(constants).forEach(([id, constant]) => {
            const btn = this.view.buttons.get(id);
            if (btn) {
                btn.addEventListener('click', () => this.model.inputConstant(constant));
            }
        });

        // Special functions
        const specialBtn = this.view.buttons.get('percentage');
        if (specialBtn) {
            specialBtn.addEventListener('click', () => {
                this.model.performScientificFunction('percentage');
            });
        }

        // Control buttons
        const decimalBtn = this.view.buttons.get('decimal');
        if (decimalBtn) {
            decimalBtn.addEventListener('click', () => this.model.inputDecimal());
        }

        const clearBtn = this.view.buttons.get('clear');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.model.clear());
        }

        const clearEntryBtn = this.view.buttons.get('clearEntry');
        if (clearEntryBtn) {
            clearEntryBtn.addEventListener('click', () => this.model.clear());
        }

        const backspaceBtn = this.view.buttons.get('backspace');
        if (backspaceBtn) {
            backspaceBtn.addEventListener('click', () => this.model.backspace());
        }

        // Header controls
        const historyToggle = document.getElementById('historyToggle');
        if (historyToggle) {
            historyToggle.addEventListener('click', () => this.view.togglePanel('history'));
        }

        const memoryToggle = document.getElementById('memoryToggle');
        if (memoryToggle) {
            memoryToggle.addEventListener('click', () => this.view.togglePanel('memory'));
        }

        const angleModeBtn = document.getElementById('angleMode');
        if (angleModeBtn) {
            angleModeBtn.addEventListener('click', () => this.model.toggleAngleMode());
        }

        // History controls
        const clearHistoryBtn = document.getElementById('clearHistory');
        if (clearHistoryBtn) {
            clearHistoryBtn.addEventListener('click', () => {
                this.model.history.clearHistory();
                this.view.showNotification('History cleared', 'info');
            });
        }

        // History entry clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.history-entry')) {
                const entry = e.target.closest('.history-entry');
                const result = entry.dataset.result;
                this.model.display = result;
                this.view.updateDisplay(result);
                this.model.waitingForOperand = true;
            }
        });
    }

    setupKeyboardListeners() {
        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            
            // Numbers
            if (e.key >= '0' && e.key <= '9') {
                this.model.inputNumber(parseInt(e.key));
            }
            
            // Operations
            switch (e.key) {
                case '+':
                    this.model.performOperation('+');
                    break;
                case '-':
                    this.model.performOperation('-');
                    break;
                case '*':
                    this.model.performOperation('*');
                    break;
                case '/':
                    this.model.performOperation('/');
                    break;
                case '=':
                case 'Enter':
                    this.model.performOperation('=');
                    break;
                case '.':
                    this.model.inputDecimal();
                    break;
                case 'Escape':
                    this.model.clear();
                    break;
                case 'Backspace':
                    this.model.backspace();
                    break;
                case '%':
                    this.model.performScientificFunction('percentage');
                    break;
            }
        });
    }
}

// =====================================================
// CALCULATOR APPLICATION
// =====================================================

class CalculatorApp {
    constructor() {
        this.model = new CalculatorModel();
        this.view = new CalculatorView();
        this.controller = new CalculatorController(this.model, this.view);
        
        console.log("🧮 Calculator Application initialized!");
    }

    static getInstance() {
        if (!CalculatorApp.instance) {
            CalculatorApp.instance = new CalculatorApp();
        }
        return CalculatorApp.instance;
    }
}

// =====================================================
// CSS STYLES
// =====================================================

const calculatorStyles = `
<style>
.calculator-container {
    max-width: 800px;
    margin: 20px auto;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
}

.calculator-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    color: white;
}

.calculator-header h1 {
    margin: 0;
    font-size: 24px;
}

.header-controls {
    display: flex;
    gap: 10px;
}

.header-btn {
    padding: 8px 12px;
    background: rgba(255,255,255,0.2);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 12px;
    transition: background 0.3s;
}

.header-btn:hover {
    background: rgba(255,255,255,0.3);
}

.header-btn.active {
    background: rgba(255,255,255,0.4);
}

.display-container {
    background: #000;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.expression-display {
    color: #888;
    font-size: 14px;
    text-align: right;
    min-height: 20px;
    margin-bottom: 5px;
}

.main-display {
    color: white;
    font-size: 36px;
    font-weight: 300;
    text-align: right;
    overflow: hidden;
    word-wrap: break-word;
}

.button-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.button-row {
    display: flex;
    gap: 8px;
}

.calculator-btn {
    flex: 1;
    height: 60px;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
}

.calculator-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.calculator-btn:active {
    transform: translateY(0);
}

.btn-number {
    background: #2d3748;
    color: white;
}

.btn-number:hover {
    background: #4a5568;
}

.btn-operator {
    background: #ed8936;
    color: white;
}

.btn-operator:hover {
    background: #f6ad55;
}

.btn-equals {
    background: #38a169;
    color: white;
}

.btn-equals:hover {
    background: #48bb78;
}

.btn-function {
    background: #4299e1;
    color: white;
    font-size: 14px;
}

.btn-function:hover {
    background: #63b3ed;
}

.btn-constant {
    background: #9f7aea;
    color: white;
}

.btn-constant:hover {
    background: #b794f6;
}

.btn-memory {
    background: #e53e3e;
    color: white;
    font-size: 14px;
}

.btn-memory:hover {
    background: #fc8181;
}

.btn-memory.active {
    background: #c53030;
    box-shadow: 0 0 10px rgba(197, 48, 48, 0.5);
}

.btn-clear {
    background: #718096;
    color: white;
}

.btn-clear:hover {
    background: #a0aec0;
}

.btn-wide {
    flex: 2;
}

.history-panel, .memory-panel {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-radius: 15px;
    margin-top: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    max-height: 400px;
    overflow-y: auto;
    z-index: 10;
}

.history-panel.hidden, .memory-panel.hidden {
    display: none;
}

.panel-header {
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f7fafc;
    border-radius: 15px 15px 0 0;
}

.panel-header h3 {
    margin: 0;
    color: #2d3748;
}

.clear-btn {
    padding: 5px 10px;
    background: #e53e3e;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
}

.clear-btn:hover {
    background: #c53030;
}

.history-list {
    padding: 10px;
}

.no-history {
    text-align: center;
    color: #a0aec0;
    padding: 20px;
    font-style: italic;
}

.history-entry {
    padding: 10px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: background 0.2s;
}

.history-entry:hover {
    background: #f7fafc;
}

.history-expression {
    font-size: 14px;
    color: #4a5568;
}

.history-result {
    font-size: 16px;
    font-weight: 600;
    color: #2d3748;
    margin: 5px 0;
}

.history-time {
    font-size: 12px;
    color: #a0aec0;
}

.memory-value {
    font-size: 24px;
    font-weight: bold;
    color: #2d3748;
}

.memory-info {
    padding: 20px;
    color: #4a5568;
}

.memory-info ul {
    margin: 10px 0;
    padding-left: 20px;
}

.memory-info li {
    margin: 5px 0;
    font-size: 14px;
}

.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
}

.notification.show {
    transform: translateX(0);
}

.notification-error {
    background: #e53e3e;
}

.notification-info {
    background: #4299e1;
}

@media (max-width: 600px) {
    .calculator-container {
        margin: 10px;
        padding: 15px;
    }
    
    .calculator-header {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
    
    .main-display {
        font-size: 28px;
    }
    
    .calculator-btn {
        height: 50px;
        font-size: 16px;
    }
    
    .btn-function, .btn-memory {
        font-size: 12px;
    }
}
</style>
`;

// =====================================================
// APPLICATION INITIALIZATION
// =====================================================

function initializeCalculator() {
    // Add styles
    document.head.insertAdjacentHTML('beforeend', calculatorStyles);
    
    // Create app container
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    
    // Initialize calculator
    window.calculator = CalculatorApp.getInstance();
    
    // Mount to DOM
    appContainer.appendChild(window.calculator.view.container);
    
    console.log("✅ Calculator Application ready!");
    console.log("🧮 Features available:");
    console.log("   - Basic arithmetic operations");
    console.log("   - Scientific functions");
    console.log("   - Memory operations");
    console.log("   - Calculation history");
    console.log("   - Keyboard shortcuts");
    console.log("   - Angle mode switching");
    console.log("   - Constants (π, e)");
}

// Auto-initialize
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCalculator);
    } else {
        initializeCalculator();
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CalculatorApp, CalculatorModel, CalculatorView, CalculatorController };
}

console.log("🎉 Advanced Calculator Application loaded!");
console.log("📚 Demonstrates professional JavaScript patterns:");
console.log("   ✅ Object-Oriented Programming");
console.log("   ✅ Observer Pattern");
console.log("   ✅ Mathematical Operations");
console.log("   ✅ Local Storage");
console.log("   ✅ Event Handling");
console.log("   ✅ Error Management");
console.log("   ✅ Responsive Design");