
const typeText = document.getElementById("type-text");
const roles = ["Frontend Developer", "Web Designer", "Full-Stack Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    const displayedText = currentRole.substring(0, charIndex);
    typeText.textContent = displayedText;

    if (!isDeleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(type, 150);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 80);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 1000);
    }
}
document.addEventListener("DOMContentLoaded", type);


// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});


// Optional: Basic feedback on form submit
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        contactForm.reset();
    });
}
