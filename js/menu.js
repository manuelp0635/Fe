const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");

/* ABRIR / CERRAR MENÚ */
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
});

/* CERRAR AL HACER CLICK */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.classList.remove("active");
  });
});

/* CAMBIO DE COLOR AL SCROLL */
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});