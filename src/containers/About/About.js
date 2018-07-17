import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="About">
        <h2>
          About
        </h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(About);
