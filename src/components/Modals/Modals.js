import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Authorization from '../Authorization/Authorization';
import PreviewPost from '../PreviewPost/PreviewPost';
import { toggleModal } from '../../redux/modules/modal';
import { CheckIsAdmin } from '../../redux/modules/admin';

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
  static propTypes = {
    isAdmin: PropTypes.bool,
    modalIsOpen: PropTypes.bool,
    modalName: PropTypes.string,
    dispatch: PropTypes.func
  };

  static defaultProps = {
    isAdmin: false,
    modalIsOpen: false,
    modalName: '',
    dispatch: () => {}
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch, isAdmin } = this.props;

    if (nextProps.isAdmin === true && nextProps.isAdmin !== isAdmin) {
      dispatch(toggleModal('CLOSE', 'authorization'));
    }
  }

    logIn = (values) => {
      const { dispatch } = this.props;
      dispatch(CheckIsAdmin(values));
    };

    closeModal = () => {
      const { dispatch } = this.props;
      dispatch(toggleModal('CLOSE'));
    };

    addPost = () => {
      console.log('lall');
    }

    render() {
      const { modalIsOpen, modalName } = this.props;

      return (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {modalName === 'authorization' ? <Authorization closeModal={this.closeModal} addPost={this.addPost} logIn={this.logIn} /> : ' '}
          {modalName === 'preview' ? <PreviewPost /> : ' '}
        </Modal>
      );
    }
}

function mapStateToProps(state) {
  return {
    isAdmin: state.admin.isAdmin,
    modalIsOpen: state.modal.modalIsOpen,
    modalName: state.modal.modalName,
    dispatch: state.dispatch,
  };
}

export default connect(mapStateToProps)(Modals);
