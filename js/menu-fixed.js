$(document).ready(function(){
    var altura = $('.header-t').offset().top;
    
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ){
            $('.header-t').addClass('menu-fixed');
        } else {
            $('.header-t').removeClass('menu-fixed');
        }
    });
 
});