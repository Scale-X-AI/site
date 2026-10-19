const form = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

form?.addEventListener("submit", () => {
  const button = form.querySelector("button");
  button.disabled = true;
  button.innerHTML = "Signal reçu <span>✓</span>";
  formNote.textContent = "Envoi en cours…";
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
});

const revealItems = document.querySelectorAll(".reveal-on-scroll");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8%" });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
