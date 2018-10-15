// 帖子详情页编辑帖子内容组件
import React from 'react'
import { getFormatDate } from '../../../utils/date'
import { Button } from 'antd';
import like from '../../../imgs/like-default.png'
import styles from './style.less'


function PostView(props) {
  const { post, editable, onEditClick } = props
  return (
    <div className={styles.postView}>
      <div>
        <h2>{post.title}</h2>
        <div className={styles.mark}>
          <span className={styles.author}>{post.author.username}</span>
          <span>·</span>
          <span>{getFormatDate(post.updatedAt)}</span>
          {editable ? (
            <span>
              ·<Button type="primary" onClick={onEditClick}>编辑</Button>
            </span>
          ) : null}
        </div>
        <div className={styles.content}>{post.content}</div>
      </div>
      <div className={styles.vote}>
        <span>
          <img src={like} alt="vote" />
        </span>
        <span>{post.vote}</span>
      </div>
    </div>
  )
}

export default PostView
