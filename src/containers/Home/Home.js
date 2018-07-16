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
      posts: ''
    };
  }

  componentWillMount() {
    this.getAllUserData();
  }

  getAllUserData = () => {
    GET('/notes/all').then(res => this.setState({ posts: res }));
  };

  changeUser = (userHashId, name, surname) => {
    PUT('/notes/all', { _id: userHashId, name, surname });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <h3>
          Home
        </h3>
        {posts
          ? posts.map(post => (
            <Blog
              post={post}
              data={new Date().toLocaleDateString()}
              time={new Date().toLocaleTimeString()}
            />
          ))
          : ''
        }
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
