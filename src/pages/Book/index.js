import React from "react";
// import HTMLFlipBook from 'react-pageflip';
import "./style.css";

// function Book(props) {
//   return (
//     <>
//       <div>
//         <div>
//           <h1>Hello</h1>
//         </div>
//         <HTMLFlipBook className="HTMLFlipBook" width={300} height={500}>
//           <div className="nopage"></div>
//           <div className="bookfront">
//             <div className="bookfronttext">NOTEBOOK</div>
//           </div>
//           <div className="leftpage">Page 1</div>
//           <div className="rightpage">Page 2</div>
//           <div className="leftpage">Page 3</div>
//           <div className="rightpage">Page 4</div>
//           <div className="leftpage">Page 5</div>
//           <div className="rightpage">Page 6</div>
//         </HTMLFlipBook>
//       </div>
//       <a className="goBack" href="/">
//         <span>Go back</span>
//       </a>
//     </>
//   );
// }

// export default Book;

function Book() {
  return (
    <>
      <h1>Hello World</h1>
      <div id="login_front_cover">
        <div id="login_spine"></div>
        <div className="leftpage">Page 1</div>
        <div className="rightpage">Page 2</div>
        <div className="leftpage">Page 3</div>
        <div className="rightpage">Page 4</div>
        <div className="leftpage">Page 5</div>
        <div className="rightpage">Page 6</div>
        <div id="login_back_cover"></div>
      </div>
    </>
  );
}

export default Book;
