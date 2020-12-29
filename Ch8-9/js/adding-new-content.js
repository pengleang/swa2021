$(function() {
    $('ul').before('<p class="complete">Just updated</p>');
    $('li.hot').prepend('*** ');
    var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
    $('li:last').after($newListItem);
});