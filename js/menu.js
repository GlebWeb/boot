   $(window).scroll(function() {
       if (($(window).width())>=992){
       
if ($(this).scrollTop() > 1){  
    $('header').addClass("scrolled");
    $('header.nav.navbar').addClass("scrolled");
    $('.navbar-container .navbar-nav>li>a').addClass("scrolled");
    $("#logo").css("display","none");
    $("#logo-scrolled").css("display","block");
    $(".btn-container").addClass("scrolled")
    
}
  else {
    $('header').removeClass("scrolled");
    $('header.nav.navbar').removeClass("scrolled");
    $('.navbar-container .navbar-nav>li>a').removeClass("scrolled");  
    $("#logo").css("display","block");
    $("#logo-scrolled").css("display","none");
    $(".btn-container").removeClass("scrolled");  
 
  } }
       
    else {
        
       
        
    }   
});

