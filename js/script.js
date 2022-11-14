'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger"),
          menu = document.querySelector(".header_menu");

    hamburger.addEventListener("click", hamburgerClick);

    function hamburgerClick() {
        menu.classList.toggle("header_menu_active");
        hamburger.classList.toggle("hamburger_active");
    };
});