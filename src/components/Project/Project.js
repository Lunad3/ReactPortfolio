import React, { Component } from "react";

import { Card, CardTitle, Icon } from "react-materialize";

import "./Project.css";

class Project extends Component {
  render() {
    return (
      <Card horizontal 
        className="Project"
        header={<CardTitle image={this.props.thumbnail}/>}
        actions={[
          <a href={this.props.gitHubRepoLink}><i className="fab fa-github"/> github-repo</a>,
          <a href={this.props.websiteLink}><Icon>link</Icon>Website</a>
        ]}
      >
        <h4>{this.props.title}</h4>
        <p>
          {this.props.summary}
        </p>
      </Card>
    );
  };
};

export default Project;
