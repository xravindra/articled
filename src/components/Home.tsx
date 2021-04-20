
import * as React from 'react';
import Login from './login';
import { Row, Col, Card } from 'antd';
import './Home.scss';

export default class Home extends React.Component {
  render() {
    // console.log('styles',styles);
    return (
      <div className="loginPage">
        <Row>
          <Col span={24}>
            <Card className="loginCard" title="Bada Business" bordered={true}>
              <Login />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
