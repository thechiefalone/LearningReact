import React, { Component } from "react";

class EditableArea extends Component {
  constructor() {
    super();
    this.state = {
      enable: false,
      custom: "",
      placeholder: "",
      value: ""
    };
  }
  changeStatus = () => {
    this.setState(prevState => ({
      enable: !prevState.enable
    }));
  };
  changeHandler = e => {
    this.setState({
      value: e.target.value
    });
    this.props.change(this.state.value);
  };
  static getDerivedStateFromProps(props, state) {
    if (
      props.custom !== state.custom ||
      props.placeholder !== state.placeholder
    ) {
      return { custom: props.custom, placeholder: props.placeholder };
    } else {
      return state;
    }
  }
  render() {
    let style = [
      this.state.custom,
      this.state.enable ? "only-text" : "can-edit"
    ].join(" ");
    return (
      <div>
        <textarea
          name={this.props.item}
          className={style}
          readOnly={this.state.enable}
          onClick={this.changeStatus}
          onChange={this.changeHandler}
          placeholder={this.state.placeholder}
        />
      </div>
    );
  }
}

export default EditableArea;
