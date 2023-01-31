import React from "react";
import "./App.css";
import Square from "./Components/Square";
import { useState } from "react";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [player, setPlayer] = useState("X");

  function playerSwitch(player) {
    let changedPlayer = null;

    if (player === "O") {
      changedPlayer = "X";
    } else if (player === "X") {
      changedPlayer = "O";
    }

    return changedPlayer;
  }

  function changeSquare(index, player) {
    if (board[index] !== "X" || board[index] !== "X") {
      let newBoard = board;
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(playerSwitch(player, board));
      console.log(newBoard[0]);
    } else {
      alert("This space is already occupied! Choose a blank space :)");
    }
  }

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            changeSquare={() => {
              changeSquare(0, player);
            }}
            user={board[0]}
          />
          <Square
            changeSquare={() => {
              changeSquare(1, player);
            }}
            user={board[1]}
          />
          <Square
            changeSquare={() => {
              changeSquare(2, player);
            }}
            user={board[2]}
          />
        </div>

        <div className="row">
          <Square
            changeSquare={() => {
              changeSquare(3, player);
            }}
            user={board[3]}
          />
          <Square
            changeSquare={() => {
              changeSquare(4, player);
            }}
            user={board[4]}
          />
          <Square
            changeSquare={() => {
              changeSquare(5, player);
            }}
            user={board[5]}
          />
        </div>

        <div className="row">
          <Square
            changeSquare={() => {
              changeSquare(6, player);
            }}
            user={board[6]}
          />
          <Square
            changeSquare={() => {
              changeSquare(7, player);
            }}
            user={board[7]}
          />
          <Square
            changeSquare={() => {
              changeSquare(8, player);
            }}
            user={board[8]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// box is clicked
// find the index that matches the current list
// replace if with the current state of things

//Things I need to keep track of

// What number box am I?

// Who's go is it?

// A function that takes the number (x):
// board[x] = player
// Inside the <Square> board[x] <Square/>
//
// A separate variable for use state
//[player, setPlayer] = useState("X")
// A function for changing the player state:
// function playerValue(player) {
//   if (player === "O" || player === null) {

//
//

//}
