// Import Employee Class-Constructor
const Employee = require('./Employee.js');

// Manager Object | Constructor - Class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        // Recalls Employee Data
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // Override Role to Manager
    getRole() {
        return 'Manager';
    }
};

// Export Data for outside use
module.exports = Manager;