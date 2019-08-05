import React from "react";
import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div className="Body">
        <div id="heart" />
        <h1>Welcome onboard with Reactjs Course</h1>
        <p id="body-paragraph">
          This is the course for learning Reactjs Library
        </p>
      </div>
    );
  }
}

export default Body;
