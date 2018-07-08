import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";
import Footer from "../../components/Footer/Footer";
import Posts from "../Posts/Posts";
import Blogs from "../Blogs/Blogs";
import Courses from "../Courses/Courses";



const url = process.env.PUBLIC_URL;
const customHistory = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={url} history={customHistory}>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/blog" component={Blogs} />
            <Route exact path="/courses" component={Courses} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
