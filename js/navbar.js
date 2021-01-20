// Navbar JS Code

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar li");


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
// Navbar JS Code End