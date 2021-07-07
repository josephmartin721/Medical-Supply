import React from "react";
import { Col } from "react-materialize";
import Jumbotron from "../components/Jumbotron";
import background from "../images/background.png";

function NoMatch() {
  return (
    <Col xl={12} s={12}>
      <div className="section" style={{backgroundImage: `url(${background})`, height: 150}}>
      </div>
      <Jumbotron>
        <h1 style={{color:"white"}}>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
    </Col>
  );
}

export default NoMatch;
