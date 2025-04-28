const { Fibonachi } = require('./app');

describe('fibonachi', () => {
    test('chisla fibonachi', () => {
        const result = Array.from(new Fibonachi(34));
        expect(result).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});