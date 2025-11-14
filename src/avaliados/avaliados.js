const btnAvaliar = document.getElementById("btnAvaliar");
const modal = document.getElementById("modal");
const fechar = document.getElementById("fechar");
const estrelasContainer = document.getElementById("estrelas");

let nota = 0;

// Criar 10 estrelas
for (let i = 1; i <= 10; i++) {
  const estrela = document.createElement("span");
  estrela.classList.add("star");
  estrela.innerHTML = "★";
  estrela.dataset.valor = i;

  estrela.addEventListener("click", () => {
    nota = i;
    atualizarEstrelas();
    console.log("Nota escolhida:", nota);
  });

  estrelasContainer.appendChild(estrela);
}

function atualizarEstrelas() {
  const estrelas = document.querySelectorAll(".star");
  estrelas.forEach(star => {
    star.classList.remove("selecionada");
    if (star.dataset.valor <= nota) {
      star.classList.add("selecionada");
    }
  });
}

// Abrir modal
btnAvaliar.onclick = () => {
  modal.style.display = "flex";
};

// Fechar modal X
fechar.onclick = () => {
  modal.style.display = "none";
};

// Fechar clicando fora
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
