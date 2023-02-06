

const header = document.querySelector('header');
const img = document.querySelector('#lap');
const img1 = document.querySelector('#lap1');
const img2 = document.querySelector('#lap2');



const range = 20; // المساحة المحددة

header.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const centerX = header.offsetWidth / 2;
  const centerY = header.offsetHeight / 2;
  const deltaX = x - centerX;
  const deltaY = y - centerY;
  const ratioX = deltaX / centerX;
  const ratioY = deltaY / centerY;
  const moveX = ratioX * range;
  const moveY = ratioY * range;
  img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  img1.style.transform = `translate(${moveX}px, ${moveY}px)`;
  img2.style.transform = `translate(${moveX}px, ${moveY}px)`;

});



var scd = document.querySelector(".scd");

window.addEventListener('scroll', function(){
  var value = window.scrollY;
  scd.style.right= 0-(700-(value*1.5))  ;
})
 


// const intro = document.querySelector('#intro');
// console.log(intro)

// function animateIntro() {
//   intro.style.left = '18.7%;';
// }

// setTimeout(animateIntro, 1000);
