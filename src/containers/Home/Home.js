import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET, PUT } from '../../fetchRequest';
import Blog from '../../components/Blog/Blog';
import { SaveDataToStore } from '../../redux/modules/blog';
import { HeadContainer, NewPost, UserStatus } from './style';

// @connect(state => ({
//   data: state.blog
// }))
class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

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
    this.getAllUserData();
  }

  getAllUserData = () => {
    const { dispatch } = this.context.store;

    GET('/notes/all')
      .then(res => dispatch(SaveDataToStore(res)));
  }

  changeUser = (userHashId, name, surname) => {
    PUT('/notes/all', { _id: userHashId, name, surname });
  };

  render() {
    const { posts } = this.props;

    return (
      <div className="App">
        <HeadContainer>
          <div className="ava" />
          <UserStatus type="text" isAdmin={false} defaultValue="This will be status" />
        </HeadContainer>
        <button type="button" onClick={this.getAllUserData}>
          Get dispatch
        </button>
        <NewPost>
          <input type="text" className="header" placeholder="Введіть заголовок посту" />
          <textarea className="post" />
          <button type="button">
            Підтвердити
          </button>
        </NewPost>
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
