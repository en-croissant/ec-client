import React from "react";
import HTMLFlipBook from 'react-pageflip';
import "./style.css";



function Book(props) {
  return (
    <>
      <div>
        <div>
          <h1>Hello</h1>
        </div>
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
        <div className="leftpage">Page 1</div>
        <div className="rightpage">Page 2</div>
        <div className="leftpage">Page 3</div>
        <div className="rightpage">Page 4</div>
        <div className="leftpage">Page 5</div>
        <div className="rightpage">Page 6</div>
      </HTMLFlipBook>
      ;
      <a className="goBack" href="/">
        <span>Go back</span>
      </a>
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
