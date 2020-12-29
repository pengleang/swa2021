'use strict';

/// Maps
// new Map([iterable]);
let empRoles = new Map();

console.log(typeof empRoles); // object
console.log(empRoles instanceof Map); // true
console.log(empRoles);


let arun = { ename: 'Arun Dase' },
    sunil = { ename: 'Sunil Roy' },
    mary = { ename: 'Mary Smith' };

let empRoles = new Map();

empRoles.set(arun, 'Developer');

empRoles.set(arun, 'Team-Lead');

empRoles.set(sunil, 'Architect')
    .set(mary, 'Manager');

console.log(empRoles);

let arun = { ename: 'Arun Dase' },
    sunil = { ename: 'Sunil Roy' },
    mary = { ename: 'Mary Smith' };

let empRoles = new Map([
    [arun, 'Developer'],
    [sunil, 'Architect'],
    [mary, 'Manager']
]);

console.log(empRoles);

/*let arun = {ename: 'Arun Dase'},
    sunil = {ename: 'Sunil Roy'},
    mary = {ename: 'Mary Smith'};

let empRoles = new Map([
    [arun, 'Developer'],
    [sunil, 'Architect'],
    [mary, 'Manager']
]);

console.log(`Arun's Role: ` + empRoles.get(arun));  // Developer

let guru = {ename: 'Guru Mittal'};
console.log(`Guru's Role: ` + empRoles.get(guru));  // undefined*/

/*let arun = {ename: 'Arun Dase'},
    sunil = {ename: 'Sunil Roy'},
    mary = {ename: 'Mary Smith'};

let empRoles = new Map([
    [arun, 'Developer'],
    [sunil, 'Architect'],
    [mary, 'Manager']
]);

let guru = {ename: 'Guru Mittal'};

console.log(empRoles.has(guru));        // false
console.log(empRoles.has(sunil));       // true

console.log(empRoles.size);             // 3*/

let arun = { ename: 'Arun Dase' },
    sunil = { ename: 'Sunil Roy' },
    mary = { ename: 'Mary Smith' };

let empRoles = new Map([
    [arun, 'Developer'],
    [sunil, 'Architect'],
    [mary, 'Manager']
]);

for (let emp of empRoles.keys()) {
    console.log(emp.ename);
}

let arun = { ename: 'Arun Dase' },
    sunil = { ename: 'Sunil Roy' },
    mary = { ename: 'Mary Smith' };

let empRoles = new Map([
    [arun, 'Developer'],
    [sunil, 'Architect'],
    [mary, 'Manager']
]);

for (let role of empRoles.values()) {
    console.log(role);
}

/*let arun = {ename: 'Arun Dase'},
    sunil = {ename: 'Sunil Roy'},
    mary = {ename: 'Mary Smith'};

let empRoles = new Map([
    [arun, 'Developer'],
    [sunil, 'Architect'],
    [mary, 'Manager']
]);

for (let element of empRoles.entries()) {
    console.log(`${element[0].ename}: ${element[1]}`);
}*/

/*let arun = {ename: 'Arun Dase'},
    sunil = {ename: 'Sunil Roy'},
    mary = {ename: 'Mary Smith'};

let empRoles = new Map([
    [arun, 'Developer'],
    [sunil, 'Architect'],
    [mary, 'Manager']
]);

console.log('** Destructuring: **');
for (let [emp, role] of empRoles.entries()) {
    console.log(`${emp.ename}: ${role}`);
}

console.log('** forEach(): **');
empRoles.forEach((role, emp) => 
    console.log(`${emp.ename}: ${role}`) 
);

console.log('** Spread operator **');
let roles = [...empRoles.values()];
console.log(roles);         // ['Developer', 'Architect', 'Manager']*/

/*let arun = {ename: 'Arun Dase'},
    sunil = {ename: 'Sunil Roy'},
    mary = {ename: 'Mary Smith'};

let empRoles = new Map([
    [arun, 'Developer'],
    [sunil, 'Architect'],
    [mary, 'Manager']
]);

empRoles.delete(arun);

console.log(empRoles);*/

/*let arun = {ename: 'Arun Dase'},
    sunil = {ename: 'Sunil Roy'},
    mary = {ename: 'Mary Smith'};

let empRoles = new Map([
    [arun, 'Developer'],
    [sunil, 'Architect'],
    [mary, 'Manager']
]);

empRoles.clear();

console.log(empRoles.size);         // 0*/

// WeakMap

/*let dept = new WeakMap();

dept.set(10, 'R&D');                // TypeError
dept.set(Symbol(), 'Sales');        // TypeError*/

/*let accounts = {dname: 'Finance'};
let research = {dname: 'R&D'};

let dept = new WeakMap();

dept.set(accounts, 10);
dept.set(research, 20);

console.log(dept.get(accounts));        // 10
console.log(dept.has(accounts));        // true

console.log(dept);*/

/*let accounts = {dname: 'Finance'};
let research = {dname: 'R&D'};

let dept = new WeakMap();

dept.set(accounts, 10);
dept.set(research, 20);

dept.delete(accounts);

console.log('After Deletion:');
console.log(dept);*/

// Sets
// new Set([iterable]);

/*let empNames = new Set();

console.log(typeof empNames);       // object
console.log(empNames instanceof Set);       // true
console.log(empNames);*/

console.log(new Set([10,
    10,
    'Smith',
    'Smith'
]));

/*console.log(new Set([{ename: 'Smith'},
                    {ename: 'Smith'},
                    {ename: 'Smith'}]));*/

/*let empNames = new Set(['Smith',
                       'Arun',
                       'Leena']);

console.log(empNames);

let deptNames = new Set().add('R&D')
                         .add('Sales')
                         .add('Finance');

console.log(deptNames);

let deptNo = new Set();

deptNo.add(10);
deptNo.add(20)
      .add(30);

console.log(deptNo);*/

let empNames = new Set(['Smith',
    'Arun',
    'Leena'
]);

console.log(empNames.has('Steve')); // false
console.log(empNames.has('Arun')); // true

console.log(empNames.size); // 3

let empNames = new Set(['Smith',
    'Arun',
    'Leena'
]);

console.log('Call via. forEach():');
empNames.forEach(ename => console.log(ename));

console.log('Call via. for...of:');
for (let ename of empNames) {
    console.log(ename);
}

/*let empNames = new Set(['Smith',
                       'Arun',
                       'Leena']);

for (let ename of empNames.entries()) {
    console.log(ename);
}*/

/*let empNames = new Set(['Smith',
                       'Arun',
                       'Leena']);

empNames.delete('Arun');

console.log(empNames);*/

/*let empNames = new Set(['Smith',
                       'Arun',
                       'Leena']);

empNames.clear();

console.log(empNames.size);         // 0*/

// WeakSet

/*let dept = new WeakSet();

dept.add(10);               // TypeError
dept.add(Symbol());         // TypeError*/

/*let smith = {ename: 'Smith Weber'};
let leena = {ename: 'Leena Gupta'};
let arun = {ename: 'Arun Dase'};

let emp = new WeakSet().add(smith)
                       .add(leena)
                       .add(arun);

console.log(emp.has(leena));            // true

console.log(emp);*/

/*let smith = {ename: 'Smith Weber'};
let leena = {ename: 'Leena Gupta'};
let arun = {ename: 'Arun Dase'};

let emp = new WeakSet().add(smith)
                       .add(leena)
                       .add(arun);

emp.delete(leena);

console.log('After Deletion:');
console.log(emp);*/