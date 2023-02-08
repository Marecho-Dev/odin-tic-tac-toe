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
  const winningBoard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  
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
  const winCheck = ()=> {
    let status = false;
    winningBoard.forEach((layout) => {
        if (board[layout[0]] == board[layout[1]] && board[layout[0]] == board[layout[2]] &&  board[layout[1]] != "" && board[layout[2]] != ""){
            status = true;
        }
    });
    return status;
  };
  const updateTile = (index, character) => {
    const tile = document.querySelector("#" + index);
    tile.innerText = character;
    board[index.substring(4, 5)] = character;
  };

  const tileFree = (index) => {
    return board[index.substring(4, 5)] == "";
  };

  return { updateTile, tileFree , winCheck};
})();

const game = (() => {
  const player1 = player("Marek");
  const player2 = player("CPU");
  let activeSign = player1.getSign();
  let count = 0;
  const tileListener = document.querySelectorAll(".ttt-grid>div");
  tileListener.forEach((tile) => {
    tile.addEventListener("click", () => {
      if (gameboard.tileFree(tile.id)) {
        if (count % 2 == 0) {
          activeSign = player1.getSign();
        } else {
          activeSign = player2.getSign();
        }
        gameboard.updateTile(tile.id, activeSign);
        if(gameboard.winCheck()){
            const div = document.createElement("div");
            div.innerText = "winner";
            div.setAttribute("id", "winner");
            document.body.appendChild(div);
        };
        count++;
      }
    });
  });
})();
