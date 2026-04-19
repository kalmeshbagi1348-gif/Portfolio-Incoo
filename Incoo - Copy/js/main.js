// ===== CURSOR LIGHT =====
const light = document.querySelector(".light");
if (light) {
    document.addEventListener("mousemove", (e) => {
        light.style.left = e.clientX + "px";
        light.style.top = e.clientY + "px";
    });
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("main-nav");

if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        mainNav.classList.toggle("open");
        document.body.style.overflow = mainNav.classList.contains("open") ? "hidden" : "";
    });

    // Close on nav link click
    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("open");
            mainNav.classList.remove("open");
            document.body.style.overflow = "";
        });
    });

    // Close on overlay click (the ::before pseudo-element area)
    document.addEventListener("click", (e) => {
        if (mainNav.classList.contains("open") &&
            !mainNav.contains(e.target) &&
            e.target !== hamburger &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove("open");
            mainNav.classList.remove("open");
            document.body.style.overflow = "";
        }
    });
}

// ===== PAGE TRANSITION (optional fade) =====
const links = document.querySelectorAll("a[href]");
links.forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("http") || this.target === "_blank") return;
        e.preventDefault();
        document.querySelector("main")?.classList.add("fade-out");
        setTimeout(() => { window.location.href = href; }, 300);
    });
});
