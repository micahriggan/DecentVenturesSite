import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Apps from "../Apps/Apps";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";



const customHistory = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={customHistory}>
          <Switch>
            <Route exact path="/" component={Apps} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/courses" component={Courses} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
