import React from "react";
import ReactDOM from "react-dom";

function PopUp() {
  return ReactDOM.createPortal(
    <div>
      <h1> Portals Demo</h1>
    </div>,
    document.getElementById("card-popup")
  );
}

export default PopUp;
