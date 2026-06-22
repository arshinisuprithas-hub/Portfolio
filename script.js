// Typing Animation

// TYPING ANIMATION

const words = [
    "Aspiring Software Developer 💜",
    "Cyber Security Student 🔐",
    "Problem Solver 🧠",
    "Web Development 🚀",
    "Future Software Engineer ⚡"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// AVATAR FOLLOW EFFECT

const avatar = document.querySelector(".avatar-ring");

document.addEventListener("mousemove", (e) => {

    let x =
        (window.innerWidth / 2 - e.clientX) / 40;

    let y =
        (window.innerHeight / 2 - e.clientY) / 40;

    avatar.style.transform =
        `translate(${x}px, ${y}px)`;
});


// ACTIVE NAVIGATION

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 200) {

            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");
        }
    });
});


// FADE IN ANIMATION

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }
    });

});

document
.querySelectorAll("section")
.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);
});


// CONSOLE MESSAGE 😎

console.log(
"Welcome to Arshini's Portfolio 🚀💜"
);