// testing code for Employee role
const Employee = require('../lib/Employee.js');

// Employee Object with Name, ID, and Email then get the get___() method of capture
test('Gets Employee Object', () => {
    const employee = new Employee('Jeffrey', 17, 'jeffreymiyoung@aol.com');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Gets Employee name using getName()', () => {
    const employee = new Employee('Jeffrey', 17, 'jeffreymiyoung@aol.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Get Employee getId()', () => {
    const employee = new Employee('Jeffrey', 17, 'jeffreymiyoung@aol.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Get Employee getEmail()', () => {
    const employee = new Employee('Jeffrey', 17, 'jeffreymiyoung@aol.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// Override Company Role toEqual Employee
test('Get Employee getRole()', () => {
    const employee = new Employee('Jeffrey', 17, 'jeffreymiyoung@aol.com');

    expect(employee.getRole()).toEqual("Employee");
});