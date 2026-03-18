/* ── 1. TEMA CLARO / ESCURO ──────────────────
   Verifica preferência salva no localStorage.
   Ao clicar, alterna o atributo data-theme
   no <html> e salva a preferência. */
const html = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme") || "light";

if (savedTheme === "dark") {
  html.setAttribute("data-theme", "dark");
  themeBtn.textContent = "☀️ Claro";
}

themeBtn.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.removeAttribute("data-theme");
    themeBtn.textContent = "🌙 Escuro";
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    themeBtn.textContent = "☀️ Claro";
    localStorage.setItem("theme", "dark");
  }
});

/* ── 2. MENU MOBILE (HAMBURGUER) ─────────────
   Ao clicar no botão ☰, adiciona/remove
   a classe "open" no menu mobile. */
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Usada no onclick do HTML (menu mobile)
function closeMobileMenu() {
  mobileMenu.classList.remove("open");
}

/* ── 3. VALIDAÇÃO E ENVIO DO FORMULÁRIO ──────
   Verifica se todos os campos estão preenchidos
   e se o e-mail tem formato válido antes de
   "enviar" (simulação). */
const form = document.getElementById("contact-form");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  let valido = true;

  if (nome.value.trim() === "") {
    mostrarErro(nome, "erro-nome");
    valido = false;
  } else {
    limparErro(nome, "erro-nome");
  }

  if (!emailRegex.test(email.value.trim())) {
    mostrarErro(email, "erro-email");
    valido = false;
  } else {
    limparErro(email, "erro-email");
  }

  if (mensagem.value.trim() === "") {
    mostrarErro(mensagem, "erro-mensagem");
    valido = false;
  } else {
    limparErro(mensagem, "erro-mensagem");
  }

  if (valido) {
    form.reset();
    modal.classList.add("open");
  }
});

function mostrarErro(campo, idErro) {
  campo.classList.add("invalid");
  document.getElementById(idErro).classList.add("visible");
}

function limparErro(campo, idErro) {
  campo.classList.remove("invalid");
  document.getElementById(idErro).classList.remove("visible");
}

/* ── 4. MODAL DE CONFIRMAÇÃO ─────────────────
   Fecha o modal ao clicar no botão "Fechar"
   ou ao clicar fora da caixa do modal. */
modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});

