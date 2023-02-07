//gameboard as module since it only needs to be run once
//gameboard will be an array

const gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const gridContainer = document.querySelector(".ttt-grid");
  let count = 0;
  board.forEach((box) => {
    const div = document.createElement("div");
    div.setAttribute("id", count);
    div.innerText = box;
    console.log(div.value);
    gridContainer.appendChild(div);
    count++;
  });
})();
