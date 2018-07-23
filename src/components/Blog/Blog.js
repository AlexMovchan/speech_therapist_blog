import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container, DataContainer, Header, BlogText
} from './style';
import { setActivePost } from '../../redux/modules/activePost';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    data: PropTypes.string,
    time: PropTypes.string,
    post: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    isAdmin: PropTypes.bool
  };

  static defaultProps = {
    data: false,
    time: '',
    isAdmin: false,
    onDelete: () => {}
  };

  render() {
    const {
      data,
      time,
      post,
      onDelete,
      isAdmin
    } = this.props;
    return (
      <Container>
        <div
          className={`remove-post ${isAdmin ? '' : 'none'}`}
          onClick={() => onDelete(post._id, post.header)}
          onKeyPress={() => onDelete(post._id, post.header)}
        >
          X
        </div>
        <DataContainer>
          <Link to={`/post/${post._id}`}>
            {data}
          </Link>
          <Link to="##">
            {time}
          </Link>
        </DataContainer>
        <Header>
          {post.header}
        </Header>

        <BlogText>
          <pre className="lol" dangerouslySetInnerHTML={{ __html: post.post }} />
        </BlogText>
      </Container>
    );
  }
}
