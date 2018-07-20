import React from 'react';
import { Container } from './style';

const PreviewPost = ({ post }) => (
  <Container dangerouslySetInnerHTML={{ __html: post }} />
);

export default PreviewPost;
