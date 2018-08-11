import React, { Component } from "react";

import { Card, CardTitle, Icon } from "react-materialize";

import "./Project.css";

class Project extends Component {
  render() {

    let classStr = "Project"
    
    if(!this.props.isMobile){
      classStr += " horizontal";
    }

    return (
      <Card
        key={this.props.projectkey+"-Card"}
        className={classStr}
        // className="Project"
        header={<CardTitle image={this.props.thumbnail}/>}
        actions={[
          <a key={this.props.projectkey+"-gitRepo"} href={this.props.gitHubRepoLink}><i className="fab fa-github"/> github-repo</a>,
          <a key={this.props.projectkey+"-webLink"} href={this.props.websiteLink}><Icon>link</Icon>Website</a>
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
