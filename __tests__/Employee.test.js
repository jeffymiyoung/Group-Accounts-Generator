// testing code for Employee role
const Employee = require('../lib/Employee');

test('Gets Employee name', () => {
    const name = "David";
    const Employee = new Employee(name);
    expect(Employee.name).toBe(name);  
    
})

test('Gets Employee name using getName()', () => {
    const testName = "David";
    const Employee = new Employee(testName);
    expect(Employee.getName()).toBe(testName);  
})

test('Get Employee ID', () => {
    const Employee = new Employee()

})

test('Get Employee getId()', () => {

})

test('Get Employee Email', () => {

})

test('Get Employee getEmail()', () => {

})

test('Get Employee getRole()', () => {
    // overridden as Employee
    
})