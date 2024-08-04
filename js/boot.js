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



// script.js
const blocks = document.querySelectorAll('.block');
let currentPage = 0;
const blocksPerPage = 15;
let searchMode = false;
let searchResults = [];

function displayBlocks(page) {
    if (!searchMode) {
        blocks.forEach((block, index) => {
            if (index >= page * blocksPerPage && index < (page + 1) * blocksPerPage) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }
        });
    } else {
        searchResults.forEach((block, index) => {
            if (index >= page * blocksPerPage && index < (page + 1) * blocksPerPage) {
                block.style.display = 'block';
            } else {
                block.style.display = 'none';
            }
        });
    }
}

function searchBlocks(searchTerm) {
    searchMode = true;
    searchResults = [];
    blocks.forEach((block) => {
        const h2 = block.querySelector('h2').textContent.toLowerCase();
        if (h2.includes(searchTerm.toLowerCase())) {
            searchResults.push(block);
        }
    });

    // Hide all blocks
    blocks.forEach(block => block.style.display = 'none');

    // Display search results
    currentPage = 0;
    displayBlocks(currentPage);
}



document.getElementById('next-button').addEventListener('click', () => {
    if (!searchMode && (currentPage + 1) * blocksPerPage < blocks.length) {
        currentPage++;
        displayBlocks(currentPage);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
    } else if (searchMode && (currentPage + 1) * blocksPerPage < searchResults.length) {
        currentPage++;
        displayBlocks(currentPage);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
    }
});

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayBlocks(currentPage);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
    }
});

document.getElementById('search-bar').addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    if (searchTerm) {
        searchBlocks(searchTerm);
    } else {
        searchMode = false;
        displayBlocks(currentPage);
    }
});

// Initial display
displayBlocks(currentPage);






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









document.querySelectorAll('.downloadLink').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const block = event.target.closest('.block');
        const overlay = block.querySelector('.overlay5');
        const countdownElement = overlay.querySelector('.countdown');
        const closeButton = overlay.querySelector('.close');

        let countdown = 15;
        countdownElement.textContent = countdown;
        overlay.style.display = 'flex';

        const downloadUrl = event.target.href;
        const downloadName = event.target.download;

        const interval = setInterval(() => {
            countdown -= 1;
            countdownElement.textContent = countdown;

            if (countdown === 0) {
                clearInterval(interval);
                overlay.style.display = 'none';
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = downloadName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                window.open(downloadUrl, '_blank');
            }
        }, 1000);

        closeButton.addEventListener('click', function() {
            clearInterval(interval);
            overlay.style.display = 'none';
        });
    });
});