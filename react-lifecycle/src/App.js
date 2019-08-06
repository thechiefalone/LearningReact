import React from "react";
import TitleHeader from "./titleHeader";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "default item",
      show: true,
      data: [
        {
          id: 1,
          title: "First Item"
        },
        {
          id: 2,
          title: "Second Item"
        },
        {
          id: 3,
          title: "Third Item"
        }
      ]
    };
  }
  changeTitle = title => {
    this.setState({
      value: title
    });
  };
  // showHandler() {
  //     let newShow;
  //     this.setState(
  //         function (prevState) {
  //             newShow = !prevState.show;
  //             return ({
  //                 show: newShow
  //             })
  //         }
  //     )
  // }
  showHandler = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };
  render() {
    const list = this.state.data.map(item => {
      return (
        <li key={item.id} onClick={() => this.changeTitle(item.title)}>
          {item.title}
        </li>
      );
    });
    return (
      <div className="wrapper">
        {this.state.show ? <TitleHeader newTitle={this.state.value} /> : null}
        <ul className="list">{list}</ul>
        <button className="btn" onClick={() => this.showHandler()}>
          Show/Hide
        </button>
      </div>
    );
  }
}

export default App;
