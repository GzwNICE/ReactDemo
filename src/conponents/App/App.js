import React, { Component } from 'react';
import './App.css';
import Modal from '../Modal/Modal'

class App extends Component {
  constructor (props){
    super(props);
    this.state = { showModal :true };
  }
  closeModal = ()=>{
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div>
        <h2>全局弹框</h2>
        {this.state.showModal && (
          <Modal onClose = {this.closeModal}></Modal>
        )}
      </div>
    )
  }
}

export default App;
