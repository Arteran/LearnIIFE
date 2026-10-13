# IIFE 

> **IIFE** (Immediately Invoked Function Expression) - функція, яка викликається автоматично одразу після оголошення.

Головна суперсила IIFE - створення власної ізольованої області видимості (scope), що захищає глобальний простір імен від конфліктів змінних.

---

### Базовий синтаксис

```javascript
(() => {
  // Код виконується миттєво та ізольовано
})();
```

---

### Приклади в репозиторії

- **[`iife.js`](./iife.js)** - базовий синтаксис IIFE та виклик з параметрами (рекурсивний приклад).
- **[`firstReason.js`](./firstReason.js)** - Причина 1: Не засмічувати глобальну область видимості (ізоляція змінних).
- **[`secondReason.js`](./secondReason.js)** - Причина 2: Приватні змінні та замикання (data privacy / encapsulation).
- **[`thirdReasonA.js`](./thirdReasonA.js)** - Причина 3: Патерн «Модуль» (Module Pattern).
- **[`thirdReasonB.js`](./thirdReasonB.js)** - Патерн «Відкритий модуль» (Revealing Module Pattern).
- **[`thirdReasonC.js`](./thirdReasonC.js)** - Впровадження простору імен (Namespace Injection Pattern).

