// testing code for Intern role
const Intern = require('../lib/Intern.js');

// Intern Object with Name, Id, Email, and School - getSchool()
test('Get Intern Object', () => {
    const intern = new Intern('Jeffrey', 17, 'jeffreymiyoung@aol.com', 'Felician University')

    expect(intern.school).toEqual(expect.any(String));
})

test('Check getSchool()', () => {
    const intern = new Intern('Jeffrey', 17, 'jeffreymiyoung@aol.com', 'Felician University')

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Override getRole() toEqual Intern
test('Get Employee getRole()', () => {
    const intern = new Intern('Jeffrey', 17, 'jeffreymiyoung@aol.com', 'Felician University')

    expect(intern.getRole()).toEqual("Intern");
});