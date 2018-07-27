$(".panel-heading").on("click", function() {   
  
    $(this).parent().find('.panel-body').toggleClass('in'); 
    $(this).find('a em').toggleClass('fa-chevron-down fa-chevron-up');
  
});