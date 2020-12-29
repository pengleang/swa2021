/* import { message } from './utils.js';
import { getMsg } from './utils.js';
import { setMsg } from './utils.js';

console.log(message);

console.log(getMsg());
setMsg('Welcome Everyone !');
console.log(getMsg()); */

/* import { message, getMsg, setMsg } from './utils.js';

// message = 'Hello';
console.log(message);

console.log(getMsg());
setMsg('Welcome Everyone !');
console.log(getMsg()); */

/*import * as myUtility from './utils.js';

console.log(myUtility.message);

console.log(myUtility.getMsg());
myUtility.setMsg('Welcome Everyone !');
console.log(myUtility.getMsg());*/

/*import {msg, getMessage, setMessage} from './utils.js';

console.log(getMessage());
setMessage('Welcome Everyone !');
console.log(getMessage());

console.log(msg);*/

import { msg as greet, getMessage as getGreet, setMessage as setGreet } from './utils.js';
console.log(getGreet());
setGreet('Welcome Everyone !');
console.log(getGreet());
console.log(greet);

/*import {msg} from './utils.js';
export {msg};*/

// export {msg} from './utils.js';

// export * from './utils.js';

// export {msg as salute} from './utils.js';

/*import utility from './utils.js';

console.log(utility.getMsg());
utility.setMsg('Welcome, Everyone !');
console.log(utility.getMsg());*/

/*import utility, {message} from './utils.js';

console.log(message);

console.log(utility.getMsg());
utility.setMsg('Welcome, Everyone !');
console.log(utility.getMsg());*/

/*import {default as utl, message} from './utils.js';

console.log(message);

console.log(utl.getMsg());
utl.setMsg('Welcome, Everyone !');
console.log(utl.getMsg());*/

/*(function importUtils() {
    import {default as utl, message} from './utils.js';
}) ();

console.log(message);

console.log(utl.getMsg());
utl.setMsg('Welcome, Everyone !');
console.log(utl.getMsg());*/

/*import './utils.js';

''.print('Importing without Binding');*/