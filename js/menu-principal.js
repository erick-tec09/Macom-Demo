$('.menu ul li ul').hide();


if($(window).width() > 1000){
        
        $('.menu ul li').unbind('click');
        $('.menu ul li ul li').unbind('click');
        
        $('.menu ul li ul').hide();
    
    $('.menu ul li').bind('mousemove', function(){
        
        $(this).children("ul").fadeIn(200);
        
    })
    
    $('.menu ul li').bind('mouseleave', function(){
        
        $(this).children("ul").fadeOut(200);
        
    })
    
}else{
    
    $('.menu ul li').unbind("mousemove");
    $('.menu ul li').unbind('mouseleave');
    
    var show_menu1 = 0;
    var show_menu2 = 0;
    
     $('.menu ul li').bind('click', function(){
        
         if(show_menu1 == 0){
             $(this).children("ul").slideDown();
             show_menu1 = 1;
         }else{
             $(this).children("ul").slideUp();
             show_menu1 = 0;
         }
        
    })
    
    $('.menu ul li ul li').bind('click', function(){
        
         if(show_menu2 == 0){
             $(this).children("ul").slideDown();
             show_menu2 = 1;
         }else{
             $(this).children("ul").slideUp();
             show_menu2 = 0;
         }
        
    })
    
    
    $('.menu ul li').on('click', function(e){
        e.stopImmediatePropagation();
    })
    
   
    
}

$(document).ready(function(){
    $('.toogle').click(function(){
        $('.menu').toggleClass('active-menu');
    })
}) 