import React from 'react'
import style from './style.less'

function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id)
  }
  const { post } = props
  return (
    <li>
      <div>{post.title}</div>
      <div>
        创建人：
        {post.author}
      </div>
      <div>
        创建时间：
        {post.date}
      </div>
      <div>
        <button onClick={handleClick} style={style.voteBtn}>
          点赞
        </button>
        &nbsp;
        <span>{post.vote}</span>
      </div>
    </li>
  )
}
export default PostItem
