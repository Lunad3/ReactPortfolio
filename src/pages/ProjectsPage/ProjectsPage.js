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
          summary='This was a group project in which my focus was in the back end. I was responsible for creating the database using MySQL. I created the server to handle login requests, sign up requests, game update requests and ensuring the page responded accordingly. This was my first attempt at a login system and made sure that the servers response contained only boolean values as a step towards security.'
          gitHubRepoLink="https://github.com/TeamZebraUCI/Project3"
          websiteLink=""
        />
        <Project
          thumbnail="/images/RPGgame.PNG"
          title="RPG Game"
          summary='This was a group project in which my focus was in the back end. I was responsible for creating the database using MySQL. I created the server to handle login requests, sign up requests, game update requests and ensuring the page responded accordingly. This was my first attempt at a login system and made sure that the servers response contained only boolean values as a step towards security.'
          gitHubRepoLink="https://github.com/TeamZebraUCI/Project2Game"
          websiteLink="https://onlinerpgproj2.herokuapp.com/"
        />
        <Project
          thumbnail="/images/LocalLeaders.PNG"
          title="Local Leaders"
          summary='Local Leaders is a site where the user can input an address to list current government representatives all the way from US president down to county representatives. The offices are listed and when clicked they list out the people currently in that office. Clicking on a representative will display a quick wiki search of their names. The Wiki search results are displayed using an Iframe to allow the user complete freedom to use any wiki-links without rerouting the entire page. This site uses the google Civic API and WIki’s API.'
          gitHubRepoLink="https://github.com/neoScuba/Neapolitan-"
          websiteLink="https://neoscuba.github.io/Neapolitan-/"
        />
        <Project
          thumbnail="/images/ClickGame.PNG"
          title="ClickGame"
          summary='This is a game where the player must click a block they have not clicked already. The blocks are generated randomly after either a block or the refresh button are clicked. The number of blocks and colors per block can be adjusted in the code to support a much larger variety of blocks. Before the game starts, a node tree is generated, where each node is a color and each branch represents a unique block. The node tree is used to quickly find blocks and determine if blocks have already been clicked. I decided to use a node tree because it was an efficient way to map blocks and it is scalable.'
          gitHubRepoLink="https://github.com/Lunad3/ClickGame"
          websiteLink="https://uci-click-game.herokuapp.com/"
        />
        <Project
          thumbnail="/images/WordGuessGame.PNG"
          title="Word Guess Game"
          summary='The Word Guess Game is a version of hangman where the user uses the keyboard to guess letters. The game displays an alphabet demonstrating which letters have been guessed correctly and which ones have been guessed incorrectly. There is a set number of incorrect guesses the player can make before they lose the game.'
          gitHubRepoLink="https://github.com/Lunad3/Word-Guess-Game"
          websiteLink="https://lunad3.github.io/Word-Guess-Game/"
        />
      </div>
    );
  };
};

export default ProjectsPage;