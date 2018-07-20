import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container, DataContainer, Link, Header, BlogText
} from './style';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    data: PropTypes.string,
    time: PropTypes.string,
    post: PropTypes.object.isRequired,
    onDelete: PropTypes.func
  };

  static defaultProps = {
    data: false,
    time: '',
    onDelete: () => {}
  };

  render() {
    const {
      data,
      time,
      post,
      onDelete
    } = this.props;
    return (
      <Container>
        <div
          className="remove-btn"
          onClick={() => onDelete(post._id, post.header)}
          onKeyPress={() => onDelete(post._id, post.header)}
        >
          X
        </div>
        <DataContainer>
          <Link href="##">
            {data
            }
          </Link>
          <Link href="##">
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
