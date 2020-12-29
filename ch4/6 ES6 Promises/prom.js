'use strict';

// Promise

/*let promiseToCompleteTheProject = new Promise(function(resolve, reject) {
    // Logic to complete the Project...
    
    let isComplete = true;
    
    if(isComplete) {
        resolve('Delivered.');
    } else {
        reject();
    }
});

promiseToCompleteTheProject.then(function(fromResOrRej) {
    console.log('Project is: ' + fromResOrRej);
}).catch(function(fromResOrRej) {
    console.log('Project is: ' + fromResOrRej);
});*/

/*let promiseToCompleteTheProject = new Promise(function(resolve, reject) {
    // Logic to complete the Project...
    
    let isComplete = false;
    
    if(isComplete) {
        resolve('Delivered.');
    } else {
        reject('Not Delivered.');
    }
});

promiseToCompleteTheProject.then(fromResOrRej => {
    console.log('Project is: ' + fromResOrRej);
}).catch(fromResOrRej => {
    console.log('Project is: ' + fromResOrRej);
});*/

/*let completeTheProject = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('1. Complete the Project. \n') ;
        }, 500);
    });
};

let getPromotion = function(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(message + '2. Get the Promotion. \n') ;
        }, 500);
    });
};

let becomeArchitect = function(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(message + '3. And become Architect. \n') ;
        }, 500);
    });
};

completeTheProject().then(function(fromResOrRej) {
    return getPromotion(fromResOrRej);
}).then(function(fromResOrRej) {
    return becomeArchitect(fromResOrRej);
}).then(function(fromResOrRej) {
    console.log('Finished: \n' + fromResOrRej);
}).catch(function(fromResOrRej) {
    console.log('Not Finished: \n' + fromResOrRej);
});*/

// Promise.all(iterable)

/*let completeTheProject = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('1. Complete the Project. \n') ;
        }, 500);
    });
};

let getPromotion = function(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('2. Get the Promotion. \n') ;
        }, 500);
    });
};

let becomeArchitect = function(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('3. And become Architect. \n') ;
        }, 500);
    });
};

Promise.all([completeTheProject(), getPromotion(), becomeArchitect()]).then(function(resolvedValue) {
    console.log(resolvedValue[0]);
    console.log(resolvedValue[1]);
    console.log(resolvedValue[2]);
    
    console.log('All Promises: Finished !!!');
});*/

// Promise.race(iterable)

/*let completeTheProject = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('1. Complete the Project. \n') ;
        }, 500);
    });
};

let getPromotion = function(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('2. Get the Promotion. \n') ;
        }, 500);
    });
};

let becomeArchitect = function(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('3. And become Architect. \n') ;
        }, 500);
    });
};

Promise.race([completeTheProject(), getPromotion(), becomeArchitect()]).then(function(resolvedValue) {
    console.log('One of them is Finished !!!');
});*/



