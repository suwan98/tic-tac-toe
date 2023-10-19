interface IStatusProp {
  nextPlayer: string;
  winner: {
    condition: number[];
    player: string;
  } | null;
  isDraw: boolean;
}

function Status({nextPlayer, winner, isDraw}: IStatusProp) {
  let statusMessage = "";
  winner
    ? (statusMessage = `위너! ${winner.player} 🥳`)
    : (statusMessage = `다음 플레이어 ${nextPlayer}`);

  if (isDraw) {
    statusMessage = "무승부";
  }

  return (
    <>
      <h2 className="col-span-2 text-sm">{statusMessage}</h2>
    </>
  );
}

export default Status;
