import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.less'

export default class Header extends Component {
  render() {
    const { username, onLogout, location } = this.props
    return (
      <div className={styles.header}>
        <div className={styles.nav}>
          <span className={styles.leftLink}>
            <Link to="/">首页</Link>
          </span>
          {username && username.length > 0 ? (
            <span className={styles.user}>
              当前用户：
              {username}
              &nbsp;
              <button onClick={onLogout}>注销</button>
            </span>
          ) : (
            <span className={styles.rightLink}>
              <Link to={{ pathname: '/login', state: { from: location } }}>
                登录
              </Link>
            </span>
          )}
        </div>
      </div>
    )
  }
}
