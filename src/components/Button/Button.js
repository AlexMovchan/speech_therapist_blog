import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const Button = ({ text, colorScheme, width }) => (
  <StyledButton colorScheme={colorScheme} width={width}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string,
  colorScheme: PropTypes.string,
  width: PropTypes.string
};

Button.defaultProps = {
  text: '',
  colorScheme: '',
  width: ''
};


export default Button;
