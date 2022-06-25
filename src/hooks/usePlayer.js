import { useState, useCallback } from "react";

import { randomTetromino } from "../business/Tetrominoes";

// 이전 상태가 있으면 테트로미노를 추가한뒤 리턴
// 이전 상태가 없으면 랜덤 테트로미노 5개.
const buildPlayer = (previous) => {
  let tetrominoes;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.unshift(randomTetromino());
  } else {
    tetrominoes = Array(5)
      .fill(0)
      .map((_) => randomTetromino());
  }

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop()
  };
};

//
export const usePlayer = () => {
  const [player, setPlayer] = useState(buildPlayer());

  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev));
  }, []);

  return [player, setPlayer, resetPlayer];
};
