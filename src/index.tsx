import * as React from 'react';
import * as ReactDOM from "react-dom";

import Root from './components/root';
import 'antd/dist/antd.css';
import './styles.css';
import './styles.scss';

var mountNode = document.getElementById("root");
ReactDOM.render(<Root />, mountNode);
