import React, { Component } from 'react'

export default class fetch extends Component {

  // 组件通信的三个阶段/方法

  // 1.在组件挂在前请求数据（时间上来说会比componentDidMount早一些，越早执行就越快返回组件，但时间几乎微乎其微可以忽略不计）
  componentWillMount (){
    fetch('././.').then((response)=>{
      response.json().then((data)=>{
        this.setState({users:data})
      })
    })
  }
  
  // 2.在组件挂载完成后请求 （官方规范）
  // 这个阶段是组件通信的最佳时期
  // 1.组价在这个阶段已经处于挂载状态，这时即使操作DOM也是安全的，而componentWillMount无法保证一点
  // 2.当组件在服务端渲染时，componentWillMount会被调用两次，服务端一次，客户端一次，而componentDidMount能保证在任何情况下都只会被调用一次
  componentDidMount (){
    fetch('././.').then((response)=>{
      response.json().then((data)=>{
        this.setState({users:data})
      })
    })
  }

  // 3.在组件更新阶段通信，组件需要以props中的某个属性作为与服务器通信时的请求参数，当这个属性发生变化时，组件进行重新通信
  componentWillReceiveProps (nextProps){
    if(nextProps.category !== this.props.category){
      fetch('././.').then((response)=>{
        response.json().then((data)=>{
          this.setState({users:data})
        })
      })
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
