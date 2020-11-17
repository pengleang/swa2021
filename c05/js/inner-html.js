// Store the first list item in a variable
var firstItem = document.getElementById('four');
// Get the content of the first list item
var itemContent = firstItem.innerHTML;
// Update the content of the first list item so it is a link
firstItem.innerHTML = '<a href=\"http://example.org\">' +
    itemContent + '</a>';
var itemone = document.getElementById('one');
var onecontent = itemone.innerHTML;
itemone.innerHTML = '<a href=\"http://abc.org\">' +
    itemContent + '</a>'