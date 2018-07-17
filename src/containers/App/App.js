import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import configureStore from '../../redux/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
