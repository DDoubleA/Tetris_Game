import { useState, useEffect } from "react"

import {buildBoard, nextBoard} from "../business/Board"

export const useBoard = ({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
    gameOver
  }) => {
    const [board, setBoard] = useState(buildBoard({ rows, columns }));
    // console.log("in useBoard", gameOver);
    useEffect(() => {
      setBoard((previousBoard) =>
        nextBoard({
          board: previousBoard,
          player,
          resetPlayer,
          addLinesCleared,
          gameOver
        })
      );
    }, [player, resetPlayer, addLinesCleared,gameOver]);
  
    return [board];
  };