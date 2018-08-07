import React, { Component } from "react";

import { Navbar, NavItem } from "react-materialize";

import "./Header.css";

class Header extends Component {

  render() {
    return (
      <Navbar brand='logo' right>
        <NavItem href='/contact'>Contact</NavItem>
      </Navbar>
    );
  };
};

export default Header;