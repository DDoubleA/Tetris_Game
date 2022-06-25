import "./Tetris.css";
// import Game from "../Game/Game";
import Board from "../Game/Board";
import GameStats from "../GameStats"
import Previews from "../Previews"
import GameController from "../GameController";

import {useBoard} from "../../hooks/useBoard"
import {useGameOver} from "../../hooks/useGameOver"
import {useGameStats} from "../../hooks/useGameStats"
import {usePlayer} from "../../hooks/usePlayer"

function Tetris({rows, columns}){
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({rows, columns,player,resetPlayer,addLinesCleared});
  
    // const player = {tetrominoes : [] }
    // // const start = () => resetGameOver();
    if(gameOver){
        window.alert("GameOVer")
    }

    return (
    <div className = "tetris">
        <div className="three">

        </div>
        <div className="three">
            <Board board = {board}></Board>
            <GameController
                board={board}
                gameStats={gameStats}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
            />
        </div>
        <div className="three">
            <Previews tetrominoes = {player.tetrominoes}/>
            <GameStats gameStats = {gameStats}/>
        </div>
        

    </div>)
}

export default Tetris;
