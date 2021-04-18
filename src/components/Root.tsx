import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';

class Root extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default Root;
