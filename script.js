let squere = {
  a1: "",
  a2: "",
  a3: "",
  b1: "",
  b2: "",
  b3: "",
  c1: "",
  c2: "",
  c3: "",
};

let player = "X";
let warning = "";
let playing = "";

reset();

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", itemClick);
});

document.querySelector(".reset").addEventListener("click", reset);

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("touchstart", itemClick);
});

document.querySelector(".reset").addEventListener("touchstart", reset);

function itemClick(event) {
  let item = event.target.getAttribute("data-item");

  if (squere[item] == "" && playing == true) {
    squere[item] = player;
    renderSquere();
    trocarPlayer();
    rederInfo();
  }
}

function renderSquere() {
  for (let i in squere) {
    let item = document.querySelector(`div[data-item = ${i}]`);
    item.innerHTML = squere[i];
  }
  checkGame();
}

function trocarPlayer() {
  player = player == "X" ? "O" : "X";
}

function rederInfo() {
  document.querySelector(".vez").innerHTML = player;
  document.querySelector(".resultado").innerHTML = warning;
}

function reset() {
  playing = true;
  warning = "";
  for (let i in squere) {
    squere[i] = "";
  }
  renderSquere();
  trocarPlayer();
  rederInfo();
}

function renderInfo() {
  document.querySelector(".vez");
  innerHTML = player;
}

function checkGame() {
  if (checkwinnerFor("X")) {
    warning = "O 'X' Vencer!!";
    playing = false;
  } else if (checkwinnerFor("O")) {
    playing = false;
    warning = "A 'O' Venceu!!";
  } else if (isFull()) {
    warning = "Deu Empate";
  }
}

function checkwinnerFor(player) {
  let pos = [
    "a1,a2,a3",
    "b1,b2,b3",
    "c1,c2,c3",

    "a1,b1,c1",
    "a2,b2,c2",
    "a3,b3,c3",

    "a1,b2,c3",
    "a3,b2,c1",
  ];
  for (let i in pos) {
    let pArray = pos[i].split(",");
    let hasWon = pArray.every((option) => squere[option] === player);
    if (hasWon) {
      return true;
    }
  }
  return false;
}

function isFull() {
  for (let i in squere) {
    if (squere[i] == "") {
      return false;
    }
  }

  return true;
}
