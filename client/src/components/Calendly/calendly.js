import React, {Component} from "react";
import { InlineWidget } from "react-calendly";


const Calendly = () => {
    return (
      <div className="App">
        <InlineWidget url="https://calendly.com/medical-supply/meeting-for-products" />
      </div>
    );
  };

export default Calendly;