import Board from './Board';
import {useState, useEffect} from 'react'
import {calculateWinner, boardIsFull} from '../helpers'


const Game = () => {
const [board, setBoard] = useState(Array(9).fill(null));
const [xIsNext, setXisNext] = useState(true);
const winner = calculateWinner(board);

const handleClick = (i) => {
    const boardCopy = [...board]
    if(winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXisNext(!xIsNext)
}
const resetBoard = () =>{
    setBoard(Array(9).fill(null))
    console.log(board)
}

    return (
        <>
          <Board squares={board} onClick={handleClick}/>
          <div style={styles}>
              <p>
                  {winner ? "Winner: " + winner : (boardIsFull(board)?"It's a tie!": "Next Player: " + (xIsNext ? "X" : "O"))}
              </p>
              {(winner || boardIsFull(board))  && <button onClick={resetBoard}>Start Game</button>}
          </div>
        </>
    )
}
const styles = {
  margin: "auto",
  width: "50%",
  border: "3px solid green",
  padding: "10px"
}


export default Game
