$(':header').addClass('headline');
$('li:lt(2)').addClass('complete');
$('li:lt(3)').hide().fadeOut(1500);
$('li').on('click', function() {
    $(this).remove();
});