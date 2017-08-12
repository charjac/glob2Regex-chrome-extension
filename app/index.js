import React, { Component } from 'react';
import glob2Regex from 'glob-to-regexp';

export default class App extends Component {
  state = {
    glob: '',
    regex: ''
  }

  handleGlobChange = (evt) => {
    this.setState({
      glob: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      regex: glob2Regex(this.state.glob),
      glob: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.glob} onChange={this.handleGlobChange} />
          <button type="submit">
            Gimme da regex
          </button>
        </form>
        <div>
          {this.state.regex.toString()}
        </div>
      </div>
    );
  }
}
