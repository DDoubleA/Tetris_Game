import "./Tetris.css";
import Board from "../Board/Board";
import GameStats from "../GameStats"
import Previews from "../Previews"
import GameController from "../GameController";
import GameOver from "../GameOver";

import {useBoard} from "../../hooks/useBoard"
import {useGameOver} from "../../hooks/useGameOver"
import {useGameStats} from "../../hooks/useGameStats"
import {usePlayer} from "../../hooks/usePlayer"

import { useNavigate } from "react-router-dom";

function Tetris({rows, columns}){
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({rows, columns,player,resetPlayer,addLinesCleared,gameOver});

    const navigate = useNavigate();

    // const player = {tetrominoes : [] }
    // // const start = () => resetGameOver();
    // if(gameOver){
    //     window.alert("GameOVer")
    // }

    const closeModal = () => {
        resetGameOver();
        navigate("/")
      };

    return (
    <div className = "tetris">
        <GameOver open={gameOver} close={closeModal} header="Modal heading"></GameOver>
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
