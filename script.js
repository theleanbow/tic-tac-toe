let sq = 3;
const length = 900;
let div = Array.from(Array(sq), () => new Array(sq));
container = [];
let heading = document.querySelector(".heading");
let mainContainer = document.createElement("div");
heading.insertAdjacentElement("afterend", mainContainer);

function createGrid(sq) {
  for (let i = 0; i < sq; i++) {
    container[i] = document.createElement("div");
    container[i].style.display = "flex";
    mainContainer.appendChild(container[i]);
    for (let j = 0; j < sq; j++) {
      div[i][j] = document.createElement("div");
      div[i][j].classList.add("square");
      //css in js
      div[i][j].style.margin = "0px";
      div[i][j].style.padding = "0px";
      div[i][j].style.width = `${length / sq}px`;
      div[i][j].style.height = `${length / sq}px`;
      div[i][j].style.border = "1px solid black";
      // div[i][j].style[border - sizing] = "border-box";
      container[i].appendChild(div[i][j]);
    }
  }
}
createGrid(sq);
