// 单条数据信息
import React from 'react'
import { getFormatDate } from '../../utils/date'
import styles from './style.less'
import like from '../../imgs/like.png'

function PostItem(props) {
  const { post } = props
  return (
    <li className={styles.postItem}>
      <div className={styles.title}>{post.title}</div>
      <div>
        创建人：
        <span>{post.author.username}</span>
      </div>
      <div>
        更新时间：
        <span>{getFormatDate(post.updatedAt)}</span>
      </div>
      <div className={styles.like}>
        <span>
          <img src={like} alt="vote" />
        </span>
        <span>{post.vote}</span>
      </div>
    </li>
  )
}

export default PostItem
