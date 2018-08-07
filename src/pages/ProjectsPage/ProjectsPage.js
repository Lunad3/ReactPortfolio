import React, { Component } from "react";

import Project from "../../components/Project";

import "./ProjectsPage.css";

class ProjectsPage extends Component {

  render() {
    return (
      <div>
        <Project
          thumbnail="/images/StockRun.PNG"
          title="Stock Run"
          summary=
          ''
          gitHubRepoLink="https://github.com/TeamZebraUCI/Project3"
          websiteLink=""
        />
        <Project
          thumbnail="/images/ClickGame.PNG"
          title="ClickGame"
          summary=
          ''
          gitHubRepoLink="https://github.com/Lunad3/ClickGame"
          websiteLink="https://uci-click-game.herokuapp.com/"
        />
        <Project
          thumbnail="/images/TriviaGame.PNG"
          title="Trivia Game"
          summary=
          ''
          gitHubRepoLink="https://github.com/Lunad3/TriviaGame"
          websiteLink="https://lunad3.github.io/TriviaGame/"
        />
        <Project
          thumbnail="/images/WordGuessGame.PNG"
          title="Word Guess Game"
          summary=
            ''
          gitHubRepoLink="https://github.com/Lunad3/Word-Guess-Game"
          websiteLink="https://lunad3.github.io/Word-Guess-Game/"
        />
        <Project
          thumbnail="/images/LocalLeaders.PNG"
          title="Local Leaders"
          summary=
          ''
          gitHubRepoLink="https://github.com/neoScuba/Neapolitan-"
          websiteLink="https://neoscuba.github.io/Neapolitan-/"
        />
      </div>
    );
  };
};

export default ProjectsPage;