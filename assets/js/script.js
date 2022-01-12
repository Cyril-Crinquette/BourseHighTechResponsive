const hamburger = document.querySelector(".hamburger");
const sectionListResponsive = document.querySelector(".sectionListResponsive");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    sectionListResponsive.classList.toggle("active");
}


//Creation de la sticky navbar


window.onscroll = function () {stickyBar()};

//on récupere la navbar grâce à sa classe

var navbar = document.getElementById("navbar1");

var sticky = navbar.offsetTop;

function stickyBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}