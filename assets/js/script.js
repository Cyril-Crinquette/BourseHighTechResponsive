const hamburger = document.querySelector(".hamburger");
const sectionListResponsive = document.querySelector(".sectionListResponsive");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    sectionListResponsive.classList.toggle("active");
}


