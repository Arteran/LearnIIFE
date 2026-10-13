// The Revealing Pattern is a variation of the Module Pattern

const Game = (() => {
  let count = 0;
  const current = () => { return `Game score is ${count}.` };
  const increment = () => { count++ };
  const reset = () => { count = 0 };

  return {
    current: current,
    increment: increment,
    reset: reset
  }
})();

Game.increment();
console.log(Game.current());
Game.increment();
console.log(Game.current());