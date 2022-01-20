"use static"

var icon = document.querySelector(".iconMode");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.className = "fas fa-moon iconMode";
        icon.style.color = "darkblue";
    } else {
        icon.className = "fas fa-sun iconMode";
        icon.style.color = "gold";
    }
}