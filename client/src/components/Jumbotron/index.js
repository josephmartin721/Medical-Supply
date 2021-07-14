import React from "react";
import background from "../../images/background.png"

function Jumbotron({ children }) {
  return (
    <div
      style={{backgroundImage: `url(${background})`, borderStyle:"solid", borderWidth:"5px", borderColor:"white", clear: "both", textAlign: "center", 
      paddingBottom:"1%", paddingTop: "1%", paddingLeft:"5%", paddingRight:"5%"}}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
