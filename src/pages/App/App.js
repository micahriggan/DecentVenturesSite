import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";
import Footer from "../../components/Footer/Footer";
import Posts from "../Posts/Posts";
import Blogs from "../Blogs/Blogs";
import Courses from "../Courses/Courses";



const customHistory = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={customHistory}>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/blog" component={Blogs} />
            <Route exact path="/courses" component={Courses} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
