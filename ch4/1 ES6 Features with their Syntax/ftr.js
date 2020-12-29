'use strict'; // var vs. let
var dept = 10;
console.log(dept); // 10

let dept = 10;
console.log(dept); // 10

let dept = 10;
if (dept == 10) {
    let dept = 20;
    console.log(dept); // 20
}
console.log(dept); // 10

var dept = 10;
console.log(window.dept); // 10

let organisationId = 400;
console.log(window.organisationId); // undefined 


for (var count = 0; count < 5; count++) { //use let as global
    console.log('Count: ' + count + 10);
    setTimeout(function() {
        console.log('Count: ' + count);
    }, 1500);
}

for (var count = 0; count < 5; count++) {
    (function(a) {
        setTimeout(function() {
            console.log('Count: ' + a);
        }, 2000);
    })(count + 6);
}

for (let count = 0; count < 5; count++) { //use let as block
    setTimeout(function() {
        console.log('Count: ' + count);
    }, 1000);
}

for (let count = 0; count < 5; count++) {
    setTimeout(() => console.log('Count: ' + count), 1000);
}

// Hoisting

console.log(ename); // undefined
var ename;

console.log(ename); // ReferenceError
let ename;

/* (function assignedTask() {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError

    var bar = 10;
    let foo = 20;
}()); */

// TDZ

{
    // TDZ starts
    let task = function() {
        console.log(foo);
    };

    let foo = 10;
    // TDZ ends

    task();
}

// const

// const ORGANIZATION_CODE = 300;

/*let num1 = 50;
num1 = 100;
num1 = num1 / 10;
console.log(num1);      // 100 / 10 = 10*/

const pi = 3.14;
pi = 3.3;
console.log(pi); //error of const 

// const DEPT;

const departments = [50, 60, 70];
console.log(departments);

departments.push(80);
console.log(departments);

/*const emp = {sal: 3000};

emp.sal = 7000;
console.log(emp.sal);       // 7000

emp = {sal: 9000};          // TypeError*/

/*const emp = Object.freeze({sal: 3000});

emp.sal = 7000;*/

const organization = Object.freeze({
    name: 'XYZ Inc. Ltd.',
    location: {
        city: 'Santa Rosa',
        state: 'California',
        zipcode: 95401
    }
});

organization.location.country = 'USA'; //.country
console.log(organization.location.country); // USA

/* let departments = [20, 30, 40, 50];

for (let dept of departments) {
    console.log(dept);
}

console.log('***********');

for (const dept of departments) {
    console.log(dept);
} */
/* 
let departments = [20, 30, 40, 50];

for (const count = 0; count < departments.length; count++) {
    console.log(departments[count]);
} */

// Arrow function

var sum = function(x, y) {
    console.log('Summation: ');
    return x + y;
}
console.log(sum(10, 20)); // 30

let sum = (x, y) => {
    console.log('Summation: ');
    return x + y;
}
console.log(sum(10, 20)); // 30
console.log(typeof sum); // function
console.log(sum instanceof Function); // true

let sum = (x, y) => x + y;
console.log(sum(10, 20)); // 30

let sum = (x) => x + 40;
console.log(sum(10, 20)); // 10 + 40 = 50

let sum = x => x + 40;
console.log(sum(10)); // 10 + 40 = 50

let sum = () => 10 + 40;
console.log(sum()); // 10 + 40 = 50

let sum = (x, y) => x + y;
console.log(sum(10, 20)); // 10 + 20 = 30

let sum = (x, y) =>
    x + y;
console.log(sum(10, 20)); // 10 + 20 = 30

let sum = (
        x,
        y) =>
    x + y;

console.log(sum(10, 20)); // 30

let setEname = function(ename) {
    return { value: ename };
};

let employeeName = setEname('Smith');
console.log(employeeName.value); // Smith

let setEname = ename => ({ value: ename });

let employeeName = setEname('Smith');
console.log(employeeName.value); // Smith

/*function Emp() {
    this.experience = 0;
    
    this.promotion = function(experience) {
        this.experience = experience;
        setTimeout(function() {
            console.log('Exp: ' + this.experience);
        }, 1000);
    };
}

var emp = new Emp();
emp.promotion(12);*/

/*function Emp() {
    this.experience = 0;
    
    this.promotion = function(experience) {
        this.experience = experience;
        
        var selfExp = this;
        setTimeout(function() {
            console.log('Exp: ' + selfExp.experience);
        }, 1000);
    };
}

var emp = new Emp();
emp.promotion(12);          // 12*/

// Using ES6: Arrow function
function Emp() {
    this.experience = 0;

    this.promotion = function(experience) {
        this.experience = experience;

        setTimeout(
            () => console.log('Exp: ' + this.experience), 1000);
    };
}

var emp = new Emp();
emp.promotion(12); // 12

/*var test = () => {'use strict'; return this};

console.log(test() === window);*/

/*function foo() {
    console.log('argements[0]: ' + arguments[0]);
    console.log('argements[1]: ' + arguments[1]);
    
    // let func = temp => temp * arguments[0];
    // return func;
    
    return temp => temp * arguments[0];
}

let bar = foo(10, 100);
let multiply = bar(3);

console.log(multiply);*/

let Emp = () => {};

let emp = new Emp();

let Emp = () => {};

console.log(Emp.prototype);

// ES6: Default parameters

/*function multiply(num1, num2) {
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    
    return num1 * num2;
}

console.log('Case 1:');
console.log(multiply(10, 5));       // 50

console.log('Case 2:');
console.log(multiply(10));          // NaN*/

/*function multiply(num1, num2) {
    num1 = (typeof num1 !== 'undefined') ? num1: 5;
    num2 = (typeof num2 !== 'undefined') ? num2: 2;
    
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    
    return num1 * num2;
}

console.log('Case 1:');
console.log(multiply(10, 5));       // 50

console.log('Case 2:');
console.log(multiply(10));          // 10 * 2 = 20

console.log('Case 3:');
console.log(multiply());            // 5 * 2 = 10*/

/*function multiply(num1 = 5, num2 = 2) {
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    
    return num1 * num2;
}

console.log('Case 1:');
console.log(multiply(10, 5));       // 10 * 5 = 50

console.log('Case 2:');
console.log(multiply(10));          // 10 * 2 = 20

console.log('Case 3:');
console.log(multiply());            // 5 * 2 = 10

console.log('Case 4:');
console.log(multiply(''));          // 0

console.log('Case 5:');
console.log(multiply(undefined));   // 5 * 2 = 10

console.log('Case 6:');
console.log(multiply(null));        // 0*/

/*function multiply(num1 = 5, num2) {
    console.log('num1: ' + num1);*
    console.log('num2: ' + num2);
    
    return num1 * num2;
}

console.log(multiply(10));          // NaN*/

/*function multiply(num1 = 5, num2 = num1 / 2) {
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    
    return num1 * num2;
}

console.log(multiply(10));          // 10 * 5 = 50*/

/*function multiply(num1 = num2, num2 = num1 / 2) {
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    
    return num1 * num2;
}

console.log(multiply(undefined));*/

/*let defaultValue = 2;

function multiply(num1 = 5, num2 = defaultValue) {
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    
    return num1 * num2;
}

console.log(multiply(10));          // 10 * 2 = 20*/

/*function multiply(num1 = 5, num2 = defaultValue()) {
    function defaultValue() {
        return 2;
    }
    
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    
    return num1 * num2;
}

console.log(multiply(10));*/

/*function defaultValue() {
    return 2;
}

function multiply(num1 = 5, num2 = defaultValue()) {
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    
    return num1 * num2;
}

console.log(multiply(10));          // 10 * 2 = 20*/

// Rest parameter

/*function sum(args) {
    console.log('Parameter\'s length: ' + args.length);
    console.log('Parameters: ' + args);
    
    let total = 0;
    
    for(let count = 0; count < args.length; count++) {
        total = total + args[count];
    }
    
    return total;
}

let arrayNum = [10, 20, 30];
console.log('Addition = ' + sum(arrayNum));*/

/*function sum(...args) {
    console.log('Parameter\'s length: ' + args.length);
    console.log('Parameters: ' + args);
    
    let total = 0;
    
    for(let count = 0; count < args.length; count++) {
        total = total + args[count];
    }
    
    return total;
}

console.log('Case 1:');
console.log('Addition = ' + sum(10, 20, 30));

console.log('Case 2:');
console.log('Addition = ' + sum(10, 20, 30, 40));*/

const concatOperation = (...args) => {
    console.log('Param: ' + args);

    return args.reduce((previous, current) => {
        return previous + ' ' + current;
    });
}

console.log(concatOperation('The', 'Rest', 'Operator')); // The Rest Operator

// Spread operator

/*function sum(x, y, z) {
    console.log('x: ' + x);
    console.log('y: ' + y);
    console.log('z: ' + z);
    
    return x + y + z;
}

console.log('Addition: ' + sum(10, 20, 30));*/

const numbers = [10, 20, 30];

function sum(x, y, z) {
    console.log('x: ' + x);
    console.log('y: ' + y);
    console.log('z: ' + z);

    return x + y + z;
}

console.log('Addition: ' + sum(...numbers)); // 60
console.log('Addition: ' + sum(...[10, 20, 30]));

let chars = ['M', ...
    'NOP', 'Q'
];

console.log(chars); // [M, N, O, P , Q]
let origArr = [0, 1, 2];
let copiedArr = [...origArr];

console.log(origArr); // [0, 1, 2]
console.log(copiedArr); // [0, 1, 2]
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

console.log('** Array.concat: **');
let mergeArr1 = arr1.concat(arr2);
console.log(mergeArr1); // [0, 1, 2, 3, 4, 5]

console.log('** Spread Operator: **');
let mergeArr2 = [...arr1, ...arr2];
console.log(mergeArr2); // [0, 1, 2, 3, 4, 5]

let emp1 = { ename: 'Smith', dept: 'R&D' };
let emp2 = { ename: 'Jones', sal: 3000 };

console.log('Copy an object:');
let clonedObj = {...emp1 };

console.log(emp1); // {ename: 'Smith', dept: 'R&D'}
console.log(clonedObj); // {ename: 'Smith', dept: 'R&D'}

console.log('Concatenate an object:');
let mergedObj = {...emp1, ...emp2 };

console.log(mergedObj); // {ename: 'Jones', dept: 'R&D', sal: 3000}

// for...of

/*for (variable of iterable) {
    // statement
}*/

/*let departments = [30, 40, 50, 60];

for (let dept of departments) {
    console.log(dept);
}*/

/*let departments = [30, 40, 50, 60];

for (const dept of departments) {
    console.log(dept);
}*/

/*let str = 'Javascript: ES6';

for (let char of str) {
    console.log(char);
}*/

/*let departements = new Map([
    [30, 'SALES'],
    [40, 'R&D'],
    [50, 'Finance']
]);

console.log('Entry:');
for (let entry of departements) {
    console.log(entry);
}

console.log('Key & Value:');
for (let [key, value] of departements) {
    console.log(`Key: ${key} & Value: ${value}`);
}*/

/*let departments = new Set([30, 30, 30, 40, 40, 50]);

for (let dept of departments) {
    console.log(dept);
}*/

/*(function() {
    for (let arg of arguments) {
        console.log(arg);
    }
}) (30, 40, 50);*/

/*let departments = [30, 40, 50];
departments.dname = 'R&D';

console.log('Loop: for...in');
for (let dept in departments) {
    console.log(dept);      // 0, 1, 2, dname
}

console.log('Loop: for...of');
for (let dept of departments) {
    console.log(dept);      // 30, 40, 50
}*/

/*var ename = 'Smith';
var dname = 'R&D';

var emp = {
    ename: ename,
    dname: dname
};

console.log(emp);
console.log(emp.ename);             // Smith
console.log(emp.dname);             // R&D*/

/*let ename = 'Smith';
let dname = 'R&D';

let emp = {
    ename,
    dname
};

console.log(emp);
console.log(emp.ename);             // Smith
console.log(emp.dname);             // R&D*/

/*var ename = 'Smith';
var dname = 'R&D';
var dno = 'department no';

var emp = {
    ename,
    dname,
    'sal + comm': 5000,
    [dno]: 40
};

console.log(emp);
console.log(emp.ename);             // Smith
console.log(emp.dname);             // R&D

console.log(emp['sal + comm']);     // 5000
console.log(emp[dno]);              // 40
console.log(emp['department no']);  // 40*/

/*let payOut = 'sal + comm';
let dno = 'department no';
let suffix = 'name';

let emp = {
    ['emp ' + suffix]: 'Markus',
    ['dept ' + suffix]: 'Sales',
    [payOut]: 5000,
    [dno]: 40
};

console.log(emp);

console.log(emp['emp name']);               // Markus
console.log(emp['dept name']);              // Sales

console.log(emp[payOut]);                   // 5000
console.log(emp[dno]);                      // 40*/

/*var ename = 'Smith';
var dname = 'R&D';

var emp = {
    ename,
    dname: 'Logistics',
    
    getEmpInfo: function() {
        console.log(this.ename + ' works in ' + this.dname);
    }
};

console.log(emp.getEmpInfo());          // Smith works in Logistics*/

/*let ename = 'Smith';
let dname = 'R&D';

let emp = {
    ename,
    dname: 'Logistics',
    
    getEmpInfo() {
        console.log(this.ename + ' works in ' + this.dname);
    }
};

console.log(emp.getEmpInfo());          // Smith works in Logistics*/

/*let ename = 'Smith';
let dname = 'R&D';

let emp = {
    ename,
    dname: 'Logistics',
    
    'get Employee Details'() {
        console.log(this.ename + ' works in ' + this.dname);
    }
};

console.log(emp['get Employee Details']());          // Smith works in Logistics*/

// Octal and Binary literals

/*console.log('Octal in ES5:');

var octalES5 = 010;
console.log(octalES5);              // 8*/

/*console.log('Octal in ES6:');

let octalES6 = 0o10;
console.log(octalES6);              // 8*/

/*console.log('Binary in ES5:');

var binaryES5 = parseInt('11', 2);
console.log(binaryES5);             // 3*/

/*console.log('Binary in ES6:');

let binaryES6 = 0b11;
console.log(binaryES6);             // 3*/

/*let empStr = `Employee's Details`;

console.log(empStr);            // Employee's Details

let result = (`'` === "'") ? console.log(true) : console.log(false);            // true*/

/*let empStrWithBackTick = `Employee's Details uses (\`) Backticks`;

console.log(empStrWithBackTick);        // Employee's Details uses (`) Backticks

let result = (`\`` === "`") ? console.log(true) : console.log(false);           // true*/

/*console.log('** Normal Strings **');

let msg1 = 'Illustration \n\
of \n\
Multi-line \n\
String';
console.log(msg1);

console.log('** Strings with join() **');

let msg2 = ['Illustration',
           'of',
           'Multi-line',
           'String'].join('\n');
console.log(msg2);

console.log(`** Template literals **`);

let msg3 = `Illustration
of
Multi-line
String`;
console.log(msg3);*/

// ${expression}

let firstName = 'Simone',
    lastName = "Weber";

let greet = `Welcome, ${firstName} ${lastName} !!!`;

console.log(greet); // Welcome, Simone Weber !!!

/*let price = 10,
    gst = 0.5;

let netPrice = `Net Price: ${(price * (1 + gst)).toFixed(2)} USD`;

console.log(netPrice);          // Net Price: 15.00 USD*/

// Array destructuring

/*let departments = [10, 20, 30];

let d1 = departments[0];
let d2 = departments[1];

console.log(d1);            // 10
console.log(d2);            // 20*/

/*let departments = [10, 20, 30];

let [d1, d2] = departments;

console.log(d1);            // 10
console.log(d2);            // 20*/

/*let departments = [10, 20, 30];

let [d1, d2, d3, d4] = departments;

console.log(d1);            // 10
console.log(d2);            // 20
console.log(d3);            // 30
console.log(d4);*/

/*let departments = [10, 20, 30];

let [d1, ...rest] = departments;

console.log(d1);            // 10
console.log(rest);          // [20, 30]*/

/*let d1, d2;

[d1, d2] = [10, 20];

console.log(d1);            // 10
console.log(d2);            // 20*/

/*let d1, d2;

[d1 = 1, d2 = 'R&D'] = [10];

console.log(d1);            // 10
console.log(d2);            // R&D*/

/*let d1 = 10, d2 = 20;

console.log('Before Swapping:');
console.log('d1: ' + d1);   // 10
console.log('d2: ' + d2);   // 20

[d1, d2] = [d2, d1];

console.log('After Swapping:');
console.log('d1: ' + d1);   // 20
console.log('d2: ' + d2);   // 10*/

/*function returnDepartments() {
    return [10, 20, 30];
}

let [d1, d2, d3] = returnDepartments();

console.log('d1: ' + d1);           // 10
console.log('d2: ' + d2);           // 20
console.log('d3: ' + d3);           // 30*/

/*function returnDepartments() {
    return [10, 20, 30];
}

let [d1, , d3] = returnDepartments();

console.log('d1: ' + d1);           // 10
console.log('d3: ' + d3);           // 30*/

// Object destructuring

/*let emp = {
    age: 25,
    unMarried: true
};

let {age, unMarried} = emp;

console.log(age);               // 25
console.log(unMarried);         // true*/

/*let emp = {
    age: 25,
    unMarried: true
};

let {age: lifeSpan, unMarried: single} = emp;

console.log(lifeSpan);          // 25
console.log(single);            // true*/

/*let d1, d2;

({d1, d2} = {d1: 10, d2: 20});

console.log(d1);        // 10
console.log(d2);        // 20*/

/*let emp = {
    age: 32
};

let {age = 25, unMarried = true} = emp;

console.log(age);           // 32
console.log(unMarried);     // true*/

/*let emp = {
    ename: 'Smith'
};

let key = 'ename';
let {[key]: empName} = emp;

console.log(empName);       // Smith*/

/*let departments = {
    d1: 10,
    d2: 20,
    d3: 30
};

let {d1, ...rest} = departments;

console.log(d1);            // 10
console.log(rest);          // {d2: 20, d3: 30}*/

/*let emp = {
    empId: 1001,
    ename: {
        firstName: 'Simone',
        lastName: 'Weber'
    }
};

let {ename: {firstName, lastName}} = emp;

console.log(firstName);         // Simone
console.log(lastName);          // Weber*/