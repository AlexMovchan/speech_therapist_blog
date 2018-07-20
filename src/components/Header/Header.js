import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Head, Image } from './style';
import { toggleModal } from '../../redux/modules/modal';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { dispatch } = this.context.store;

    return (
      <Head>
        <ul>
          <li>
            <Link to="/about">
                About
            </Link>
          </li>
          <li>
            <Link to="/home">
                Home
            </Link>
          </li>
          <li>
            <Link to="/something">
                Something
            </Link>
          </li>
          <Image onClick={() => dispatch(toggleModal('OPEN', 'authorization'))}>
            <img src="./sign_in.png" alt="sign in" />
          </Image>
        </ul>
      </Head>
    );
  }
}
