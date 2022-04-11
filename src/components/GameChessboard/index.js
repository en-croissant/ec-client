import { useRef, useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { MatchResult, PlayerTurn, PlayerName } from "../"
import "./style.css"
// ================================================
//  POSSIBLE FIX
import * as ChessJS from "chess.js";
const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess
// ================================================

function Gameboard({ socket }) {
  useEffect(() => {
    const lobby_id = window.location.pathname.split("/")[2];
    socket.emit('join', { lobby_id: lobby_id })
    socket.on('initial board', ({board}) => {
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
  const [turn, setTurn] = useState("1");

  const [moveFrom, setMoveFrom] = useState('');
  const [rightClickedSquares, setRightClickedSquares] = useState({});
  const [moveSquares, setMoveSquares] = useState({});
  const [optionSquares, setOptionSquares] = useState({});

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
    promotion: "q",
    });
    socket.emit("move piece", { move: move });
    setGame(gameCopy);
    safeGameMutate((game) => {
      const currentTurn = game.fen().split(" ")[1]
      setTurn(currentTurn === "b" ? "2" : "1")
      if(game.game_over()){
        if(game.in_checkmate()){
          const winner = turn === "2" ? "1" : "2"
          setOutcome(`Player ${winner} has won the match`)
        } else {
          setOutcome("Match is a tie")
        }
      } 
    });
    setMoveFrom('');
    setOptionSquares({});
    return move;
  }

  function getMoveOptions(square) {
    const moves = game.moves({
      square,
      verbose: true
    });
    if (moves.length === 0) {
      return;
    }

    const newSquares = {};
    moves.map((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to) && game.get(move.to).color !== game.get(square).color
            ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
            : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
        borderRadius: '50%'
      };
      return move;
    });
    newSquares[square] = {
      background: 'rgba(255, 255, 0, 0.4)'
    };
    setOptionSquares(newSquares);
  }

  function onSquareClick(square) {
    setRightClickedSquares({});

    function resetFirstMove(square) {
      setMoveFrom(square);
      getMoveOptions(square);
    }

    // from square
    if (!moveFrom) {
      resetFirstMove(square);
      return;
    }

    // attempt to make move
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: moveFrom,
      to: square,
      promotion: 'q' // always promote to a queen for example simplicity
    });
    setGame(gameCopy);

    // if invalid, setMoveFrom and getMoveOptions
    if (move === null) {
      resetFirstMove(square);
      return;
    }

    setMoveFrom('');
    setOptionSquares({});
  }

  function onSquareRightClick(square) {
    const colour = 'rgba(0, 0, 255, 0.4)';
    setRightClickedSquares({
      ...rightClickedSquares,
      [square]:
        rightClickedSquares[square] && rightClickedSquares[square].backgroundColor === colour
          ? undefined
          : { backgroundColor: colour }
    });
  }

  function onPieceDragBegin(piece, sourceSquare){
    onSquareClick(sourceSquare)
  }

  return (
    <div id="chessboard" aria-label="chessboard">
      <Chessboard
        id="PlayVsPlay"
        animationDuration={200}
        boardWidth={400}
        position={game.fen()}
        onPieceDrop={onDrop}
        onPieceDragBegin={onPieceDragBegin}
        onSquareClick={onSquareClick}
        onSquareRightClick={onSquareRightClick}
        customBoardStyle={{
          borderRadius: "4px",
        }}
        customDarkSquareStyle={{ backgroundColor: '#719972' }}
        customLightSquareStyle={{ backgroundColor: '#f7e7e0' }}
        customSquareStyles={{
          ...moveSquares,
          ...optionSquares,
          ...rightClickedSquares
        }}
        ref={chessboardRef}
      />
      {outcome ? (
          <MatchResult outcome={outcome} />
      ) : (
        <></>
      )}
      <PlayerTurn turn={turn} /> 
      <PlayerName playerName="Player 1" isActive={turn==1} isPlayer1="1"/>
      <PlayerName playerName="Player 2" isActive={turn==2} isPlayer1=""/>
    </div>
  );
}

export default Gameboard;
