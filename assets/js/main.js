/**
 * Template Name: Siimple
 * Template URL: https://bootstrapmade.com/free-bootstrap-landing-page/
 * Updated: Mar 17 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Mobile nav toggle
   */
  const toogleNav = function () {
    let navButton = select(".nav-toggle");
    navButton.classList.toggle("nav-toggle-active");
    navButton.querySelector("i").classList.toggle("bx-x");
    navButton.querySelector("i").classList.toggle("bx-menu");

    select(".nav-menu").classList.toggle("nav-menu-active");
  };
  on("click", ".nav-toggle", function (e) {
    toogleNav();
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".nav-menu .drop-down > a",
    function (e) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle("drop-down-active");
      this.parentElement.classList.toggle("active");
    },
    true
  );

  /**
   * Scrool links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        select(".nav-menu .active").classList.remove("active");
        this.parentElement.classList.toggle("active");
        toogleNav();
      }
    },
    true
  );
})();

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
