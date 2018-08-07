// import react tools
import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";

// import materialize css and js
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";

// import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Pages
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NoMatchPage from "./pages/NoMatchPage";

class App extends Component {

  render() {
    return (
      <div className="Page">
        <Header/>
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={()=><HomePage/>}
            />
            <Route
              exact path="/contact"
              render={()=><ContactPage/>}
            />
            <Route 
              render={()=><NoMatchPage/>}
            />
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  };
};

export default App;
