//gameboard as module since it only needs to be run once
//gameboard will be an array

const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const gridContainer = document.querySelector(".ttt-grid");
  board.forEach((box) => {
    const div = document.createElement("div");
    div.innerText = box;
    console.log(div.value);
    gridContainer.appendChild(div);
  });
})();
