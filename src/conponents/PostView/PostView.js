// 帖子详情页内容展示组件
import React from 'react'
import { getFormatDate } from '../../utils/date'
import like from '../../imgs/like.png'
import styles from './style.less'

function PostView (props) {
  const { post, editable,onEditClick } = props
  return (
    <div className={styles.postView}>
      <div>
        <h2>{post.title}</h2>
        <div className={styles.mark}>
          <div className={styles.author}>{post.author.username}</div>
          <span>·</span>
          <span>{getFormatDate(post.updatedAt)}</span>
          {editable ? (
            <span>·<button onClick={onEditClick}>编辑</button></span>
          ):null}
        </div>
        <div className={styles.content}>{post.content}</div>
      </div>
      <div className={styles.vote}>
          <span>
            <img src={like} alt="vote"/>
          </span>
          <span>{post.vote}</span>
      </div>
    </div>
  )
}

export default PostView;
