//gameboard as module since it only needs to be run once
//gameboard will be an array

const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const gridContainer = document.querySelector(".ttt-grid");
  let count = 0;

  board.forEach((box) => {
    const div = document.createElement("div");
    div.setAttribute("id", "box-" + count);
    div.innerText = box;
    console.log(div.value);
    gridContainer.appendChild(div);
    count++;
  });
  const updateTile = (index, character) => {
    const tile = document.querySelector("#" + index);
    tile.innerText = character;
    board[index.substring(4, 5)] = character;
  };

  const tileListener = document.querySelectorAll(".ttt-grid>div");
  tileListener.forEach((tile) => {
    tile.addEventListener("click", () => {
      updateTile(tile.id, "X");
    });
  });
})();


