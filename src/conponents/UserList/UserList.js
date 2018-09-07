import React, { Component } from 'react'
import styles from './style.less'
export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      author: '',
      date: '',
      vote: ''
    }
    this.handleChangeID = this.handleChangeID.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleChangeVote = this.handleChangeVote.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // 优化
  handleChangeID(e) {
    this.setState({
      id: e.target.value
    })
  }
  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  handleChangeAuthor(e) {
    this.setState({
      author: e.target.value
    })
  }
  handleChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }
  handleChangeVote(e) {
    this.setState({
      vote: e.target.value
    })
  }

  handleClick() {
    let data = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      date: this.state.date,
      vote: this.state.vote
    }
    this.props.onAddUser(data)
  }

  render() {
    return (
      <div className={styles.increase}>
        <span>id:</span>
        <input onChange={this.handleChangeID} value={this.state.id} />
        <span>标题：</span>
        <input onChange={this.handleChangeTitle} value={this.state.title} />
        <span>作者：</span>
        <input onChange={this.handleChangeAuthor} value={this.state.author} />
        <span>时间：</span><input onChange={this.handleChangeDate} value={this.state.date} />
        <span>点赞：</span><input onChange={this.handleChangeVote} value={this.state.vote} />
        <button onClick={this.handleClick}>发 布</button>
      </div>
    )
  }
}
