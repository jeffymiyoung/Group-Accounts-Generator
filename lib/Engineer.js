// Import Employee Class-Constructor
const Employee = require('./Employee.js');

// Engineer Object | Constructor - Class
class Engineer extends Employee {
    constructor (name, id, email, github) {

        // Recalls Employee Data
        super (name, id, email);

        this.github = github;
    }

    // Input GitHub return
    getGitHub() {
        return this.github;
    }

    // Override Role to Engineer
    getRole() {
        return "Engineer";
    }
};

// Export Data for outside use
module.exports = Engineer;