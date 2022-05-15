// testing code for Engineer role
const Engineer = require('../lib/Engineer.js');

// Engineer Object with Name, Id, Email, and GitHub Username - with getGithub()
test('Get Engineer Object', () => {
    const engineer = new Engineer('Jeffrey', 17, 'jeffreymiyoung@aol.com', 'jeffymiyoung'); 

    expect(engineer.github).toEqual(expect.any(String));
});

test('checks getGitHub()', () => {
    const engineer = new Engineer('Jeffrey', 17, 'jeffreymiyoung@aol.com', 'jeffymiyoung');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Override getRole() toEqual Engineer
test('Get Employee getRole()', () => {
    const engineer = new Engineer('Jeffrey', 17, 'jeffreymiyoung@aol.com', 'jeffymiyoung');

    expect(engineer.getRole()).toEqual('Engineer');
});