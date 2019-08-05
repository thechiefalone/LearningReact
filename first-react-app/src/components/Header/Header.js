import React from "react";
import logo from "../../logo.svg";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} alt={"react-logo"} />
        <a href="#">Home Page</a>
      </header>
    );
  }
}

export default Header;
