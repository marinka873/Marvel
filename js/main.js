$(document).ready( function()  {

  let sections = $('section');
  let btnBurger = $('.btn__burger');
  let mobileMenu = $('.header__navbar__menu__mobile');
  let mobileMenuItems = $('.mobile__menu__item');
  let mobileHeaderWrap = $('.mobile__header__wrap');
  let mobileLogo = $('.mobile__logo');
  let mobileMenuuu = $('.mobile__menu');
  let mobuleMenuBurger = $('.mobile__menu__burger');

  let  sectionColor= {
      homeSection: "#FFFFFF",
      aboutSection: "#000000",
      servicesSection: "#000000",
      contactSection: "#FFFFFF"
    };
  
  let el = [btnBurger, mobileMenu, mobileMenuItems];

    $(btnBurger).click(function (event){
      event.preventDefault()
  
      for (let i=0; i < el.length; i++){
        el[i].toggleClass('open')
  
        $(mobileMenuItems).click(function () {
          
          elem[i].removeClass('open')
        });
      }
  
      $(window).resize( function (){
        let widthMobile = $(window).width();
        if ( widthMobile >= 480){
          el[i].removeClass('open')
        }
      })
    });
  
    $(window).scroll( () => {
      let homeSection = document.querySelector('.content__banner');
      let aboutSection = document.querySelector('.container__about');
      let servicesSection = document.querySelector('.container__services');
      let contactSection = document.querySelector('.container__contact');
      let navigationLines = document.querySelector('.content__banner__navigation');
  
      let scrollPosition = $(window).scrollTop();
      let header = document.getElementsByClassName('header');

      if (scrollPosition <= 50) {
        $(".header").css("background" , "transparent");
      }
      else{
        $(".header").css("background" , "#F2F2F2");
        console.log('header background is changed')
      }

      $(sections).each( function (e,i) {
        let id = $(this).attr({i});
        let sectionOff = $(this).offset().top - 270;

        if (sectionOff <= scrollPosition){
          $(navigationLines).addClass('__scroll_active')
                           
          console.log('navigation links is works', i)
        } 
        else {
          console.log('position section ID =', id)
        }
      });
      
    }).scroll();

    $( () => {

      const speed = 400;

      $('a[href*="#"]')
        .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
        .unbind('click.smoothScroll')
        .bind('click.smoothScroll', event => {
          const targetId = event.currentTarget.getAttribute('href').split('#')[1];
          const targetElement = document.getElementById(targetId);
  
          if (targetElement) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: $(targetElement).offset().top  -51}, speed);
          }
        });
      });
    });
