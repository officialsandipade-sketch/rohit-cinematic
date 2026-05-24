/* ===============================
   PREMIUM CINEMATIC JAVASCRIPT
================================= */

// Smooth Scroll for Navigation
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");

        if (targetId !== "#") {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Navbar background change on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,0.85)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "rgba(0,0,0,0.6)";
        header.style.boxShadow = "none";
    }
});


// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".card, .team-card, .hero h1, .hero p, .btn");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "all 0.8s ease";
        } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(60px)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Card Hover Glow Effect
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(circle at ${x}px ${y}px,
            rgba(255,215,0,0.15),
            rgba(255,255,255,0.05))
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "rgba(255,255,255,0.05)";
    });
});


// WhatsApp Auto Link (Replace number with yours)
const whatsappLink = document.querySelector("nav ul li:last-child a");

whatsappLink.addEventListener("click", function (e) {
    e.preventDefault();
    const phoneNumber = "+919822285233"; // 🔥 Replace with your WhatsApp number
    const message = "Hello Rohit Cinematic, I would like to know more about your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
});


// Button Click Animation
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
        btn.style.transform = "scale(1)";
        document.querySelector(".cards").scrollIntoView({
            behavior: "smooth"
        });
    }, 150);
});
