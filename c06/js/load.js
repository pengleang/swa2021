function setup() { // Declare function
    document.getElementById('password').focus(); // Get username input
}

window.addEventListener('load', setup, false); // When page loaded call setup()


/* LONGER VERSION WITH IE8 (and lower) compatibility

if (el.addEventListener) {
      el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onload', function(e){
      itemDone(e);
    });
}

*/