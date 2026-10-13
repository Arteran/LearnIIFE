// Reason 3: Module pattern

const Scope = (() => {
  let count = 0;

  return {
    current: () => { return count },
    increment: () => { count++ },
    decrement: () => { count-- },
    clear: () => { count = 0 }
  }
})();

Scope.increment();
console.log(Scope.current());
Scope.increment();
console.log(Scope.current());
Scope.clear();
console.log(Scope.current());
