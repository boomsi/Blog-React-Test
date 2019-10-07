import React from 'react'
import './index.less'
import _ from 'lodash'

import { Card, Tag, Icon } from 'antd'

class Blog extends React.Component {
  constructor() {
    super()
    this.state = {
      content: [
        {
          title: '10 photography tips to better your skills',
          create_time: '2010-2-20 12:12:12',
          update_time: '2020-2-20 12:12:12',
          content: "You can't speak English without asking questions! There are a few different question types in English. In this session you'll see our presenters asking each other questions. We'll show you the grammar rules of question forms - and then you'll have a chance to practise.",
          category: 'test',
          look_count: 2232,
        },
        {
          title: 'The Present Perfect Simple and Continuous',
          create_time: '2010-2-20 12:12:12',
          update_time: '2020-2-20 12:12:12',
          content: "This time, our clever competitors will be just perfect! Present perfect and present perfect continuous tenses to be exact! Mike is looking for a third win in a row… the longest winning streak so far. Can Mya stop him in his tracks? Are you clever enough to beat them both? Watch this episode and find out!",
          category: 'test',
          look_count: 323,
        },
        {
          title: 'The Present Perfect Simple and Continuous',
          create_time: '2010-2-20 12:12:12',
          update_time: '2020-2-20 12:12:12',
          content: "This time, our clever competitors will be just perfect! Present perfect and present perfect continuous tenses to be exact! Mike is looking for a third win in a row… the longest winning streak so far. Can Mya stop him in his tracks? Are you clever enough to beat them both? Watch this episode and find out!",
          category: 'test',
          look_count: 323,
        },
      ]
    }
  }

  render() {
    let content = _.get(this.state, 'content', [])

    let itemEle = <ul className='blog_item_ul'>
      {
        content.map(item => (
          <li key={item.title}>
            <h3 className='blog_title'>{item.title}</h3>
            <div className='blog_time'>
              <span className='blog_update_time'>更新：{item.create_time}</span>
              <Tag>{item.category}</Tag>
              <span className='blog_look_count' title='已读'><Icon type="eye" /><em>{item.look_count}</em></span>
            </div>
            <p className='blog_content'>{item.content}</p>
          </li>
        ))
      }
    </ul>

    return <div className='blog_wrapper'>
      <p><em>My</em>Writings</p>
      <Card>
        {itemEle}
      </Card>
    </div>
  }
}

export default Blog
