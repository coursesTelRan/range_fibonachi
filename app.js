function Fibonachi(limit) {
    this.limit = limit;

    this[Symbol.iterator] = function () {
        let a = 1, b = 1;

        return {
            next: () => {
                if (a > this.limit) {
                    return { done: true };
                } else {
                    const value = a;
                    [a, b] = [b, a + b];
                    return { done: false, value };
        }
    }
        };
    };
}

module.exports = { Fibonachi };
const fib = new Fibonachi(50);

console.log('=== iterator of Fibonacci ===');
let iterator = fib[Symbol.iterator]();
let res = iterator.next();
while (!res.done) {
    console.log(res.value);
    res = iterator.next();
}
