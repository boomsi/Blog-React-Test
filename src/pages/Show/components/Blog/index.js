import React from 'react'
import './index.less'
import {Card} from 'antd'

class Blog extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    return <div className='blog_wrapper'>
      <p><em>My</em>Writings</p>
      <div>
        <Card>
          content
        </Card>
      </div>
    </div>
  }
}

export default Blog
