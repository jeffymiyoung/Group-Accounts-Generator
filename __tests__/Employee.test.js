// testing code for Employee role
const Employee = require('../lib/Employee');

// Employee Object with Name, ID, and Email then get the get___() method of capture
test('Gets Employee Object', () => {
    const employee = new Employee('Jeffrey', 017, 'jeffreymiyoung@aol.com');
    
    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});

test('Gets Employee name using getName()', () => {
    const employee = new Employee('Jeffrey', 017, 'jeffreymiyoung@aol.com');

    expect(employee.getName()).toBe(expect.any(String));
});

test('Get Employee getId()', () => {
    const employee = new Employee('Jeffrey', 017, 'jeffreymiyoung@aol.com');

    expect(employee.getId()).toBe(expect.any(Number));
});

test('Get Employee getEmail()', () => {
    const employee = new Employee('Jeffrey', 017, 'jeffreymiyoung@aol.com');

    expect(employe.getEmail()).toBe(expect.any(String));
});

// Override Company Role toEqual Employee
test('Get Employee getRole()', () => {
    const employee = new Employee('Jeffrey', 017, 'jeffreymiyoung@aol.com');

    expect(employee.getRole()).toBe("Employee");
});