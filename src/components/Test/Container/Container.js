import React, { Component } from 'react'
import AutoFocusTextInput from '../AutoFocusTextInput/AutoFocusTextInput'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.handleClikcBlur = this.handleClikcBlur.bind(this)
  }
  handleClikcBlur() {
    // 通过ref调用AutoFocusTextInput 组价的方法
    this.inputInstance.blur()
  }
  render() {
    return (
      <div>
        <AutoFocusTextInput
          ref={input => {
            this.inputInstance = input
          }}
        />
        <button onClick={this.handleClikcBlur}>失去焦点</button>
      </div>
    )
  }
}
