import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Header } from "../../layout";
import "./style.css";

function Book(props) {
  return (
    <>
      <div className="bookbackground">
        <HTMLFlipBook className="HTMLFlipBook" width={255} height={425}>
          <div className="nopage"></div>
          <div data-testid="flipbook" className="extrafrontbook">
            <div id="login_back_cover"></div>
            <div id="login_top_spine"></div>
            <div id="login_middle_spine"></div>
            <div id="login_bottom_spine"></div>
            <div className="plain_page"></div>
            <div id="login_page1"></div>
            <div id="login_page2"></div>
            <div id="login_page3"></div>
            <div id="login_page4"></div>
            <div id="login_page5">
              <h2 className="bookfonttext">How To Play</h2>
            </div>
          </div>
          <div className="plain_page">
            <br></br>
          </div>
          <div className="rightpage">
            <br></br>
            <h1>How To Play Chess</h1>
            <br></br>
            <h2>By En Croissant</h2>
          </div>
          <div className="leftpage">
            <br></br>2<h3> Contents</h3>
            <h4> Chapter 1: What is Chess about?</h4>
            <h5> A brief summary about Chess</h5>
            <h4> Chapter 2: The chess pieces</h4>
            <h5> The Queen</h5>
            <h5> The King</h5>
            <h5> The Bishop</h5>
            <h5> The Knight</h5>
            <h5> The Rook </h5>
            <h5> The Pawn </h5>
          </div>
          <div className="rightpage">
            <br></br>3<h1> Chapter 1: </h1>
            <h2> What is Chess about? </h2>
            <h3>
              Chess is a game where two players compete to trap the opponents
              king in what is called a checkmate.
            </h3>
            <h3>
              The next few chapters will enlighten on how they cooperate with
              one another, and the affairs they face in order to come to a
              succession.
            </h3>
          </div>
          <div className="leftpage">
            <br></br>4<h1> Chapter 2: </h1>
            <h2> The Chess pieces </h2>
            <h3>
              Chess is about winning. It's a game to win and succeed through life
              via captalism
            </h3>
            <h3>
              What is life if you aren't winning? Can't catch some W's? Take an
              L.
            </h3>
          </div>
          <div className="rightpage">
            <br></br>5<h1> The Pawn </h1>
            <h2>The humble sacrifice</h2>
            <h3>
              The pawn only moves one square forward, except for in two cases:
              the inital move can be two squares forward. When taking a piece it
              must be on a forwards diagonal
            </h3>
            <h3>
              If a pawn reaches the end of the board it may promote to become
              any piece (except the king)
            </h3>
          </div>
          <div className="leftpage">
            <br></br>6<h1> The Knight </h1>
            <h2>Hippity hoppity</h2>
            <h3>
              The knight is the only piece that can move through other pieces.
            </h3>
            <h3>
              It travels in an L shape, moving two squares in any direction,
              then one square at a right angle to the first direction
            </h3>
          </div>
          <div className="rightpage">
            <br></br>7<h1> The Rook </h1>
            <h2>Howl's moving castle</h2>
            <h3>One of the most powerful pieces</h3>
            <h3>
              Rooks travel in straight lines as many squares in one direction as
              they would like
            </h3>
          </div>
          <div className="leftpage">
            <br></br>8<h1> The Bishop </h1>
            <h2>Codename: The Elephant</h2>
            <h3>One of the more slippery pieces in chess</h3>
            <h3>
              Bishops travel diagonally, making them difficult to pin down.
              Similar to Rooks, Bishops can travel as many squares in one
              direction as they like
            </h3>
          </div>
          <div className="rightpage">
            <br></br>9<h1> The Queen </h1>
            <h2>Oh No, My Queen!</h2>
            <h3>
              Easily the most powerful piece on the board. You don't want to
              lose this piece without a good reason
            </h3>
            <h3>
              The Queen has the ability to travel in straight and diagonal lines
              like both the Bishop and Rook
            </h3>
          </div>
          <div className="leftpage">
            <br></br>10<h1> The King </h1>
            <h2>Long live the king</h2>
            <h3>
              The King is the most important piece in chess. If you lose it then
              you lose the entire game.
            </h3>
            <h3>
              The King can move in any direction, like the Queen, however the
              king can only move one square at a time
            </h3>
          </div>
          <div className="rightpage">
            <br></br>11<h1> The chessboard </h1>
            <h2>Everything thing you need to know from A to H</h2>
            <h3>
              The chessboard consists of 64 squares arranged in an 8x8 grid
            </h3>
            <h3>
              Traditionally, player 1 plays from row 1 and player 2 plays from
              row 8
            </h3>
          </div>
          <div className="leftpage">
            <h1> Incoming more chess info. </h1>
            <h2>Advanced rules such as:</h2>
            <h3>En Passant and Castling</h3>
          </div>
          <div className="rightpage">
            <br></br>
          </div>
        </HTMLFlipBook>
        <a href="/">
          <div class="backpiece">&#9820; Go Back</div>
        </a>
      </div>
    </>
  );
}

export default Book;
