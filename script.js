// Display the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Close the mobile navigation menu after clicking a link
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarMenu = document.getElementById("navbarNav");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (
            navbarMenu &&
            navbarMenu.classList.contains("show") &&
            window.bootstrap
        ) {
            const collapse =
                bootstrap.Collapse.getOrCreateInstance(navbarMenu);

            collapse.hide();
        }
    });
});


// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });
        }
    });
});