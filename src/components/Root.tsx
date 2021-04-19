import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Page from './Page';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/page" component={Page} />
      </BrowserRouter>
    );
  }
}

export default Root;