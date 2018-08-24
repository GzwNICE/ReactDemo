import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.less'

class ClickCounter extends React.Component {
  state={
    coout: 0,
  }
  clickCoout=()=>{
    this.setState({
      coout: this.state.coout + 1
    })
  }
  clickCooutjian=()=>{
    this.setState({
      coout: this.state.coout - 1
    })
  }
  render() {
    const counterStyle = {
      color:'orange'
    }
    return (
      <div style={counterStyle}>
        <button onClick={this.clickCoout}>clickme +</button>
        <button onClick={this.clickCooutjian}>clickme -</button>
        <span>今天是7. {this.state.coout} 日</span>
      </div>
    )
  }
}

export default ClickCounter
