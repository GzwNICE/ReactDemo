import React, { Component } from 'react'
import PostItem from '../PostItem/PostItem'
import UserList from '../UserList/UserList'
import Modal from '../Modal/Modal'
import styles from './style.less'

class PlostListold extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      showModal: false
    }
    this.timer = null //定时器
    this.handleVote = this.handleVote.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.onAddUser = this.onAddUser.bind(this)
  }
  componentDidMount() {
    //挂载后 模拟数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: '大家一起来讨论react吧',
            author: '阿康',
            date: '2018-08-27 11:14',
            vote: 0
          },
          {
            id: 2,
            title: '前端框架，你最喜欢哪一个',
            author: '阿杰',
            date: '2018-08-27 12:00',
            vote: 0
          },
          {
            id: 3,
            title: 'App的时代已经到来',
            author: '阿文',
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

  handleSave(post) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === post.id ? post : item
      return newItem
    })
    this.setState({
      posts
    })
  }

  onAddUser(uesr) {
    this.setState({
      posts: this.state.posts.concat(uesr)
    })
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>帖子列表-技术改变世界</h2>
        <ul>
          {this.state.posts.map(item => (
            <PostItem
              key={item.id}
              post={item}
              onVote={this.handleVote}
              onSave={this.handleSave}
            />
          ))}
        </ul>
        <UserList  onAddUser={this.onAddUser} />
        <div onClick={this.openModal} className={styles.openModal}>
          全局弹框
        </div>
        <div>{this.state.showModal && <Modal onClose={this.closeModal} />}</div>
      </div>
    )
  }
}
export default PlostListold
