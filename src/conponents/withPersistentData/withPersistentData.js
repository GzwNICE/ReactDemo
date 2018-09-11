import React, { Component } from 'react'

function withPersistentData(WrappedComponent) {
  return class extends Component {
    componentWillMount (){
      let data = localStorage.getItem('data')
      this.setState({data})
    }
    render () {
      // 通过{...this.props} 把传递给当前组价的属性继续传递给被包装的组件
      return <WrappedComponent data = {this.state.data} {...this.props} />
    }
  }
}

class MyComponent extends Component {
  render(){
    return <div>{this.props.data}</div>
  }
}

const MyComponentWithPersistentData = withPersistentData(MyComponent)

// 高阶组价的主要功能是封装并分离组件的通用逻辑，让通用逻辑在组件间更好的被复用