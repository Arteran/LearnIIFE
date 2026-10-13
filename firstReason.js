// Reason 1: Does not pollute the global scope

const text = 'SomeText';

(function () {
    const text = 'Hello';
    console.log(text);
})();

console.log(text);