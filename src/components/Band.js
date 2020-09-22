import React, { Component } from 'react';

class Band extends Component {

  onClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.onClick}>
          Delete
        </button>
      </div>
    );
  }
};

export default Band;
