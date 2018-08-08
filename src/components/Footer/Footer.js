import React, { Component } from "react";
import {Footer as MFooter} from "react-materialize";
import "./Footer.css";

class Footer extends Component {

  render() {

    return (
      <div className="Footer">
        <hr/>
        <ol>
          <li>© 2018. All rights reserved</li>
          <li><a href="https://github.com/Lunad3"><i className="fab fa-github"/> MyGitHub</a></li>
          <li><a href="https://www.linkedin.com/in/lunad3/"><i className="fab fa-linkedin"/> MyLinkedIn</a></li>
          <li>cell:(408)-816-0227</li>
          <li>email: 123.daniel.luna@gmail.com</li>
        </ol>
      </div>
    );
  };
};

export default Footer;