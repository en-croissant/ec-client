import { useRef, useState, useEffect } from "react";
import Chess from "chess.js";
import { Chessboard } from "react-chessboard";

// socket.on("hello world", ({ data }) => console.log(data));

function Gameboard({ socket }) {
  useEffect(() => {
    const lobby_id = window.location.pathname.split("/")[2];
    socket.emit("join", { lobby_id: lobby_id });
    socket.on("initial board", ({ board }) => {
      console.log(game.fen());
      setGame(new Chess(board));
      socket.on("opponent move", ({ chessMove }) => {
        setLastMove(chessMove);
        safeGameMutate((game) => {
          game.move(chessMove);
        });
      });
    });
  }, [socket]);

  const chessboardRef = useRef();
  const [game, setGame] = useState(new Chess());
  const [lastMove, setLastMove] = useState("");

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function onDrop(sourceSquare, targetSquare) {
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });
    socket.emit("move piece", { move: move });
    setGame(gameCopy);
    return move;
  }

  return (
    <div>
      <Chessboard
        aria-label="chessboard"
        id="PlayVsPlay"
        animationDuration={200}
        boardWidth={400}
        position={game.fen()}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: "4px",
          // boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
        }}
        ref={chessboardRef}
      />
      {/* <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.reset();
          });
          chessboardRef.current.clearPremoves();
        }}
      >
        reset
      </button>
      <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.undo();
          });
          chessboardRef.current.clearPremoves();
        }}
      >
        undo
      </button> */}
    </div>
  );
}

export default Gameboard;
