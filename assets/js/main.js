/**
* Template Name: DevFolio - v4.10.0
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Intro type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();

function getdetailes(){
  // let name = document.getElementById("userName").value;
  // let email = document.getElementById("userEmail").value;
  // let number =document.getElementById("userNumber").value;
  // let subject =document.getElementById("userSubject").value;
  // console.log(name);
  // console.log(email);
  // console.log(number);
  // console.log(subject);


}
$(document).ready(function(){
  $("#nameError").hide()
  $("#emailError").hide()
  $("#numberError").hide()
})


function checkName() {
  let name =$("#userName").val();

let pattern =/^[a-zA-Z]/;
if(name==null || name==''){
  $("#nameError").show();
  $("#nameError").html("Enter the your name ");
  $("#userName").css("border-bottom","solid 2px #FF0000");
  return false;
}
else if(name.match(pattern)){ 
  
$("#nameError").hide();
$("#userName").css("border-bottom","solid 2px #00FF00")
return true
}else{
  $("#nameError").show();
  $("#nameError").html("Please Enter Your Valid Name");
  $("#userName").css("border-bottom","solid 2px #FF0000");
  return false;
}
}
function checkEmail(){
  let email = $("#userEmail").val();
      let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


      if(email == null || email == ''){
      $("#emailError").show();
      $("#emailError").html("Please Enter Your Email");
      $("#userEmail").css("border-bottom","solid 2px #FF0000");
      
      return false;

    }else if(email.match(emailPattern)){
      $("#emailError").hide();
      $("#userEmail").css("border-bottom","solid 2px #00FF00");
  
      return true;
  
    }else{
      $("#emailError").show();
      $("#emailError").html("Please Enter Your Valid Email");
      $("#userEmail").css("border-bottom","solid 2px #FF0000");

      return false;
  }

    }
function checkPhoneNumber() {
  let number =$("#userNumber").val();
  $("#userNumber").attr("maxlength",10);
  let pattern =/^[0-9]/;
  
  if(number==null || number==''){
 $("#numberError").html("Please Enter you phone number ");
 $("#userNumber").css("border-bottom","solid 2px red");
 return false;
  }else if(number.length<10 ){
$("#numberError").show();
$("#numberError").html("Please Enter Valid Number");
$("#userNumber").css("border-bottom","solid 2px red");
return false
  }
  else if(number.match(pattern)){
$("#numberError").hide();
$("#userNumber").css("border-bottom","solid 2px #00FF00")
  return true;
  }else{
    $("#numberError").show()
    $("#numberError").html("please Enter the valid number");
    $("#userNumber").css("border-bottom","solid 2px red");
    return false
}
  }
  
function userSub() {
  let x = $("#userSubject").val();
  if (x==null || x=='') {
    $("#subError").show()
    $("#subError").html("Please Enter the subject")
    $("#userSubject").css("border-bottom","solid 2px red");
    return false
  }else{
    $("#subError").hide();
    $("#userSubject").css("border-bottom","solid 2px #00FF00");
    return true
  }
}

$("#contactForm").submit(function(e){
  e.preventDefault();
  if(checkName()==true && checkEmail()==true && checkPhoneNumber()==true && userSub()==true){
$.ajax(
   {
    cache: false,
    dataType: "jsonp",
    data:$("#contactForm").serialize(),
    async: true,
    crossDomain: true,
    url: "https://script.google.com/macros/s/AKfycbyHPHeVQbE-C-AygRRDw2EpV7QiORDKHJkHAw-2ILeGbmWgkUiNtsYa0jN28vQc1SQX/exec",
    method: "POST",
    headers: {
    "Access-Control-Allow-Origin":"*",
    },
success:function (response){

  console.log(response);
  $("#successModal").modal('show');

  $("#userName").val("").css("border-bottom","solid 0px");

  $("#userEmail").val("").css("border-bottom","solid 0px");

  $("#userNumber").val("").css("border-bottom","solid 0px");

  $("#userSub").val("").css("border-bottom","solid 0px");
alert("Sucessfully submited  ");
}
})
  }
} )