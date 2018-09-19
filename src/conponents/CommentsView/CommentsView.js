// 帖子详情页评论内容列表
import React, { Component } from 'react'
import { getFormatDate } from '../../utils/date'
import styles from './style.less'

export default class CommentsView extends Component {
  render() {
    const { comments } = this.props
    return (
      <ul className={styles.commentsView}>
        {comments.map(item => {
          return (
            <li key={item.id}>
              <div>{item.content}</div>
              <div className={styles.sub}>
                <span>{item.author.username}</span>
                <span>·</span>
                <span>{getFormatDate(item.updatedAt)}</span>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}
