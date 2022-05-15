// Employee Role - Class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Input returns
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    // Overrides Role to Employee
    getRole() {
        return 'Employee';
    }
};

// Export Data for outside use
module.exports = Employee;