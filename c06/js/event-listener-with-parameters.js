var elUsername = document.getElementById('username'); // Username input
var elMsg = document.getElementById('feedback'); // Error msg element

function checkUsername(lll) { // Declare function
    if (elUsername.value.length < lll) { // If username too short
        // Set the error message
        elMsg.innerHTML = 'Username must be ' + lll + ' characters or more';
    } else { // Otherwise
        elMsg.innerHTML = ''; // Clear msg
    }
}

elUsername.addEventListener('keypress', function() { // When it loses focus
    checkUsername(3); // Pass argument here
}, false);