import Square from "./Square";

interface IBoardProp {
  squares: string[];
  handlePlay: (index: number) => void;
  winner: {
    condition: number[];
    player: string;
  } | null;
}

function Board({squares, handlePlay, winner}: IBoardProp) {
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-3 border-t-2 border-2 border-r-[3px] border-l-2 border-b-[3px] border-slate-700">
        {squares.map((square, index) => {
          let winnerClassName = "";
          if (winner) {
            const [x, y, z] = winner.condition;
            if (index === x || index === y || index === z) {
              winnerClassName = "bg-yellow-100";
            }
          }
          return (
            <Square
              className={winnerClassName}
              key={index}
              onPlay={handlePlay(index)}>
              {square}
            </Square>
          );
        })}
      </div>
    </>
  );
}

export default Board;
