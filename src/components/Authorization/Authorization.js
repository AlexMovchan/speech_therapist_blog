import React from 'react';
import { Form, Field } from 'react-final-form';
import { Container, AuthorizationForm } from './style';

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
          handleSubmit,
          form,
          submitting,
          pristine,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="login"
                component="input"
                className="styledInput"
                type="text"
                placeholder="Login"
              />
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
            <button type="submit">
                Увійти
            </button>
          </form>
        )}
      />
    </AuthorizationForm>
  </Container>
);

export default Authorization;
