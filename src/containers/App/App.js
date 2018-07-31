import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import ActivePost from '../ActivePost/ActivePost';
import About from '../About/About';
import Modals from '../../components/Modals/Modals';
import Page404 from '../../components/404/Page404';
import { AppContainer } from './style';


const App = () => (
  <Router>
    <Fragment>
      <Modals />

      <Header />

      <AppContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post/:id" component={ActivePost} />
          <Route component={Page404} />
        </Switch>
      </AppContainer>
    </Fragment>
  </Router>
);


function mapStateToProps(state) {
  return {
    modalIsOpen: state.modal.modalIsOpen
  };
}

export default connect(mapStateToProps)(App);
