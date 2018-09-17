import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import asyncComponent from '../../AsyncComponent'
import Header from '../Header/Header'
import PostList from '../PostList/PostList'
import Post from '../Post/Post'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: sessionStorage.getItem('userId'),
      username: sessionStorage.getItem('username')
    }
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    this.setState({
      userId: null,
      username: null
    })
  }

  render() {
    const { match, location } = this.props
    const { userId , username } = this.state
    return (
      <div>
        <Header
          userId = {userId}
          username={username}
          onLogout={this.handleLogout}
          location={location}
        />
        <Route
          path={match.url}
          exact
          render={props => <PostList username={username} {...props} />}
        />
        <Route
          path={`${match.url}/:id`}
          render={props => <Post username={username} {...props} />}
        />
      </div>
    )
  }
}
