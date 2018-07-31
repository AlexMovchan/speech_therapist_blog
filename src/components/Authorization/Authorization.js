import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Container, AuthorizationForm } from './style';
import Button from '../Button/Button';

const Authorization = ({ closeModal, logIn }) => (
  <Container>
    <button type="button" className="close-modal" onClick={closeModal}>
      Х
    </button>
    <h2>
      Hello Olena! Please enter the login & password!
      <span role="img" aria-label="emojii">
        😊
      </span>
    </h2>
    <AuthorizationForm>
      <Form
        onSubmit={logIn}
        render={({
          handleSubmit, form,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="login" component="input" className="styledInput" type="text" placeholder="Login" />
            </div>
            <div>
              <Field
                name="pass"
                component="input"
                className="styledInput pass"
                type="password"
                placeholder="Password"
              />
            </div>
            <Button colorScheme="primary" type="submit" text="Увійти" />
          </form>
        )}
      />
    </AuthorizationForm>
  </Container>
);

Authorization.propTypes = {
  closeModal: PropTypes.func,
  logIn: PropTypes.string
};

Authorization.defaultProps = {
  closeModal: () => {},
  logIn: ''
};

export default Authorization;
