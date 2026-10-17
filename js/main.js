// ===== Editable site configuration =====
const CONFIG = {
  name: "Alex Morgan",
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-site-name]").forEach((el) => (el.textContent = CONFIG.name));
  document.querySelectorAll("[data-social]").forEach((el) => {
    const url = CONFIG.social[el.dataset.social];
    if (url) el.href = url;
  });
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Scroll reveal
  const items = document.querySelectorAll(".hero-text, .hero-photo, .card, .resume");
  items.forEach((el) => el.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) return items.forEach((el) => el.classList.add("visible"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
});
