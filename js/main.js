// Scroll Reveal Animation using IntersectionObserver
document.addEventListener("DOMContentLoaded", function () {
  // Scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el);
  });

  // Contact form handling
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYou");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.ok) {
          form.reset();
          thankYou.style.display = "block";
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        alert("Network error. Please check your connection.");
      });
    });
  }
});
