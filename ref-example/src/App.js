import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.state = {
      firstName: "",
      lastName: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value
    });
  };
  render() {
    return (
      <div>
        <h1>React Ref - createRef</h1>
        <h3>First Name: {this.state.firstName}</h3>
        <h3>Last Name: {this.state.lastName}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.firstName} />
          <input type="text" ref={this.lastName} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
