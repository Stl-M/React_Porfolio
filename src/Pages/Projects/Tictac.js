import './TicTacToe.css';

export default function Tictac({id, cell, go, setCells, setGo, cells, winningText}) {

    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains("circle") || 
        e.target.firstChild.classList.contains("cross")

        if(!taken ) {
            if (go === "circle") {
                e.target.firstChild.classList.add("circle")
                handleCellChange("circle")
                setGo("cross")
            }
            if (go === "cross") {
                e.target.firstChild.classList.add("cross")
                handleCellChange("cross")
                setGo("circle")
            }
        }
    }

    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            } else {
                return cell
            }
        })
        setCells(nextCells)
    }

  return (
    <div className='square' id={id} onClick={!winningText && handleClick} >
        <div className={cell}></div>
    </div>
  )
}
