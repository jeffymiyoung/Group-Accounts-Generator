// testing for Intern role
const { exportAllDeclaration } = require('@babel/types');
const Intern = require('../lib/Intern');


test('Get Intern School Name', () => {

});

test('Check Intern getSchool()', () => {

});

test('Check Intern getRole()', () => {
    // overridden as Intern
    const role = "Intern";
    const i = new Intern("Int", 1, "test@gmail.com", "Rutgers");
    expect(e.getRole()).toBe(role);

});