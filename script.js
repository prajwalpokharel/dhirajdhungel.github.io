
// const navSlide=() => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.page-nav');
//   const navLinks = document.querySelectorAll('.page-nav a');

//   burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
 
//   navLinks.forEach((link,index) => {
//     if (link.style.animation){
//       link.style.animation = '';
//     } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards $(index / 7 + 0}`;
//     }
//   });
//       burger.classList.toggle('toggle'); 

// });
// }   
// navSlide();

  const navSlide = function(){
        var burger = document.querySelector(".burger"),
            nav = document.querySelector('.page-nav'),
            navLinks = document.querySelectorAll('.page-nav');

            burger.addEventListener("click", function(){
            nav.classList.toggle('nav-active');

            navLinks.forEach((link,index) => {
                if (link.style.animation){
                link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.3s ease forwards ${index / 3 + 0}s`;
                }
            });
           
            burger.classList.toggle('toggle'); 
        });
    }
    navSlide();