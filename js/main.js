document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        toggle.innerText = "☀️ Modo Claro";
      } else {
        toggle.innerText = "🌙 Modo Oscuro";
      }
    });
  }
});
