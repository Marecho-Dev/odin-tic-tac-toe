//gameboard as module since it only needs to be run once
//gameboard will be an array
const player = (name) => {
  let sign = "";
  if (name != "CPU") {
    sign = "X";
  } else {
    sign = "O";
  }
  const getName = () => this.name;
  const getSign = () => sign;
  return { name, sign, getName, getSign };
};

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

  const tileFree = (index) => {
    return board[index.substring(4, 5)] == "";
  };

  return { updateTile, tileFree };
})();

const game = (() => {
  const player1 = player("Marek");
  const player2 = player("CPU");
  let activeSign = player1.getSign();
  let count = 0;
  const tileListener = document.querySelectorAll(".ttt-grid>div");
  tileListener.forEach((tile) => {
    tile.addEventListener("click", () => {
      console.log(gameboard.tileFree(tile.id));
      if (gameboard.tileFree(tile.id)) {
        if (count % 2 == 0) {
          activeSign = player1.getSign();
        } else {
          activeSign = player2.getSign();
        }
        gameboard.updateTile(tile.id, activeSign);
        count++;
      }
    });
  });
})();
