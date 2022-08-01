const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cards = document.querySelectorAll(".card");
let cardAtual = 0;

function esconderCardSelect() {
  const cardSelect = document.querySelector(".select");
  cardSelect.classList.remove("select");
}

function mostrarCard(indiceCard) {
  cards[indiceCard].classList.add("select");
}

btnAvancar.addEventListener("click", function () {
  if (cardAtual === cards.length - 1) return;

  esconderCardSelect();

  cardAtual++;
  mostrarCard(cardAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cardAtual === 0) return;

  esconderCardSelect();

  cardAtual--;
  mostrarCard(cardAtual);
});
