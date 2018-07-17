import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET, PUT } from '../../fetchRequest';
import Blog from '../../components/Blog/Blog';
import { SaveDataToStore } from '../../redux/modules/blog';

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
    console.log('will mount');
    this.getAllUserData();
    // this.changeUser('5b45d76a8a08d732f4ee3b65', 'Chris', 'Brown');
  }

  getAllUserData = () => {
    const { dispatch } = this.props;

    GET('/notes/all')
      .then(res => {
        return dispatch(SaveDataToStore(res))
      })
  }  

  changeUser = (userHashId, name, surname) => {
    PUT('/notes/all', { _id: userHashId, name, surname });
  };

  render() {
    const { posts } = this.props;

    console.log('rendered');

    return (
      <div className="App">
        <h3>
          Home
        </h3>
        <button onClick={this.getAllUserData}> Get dispatch </button>
        {posts
          ? posts.map(post => (
            <Blog
              key={post._id}
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
    posts: state.blog.data
  };
}

export default connect(mapStateToProps)(Home);
