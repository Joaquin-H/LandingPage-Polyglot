const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const campus = document.querySelector("#campus-rs");

function mostrarMenu() {
campus.classList.remove("disabled");
nav.classList.add("nav-visible");
menu.classList.add("menu-visible");
menu.classList.remove("disabled");
nav.classList.remove("nav-oculto");
nav.classList.remove("disabled");
}

function ocultarMenu() {
nav.classList.remove("nav-visible");
menu.classList.remove("menu-visible");
nav.classList.add("nav-oculto");
abrir.classList.remove("disabled");

setTimeout(function () {
    nav.classList.add("disabled");
    menu.classList.add("disabled");
}, 1000);
}

abrir.addEventListener("click", mostrarMenu);
cerrar.addEventListener("click", ocultarMenu);