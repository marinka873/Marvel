$(document).ready(function(){
    $(window).scroll(function(){
      let scrollPosition = $(window).scrollTop();
      let header = document.getElementsByClassName('header');

      if (scrollPosition <= 50) {
        $(".header").css("background" , "transparent");
      }
      else{
        $(".header").css("background" , "#F2F2F2");  	
      }
    })
    
  })