
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menu = document.querySelector(".menu");
  const links = document.querySelector("#navlinks");

  if (menu && links) {
    menu.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");

      menu.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menu.textContent = isOpen ? "✕" : "☰";
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
        menu.textContent = "☰";
      });
    });
  }

  // Demo consultation form
  const form = document.querySelector("#demoForm");
  const status = document.querySelector("#formStatus");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (status) {
        status.textContent =
          "Demo only. No information was sent or saved.";
      }

      form.reset();
    });
  }
});
