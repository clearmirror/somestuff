// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation/navigation';
import { Router, Route, Link, hashHistory} from 'react-router';
import HomePage from './pages/homepage/HomePage';
import appReducers from './redux/reducer/reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import FormPage from './pages/form/formPage';
import HistoryPage from './pages/history/historyPage';
import './global.scss';

var About = React.createClass({
  render: function() {
    return null;
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Navigation />
        <Router history={hashHistory}>
          <Route path="/" component={HomePage}></Route>
          <Route path="/forms" component={FormPage}/>
          <Route path="/history/:id" component={HistoryPage}/>
          <Route path="/*" component={NoMatch}/>
        </Router>
      </div>
    );
  }
});

var NoMatch = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This is no match</h1>
      </div>
    );
  }
});



let store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('appContainer')
);
