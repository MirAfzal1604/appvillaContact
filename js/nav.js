"use static"

window.onscroll = function() {
    scrolldown();
    animationSection();
};

const mybutton = document.getElementById("myBtn");
const nav = document.querySelector("header");
const logo = document.querySelector('.logo')

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navUl .navLi a");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrolldown() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        nav.className = "navScroll";
        logo.src = './images/logo/logo-svg.png';
        mybutton.style.display = "block";
    } else {
        nav.className = "";
        logo.src = './images/logo/white-logo-svg.png';
        mybutton.style.display = "none";
    }
}

function animationSection() {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 180) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
}