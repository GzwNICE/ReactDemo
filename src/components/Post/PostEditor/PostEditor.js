// 首页发帖组件
import React, { Component } from 'react'
import { Input } from 'antd'
import styles from './style.less'
const { TextArea } = Input

export default class PostEditor extends Component {
  constructor(props) {
    super(props)
    const { post } = this.props
    this.state = {
      title: (post && post.title) || '',
      content: (post && post.content) || ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  handleChange(e) {
    const name = e.target.name
    if (name === 'title') {
      this.setState({
        title: e.target.value
      })
    } else if (name === 'content') {
      this.setState({
        content: e.target.value
      })
    }
  }

  handleCancelClick() {
    this.props.onCancel()
  }

  handleSaveClick() {
    const data = {
      title: this.state.title,
      content: this.state.content
    }
    if (data.title === '' || data.content === '') {
      alert('标题或内容不能为空！')
      return
    }
    this.props.onSave(data)
  }

  render() {
    return (
      <div className={styles.postEditor}>
        <input
          type="text"
          name="title"
          placeholder="标题"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <TextArea
          name="content"
          placeholder="说点什么..."
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button onClick={this.handleCancelClick}>取消</button>
        <button onClick={this.handleSaveClick}>保存</button>
      </div>
    )
  }
}
