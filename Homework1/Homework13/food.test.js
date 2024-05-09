const filterFoodPrice = require('./food');

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

describe('Testing filterFoodPrice function', () => {
    test('Expected length of filtered array is 3', () => {
        const filteredFood = filterFoodPrice(food, 12, 40);
        expect(filteredFood).toHaveLength(3);
    });

    test('Filtered array contains object { kind: "pepper", price: 27 }', () => {
        const filteredFood = filterFoodPrice(food, 12, 40);
        expect(filteredFood).toContainEqual({ kind: 'pepper', price: 27 });
    });

    test('Filtered array contains 2nd, 3rd, and 4th elements of original array', () => {
        const filteredFood = filterFoodPrice(food, 12, 40);
        expect(filteredFood).toEqual([food[1], food[2], food[3]]);
    });

    test('Price property of first element in filtered array is greater than or equal to min', () => {
        const filteredFood = filterFoodPrice(food, 12, 40);
        expect(filteredFood[0].price).toBeGreaterThanOrEqual(12);
    });

    test('Price property of third element in filtered array is less than or equal to max', () => {
        const filteredFood = filterFoodPrice(food, 12, 40);
        expect(filteredFood[2].price).toBeLessThanOrEqual(40);
    });

    test('Filtered array does not contain object { kind: "lemon", price: 50 }', () => {
        const filteredFood = filterFoodPrice(food, 12, 40);
        expect(filteredFood).not.toContainEqual({ kind: 'lemon', price: 50 });
    });

    // Additional assertions
    test('All prices in filtered array are integers', () => {
        const filteredFood = filterFoodPrice(food, 12, 40);
        filteredFood.forEach(item => {
            expect(Number.isInteger(item.price)).toBe(true);
        });
    });

    test('Filtered array contains only objects with property "kind"', () => {
        const filteredFood = filterFoodPrice(food, 12, 40);
        filteredFood.forEach(item => {
            expect(item).toHaveProperty('kind');
        });
    });
});