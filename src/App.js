import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './history';
import HomeComponent from './components/Home';
import FormComponent from './components/Form';
import AdminComponent from './components/Admin';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/form" component={FormComponent} />
        <Route path="/admin" component={AdminComponent} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
