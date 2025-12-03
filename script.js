// ================= PRELOADER =================
window.onload = () => {
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 500);
};

// ================= DARK MODE =================
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light-mode");
};

// ================= PARALLAX =================
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll("[data-speed]").forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 200;
        layer.style.transform = `translateX(${x}px)`;
    });
});

// ================= SMOOTH SCROLL CONTACT =================
document.getElementById("btnHire").onclick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};

// ================= GSAP ANIMATIONS =================
gsap.from(".hero-text", {
    x: -80, opacity: 0, duration: 1.5, ease: "power3.out"
});

gsap.from(".hero-img", {
    x: 80, opacity: 0, duration: 1.5, ease: "power3.out"
});

// ================= EMAILJS =================
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_gmail123", "template_oav82kg", this)
        .then(() => {
            document.getElementById("formMessage").innerText = "Pesan berhasil dikirim!";
        }, () => {
            document.getElementById("formMessage").innerText = "Gagal mengirim pesan.";
        });

    this.reset();
});
