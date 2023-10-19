import {useState} from "react";
import {
  INITAL_SQUARES,
  PLAYER1,
  PLAYER2,
  checkWinner,
} from "../../constants/constant";
import Board from "../Board/Board";
import History from "./History";
import Status from "./Status";

function Game() {
  const [squares, setSquares] = useState(INITAL_SQUARES);

  /* Square 컴포넌트에 인덱스값을 전달하는 함수 */
  const [gameIndex, setGameIndex] = useState(0);
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER1 : PLAYER2;
  const handlePlay = (index: number) => () => {
    if (winner) return alert("GAME OVER!!");
    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;
    setSquares(nextSquares);
    setGameIndex(gameIndex + 1);
  };

  /* 승리자 체크 배열 및 함수로직 */
  const winner = checkWinner(squares);

  /* 무승부 상태 */
  const isDraw = !winner && squares.every(Boolean);

  return (
    <>
      <section className="grid grid-rows-[24px_1fr] grid-cols-2 gap-2">
        <Status nextPlayer={nextPlayer} winner={winner} isDraw={isDraw} />
        <Board squares={squares} handlePlay={handlePlay} winner={winner} />
        <History />
      </section>
    </>
  );
}

export default Game;
