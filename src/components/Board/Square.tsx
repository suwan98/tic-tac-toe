interface ISquareProp {
  children: React.ReactNode;
  className: string;
  onPlay: (index: number) => void;
}

function Square({children, className, onPlay}: ISquareProp) {
  const isPlayed = !!children;
  const defaultClassName =
    "w-16 h-16 border-l border-t border-solid border-slate-700 disabled:cursor-not-allowed";

  return (
    <>
      <button
        type="button"
        className={`${defaultClassName} ${className}`.trim()}
        onClick={onPlay}
        disabled={isPlayed}>
        {children}
      </button>
    </>
  );
}

export default Square;
