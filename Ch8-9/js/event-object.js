$(function() {

    $('li').on('click', function(e) {
        $('li span').remove();
        var date = new Date();
        date.getHours();
        var clicked = date.toDateString();
        $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
    });

});