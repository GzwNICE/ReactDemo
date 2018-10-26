import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { post } from '../../utils/request'
import { Form, Icon, Input, Button } from 'antd'
import url from '../../utils/url'
import styles from './Login.less'
const FormItem = Form.Item

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'tom',
      password: '123456',
      redircetToReferrer: false
    }
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // 用户名、密码的变化
  // handleChange(e) {
  //   if (e.target.name === 'username') {
  //     this.setState({
  //       username: e.target.value
  //     })
  //   } else if (e.target.name === 'password') {
  //     this.setState({
  //       password: e.target.value
  //     })
  //   } else {
  //     // 没有多余的选项
  //   }
  // }

  // 表单提交事件
  handleSubmit(e) {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      // 参数
      const params = {
        username: values.userName,
        password: values.passWord
      }
      // 发送请求
      post(url.login(), params).then(data => {
        if (data.error) {
          alert(data.error.message || 'login failed')
        } else {
          // 保存用户信息到 sessionStorage
          sessionStorage.setItem('userId', data.userId)
          sessionStorage.setItem('username', params.username)
          // 登录成功设置登录状态为true
          this.setState({
            redircetToReferrer: true
          })
        }
      })
    })
  }

  render() {
    // from 保存跳转到登录页面前的路径，从哪来回哪去
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redircetToReferrer } = this.state
    const { getFieldDecorator } = this.props.form
    // 登录成功后做重定向
    if (redircetToReferrer) {
      return <Redirect to={from} />
    }
    return (
      <Form className={styles.login} onSubmit={this.handleSubmit}>
        <FormItem className={styles.userRow}>
          {getFieldDecorator('userName', {
            initialValue: this.state.username,
            rules: [{ required: true, message: '用户名不能为空！' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              autoComplete="off"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('passWord', {
            initialValue: this.state.password,
            rules: [{ required: true, message: '用户名不能为空！' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              maxLength="6"
              autoComplete="off"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const $Login = Form.create()(Login)

export default $Login
