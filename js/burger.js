const navbar = document.querySelector(".navUl");
const burger = document.querySelector(".burger")

function openNav() {
    burger.classList.toggle("change");
    navbar.classList.toggle("navWidth");
}

function navClose() {
    navbar.classList.remove("navWidth");
    burger.classList.remove("change");
}