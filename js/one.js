

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



/* --==== Loading Spinner Start ====-- */
window.addEventListener("load", function () {
    const loader = document.querySelector("#loader-wrapper");
    loader.style.display = "none";
  });
  /* --===== Loading Spinner End =====-- */

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




// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// if (ScrollTrigger.isTouch !== 1) {
//   ScrollSmoother.create({

//     wrapper: '.wrapper',
//     content: '.content',
//     smooth: 1.5,
//     effects: true,
//   })

//   gsap.fromTo( {
//     scrollTtigger: {
//       start: 'center',
//       end: '820',
//       scrub: true

//     }

//   })
// };



/////////////////////////////// 

let currentIndex = 0;
const costButton = document.getElementById('nextButton');
const hiddenProjects = document.querySelectorAll('.project.hidden');

costButton.addEventListener('click', () => {
    for (let i = 0; i < 4; i++) {
        if (hiddenProjects[currentIndex]) {
            hiddenProjects[currentIndex].classList.remove('hidden');
            currentIndex++;
        }
    }
    if (currentIndex >= hiddenProjects.length) {
        costButton.style.display = 'none';
    }
});

// Show the first set of projects on page load
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 4; i++) {
        if (hiddenProjects[i]) {
            hiddenProjects[i].classList.remove('hidden');
            currentIndex++;
        }
    }
});



   
        // Repeat the above event listener for other download buttons, ensuring each has a unique ID and file path


        //  Download button event listener with delay 
        document.querySelectorAll('.download-link').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const originalText = this.textContent;
                this.textContent = 'Starting download in 10s...';
                this.style.pointerEvents = 'none';
                const linkElement = this;

                setTimeout(function() {
                    const downloadLink = document.createElement('a');
                    downloadLink.href = '/path/to/your/file.zip'; // Update with the actual path to your ZIP file
                    downloadLink.download = 'file.zip'; // Update with the desired file name
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                    linkElement.textContent = originalText;
                    linkElement.style.pointerEvents = 'auto';
                }, 10000);
            });
        });













       
     



