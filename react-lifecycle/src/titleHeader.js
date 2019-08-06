import React from "react";

class TitleHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("sync state to props");
    console.log("new props: ", props.newTitle);
    console.log("old state: ", state.title);
    if (state.title !== props.newTitle) {
      return {
        title: props.newTitle
      };
    } else {
      return null;
    }
  }
  componentDidMount() {
    console.log("component did mount", this.state.title);
    let header = document.querySelector("h1");
    header.style.backgroundColor = "blue";
  }
  componentDidUpdate() {
    console.log("component did update", this.state.title);
    let header = document.querySelector("h1");
    header.style.backgroundColor = "red";
  }
  componentWillUnmount() {
    console.log("component will be unmounted");
    alert("componenet unmounted");
  }

  render() {
    console.log("render component ", this.state.title);
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default TitleHeader;
