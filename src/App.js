import React, { Component } from "react";
import logo from "./color_logo_transparent.svg";
import "./App.css";
import AppList from "./components/Apps/Apps";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AppList />
        <Footer />
      </div>
    );
  }
}

export default App;
