import React from "react";
import "./App.css";

import Area from "./EditableArea/EditableArea";
import Text from "./EditableText/EditableText";

class App extends React.Component {
  areaValueHandler = value => {
    this.setState({
      areaValue: value
    });
  };
  textValueHandler = value => {
    this.setState({
      textValue: value
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="container">
          <Area change={this.areaValueHandler} />
          <Text change={this.textValueHandler} />
        </div>
      </div>
    );
  }
}

export default App;
