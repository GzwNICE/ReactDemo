import React, { Component } from 'react'
import ReactDOM from "react-dom";
import styles from './style.less'

export default class Modal extends Component {
  constructor (props){
    super(props);
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
  }
  componentWillUnmount(){
    document.body.removeChild(this.container)
  }

  render() {
    return ReactDOM.createPortal (
      <div className={styles.modal}>
        <span className={styles.close}  onClick={this.props.onClose}>&times;</span>
        <div className={styles.content}>
          {this.props.children}
        </div>
        <h2>Modal Dialog</h2>
      </div>,
      this.container
    );
  }
}
