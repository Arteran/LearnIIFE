// Reason 2: Private Variables

const increment = (function () {
  let counter = 0;
  console.log(counter);
  const credits = (num) => console.log(`I have ${num} credit(s).`);
  return () => {
    counter++;
    credits(counter);
  }
})();

increment();
increment();

console.log(increment.counter); // undefined