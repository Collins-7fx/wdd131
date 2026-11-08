// Footer: year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.textContent = isOpen ? "X" : "\u2630";
  menuButton.setAttribute("aria-expanded", isOpen);
});