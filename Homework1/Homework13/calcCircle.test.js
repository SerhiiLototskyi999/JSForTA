const { getCircleLength, getCircleArea } = require('./calcCircle');

describe('Testing calcCircle functions', () => {
    test('Test getCircleLength with radius 22', () => {
        expect(getCircleLength(22)).toBeCloseTo(138.2, 1);
    });

    test('Test getCircleArea with radius 9', () => {
        expect(getCircleArea(9)).toBeCloseTo(254.47);
    });

    test('Test getCircleLength without arguments', () => {
        expect(getCircleLength()).toBeNaN();
    });

    test('Test getCircleArea without arguments', () => {
        expect(getCircleArea()).toBeNaN();
    });
});