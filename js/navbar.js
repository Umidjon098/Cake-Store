// Navbar JS Code
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar li");
const navSlide = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 50}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();

function setNavBgColor() {
    const scrollUp = document.querySelector(".navbar-bg");
    const upBtn = document.querySelector('.up-btn');
    window.addEventListener("scroll", function() {
        if (this.scrollY > 100) {
            scrollUp.classList.add("nav-bg");
            upBtn.classList.add('active-up');
        } else {
            scrollUp.classList.remove("nav-bg");
            upBtn.classList.remove('active-up');
        }
    });
}
setNavBgColor();

// Navbar JS Code End