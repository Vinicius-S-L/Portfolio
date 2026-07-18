// ==================== TEMA CLARO / ESCURO ====================

const themeToggle = document.querySelector(".modo");
const body = document.body;
const sunIcon = document.querySelector("#modo-claro");
const moonIcon = document.querySelector("#modo-escuro");
const menu = document.querySelector("#botao-menu");
const ul = document.querySelector("nav ul");
// ==================== CARREGAR TEMA AO INICIAR ====================

const temaSalvo = localStorage.getItem("tema");

// Se NÃO existir tema salvo OU se for "escuro" → mantém escuro (padrão)
if (temaSalvo === "modo-claro") {
  body.classList.add("modo-claro");
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
} else {
  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
}
// Se for a primeira vez, não faz nada → fica escuro (porque já está no CSS)

// ==================== FUNÇÃO PARA ALTERNAR TEMA ====================

function alternarTema () {
  const isEscuro = body.classList.toggle("modo-escuro");

  if (isEscuro) {
    localStorage.setItem("tema", "modo-escuro");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    body.classList.remove("modo-claro");
  } else {
    localStorage.setItem("tema", "modo-claro");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    body.classList.add("modo-claro");
  }
}

// Conectar o botão
if (themeToggle) {
  themeToggle.addEventListener("click", alternarTema);
}
// ==================== SCROLL SUAVE ====================

const navLinks = document.querySelectorAll("#menu a[href^='#']");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight || 80;
      const targetPosition = target.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

function botaoMenu () {
  ul.classList.toggle("menu-aberto");
}
if (menu) {
  menu.addEventListener("click", botaoMenu);
}
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    ul.classList.remove("menu-aberto");
  });
});
