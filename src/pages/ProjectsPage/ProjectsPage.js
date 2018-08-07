import React, { Component } from "react";

import Project from "../../components/Project";

import "./ProjectsPage.css";

class ProjectsPage extends Component {

  render() {
    return (
      <div >
        MY PROJECTS
        <Project
          thumbnail="http://materializecss.com/images/parallax1.jpg"
        />
        <Project
          thumbnail="/images/Skyscraper.png"
        />
        <Project
          thumbnail="http://materializecss.com/images/parallax2.jpg"
        />
      </div>
    );
  };
};

export default ProjectsPage;