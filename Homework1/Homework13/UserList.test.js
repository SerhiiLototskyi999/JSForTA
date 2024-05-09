const {userList} = require('./Users.js');


describe('Testing userList array', () => {
    test('Check if "admin" is in the array', () => {
        expect(userList).toContain('admin');
    });

    test('Check if the first element is "Nick"', () => {
        expect(userList[0]).toBe('Nick');
    });

    test('Check if the last element is "new_user_2"', () => {
        expect(userList[userList.length - 1]).toBe('new_user_2');
    });

    test('Check if the length of the array is 5', () => {
        expect(userList).toHaveLength(5);
    });

    test('Check if the type of the third element is string', () => {
        expect(typeof userList[2]).toBe('string');
    });

    test('Check if the 8th element does not exist', () => {
        expect(userList[7]).toBeUndefined();
    });
});