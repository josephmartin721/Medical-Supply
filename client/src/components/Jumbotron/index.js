import React from "react";
// import M from "materialize-css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
