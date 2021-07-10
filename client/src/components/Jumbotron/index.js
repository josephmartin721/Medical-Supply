import React from "react";
import background from "../../images/background.png"

function Jumbotron({ children }) {
  return (
    <div
      style={{backgroundImage: `url(${background})`, borderStyle:"solid", borderWidth:"5px", borderColor:"white", height: 660, clear: "both", paddingTop: 35, textAlign: "center"}}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
