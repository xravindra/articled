import { Switch, Route } from 'react-router-dom';
import App from './App';
import * as React from 'react';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    );
  }
}

