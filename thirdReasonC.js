// Injecting a namespace object

((namespace) => {
  namespace.count = 0;
  namespace.current = function () { return `App count is ${this.count}.` };
  namespace.increment = function () { this.count++ };
  namespace.reset = function () { this.count = 0 };
})(globalThis.App = globalThis.App || {});

App.increment();
console.log(App.current());
