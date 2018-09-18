import React, { Component } from 'react'
import { get, post } from '../../utils/request'
import url from '../../utils/url'
import PostsView from '../PostsView/PostsView'
import PostEditor from '../PostEditor/PostEditor'
import styles from './style.less'

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      newPost: false
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.handleNewPost = this.handleNewPost.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.refreshPostList = this.refreshPostList.bind(this)
  }

  componentDidMount() {
    this.refreshPostList()
  }

  // 挂载后请求帖子列表
  refreshPostList() {
    get(url.getPostList()).then(data => {
      if (!data.error) {
        this.setState({
          posts: data,
          newPost: false
        })
      }
    })
  }

  // 保存发帖，发送数据到后台，成功后请求数据列表作展示
  handleSave(data) {
    const postData = { ...data, author: this.props.userId, vote: 99 }
    post(url.createPost(), postData).then(data => {
      if (!data.error) {
        this.refreshPostList()
      }
    })
  }

  // 取消发帖
  handleCancel() {
    this.setState({
      newPost: false
    })
  }

  // 点击发帖
  handleNewPost() {
    this.setState({
      newPost: true
    })
  }

  render() {
    const { userId } = this.props
    return (
      <div className={styles.postList}>
        <div className={styles.title}>
          <h2>话题列表</h2>
          {userId ? <button onClick={this.handleNewPost} className={styles.newPost}>发帖</button> : null}
        </div>
        {this.state.newPost ? (
          <PostEditor onSave={this.handleSave} onCancel={this.handleCancel} />
        ) : null}
        <PostsView posts={this.state.posts} />
      </div>
    )
  }
}
