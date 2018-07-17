import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET, PUT } from '../../fetchRequest';

class Home extends Component {

  getAllUserData = () => {
    GET('/notes/all').then(res => this.setState({ posts: res }));
  };

  changeUser = (userHashId, name, surname) => {
    PUT('/notes/all', { _id: userHashId, name, surname });
  };

  render() {
    console.log(this.props.data);

    return (
        <div className="About">
            <h2>About</h2>
        </div>  
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state 
  };
}

export default connect(mapStateToProps)(Home);
