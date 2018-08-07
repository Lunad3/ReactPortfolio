import React, { Component } from "react";

import { Parallax } from "react-materialize";

import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="Project">

        <Parallax imageSrc={this.props.thumbnail}/>
        <div className="section white">
          <h2 className="header">TITLE</h2>
          <p className="grey-text text-darken-3 lighten-3">SUMMARY</p>
          <p className="grey-text text-darken-3 lighten-3">SUMMARY</p>
          <p className="grey-text text-darken-3 lighten-3">SUMMARY</p>
          <p className="grey-text text-darken-3 lighten-3">SUMMARY</p>
          <p className="grey-text text-darken-3 lighten-3">SUMMARY</p>
          <p className="grey-text text-darken-3 lighten-3">SUMMARY</p>
        </div>
      </div>
    );
  };
};

export default Project;
