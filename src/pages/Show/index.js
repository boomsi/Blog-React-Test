import React from 'react';
import './index.less';
import { Row, Col } from 'antd'
import './index.less'

import Interduce from './components/Interduce'
import Blog from './components/Blog'
import Life from './components/Life'

function App() {
  return (
    <div className="show_container">
      <div className='safe_introduce'>
        <Interduce />
      </div>
      <Row gutter={24}>
        <Col md={8} xs={22} offset={2}>
          <Blog />
        </Col>
        <Col md={12} xs={24}>
          <Life />
        </Col>
      </Row>
    </div>
  )
}

export default App;
