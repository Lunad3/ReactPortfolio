import React, { Component } from "react";
import {Footer as MFooter} from "react-materialize";
import "./Footer.css";

class Footer extends Component {

  render() {
    return (
      <MFooter className="myFooter" copyrights="&copy 2018. All rights reserved">
        <h5>THIS IS THE FOOTER COMPONENT</h5>
      </MFooter>
    );
  };
};

export default Footer;