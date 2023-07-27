import { useEffect, useState } from 'react';

import './TicTacToe.css'; 

import Tictac from './Tictac';


export default function TicTacToe() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", "",])
  const [go , setGo] = useState("circle")
  const [winningText, setWinningText] = useState(null)

  const text = "It's  " + go + " 's turn!"

  const checkScore = () => {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle")

      if (circleWins) {
        setWinningText("Circle Won!")
        return
      }

      let crossWins = array.every(cell => cells[cell] === "cross")

      if (crossWins) {
        setWinningText("Cross Won!")
        return
      }
    })
  }

  useEffect(() => {checkScore()}, [cells])

  return (
    <div className="ttt">
      <div className='ticboard'>
      {cells.map((cell, index) => 
      <Tictac 
      key={index} 
      cell={cell}
      id={index} 
      go= {go}
      setCells={setCells}
      setGo={setGo}
      cells={cells}
      winningText={winningText}
      setWinningText={setWinningText}
       />)}
      </div>
      <p> {winningText || text} </p>
    </div>
    
  )
}

