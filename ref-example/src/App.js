import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.company = React.createRef();
    this.email = React.createRef();
    this.education = React.createRef();
    this.country = React.createRef();
    this.state = {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      education: "",
      country: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      company: this.company.current.value,
      email: this.email.current.value,
      education: this.education.current.value,
      country: this.country.current.value
    });
  };
  render() {
    return (
      <div>
        <h1>React Ref - createRef</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <input
                type="text"
                placeholder="First Name"
                ref={this.firstName}
              />
            </li>
            <li>
              <input type="text" placeholder="Last Name" ref={this.lastName} />
            </li>
            <li>
              <input type="text" placeholder="Company" ref={this.company} />
            </li>
            <li>
              <input type="text" placeholder="Email" ref={this.email} />
            </li>
            <li>
              <input type="text" placeholder="Education" ref={this.education} />
            </li>
            <li>
              <input type="text" placeholder="Country" ref={this.country} />
            </li>
            <button>Submit</button>
          </ul>
          <table>
            <tr>
              <td>First Name : </td>
              <td>{this.state.firstName}</td>
            </tr>
            <tr>
              <td>Last Name : </td>
              <td>{this.state.lastName}</td>
            </tr>
            <tr>
              <td>Company : </td>
              <td>{this.state.company}</td>
            </tr>
            <tr>
              <td>Email : </td>
              <td>{this.state.email}</td>
            </tr>
            <tr>
              <td>Education : </td>
              <td>{this.state.education}</td>
            </tr>
            <tr>
              <td>Country : </td>
              <td>{this.state.country}</td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default App;
