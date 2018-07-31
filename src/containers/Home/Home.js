import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  GET, PUT, POST, DEL
} from '../../fetchRequest';
import PostSection from '../../components/Blog/PostSection';
import NewPost from '../../components/Blog/NewPost';
import Button from '../../components/Button/Button';
import { savePostsToStore } from '../../redux/modules/blog';
import {
  Container, Ava, UserStatus, Posts
} from './style';


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
    // copy values Object and add a publication time parametr
  const modernPost = Object.assign({}, post);
  modernPost.publication_date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

    POST('/posts', modernPost)
      .then(this.getPosts());
  }

  deletePost = (postID, header) => {
    if (window.confirm(`are you sure delete post ${header}?`)) {
      DEL('/posts', { id: postID })
        .then(this.getPosts());
    }
  }

  render() {
    const { posts, modalIsOpen, isAdmin, dispatch } = this.props;
    console.log('posts - ', posts);
    return (
      <Container>
        <Ava>
          <div className="ava" />
          <UserStatus type="text" isAdmin={isAdmin} readOnly={!isAdmin} placeholder="This will be status" />
          <Button text={'Відправити повідомлення'} colorScheme={'success'} />
        </Ava>

        <Posts>
        {isAdmin ? <NewPost addPost={this.addPost} dispatch={dispatch} /> : ''}

        {posts
          ? posts.map(post => (
            <PostSection
              isAdmin={isAdmin}
              onDelete={this.deletePost}
              key={post._id}
              post={post}
            />
          ))
          : ''
        }
        </Posts>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.blog.data,
    modalIsOpen: state.modal.modalIsOpen,
    isAdmin: state.admin.isAdmin
  };
}

export default connect(mapStateToProps)(Home);
