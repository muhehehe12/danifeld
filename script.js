/* LOADER */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 800);
});


/* LANGUAGE SWITCH */
const langButtons = document.querySelectorAll(".lang");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");

    // toggle active button
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // change text
    document.querySelectorAll("[data-en]").forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  });
});


/* FADE-IN ON SCROLL */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

// elements to animate
document.querySelectorAll("section, .room-card, .split-text, .split-img")
  .forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });


/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
