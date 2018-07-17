import React from 'react';
import { Link } from 'react-router-dom';
import { Head, Image } from './style';

const Header = () => (
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
      <Image>
        <img src="./sign_in.png" alt="sign in" />
      </Image>
    </ul>
  </Head>
);

export default Header;
