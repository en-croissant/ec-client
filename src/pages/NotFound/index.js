import React from "react";

import "./style.css";

const NotFound = () => {

  return (
    <>
      <div id="not-found-div">
        <p id="not-found" role="alert">
          Sorry, we can't find the page you're looking for!
        </p>
        <a className="goBack" href="/">
          <span>Return Home</span>
        </a>
      </div>
    </>
  );
};

export default NotFound
