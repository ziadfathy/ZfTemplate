$('.carousel').carousel({
  interval: 4000
});



$(window).on('load', function () {
    
    $('.loading-overlay .spinner').fadeOut(1000, function () {
                $('body').css('overflow', 'auto');
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        })
    }); 
 });


$(document).ready(function () {
    'use strict';
    $('html').niceScroll();
});


