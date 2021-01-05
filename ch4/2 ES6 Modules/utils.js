'use strict';
// let empRoles = new Map();
// console.log(typeof empRoles);
// console.log(empRoles instanceof Map);
// console.log(empRoles); // Module

/* export let message = 'Hey Guys !';

export function getMsg() {
    return message;
}

export function setMsg(msg) {
    message = msg;
}

export class Greet {

} */

/* let message = 'Hey Guys !';

function getMsg() {
    return message;
}

function setMsg(msg) {
    message = msg;
}

export { message, getMsg, setMsg }; */

let message = 'Hey Guys !';

function getMsg() {
    return message;
}

function setMsg(msg) {
    message = msg;
}
export { message as msg, getMsg as getMessage, setMsg as setMessage };

/*import {salute} from './mod.js';

let message = 'Hey Guys !';

function getMsg() {
    return message;
}

function setMsg(msg) {
    message = msg;
}

export {message as msg, getMsg as getMessage, setMsg as setMessage};

console.log('Re-Exported: ' + salute);*/

/*let message = 'Hey Guys !';

var utility = {
    getMsg: function() {
        return message;
    },
    setMsg: function(msg) {
        message = msg;
    }
};

export default utility;*/

/*export let message = 'Hey Guys !';

var utility = {
    getMsg: function() {
        return message;
    },
    setMsg: function(msg) {
        message = msg;
    }
};

export default utility;*/

/*export let message = 'Hey Guys !';

var utility = {
    getMsg: function() {
        return message;
    },
    setMsg: function(msg) {
        message = msg;
    }
};

if (message != null) {
    export default utility;
}*/

/*String.prototype.print = function(msg) {
    console.log(msg);
}*/