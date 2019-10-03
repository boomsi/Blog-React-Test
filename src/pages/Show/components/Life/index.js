import React from 'react'
import './index.less'
import {Card} from 'antd'

class Life extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    return <div className='blog_wrapper'>
      <p><em>My</em>Lifestream</p>
      <div>
        <Card>
          content
        </Card>
      </div>
    </div>
  }
}

export default Life
