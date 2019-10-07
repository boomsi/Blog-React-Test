import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Logo from './images/logo.png'

class Introduce extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <div className='introduce_wrapper'>
      <Row>
        <Col md={10} xs={0}>
          <div className='author'>
            <img src={Logo} alt='logo' />
          </div>
        </Col>
        <Col md={14} xs={24}>
          <div className='introduce'>
            风萧萧兮易水寒，壮士一去兮不复返，探虎穴兮入蛟宫，仰天呼气兮成白虹。
          </div>
        </Col>
      </Row>
    </div>
  }
}

export default Introduce