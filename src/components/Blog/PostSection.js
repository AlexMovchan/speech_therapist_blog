import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FacebookProvider, { Like, Comments } from 'react-facebook';
import {
  Container,
  DataContainer,
  Header,
  BlogText,
  FacebookComments
} from './style';

export default class PostSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    post: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    isAdmin: PropTypes.bool
  };

  static defaultProps = {
    isAdmin: false,
    onDelete: () => {}
  };

  render() {
    const {
      post,
      onDelete,
      isAdmin
    } = this.props;
    return (
      // <FacebookProvider appId="233858604113631">
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
              {post.publication_date || 'недавно'}
            </Link>
          </DataContainer>

          <Header>
            {post.header}
          </Header>

          <BlogText>
            <pre className="lol" dangerouslySetInnerHTML={{ __html: post.post }} />
          </BlogText>

          {/* <FacebookComments style={{ clear: 'both' }}>
            <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />

            <Comments href="http://www.facebook.com" />
          </FacebookComments> */}
        </Container>
      // </FacebookProvider>
    );
  }
}
