// testing code for Manager role
const Manager = require('../lib/Manager.js');

// Manager Object with Name, Id, Email, and OfficeNumber
test('Get Manager object', () => {
    const manager = new Manager('Jeffrey', 17, 'jeffreymiyoung@aol.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Override getRole() toEqual Manager
test('Get Employee getRole()', () => {
    const manager = new Manager('Jeffrey', 17, 'jeffreymiyoung@aol.com', 1);

    expect(manager.getRole()).toEqual('Manager');
});