import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { post } from '../../utils/request'
import url from '../../utils/url'
import styles from './Login.less'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'tom',
      password: '123456',
      redircetToReferrer: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // 用户名、密码的变化
  handleChange(e) {
    if (e.target.name === 'username') {
      this.setState({
        username: e.target.value
      })
    } else if (e.target.name === 'password') {
      this.setState({
        password: e.target.value
      })
    } else {
      // 没有多余的选项
    }
  }

  // 表单提交事件
  handleSubmit(e) {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (username.length === 0 || password.length === 0) {
      alert('用户名或密码不能为空！')
      return
    }
    // 参数
    const params = {
      username,
      password
    }
    // 发送请求
    post(url.login(), params).then(data => {
      if (data.error) {
        alert(data.error.message || 'login failed')
      } else {
        // 保存用户信息到 sessionStorage
        sessionStorage.setItem('userId', data.userId)
        sessionStorage.setItem('username', username)
        // 登录成功设置登录状态为true
        this.setState({
          redircetToReferrer: true
        })
        
      }
    })
  }

  render() {
    // from 保存跳转到登录页面前的路径，从哪来回哪去
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redircetToReferrer } = this.state
    // 登录成功后做重定向
    if (redircetToReferrer) {
      return <Redirect to={from} />
    }
    return (
      <form className={styles.login} onSubmit={this.handleSubmit}>
        <div className={styles.userRow}>
          <label>
            用户名：
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
        </div>
        <div>
          <label>
            密　码：
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              maxLength="6"
              autoComplete="off"
            />
          </label>
        </div>
        <input type="submit" value="登录" className={styles.submit} />
      </form>
    )
  }
}
