/* =========================
   LOADER (SMOOTH HIDE)
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 700);
});


/* =========================
   LANGUAGE SWITCH (EN / RO)
========================= */
const langButtons = document.querySelectorAll(".lang");

// load saved language
let currentLang = localStorage.getItem("lang") || "en";
setLanguage(currentLang);

// button click
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // toggle active button
  langButtons.forEach(b => {
    b.classList.remove("active");
    if (b.getAttribute("data-lang") === lang) {
      b.classList.add("active");
    }
  });

  // update text
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}


/* =========================
   FADE-IN ON SCROLL
========================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section, .room-card, .split-text, .split-img")
  .forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   BOOKING POPUP (CLEAN)
========================= */
const popup = document.getElementById("bookingPopup");
const closePopup = document.querySelector(".close-popup");

// open popup ONLY for buttons with "book"
document.querySelectorAll(".btn").forEach(btn => {
  if (btn.textContent.toLowerCase().includes("book")) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("active");
    });
  }
});

// close button
if (closePopup) {
  closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
  });
}

// close outside click
if (popup) {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
}


/* =========================
   AUTO POPUP (ONLY ONCE)
========================= */
if (!localStorage.getItem("popupShown")) {
  setTimeout(() => {
    popup.classList.add("active");
    localStorage.setItem("popupShown", "true");
  }, 6000);
}
