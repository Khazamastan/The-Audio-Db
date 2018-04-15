import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Album from "containers/Album";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    padding               : '0px',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#app')

export default class ModalComponent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      modalIsOpen: props.modalIsOpen
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.props.closeModal();
    this.setState({modalIsOpen: false});
  }
  componentWillReceiveProps(nextProps){
    if(typeof nextProps.modalIsOpen != 'undefined')
        this.setState({modalIsOpen: nextProps.modalIsOpen});
  }
  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <Album/>        
        </Modal>
      </div>
    );
  }
}
