// Import Employee Class-Constructor
const Employee = require('./Employee.js');

// Intern Object | Constructor - Class
class Intern extends Employee {
    constructor (name, id, email, school) {

        // Recalls Employee Data
        super (name, id, email);

        this.school = school;
    }

    // Input School return
    getSchool() {
        return this.school;
    }

    // Override Role to Intern
    getRole() {
        return "Intern";
    }
};

// Export Data for outside use
module.exports = Intern;