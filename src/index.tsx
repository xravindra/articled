import * as React from 'react';
import * as ReactDOM from "react-dom";

import Root from './components/Root';
import "./styles.css";
import "./styles.scss";

var mountNode = document.getElementById("root");
ReactDOM.render(<Root />, mountNode);
