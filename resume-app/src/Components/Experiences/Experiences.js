import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

class Experiences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      exps: []
    };
  }

  AddNewExpc = () => {
    let data = this.state.exps;
    data.unshift({
      id: this.state.counter
    });
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
        exps: data
      };
    });
  };
  ChangeValueHandler()
  render() {
    return (
      <div>
        <h4>Work Experiences</h4>
        <button onClick={this.AddNewExpc} className={"add-btn"}>
          {" "}
          +{" "}
        </button>
        <div>
          {this.state.exps.map((item, i) => (
            <div key={i}>
              <ExperienceItem
                itemId={item.id}
                ChangeValue={this.ChangeValueHandler}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Experiences;
