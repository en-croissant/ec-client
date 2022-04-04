import React from "react";
import HTMLFlipBook from 'react-pageflip';
import './style.css'



function Book(props) {
  return (
    <>
      <div>
        <h1 >Hello</h1>
      </div>
      <HTMLFlipBook width={300} height={500}>
          <div className="nopage"></div>
          <div className="bookfront"><div className="bookfronttext">NOTEBOOK</div></div>
          <div className="leftpage">Page 1</div>
          <div className="rightpage">Page 2</div>
          <div className="leftpage">Page 3</div>
          <div className="rightpage">Page 4</div>
          <div className="leftpage">Page 5</div>
          <div className="rightpage">Page 6</div>
      </HTMLFlipBook>
    </>
  );
}

export default Book;
  