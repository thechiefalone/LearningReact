import React from "react";
import "./App.css";
import Area from "./EditableArea/EditableArea";

class App extends React.Component {
  changeValue = value => {
    this.setState({
      areaValue: value
    });
  };
  render() {
    return (
      <div className="app">
        <div>
          <Area change={this.changeValue} />
        </div>
      </div>
    );
  }
}

export default App;
