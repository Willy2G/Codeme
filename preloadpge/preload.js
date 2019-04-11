$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function() {
    $('.load').fadeOut();
    $('body').removeClass('preloader-site');
});