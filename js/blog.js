// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});




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







