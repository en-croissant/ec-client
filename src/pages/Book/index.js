import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./style.css";

function Book(props) {
  return (
    <>
      <div className="bookbackground">
        <div>
          <h1></h1>
        </div>
        <HTMLFlipBook className="HTMLFlipBook" width={255} height={425}>
          <div className="nopage"></div>
          <div className="extrafrontbook">
            {/* <div className="bookfront"> */}
            {/* <div id="login_front_cover"></div> */}
            <div id="login_back_cover"></div>
            <div id="login_top_spine"></div>
            <div id="login_middle_spine"></div>
            <div id="login_bottom_spine"></div>
            <div id="login_page1"></div>
            <div id="login_page2"></div>
            <div id="login_page3"></div>
            <div id="login_page4"></div>
            <div id="login_page5">
              {/* <div className="bookfronttext">NOTEBOOK</div> */}
            </div>
            {/* </div> */}
          </div>
          <div className="leftpage">
            <br></br>1<h1>How To Play Chess</h1>
            <br></br>
            <h2>By En Croissant</h2>
          </div>
          <div className="rightpage">
            <br></br>2<h3> Contents</h3>
            <h4> Chapter 1: What is Chess about?</h4>
            <h5> A brief summary about Chess</h5>
            <h4> Chapter 2: The chess pieces</h4>
            <h5> The Queen</h5>
            <h5> The King</h5>
            <h5> The Bishop</h5>
            <h5> The King</h5>
            <h5> The Rook </h5>
            <h5> The Pawn </h5>
          </div>
          <div className="leftpage">
            <br></br>3<h1> Chapter 1: </h1>
            <h2> What is Chess about? </h2>
            <h3>
              The Chess pieces work togther as unity in order to attack on the
              opposition. One can call it a coop, but a true chess player will
              call it class.
            </h3>
            <h3>
              The next few chapters will englighten on how they cooperate with
              one another, and the affairs they face in order to come to a
              succesion.
            </h3>
          </div>
          <div className="rightpage">
            <br></br>4<h1> Chapter 2: </h1>
            <h2> The Chess pieces </h2>
            <h3>
              Chess is about winning. It's a game to win and succed through life
              through captalism
            </h3>
            <h3>
              What is life if you arnt winning? Can't catch some W's? Take an L.
            </h3>
          </div>
          <div className="leftpage">
            <br></br>5
          </div>
          <div className="rightpage">
            <br></br>6
          </div>
          <div className="leftpage">
            <br></br>7
          </div>
          <div className="rightpage">
            <br></br>8
          </div>
          <div className="leftpage">
            <br></br>9
          </div>
          <div className="rightpage">
            <br></br>10
          </div>
          <div className="leftpage">
            <br></br>11
          </div>
          <div className="rightpage">
            <br></br>12
          </div>
        </HTMLFlipBook>
        ;
        <a className="goBack" href="/">
          <span>Go back</span>
        </a>
      </div>
    </>
  );
}

// function Book(props) {
//   return (
//     <>
//       <h1>Hello World</h1>
//       <HTMLFlipBook className="HTMLFlipBook" width={300} height={500}>
//         <div id="login_front_cover">
//           <div id="login_spine"></div>
//           <div className="login_page1">Page 1</div>
//           <div className="login_page2">Page 2</div>
//           <div className="login_page3">Page 3</div>
//           <div className="login_page4">Page 4</div>
//           <div className="login_page5">Page 5</div>
//           <div className="login_page6">Page 6</div>
//           <div id="login_back_cover"></div>
//         </div>
//       </HTMLFlipBook>
//     </>
//   );
// }

// function Book(props) {
//   return (
//     <>
//       <h1>Hello World</h1>
//       <HTMLFlipBook className="HTMLFlipBook" width={300} height={500}>
//         <div id="login_front_cover">
//           <div id="login_spine"></div>
//           <div className="login_page1">Page 1</div>
//           <div className="login_page2">Page 2</div>
//           <div className="login_page3">Page 3</div>
//           <div className="login_page4">Page 4</div>
//           <div className="login_page5">Page 5</div>
//           <div className="login_page6">Page 6</div>
//           <div id="login_back_cover"></div>
//         </div>
//       </HTMLFlipBook>
//     </>
//   );
// }

// export default Book;

// <HTMLFlipBook className="HTMLFlipBook" width={300} height={500}>
//   <div className="nopage"></div>
//   <div className="bookfrontpage">
//     <div id="login_front_cover"></div>
//     <div id="login_back_cover"></div>
//     <div id="login_top_spine"></div>
//     <div id="login_middle_spine"></div>
//     <div id="login_bottom_spine"></div>
//     <div id="login_page1"></div>
//     <div id="login_page2"></div>
//     <div id="login_page3"></div>
//     <div id="login_page4"></div>
//     <div id="login_page5"></div>
//   </div>

//   <div className="leftpage">Page 1</div>
//   <div className="rightpage">Page 2</div>
//   <div className="leftpage">Page 3</div>
//   <div className="rightpage">Page 4</div>
//   <div className="leftpage">Page 5</div>
//   <div className="rightpage">Page 6</div>
// </HTMLFlipBook>;

export default Book;
