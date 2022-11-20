'use strict'

// add event on element
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    }
    else {
        elem.addEventListener(type, callback);
    }
}

/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("show");
    overlay.classList.toggle("show");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("show");
    overlay.classList.remove("show");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

// slider hero
var swiper = new Swiper(".slider", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



var swiper = new Swiper(".products", {
    slidesPerView: 1,
    spaceBetween: 10,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        575: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});




/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
    if (window.scrollY > 150) {

        backTopBtn.classList.add("active");
    } else {
        backTopBtn.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
    if (window.scrollY > 150) {
        if (lastScrolledPos >= window.scrollY) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }

        lastScrolledPos = window.scrollY;
    }
    else{
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");
console.log(sections)
const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
            sections[i].classList.add("active");
        }
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);