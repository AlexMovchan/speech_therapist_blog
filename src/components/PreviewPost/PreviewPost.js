import React from 'react';
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

export default PreviewPost;
