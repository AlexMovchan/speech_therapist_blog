import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, DataContainer, Header, BlogText
} from '../Blog/style';

const PreviewPost = ({ post }) => (
  <Container>
    <DataContainer />
    <Header>
      {post.header}
    </Header>

    <BlogText>
      <pre className="lol" dangerouslySetInnerHTML={{ __html: post.post }} />
    </BlogText>
  </Container>
);

PreviewPost.propTypes = {
  post: PropTypes.object,
};

PreviewPost.defaultProps = {
  post: {},

};


export default PreviewPost;
