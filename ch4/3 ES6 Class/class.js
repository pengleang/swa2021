// class

/*class Employee {
    
}

let simone = new Employee('Simone Weber');*/

/*let simone = new Employee('Simone Weber');

class Employee {
    
}*/

/*let Employee = class Workforce {
    
};

console.log('Named: ' + Employee.name);     // Workforce

let Department = class {
    
};

console.log('Un-Named: ' + Department.name);    // Department*/

/*class Employee {
    
}

let simone = Employee('Simone Weber');*/

/*class Employee {
    
}

let simone = new Employee('Simone Weber');

console.log(typeof Employee);       // function
console.log(typeof Employee.prototype);     // object

console.log(simone instanceof Employee);    // true
console.log(simone instanceof Object);      // true*/

/*class Employee {
    
}

let simone = new Employee('Simone Weber');

console.log(simone.__proto__ == Employee);  // false
console.log(simone.__proto__ == Object);    // false

console.log(simone.__proto__ == Employee.prototype);    // true
console.log(simone.__proto__ === Employee.prototype);   // true*/

/*function Employee(ename) {
    this.ename = ename;
}

Employee.prototype.empName = function() {
    console.log('Employee Name: ' + this.ename);
}

var simone = new Employee('Simone Weber');

console.log(simone);
simone.empName();           // Simone Weber

console.log(typeof Employee);       // function*/

/*class Employee {
    constructor(ename) {
        this.ename = ename;
    }
    
    empName() {
        console.log('Employee Name: ' + this.ename);
    }
}

let simone = new Employee('Simone Weber');

console.log(simone);
simone.empName();           // Simone Weber*/

/*function mensuration(argClass) {
    return new argClass();
}

let getAreaRectangle = mensuration(class {
    calculateArea(width, height) {
        console.log('Width: ' + width);
        console.log('Height: ' + height);
        
        return width * height;
    }
});

console.log('Area: ' + getAreaRectangle.calculateArea(3, 7));*/

/*let startUp = new class {
    constructor(orgName) {
        this.orgName = orgName;
    }
    
    initialize() {
        console.log(`Welcome to: ${this.orgName}`);
    }
}('XYZ Inc.Ltd.');

startUp.initialize();*/

// ES6: get and set

/*class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get fullName() {
        return this.firstName.toUpperCase() + ' ' + this.lastName.toUpperCase();
    }
    
    set fullName(str) {
        let enames = str.split(' ');
        
        if (enames.length == 2) {
            this.firstName = enames[0];
            this.lastName = enames[1];
        } else {
            throw 'Invalid: Emp Name format';
        }
    }
}

let simone = new Employee('Simone', 'Weber');
console.log(simone.fullName);   // SIMONE WEBER

simone.fullName = 'Simone Zimmermann';
console.log(simone.fullName);   // SIMMONE ZIMMERMANN*/

/*let ename = 'fullName';

class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    get [ename]() {
        return this.firstName.toUpperCase() + ' ' + this.lastName.toUpperCase();
    }
    
    set [ename](str) {
        let enames = str.split(' ');
        
        if (enames.length == 2) {
            this.firstName = enames[0];
            this.lastName = enames[1];
        } else {
            throw 'Invalid: Emp Name format';
        }
    }
}

let simone = new Employee('Simone', 'Weber');
console.log(simone.fullName);   // SIMONE WEBER

simone.fullName = 'Simone Zimmermann';
console.log(simone.fullName);   // SIMONE ZIMMERMANN*/

// Static methods

/*function Employee(ename, dept) {
    this.ename = ename;
    this.dept = dept;
}

Employee.prototype.greet = function() {
    console.log(this.ename + ' works in: ' + this.dept);
}

Employee.initialize = function(ename, dept) {
    console.log('static method has been called.');
    return new Employee(ename, dept);
}

var simone = Employee.initialize('Simone Weber', 'R&D');

simone.greet(); // Simone Weber works in: R&D*/

/*class Employee {
    constructor(ename, dept) {
        this.ename = ename;
        this.dept = dept;
    }
    
    greet() {
        console.log(this.ename + ' works in: ' + this.dept);
    }
    
    static initialize(ename, dept) {
        console.log('static method has been called');
        return new Employee(ename, dept);
    }
}

let simone = Employee.initialize('Simone Weber', 'R&D');

simone.greet();     // Simone Weber works in: R&D*/

/*class Employee {
    constructor(ename, dept) {
        this.ename = ename;
        this.dept = dept;
    }
    
    greet() {
        console.log(this.ename + ' works in: ' + this.dept);
    }
    
    static initialize(ename, dept) {
        console.log('static method has been called');
        return new Employee(ename, dept);
    }
}

let simone = new Employee('Simone', 'Weber');

console.log(simone.initialize('Simone Weber', 'R&D'));*/

// Inheritance

/*function Employee(designation) {
    this.designation = designation;
}

Employee.prototype.empJobDesc = function() {
    console.log(this.designation + ' having ' + this.experience + ' Years of Experience');
}

function Developer(experience, netSalary) {
    Employee.call(this, 'Javascript Developer'.toUpperCase());
    
    this.experience = experience;
    this.netSalary = netSalary;
}

Developer.prototype = Object.create(Employee.prototype);

Developer.prototype.constructor = Employee;

Developer.prototype.takeHomeSalary = function() {
    console.log(this.designation + ' monthly earns: ' + this.netSalary);
}

var dev = new Developer(10, '95000 $');

dev.empJobDesc();

dev.takeHomeSalary();*/

/*class Employee {
    constructor(designation) {
        this.designation = designation.toUpperCase();
    }
    
    empJobDesc() {
        console.log(this.designation + ' having ' + this.experience + ' Years of Experience');
    }
}

class Developer extends Employee {
    constructor(experience, netSalary) {
        super('Javascript Developer');
        
        this.experience = experience;
        this.netSalary = netSalary;
    }
    
    takeHomeSalary() {
        console.log(this.designation + ' monthly earns: ' + this.netSalary);
    }
}

let dev = new Developer(10, '95000 $');

dev.empJobDesc();

dev.takeHomeSalary();*/

/*class Employee {
    constructor(designation) {
        this.designation = designation.toUpperCase();
    }
    
    empJobDesc() {
        console.log(this.designation + ' having ' + this.experience + ' Years of Experience');
    }
}

class Developer extends Employee {
    constructor(experience, netSalary) {
        super('Javascript Developer');
        
        this.experience = experience;
        this.netSalary = netSalary;
    }
    
    empJobDesc() {
        console.log(this.designation + ' is going to be promoted');
    }
}

let dev = new Developer(10, '95000 $');

dev.empJobDesc();*/

/*class Employee {
    constructor(designation) {
        this.designation = designation.toUpperCase();
    }
    
    empJobDesc() {
        console.log(this.designation + ' having ' + this.experience + ' Years of Experience');
    }
}

class Developer extends Employee {
    constructor(experience, netSalary) {
        super('Javascript Developer');
        
        this.experience = experience;
        this.netSalary = netSalary;
    }
    
    empJobDesc() {
        super.empJobDesc();
        
        console.log(this.designation + ' is going to be promoted');
    }
}

let dev = new Developer(10, '95000 $');

dev.empJobDesc();*/

/*class Employee {
    constructor(designation) {
        this.designation = designation.toUpperCase();
    }
    
    static greet() {
        console.log('Welcome to: Reliance Ltd.');
    }
}

class Developer extends Employee {
    constructor(experience, netSalary) {
        super('Javascript Developer');
        
        this.experience = experience;
        this.netSalary = netSalary;
    }
}

Developer.greet();*/

/*class EmpInfo extends String {
    concat() {
        return new EmpInfo(this + Array.prototype.join.call(arguments, ' => '));
    }
}

let ename = new EmpInfo('Simone Weber');
let task = new EmpInfo('works in');
let dept = new EmpInfo('R&D');

let operation = new EmpInfo().concat(ename.toUpperCase(), task, dept).toString();

console.log(operation);*/

// new.target

/*function Emp() {
    if (! new.target) {
        throw `Emp() must be called with 'new'`;
    } else {
        console.log(`Emp instantiated with 'new'`);
    }
}

try {
    Emp();
} catch(e) {
    console.log(e);
}*/

/*function Emp() {
    if (! new.target) {
        throw `Emp() must be called with 'new'`;
    } else {
        console.log(`Emp instantiated with 'new'`);
    }
}

try {
    new Emp();
} catch(e) {
    console.log(e);
}*/

/*class Emp {
    constructor(ename) {
        this.ename = ename;
        
        console.log(new.target.name);
    }
}

class Developer extends Emp {
    constructor(ename, role) {
        super(ename);
        
        this.role = role;
    }
}

new Emp('Anusha Roy');          // Emp

new Developer('Simone Weber', 'Architect'); // Developer*/













