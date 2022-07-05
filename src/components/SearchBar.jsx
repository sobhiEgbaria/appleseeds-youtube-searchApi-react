import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  state = { input: "" };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onInputSubmit(this.state.input);
  };

  render() {
    return (
      <>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onSubmit}>
            <div className=" field">
              <label>video search</label>
              <input
                type="text"
                placeholder="Search a very wide input..."
                value={this.state.input}
                onChange={(e) => {
                  this.setState({ input: e.target.value });
                }}
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SearchBar;
