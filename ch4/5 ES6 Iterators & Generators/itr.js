'use strict';

/*let department = [10, 20, 30];

console.log(typeof department[Symbol.iterator]);

for(let dept of department) {
    console.log(dept);
}*/

/*let department = [10, 20, 30];

let itr = department[Symbol.iterator]();

console.log(itr.toString());    // [object Array Iterator]

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

console.log(itr.next());*/

/*let dept = [10, 20, 30, 40];

const [first, , third] = dept;

console.log('first: ' + first + '\n' +
           'third: ' + third);*/

/*let dept = [10, 20, 30, 40];

let itr = dept[Symbol.iterator]();

const first = itr.next().value;
itr.next().value;
const third = itr.next().value;
itr.next().value;

console.log('first: ' + first + '\n' +
           'third: ' + third);*/

// User-defined Iterables

/*class EmpCollection {
    constructor(component) {
        this.component = [].concat(component);
    }
}

let empNames = new EmpCollection([
    {firstName: 'Ajay', lastName: 'Soni'},
    {firstName: 'Guru', lastName: 'Roy'},
    {firstName: 'Arun', lastName: 'Dase'}
]);

console.log('Call via for...of:');

for (let ename of empNames) {
    console.log(ename);
}*/

/*class EmpCollection {
    constructor(component) {
        this.component = [].concat(component);
    }
    
    [Symbol.iterator]() {
        let count = 0;
        let component = this.component;
        
        return {
            next: function() {
                let componentValue = component[count];
                count = count + 1;
                
                if (count <= component.length) {
                    return {value: componentValue, done: false};
                }
                
                return {done: true};
            }  
        };
    }
}

let empNames = new EmpCollection([
    {firstName: 'Ajay', lastName: 'Soni'},
    {firstName: 'Guru', lastName: 'Roy'},
    {firstName: 'Arun', lastName: 'Dase'}
]);

console.log('Call via for...of:');

for (let ename of empNames) {
    console.log(ename);
}

console.log('Call via iterator:');

let itr = empNames[Symbol.iterator]();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

console.log(itr.next());        // {done: true}*/

/*class EmpCollection {
    constructor(component) {
        this.component = [].concat(component);
    }
    
    [Symbol.iterator]() {
        let count = 0;
        let component = this.component;
        
        return {
            next: function() {
                let componentValue = component[count];
                count = count + 1;
                
                if (count <= component.length) {
                    return {value: componentValue, done: false};
                }
                
                return {done: true};
            }  
        };
    }
}

let empNames = new EmpCollection([
    {firstName: 'Ajay', lastName: 'Soni'},
    {firstName: 'Guru', lastName: 'Roy'},
    {firstName: 'Arun', lastName: 'Dase'}
]);

console.log('Call via for...of:');

for (let ename of empNames) {
    console.log(ename);
}

console.log('Call via iterator:');

let itr = empNames[Symbol.iterator]();

console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

console.log(itr.next().value);*/

// Generators

/*function dept() {
    
}*/

/*function * dept() {
    yield 10;
    yield 20;
    yield 30;
}

let deptGen = dept();

console.log(deptGen.next().value);      // 10
console.log(deptGen.next().value);      // 20
console.log(deptGen.next().value);      // 30

console.log(deptGen.next());    // {value: undefined, done: true}*/

/*function * genFunc() {
    
}

let gen = new genFunc();*/

/*function * logGenerator() {
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}

let gen = logGenerator();

gen.next();

gen.next('Controller');
gen.next('Data Access Layer');
gen.next('Presentation');*/

// yield *

/*function * squareSeries(number) {
    yield number;
    
    yield * anotherGenerator(number);
}

function * anotherGenerator(number) {
    while(true) {
        yield number * number;
        number = number + 1;
    }
}

let gen = squareSeries(3);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);*/

// 1. Generator function declartions

/*function * genFunc() {
    yield 10;
    yield 20;
}

const gen = genFunc();

console.log(gen.next().value);
console.log(gen.next().value);*/

// 2. Generator function expressions

/*const genFunc = function * () {
    yield 10;
    yield 20;
}

const gen = genFunc();

console.log(gen.next().value);
console.log(gen.next().value);*/

// 3. Generator function definitions in object literals

/*const obj = {
    * genFunc() {
        yield 10;
        yield 20;
    }
};

const gen = obj.genFunc();

console.log(gen.next().value);
console.log(gen.next().value);*/

// 4. Generator function definitions in class definitions

/*class Department {
    * genFunc() {
        yield 10;
        yield 20;
    }
};

const dept = new Department();

const gen = dept.genFunc();

console.log(gen.next().value);
console.log(gen.next().value);*/

// return()

/*function * genFunc() {
    yield 10;
    yield 20;
    yield 30;
}

let gen = genFunc();

console.log(gen.next());    // {value: 10, done: false}

console.log(gen.return('R&D'));     // {value: 'R&D', done: true}

console.log(gen.next());    // {value: undefined, done: true}*/

/*function * genFunc() {
    yield 10;
    yield 20;
    yield 30;
}

let gen = genFunc();

console.log(gen.next());    // {value: 10, done: false}
console.log(gen.next());    // {value: 20, done: false}
console.log(gen.next());    // {value: 30, done: false}

console.log(gen.next());    // {value: undefined, done: true}

console.log(gen.return('Finance'));     // {value: 'Finance', done: true}

console.log(gen.return());     // {value: undefined, done: true}*/

// throw()

/*function * genFunc() {
    while(true) {
        try {
            yield 70;
        } catch(err) {
            console.log('Caught: ' + err);
        }
    }
}

let gen = genFunc();

console.log(gen.next());    // {value: 70, done: false}

gen.throw(new Error('Problem !!!'));*/















