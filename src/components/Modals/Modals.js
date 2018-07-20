import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Authorization from '../Authorization/Authorization';
import PreviewPost from '../PreviewPost/PreviewPost';
import { toggleModal } from '../../redux/modules/modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.5',
    padding: '0',
    borderColor: 'black'
  }
};

Modal.setAppElement('#root');

class Modals extends Component {
    closeModal = () => {
      const { dispatch } = this.props;
      dispatch(toggleModal('CLOSE'));
    };

    addPost = () => {
      console.log('lall');
    }

    render() {
      const { modalIsOpen, modalName, postText } = this.props;

      return (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {modalName === 'authorization' ? <Authorization closeModal={this.closeModal} addPost={this.addPost} /> : ' '}
          {modalName === 'preview' ? <PreviewPost post={postText} /> : ' '}
        </Modal>
      );
    }
}

function mapStateToProps(state) {
  return {
    modalIsOpen: state.modal.modalIsOpen,
    modalName: state.modal.modalName,
    postText: state.blog.postText,
    dispatch: state.dispatch,
  };
}

export default connect(mapStateToProps)(Modals);
