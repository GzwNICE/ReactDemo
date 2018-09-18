// 帖子循环列表
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostItem from '../PostItem/PostItem'
import styles from './style.less'

export default class PostsView extends Component {
  render() {
    const { posts } = this.props
    return (
      <ul className={styles.posts}>
        {posts.map(item => (
          <Link key={item.id} to={`/posts/${item.id}`}>
            <PostItem post={item} />
          </Link>
        ))}
      </ul>
    )
  }
}
