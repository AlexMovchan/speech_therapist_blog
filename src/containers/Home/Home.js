import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET, PUT } from '../../fetchRequest';
import Blog from '../../components/Blog/Blog';

// @connect(state => ({
//   data: state.blog
// }))
class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    };
  }

  componentWillMount() {
    this.getAllUserData();
  }

  getAllUserData = () => {
    GET('/notes/all').then(res => this.setState({ data: res }));
  };

  changeUser = (userHashId, name, surname) => {
    PUT('/notes/all', { _id: userHashId, name, surname });
  };

  render() {
    const { data } = this.state;
    console.log(data);
    console.log(this.props.data);

    return (
      <div className="App">
        <h3>
          Home
        </h3>
        <Blog
          data={new Date().toLocaleDateString()}
          time={new Date().toLocaleTimeString()}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.blog.data
  };
}

export default connect(mapStateToProps)(Home);
