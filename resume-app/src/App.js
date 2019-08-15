import React from "react";
import "./App.css";

import Header from "./Components/HeaderTitle/HeaderTitle";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
