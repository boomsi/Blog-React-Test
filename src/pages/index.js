import React from 'react';
import './index.less';
import { Row, Col, Menu, Input } from 'antd'
import Show from './Show'

const { Search } = Input
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      current: ['home', 'life', 'message', 'user']
    }
  }
  render() {
    return (
      <div className="container">
        <header className='header'>
          <Row type='flex' align='middle'>
            <Col md={14} offset={2} xs={6}>
              <Menu defaultSelectedKeys={['home']} mode="horizontal" theme='light'>
                <Menu.Item key="home">
                  Home
                </Menu.Item>
                <Menu.Item key="life">
                  LIFE
                </Menu.Item>
                <Menu.Item key="message">
                  MESSAGE
                </Menu.Item>
                <Menu.Item key="user">
                  USER
                </Menu.Item>
              </Menu>
            </Col>
            <Col md={8} xs={16}>
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
            </Col>
          </Row>
        </header>
        <div className='body'>
          <Show />
        </div>
      </div>
    )
  }
}

export default App;
