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
  };

  static defaultProps = {
    data: false,
    time: ''
  };

  render() {
    const { data, time } = this.props;

    return (
      <Container>

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
            Its header of article
        </Header>

        <BlogText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem atque
          temporibus distinctio iusto possimus sit enim sunt, recusandae
          consequuntur totam culpa odio laudantium amet eligendi ratione
          reiciendis suscipit provident placeat?
        </BlogText>
      </Container>
    );
  }
}