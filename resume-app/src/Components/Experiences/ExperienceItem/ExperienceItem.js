import React, { Component } from "react";

import InputText from "../../EditableText/EditableText";
import InputArea from "../../EditableArea/EditableArea";

class ExperienceItem extends Component {
  render() {
    return (
      <div className={"exp"}>
        <InputText
          id={this.props.itemID}
          custom={"title"}
          change={this.props.ChangeValue}
          item={`company- ${this.props.itemID}`}
          placeholder={"Company"}
        />
        <InputText
          id={this.props.itemID}
          custom={"title"}
          change={this.props.ChangeValue}
          item={`title- ${this.props.itemID}`}
          placeholder={"`Title`"}
        />
        <InputArea
          id={this.props.itemID}
          custom={"desc"}
          change={this.props.ChangeValue}
          item={`desc- ${this.props.itemID}`}
          placeholder={"`Job Description`"}
        />
      </div>
    );
  }
}

export default ExperienceItem;
