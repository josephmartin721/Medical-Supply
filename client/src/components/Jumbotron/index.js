import React from "react";
// import M from "materialize-css";

function Jumbotron({ children }) {
  return (
    <div
      style={{borderStyle:"solid", borderWidth:"5px", borderColor:"white", height: 560, clear: "both", paddingTop: 100, marginBottom:10, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
