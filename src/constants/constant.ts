export const PLAYER1 = "🧡";
export const PLAYER2 = "💚";

export const INITAL_SQUARES = Array(9).fill(null);

export const winnerCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (squares: string[]) => {
  for (const [x, y, z] of winnerCondition) {
    const winnerPlayer = squares[x];
    if (
      winnerPlayer &&
      winnerPlayer === squares[y] &&
      winnerPlayer === squares[z]
    ) {
      return {
        player: winnerPlayer,
        condition: [x, y, z],
      };
    }
  }

  return null;
};
