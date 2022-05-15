const { generateMapFileComment } = require("convert-source-map");

// Employee Role - Class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

// export information for outside use
module.exports = Employee;