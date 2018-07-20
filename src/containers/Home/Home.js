import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  GET, PUT, POST, DEL
} from '../../fetchRequest';
import Blog from '../../components/Blog/Blog';
import NewPost from '../../components/Blog/NewPost';
import { savePostsToStore } from '../../redux/modules/blog';
// import { CheckIsAdmin } from '../../redux/modules/admin';
import { HeadContainer, UserStatus } from './style';


class Home extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  static defaultProps = {
    posts: []
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.getPosts();
  }

  getPosts = () => {
    /* eslint-disable */    
    const { dispatch } = this.context.store;

    GET('/posts/all')
      .then(res => dispatch(savePostsToStore(res)));
  }

  changePost = (userHashId, name, surname) => {
    PUT('/posts/all', { _id: userHashId, name, surname });
  };

  addPost = (post) => {
    POST('/posts', post)
      .then(this.getPosts());
  }

  deletePost = (postID, header) => {
    console.log('delete - ', postID);
    if (window.confirm(`are you sure delete post ${header}?`)) {
      DEL('/posts', { id: postID })
        .then(this.getPosts());
    }
  }

  render() {
    const { posts, modalIsOpen, dispatch } = this.props;
    const isAdmin = false;

return (
      <div className="App">
        <HeadContainer>
          <div className="ava" />
          <UserStatus type="text" isAdmin={isAdmin} readOnly={!isAdmin} defaultValue="This will be status" />
        </HeadContainer>

        <NewPost addPost={this.addPost} dispatch={dispatch} />

        {posts
          ? posts.reverse().map(post => (
            <Blog
              onDelete={this.deletePost}
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
    posts: state.blog.data,
    modalIsOpen: state.modal.modalIsOpen
  };
}

export default connect(mapStateToProps)(Home);
