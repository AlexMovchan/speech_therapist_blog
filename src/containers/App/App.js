import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import configureStore from '../../redux/store';

const store = configureStore();

export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <Header />
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                    </React.Fragment>
                </Router>
            </Provider>
        ) 
    }
}