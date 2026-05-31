// ===============================
// Premium Portfolio JavaScript
// Mohammed Moizuddin Portfolio
// ===============================

// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursor) {
        cursor.style.transform =
            `translate(${mouseX}px, ${mouseY}px)`;
    }
});

function animateRing() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    if (cursorRing) {
        cursorRing.style.transform =
            `translate(${ringX}px, ${ringY}px)`;
    }

    requestAnimationFrame(animateRing);
}

animateRing();


// ===============================
// Navbar Scroll Effect
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background =
            "rgba(7,11,18,0.90)";
        navbar.style.backdropFilter =
            "blur(15px)";
        navbar.style.borderBottom =
            "1px solid rgba(255,255,255,0.05)";
    } else {
        navbar.style.background =
            "transparent";
        navbar.style.borderBottom =
            "none";
    }

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .stat-card, .edu-card, .contact-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0px)";

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach((el) => {

    el.style.opacity = "0";
    el.style.transform =
        "translateY(40px)";
    el.style.transition =
        "all 0.8s ease";

    revealObserver.observe(el);

});


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            window.scrollTo({
                top:
                    target.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Hover Effects
// ===============================

const cards = document.querySelectorAll(
    ".project-card, .skill-card, .stat-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 0 25px rgba(0,245,160,0.15)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});


// ===============================
// Typing Effect Hero Title
// ===============================

const roleElement =
document.querySelector(".hero-content h3");

const roles = [
    "Software Developer",
    "Frontend Developer",
    "React Developer",
    "Python Developer"
];

let roleIndex = 0;

function changeRole() {

    if (!roleElement) return;

    roleElement.style.opacity = "0";

    setTimeout(() => {

        roleIndex =
            (roleIndex + 1) %
            roles.length;

        roleElement.textContent =
            roles[roleIndex];

        roleElement.style.opacity = "1";

    }, 300);

}

setInterval(changeRole, 3000);


// ===============================
// Project Card Animation
// ===============================

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

    card.style.transition =
        "all 0.4s ease";

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});


// ===============================
// Console Welcome Message
// ===============================

console.log(`
=================================
Mohammed Moizuddin Portfolio
Software Developer
React | Python | Django
=================================
`);