import React, { Component } from "react";
import ArticleItemInList from "./ArticleItemInList";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  deleteItem = id => {
    this.props.deleteItem(id);
  };
  showItem = id => {
    this.props.showItem(id);
  };
  render() {
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
