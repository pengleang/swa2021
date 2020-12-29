// Symbol

/*let sym1 = Symbol();
let sym2 = Symbol('dept');
let sym3 = Symbol('dept');

console.log(Symbol() === Symbol());     // false
console.log(sym2 === sym3);             // false

console.log(sym2);                      // Symbol(dept)
console.log(sym2.toString());           // Symbol(dept)

// alert(sym2);                // TypeError
// alert(sym2.toString());     // Symbol(dept)

console.log(typeof Symbol());           // symbol
console.log(typeof Symbol('dept'));     // symbol*/

/*let id = new Symbol('id');*/

/*let deptID = Symbol.for('deptID');

let departentID = Symbol.for('deptID');

console.log(deptID === departentID);        // true*/

/*let departmentID = Symbol.for('deptID');

console.log(Symbol.keyFor(departmentID));   // deptID

let employeeID = Symbol('empID');

console.log(Symbol.keyFor(employeeID));     // undefined*/

/*class Deployment {
    constructor(mode) {
        console.log('mode: ' + mode.toString());
        
        switch (mode) {
            case Deployment.DEV:
                console.log('Set-up app for Development environment');
                break;
            case Deployment.TEST:
                console.log('Set-up app for Test environment');
                break;
            case Deployment.PROD:
                console.log('Set-up app for Production environment');
                break;
            default:
                throw new Error('Invalid Application Mode: ' + mode);
        }
    }
}

Deployment.DEV = Symbol('dev');
Deployment.TEST = Symbol('test');
Deployment.PROD = Symbol('prod');

const app = new Deployment(Deployment.DEV);*/

/*const emp = {
    
};

const email = Symbol('email_ID');

emp.ename = 'Smith';
emp.age = 30;
emp[email] = 'smith@xyz.com';

console.log(Object.keys(emp));  // ['ename', 'age']

console.log(JSON.stringify(emp));   // {'ename': 'Smith', 'age': 30}

console.log(Object.getOwnPropertyNames(emp));   // ['ename', 'age']

console.log(Object.getOwnPropertySymbols(emp)); // [Symbol(email_ID)]

console.log(Reflect.ownKeys(emp));  // ['ename', 'age', Symbol(email_ID)]*/

// Well-known Symbols

// Symbol.hasinstance

/*a instanceof b;

b[Symbol.hasInstance](a);*/

/*class Queue {
    
}

console.log([] instanceof Queue);       // false*/

/*class Queue {
    static [Symbol.hasInstance](obj) {
        return Array.isArray(obj);
    }
}

console.log([] instanceof Queue);           // true*/

// Symbol.iterator

/*let departments = [10, 20, 30];

for (let dept of departments) {
    console.log(dept);
}*/

/*let departments = [10, 20, 30];

let depts = departments[Symbol.iterator]();

let unit;
while(unit = depts.next()) {
    if (unit.done) {
        break;
    }
    
    let dept = unit.value;
    console.log(dept);
}*/

/*class DeptArr {
    constructor(deptNumber) {
        this.deptNumber = deptNumber;
    }
    
    [Symbol.iterator]() {
        let count = 0;
        let deptNo = this.deptNumber;
        
        return {
            next() {
                // 1. value
                // 2. done
                
                let deptNoValue = deptNo[count];
                count = count + 1;
                
                if (count <= deptNo.length) {
                    return {
                        done: false,
                        value: deptNoValue
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }  
        };
    }
}

let departments = new DeptArr([10, 20, 30]);

for (let value of departments) {
    console.log(value);
}*/

// Symbol.species

/*class Commission extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

let stipend = new Commission(2, 5, 10);

let square = stipend.map(x => x * x);

console.log(square instanceof Commission);  // false
console.log(square instanceof Array);       // true*/

// Symbol.isConcatSpreadable

/*let alpha = ['a', 'b'],
    numeric = [10, 20];

let alphaNumeric = alpha.concat(numeric).concat('Simone');

console.log(alphaNumeric);  // ['a', 'b', 10, 20, 'Simone]*/

/*let alpha = ['a', 'b'],
    numeric = [10, 20];

numeric[Symbol.isConcatSpreadable] = false;

let alphaNumeric = alpha.concat(numeric).concat('Simone');

console.log(alphaNumeric);  // ['a', 'b', [10, 20], 'Simone]*/

/*let arr = [10, 20];

let deptName = {
    0: 'R&D',
    1: 'Sales',
    length: 2,
    
    [Symbol.isConcatSpreadable]: false
};

let deptNo = {
    0: '30',
    1: '40',
    length: 2,
    
    [Symbol.isConcatSpreadable]: true
};

let merge = arr.concat(deptName).concat(deptNo);

console.log(merge);     // [10, 20, {...}, '30', '40']*/

// Symbol.split

/*class MySplitter {
    constructor(value) {
        this.value = value;
    }
    
    [Symbol.split](str) {
        let index = str.indexOf(this.value);
        
        if (index === -1) {
            return str;
        }
        
        return this.value + '/ ' + str.substring(index + this.value.length);
    }
}

let divide = 'ReliancePetroleum'.split(new MySplitter('Reliance'));

console.log(divide);        // Reliance/ Petroleum*/

// Symbol.toPrimitive

/*class BillPayment {
    constructor(amt, curr) {
        this.amt = amt;
        this.curr = curr;
    }
    
    [Symbol.toPrimitive](hint) {
        let outcome;
        
        switch (hint) {
            case 'string':
                console.log('hint: ' + hint);
                outcome = this.amt + ' ' + this.curr;
                break;
            case 'number':
                console.log('hint: ' + hint);
                outcome = this.amt;
                break;
            case 'default':
                console.log('hint: ' + hint);
                outcome = this.amt + ' ' + this.curr;
                break;
        }
        return outcome;
    }
}

let netPrice = new BillPayment(1000, 'Euro');

console.log(String(netPrice));  // 1000 Euro

console.log(+netPrice + 1);     // 1001

console.log('Net Price: ' + netPrice);      // Net Price: 1000 Euro*/


