import React, { Component } from 'react';

class Band extends Component {
  render() {
    const band = this.props.band

    return(
      <div>
        <li>{band.name}</li>
        <span><button onClick={() => this.props.deleteBand(band.id)}>DELETE</button></span>
      </div>
    );
  }
};

export default Band;