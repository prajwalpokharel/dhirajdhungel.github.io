/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
  ps= previous scroll position
  cs= current scroll position

var ps = window.pageYOffset;
window.onscroll = function() {
  var cs = window.pageYOffset;
  if (ps > cs) {
    document.getElementByClassName("top-container").style.top = "0";
  } else {
    document.getElementByClassName("top-container").style.top = "-50px";
  }
  ps = cs;
} */
//nav bar
const navSlide=() => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.page-nav');
  const navLinks = document.querySelectorAll('.page-nav a');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
 
  navLinks.forEach((link,index) => {
    if (link.style.animation){
      link.style.animation = '';
    } else {
        link.style.animation = navLinkFade 0.5s ease forwards $(index / 7 + 0}s;
    }
  });
      burger.classList.toggle('toggle'); 

});
}   
navSlide();
