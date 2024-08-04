/* --===== Navbar Start =====-- */
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const nav6 = document.querySelector("#nav-6");
const nav7 = document.querySelector("#nav-7");
const nav8 = document.querySelector("#nav-8");
const navItems = [nav1, nav2, nav3, nav4, nav5 ,nav6 ,nav7 ,nav8];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
/* --===== Nav End  =====-- */




/* --===== Smooth Scrool Js Code Start =====-- */

// document.querySelectorAll('header a').forEach(function (anchor) {
// 	anchor.addEventListener('click', function (e) {
// 		e.preventDefault();


// 		var target = document.querySelector(anchor.getAttribute('href'));
// 		window.scrollTo({

// 			top: target.offsetTop,
// 			behavior: 'smooth'
// 		});

// 	});

// });

/* --===== Smooth Scrool Js Code End =====-- */


/* --==== Loading Spinner Start ====-- */
window.addEventListener("load", function () {
  const loader = document.querySelector("#loader-wrapper");
  loader.style.display = "none";
});
/* --===== Loading Spinner End =====-- */



/* --===== Hero Section Parallax Start =====-- */
// "use strict";
// let text = document.getElementById('text');
// let pop = document.getElementById('pop');
// let forest2 = document.getElementById('forest2');
// let forest = document.getElementById('forest');
// let rocks = document.getElementById('rocks');

// window.addEventListener('scroll', function () {
// 	let value = window.scrollY
//   text.style.top = 50 + value * -.1 + '%';
//   text.style.top = 50 + value * -.1 + '%';
// 	rocks.style.top = 1 + value * -.1 + "px";
// 	forest2.style.top = value * .2 + "px";



// });
/* --===== Hero Section Parallax End =====-- */



/* --===== Mouse Cursor Start =====-- */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

document.addEventListener("mouseenter", () => {
  cursor.style.display = "block";
});
/* --===== Mouse Cursor End =====-- */



    /* --===== Client Start =====-- */
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic");
    }
    for(userText of userTexts){
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);
  
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}
 /* --===== Client End =====-- */


/* --===== Js Scrool Reveal Start =====-- */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.content33 h1', { origin: 'top' });
ScrollReveal().reveal('.logo img', { origin: 'top' });
ScrollReveal().reveal('.hamburger-menu', { origin: 'top' });
ScrollReveal().reveal('#hero h2', { origin: 'top' });
ScrollReveal().reveal('#pop', { origin: 'top' });
ScrollReveal().reveal('.testimonial', { origin: 'top' });
ScrollReveal().reveal('.form', { origin: 'top' });

ScrollReveal().reveal('.content33 h2', { origin: 'top' });
ScrollReveal().reveal('.content33 p', { origin: 'top' });
ScrollReveal().reveal('.content33 a', { origin: 'top' });
ScrollReveal().reveal('.timeline-section h1', { origin: 'top' });
ScrollReveal().reveal('.timeline-content', { origin: 'top' });
ScrollReveal().reveal('.timeline-dot', { origin: 'top' });
ScrollReveal().reveal('.third-img', { origin: 'left' });
ScrollReveal().reveal('.content-third', { origin: 'right' });
ScrollReveal().reveal('.client-heading h1', { origin: 'top' });
ScrollReveal().reveal('.client-heading p', { origin: 'top' });
ScrollReveal().reveal('.testimonial-pic', { origin: 'top' });

/* --===== Js Scrool Reveal End =====-- */



 /* --===== Core Services Start =====-- */
gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5, })


const animation = gsap.to(".photo:not(:first-child)", {
  opacity: 1, scale: 1, duration: 1, stagger: 1
})

ScrollTrigger.create({
  trigger: ".gallery",
  start: "top 5%",
  end: "bottom bottom",
  pin: ".righttt",
  animation: animation,
  scrub: true,

  // markers:true
})
/* --===== Core Services End =====-- */


/* --===== Gsap Snooth Scroll Body =====-- */
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({

		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true,
	})

	gsap.fromTo( {
		scrollTtigger: {
			start: 'center',
			end: '820',
			scrub: true

		}

	});
}




                                   /* --=====Thanks=====-- */                












