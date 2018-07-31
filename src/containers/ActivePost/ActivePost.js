import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GET } from '../../fetchRequest';
import Button from '../../components/Button/Button';

import { Container } from './style';

class ActivePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePost: {}
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    GET(`/posts/${id}`)
      .then((res) => {
        this.setState(() => ({ activePost: res }));
      });
  }

  render() {
    const { activePost } = this.state;

    return (
      <Container>
        <Link to="/" className="link-to-home">
          <Button colorScheme="light" text="Назад" width="100px" />
        </Link>
        <h1>
          {activePost.header}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: activePost.post }} />
      </Container>
    );
  }
}

export default ActivePost;
