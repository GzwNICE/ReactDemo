import React, { Component } from 'react'
import CommentsView from '../CommentsView/CommentsView'
import styles from './style.less'

export default class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }

  handleClick(){
    const content = this.state.value
    if(content.length >  0){
      
    }
  }

  render() {
    const { comments, editable } = this.props
    return (
      <div className={styles.commentList}>
        <div className={styles.title}>评论</div>
        {editable ? (
          <div className={styles.editor}>
            <textarea
              placeholder="说说你的看法..."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button onClick={this.handleClick}>提交</button>
          </div>
        ) : null}
        <CommentsView  comments={comments} />
      </div>
    )
  }
}
