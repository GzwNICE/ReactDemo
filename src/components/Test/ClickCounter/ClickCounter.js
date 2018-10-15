import React from 'react'
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
   
    return (
      <div className ={style.dataTime}>
        <button onClick={this.clickCoout} className={style.timeUp}> + </button>
        <button onClick={this.clickCooutjian} className={style.timeDown}> - </button>
        <span>今天是7. {this.state.coout} 日</span>
      </div>
    )
  }
}

export default ClickCounter
