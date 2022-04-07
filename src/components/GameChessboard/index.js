import { useRef, useState, useEffect } from "react";
import Chess from "chess.js";
import { Chessboard } from "react-chessboard";
import { MatchResult } from "../"

import "./style.css"
import { is } from "@react-spring/shared";

function Gameboard({ socket }) {
  useEffect(() => {
    const lobby_id = window.location.pathname.split("/")[2];
    socket.emit('join', {lobby_id:lobby_id})
    socket.on('initial board', ({board}) => {
      console.log(game.fen())
      setGame(new Chess(board))
    socket.on('opponent move', ({chessMove}) => {
      safeGameMutate((game) => {
        game.move(chessMove)
      })
    })
    })
  }, [socket])

  const chessboardRef = useRef();
  const [game, setGame] = useState(new Chess());
  const [outcome, setOutcome] = useState("");

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function onDrop(sourceSquare, targetSquare) {
    const gameCopy = { ...game };
    try {
      const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
      });
      socket.emit("move piece", { move: move });
      setGame(gameCopy);
      safeGameMutate((game) => {
        if(game.game_over()){
          if(game.in_checkmate()){
            const loser = game.fen().split(" ")[1]
            const winner = loser == "b" ? "1" : "2"
            setOutcome(`Player ${winner} has won the match`)
            }else{
            setOutcome("Match is a tie")
        }} 
      });
      return move; 
    } catch (err) {
      console.log("bad move")
    }
    
    

  }

  return (
    <div id="chessboard">
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
      {outcome ? (
          <MatchResult outcome={outcome} />
      ) : (
        <></>
      )}
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
