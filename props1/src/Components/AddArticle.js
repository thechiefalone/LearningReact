import React, { Component } from "react";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      body: ""
    };
  }

  changeHandler = e => {
    if (e.target.name == "title") {
      this.setState({
        title: e.target.value
      });
    } else if (e.target.name == "body") {
      this.setState({
        body: e.target.value
      });
    }
  };

  submitHandler = e => {
    if (this.state.title !== "" && this.state.body !== "") {
      this.setState(prevState => {
        return {
          id: prevState.id + 1,
          title: "",
          body: ""
        };
      });
      //   use getArticle property to pass data to parent
      this.props.getArticle(this.state);
    }
  };

  render() {
    return (
      <div className="card m-auto" style={{ width: "40rem" }}>
        <div className="card-header">New Article</div>
        <div className="form-group m-3">
          <label>Title</label>
          <input
            className="form-control"
            name="title"
            onChange={e => this.changeHandler(e)}
          />
        </div>
        <div className="form-group m-3">
          <label>Body</label>
          <textarea
            className="form-control"
            name="body"
            onChange={e => this.changeHandler(e)}
          />
        </div>
        <div className="form-group m-3">
          <button className="btn btn-success" onClick={this.submitHandler}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddArticle;
