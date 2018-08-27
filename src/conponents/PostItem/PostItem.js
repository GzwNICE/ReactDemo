import React, { Component } from 'react'
import styles from './style.less'
import like from '../../imgs/like-default.png'
import liked from '../../imgs/like.png'

export default class PostItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      post: props.post,
      isVoted: false
    }
    this.handleVote = this.handleVote.bind(this)
    this.handleEditPost = this.handleEditPost.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    //父组件更薪props时更薪 PostItem的state
    if (this.props.post !== nextProps.post) {
      this.setState({
        post: nextProps.post
      })
    }
  }

  handleVote() {
    // 点赞事件
    this.setState({
      isVoted:true
    })
    this.props.onVote(this.props.post.id)
  }
  handleEditPost() {
    // 保存/编辑
    const editing = this.state.editing
    if (editing) {
      this.props.onSave({
        ...this.state.post,
        date: this.getFormatDate()
      })
    }
    this.setState({
      editing: !editing
    })
  }
  handleTitleChange(event) {
    // 标题值的变化
    const newPost = {
      ...this.state.post,
      title: event.target.value
    }
    this.setState({
      post: newPost
    })
  }
  getFormatDate() {
    const date = new Date()
    const year = date.getFullYear()
    let month = date.getMonth() + 1 + ''
    month = month.length === 1 ? '0' + month : month
    let day = date.getDate() + ''
    day = day.length === 1 ? '0' + day : day
    let hour = date.getHours() + ''
    hour = hour.length === 1 ? '0' + hour : hour
    let minute = date.getMinutes() + ''
    minute = minute.length === 1 ? '0' + minute : minute
    return `${year}-${month}-${day} ${hour}:${minute}`
  }
  render() {
    const { post } = this.state
    return (
      <li className={styles.item}>
        <div className={styles.title}>
          {this.state.editing ? (
            <form>
              <input value={post.title} onChange={this.handleTitleChange} />
            </form>
          ) : (
            post.title
          )}
        </div>
        <div>
          创建人：
          <span>{post.author}</span>
        </div>
        <div>
          创建时间：
          <span>{post.date}</span>
        </div>
        <div className={styles.like}>
          <span className={styles.praise}>
            <img src={this.state.isVoted ? liked : like } alt="vote" onClick={this.handleVote} />
          </span>
          <span className={styles.voteNum}>{post.vote}</span>
        </div>
        <div>
          <button onClick={this.handleEditPost}>
            {this.state.editing ? '保存' : '编辑'}
          </button>
        </div>
      </li>
    )
  }
}
