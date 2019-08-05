import React from "react";
import "./LeftNavigation.css";

class LeftNavigation extends React.Component {
  render() {
    return (
      <div className="LeftNavigation">
        <nav>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Products</span>
            </li>
            <li>
              <span>Services</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LeftNavigation;
