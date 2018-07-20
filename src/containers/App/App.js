import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import { toggleModal } from '../../redux/modules/modal';
import { ModalContainer, AuthorizationForm, AppContainer } from './style';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.5',
    padding: '0',
    borderColor: 'black'
  }
};

Modal.setAppElement('#root');

class App extends Component {
  afterOpenModal = () => {
    console.log('afterOpenModal');
  }

  closeModal = () => {
    const { dispatch } = this.props;
    dispatch(toggleModal('CLOSE'));
  }

  addPost = () => {
    console.log('lolol');
  }

  render() {
    const { dispatch, modalIsOpen } = this.props;
    return (
      <Router>
        <Fragment>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ModalContainer>
              <button type="button" className="close-modal" onClick={this.closeModal}>
                Х
              </button>
              <h2>
                Hello Olena! Please enter the login & password!😊
              </h2>
              <AuthorizationForm>
                <Form
                  onSubmit={this.addPost}
                  render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
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
            </ModalContainer>
          </Modal>
          <Header click={dispatch} />
          <AppContainer>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
            </Switch>
          </AppContainer>
        </Fragment>
      </Router>
    );
  }
}


function mapStateToProps(state) {
  return {
    modalIsOpen: state.modal.modalIsOpen
  };
}

export default connect(mapStateToProps)(App);
