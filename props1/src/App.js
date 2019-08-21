import React from "react";
import "./App.css";

import AddArticle from "./Components/AddArticle";
import ArticleList from "./Components/ArticleList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItem: null,
      listArticle: []
    };
  }

  AddToList = articleD => {
    const TemArray = this.state.listArticle;
    TemArray.push(articleD);
    this.setState({
      listArticle: TemArray
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="p-4">
        <AddArticle getArticle={articleData => this.AddToList(articleData)} />
        <ArticleList
          list={this.state.listArticle}
          deleteItemId={id => this.deleteItem(id)}
          showItemId={id => this.showItem(id)}
        />
      </div>
    );
  }
}

export default App;
