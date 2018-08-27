import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'

class PlostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.timer = null //定时器
    this.handleVote = this.handleVote.bind(this) //手动绑定this指向
  }
  componentDidMount() {
    //挂载后 模拟数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: '大家一起来讨论react吧',
            author: '张三',
            date: '2018-08-27 11:14',
            vote: 0
          },
          {
            id: 2,
            title: '前端框架，你最喜欢哪一个',
            author: '李四',
            date: '2018-08-27 12:00',
            vote: 0
          },
          {
            id: 3,
            title: 'App的时代已经到来',
            author: '王五',
            date: '2018-08-27 18:30',
            vote: 0
          }
        ]
      })
    }, 1000)
  }
  componentWillUnmount() {
    //卸载后清除定时器
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  handleVote(id) {
    //根据 帖子id 进行过滤，返回新的posts对象
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item
      return newItem
    })
    this.setState({
      //使用新的posts对象设置state
      posts
    })
  }
  render() {
    return (
      <div>
        帖子列表：
        <ul>
          {this.state.posts.map(item => (
            <PostItem post={item} onVote={this.handleVote} />
          ))}
        </ul>
      </div>
    )
  }
}
export default PlostList
