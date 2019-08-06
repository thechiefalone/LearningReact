import React from "react";
import "./Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InputValue: ""
    };
  }
  ChangeTitle(event) {
    this.setState({
      InputValue: event.target.value
    });
    this.props.titleValue(event.target.value);
  }
  render() {
    return (
      <div className="Body">
        <div id="heart" />
        <h1>Welcome onboard with Reactjs Course</h1>
        <p id="body-paragraph">
          This is the course for learning Reactjs Library
        </p>
        <form className="form">
          <input
            onChange={e => {
              this.ChangeTitle(e);
            }}
            type="text"
            name="input"
            placeholder="Just Write:)"
          />
        </form>
        <p className="inputParagraph">{this.state.InputValue}</p>
      </div>
    );
  }
}

export default Body;
