import React, { Component } from 'react'
import { connect } from 'net';

// 高阶组价的主要功能是封装并分离组件的通用逻辑，让通用逻辑在组件间更好的被复用
// HOC(...params)()   高阶组件  
function withPersistentData = (key) => (WrappedComponent) => {
  return class extends Component {
    componentWillMount() {
      let data = localStorage.getItem(key);
      this.setState({ data });
    }
    render() {
      // 通过{...this.props} 把传递给当前组价的属性继续传递给被包装的组件
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

class MyComponent extends Component {
  render() {
    return <div>{this.props.data}</div>
  }
}

// 获取key = 'data' 的数据
const MyComponent1WithPersistentData = withPersistentData('data')(MyComponent)
// 获取key = 'name' 的数据
const MyComponent2WithPersistentData = withPersistentData('name')(MyComponent)

//HOC(...params)()   高阶组件大量出现在第三方组件库中 
//react-redux 中的connect函数
connect (mapStateToProps,mapDispatchToProps)(WrappedComponent)
// connect的参数mapStateToProps，mapDispatchToProps是函数类型，说明高组件的参数可以使函数类型