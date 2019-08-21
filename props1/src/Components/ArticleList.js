import React, { Component } from "react";
import ArticleItemInList from "./ArticleItemInList";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.list !== state.list) {
      return {
        list: props.list
      };
    } else {
      return null;
    }
  }

  deleteItem = id => {
    this.props.deleteItem(id);
  };
  showItem = id => {
    this.props.showItem(id);
  };
  render() {
    console.log(this.state);
    return (
      <div className="d-flex">
        {this.state.list.map((item, index) => {
          return (
            <ArticleItemInList
              key={index}
              title={item.title}
              body={item.body}
              deleteHandler={() => this.deleteItem(item.id)}
              showHandler={() => this.showItem(item.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ArticleList;
