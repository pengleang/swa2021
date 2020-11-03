var price = 5;
var quantity = 14;
var total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/