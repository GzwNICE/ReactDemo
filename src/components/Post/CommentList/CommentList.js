// 帖子详情页面评论功能
import React, { Component } from 'react'
import CommentsView from '../CommentsView/CommentsView'
import { Input, Button } from 'antd'
import styles from './style.less'
const { TextArea } = Input

export default class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClick() {
    const content = this.state.value
    if (content.length > 0) {
      this.props.onSubmit(this.state.value)
      this.setState({
        value: ''
      })
    } else {
      alert('评论内容不能为空！')
    }
  }

  render() {
    const { comments, editable } = this.props
    return (
      <div className={styles.commentList}>
        <div className={styles.title}>评论</div>
        {editable ? (
          <div className={styles.editor}>
            <TextArea
              placeholder="说说你的看法..."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Button onClick={this.handleClick}>提交</Button>
          </div>
        ) : null}
        <CommentsView comments={comments} />
      </div>
    )
  }
}
