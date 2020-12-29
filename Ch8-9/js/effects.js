$(function() {

    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index) {
        $(this).delay(700 * index).fadeIn(3000);
    });

    $li.on('mouseover', function() {
        $(this).fadeOut(1500);
    });

});