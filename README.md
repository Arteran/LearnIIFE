# IIFE 

> **IIFE** (Immediately Invoked Function Expression) - a function that runs as soon as it is defined.

The main superpower of an IIFE is creating its own isolated scope, preventing variable conflicts and keeping the global namespace clean.

---

### Basic Syntax

```javascript
(() => {
  // Code executes immediately and in isolation
})();
```

---

### Repository Examples

- **[`iife.js`](./iife.js)** - Basic IIFE syntax and invocation with parameters (recursive example).
- **[`firstReason.js`](./firstReason.js)** - Reason 1: Does not pollute the global scope (variable isolation).
- **[`secondReason.js`](./secondReason.js)** - Reason 2: Private variables and closures (data privacy / encapsulation).
- **[`thirdReasonA.js`](./thirdReasonA.js)** - Reason 3: Module Pattern.
- **[`thirdReasonB.js`](./thirdReasonB.js)** - The Revealing Module Pattern.
- **[`thirdReasonC.js`](./thirdReasonC.js)** - Namespace Injection Pattern.
