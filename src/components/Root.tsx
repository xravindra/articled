import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import Page from './Page';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page" component={Page} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default hot(Root);