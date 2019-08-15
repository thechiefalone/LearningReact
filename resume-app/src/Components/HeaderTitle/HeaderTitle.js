import React, { Component } from "react";
import InputText from "../EditableText/EditableText";
import "./HeaderTitle.css";
import EditableText from "../EditableText/EditableText";

class HeaderTitle extends Component {
  state = {
    name: "",
    prof: ""
  };
  ChangeValue = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    console.log("header component value", this.state);
    return (
      // we uesd three EditableText component only in the header
      <div className={"header"}>
        <div>
          <InputText
            custom={"name"}
            change={this.ChangeValue}
            item={"name"}
            placeholder={"Name SureName"}
          />

          <InputText
            custom={"prof"}
            cusotm={"prof"}
            change={this.ChangeValue}
            placeholder={"Profession"}
          />
        </div>
        <div className={"photo"}>
          <img src={""} alt="" />
        </div>
      </div>
    );
  }
}
export default HeaderTitle;
