import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './app/components/homepage/homepage';
import Cabinet from './app/components/cabinet/cabinet';
import NotFound from './app/components/NotFound/notfound';
import Auth from './app/components/auth/auth';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/auth/login" component={Auth} />
        <Route exact path="/auth/signup" component={Auth} />
        <Route exact path="/prices" component={HomePage} />
        <Route exact path="/cabinet" component={Cabinet} />
        <Route exact path="/cabinet/customers" component={Cabinet} />
        <Route exact path="/cabinet/analytics" component={Cabinet} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
