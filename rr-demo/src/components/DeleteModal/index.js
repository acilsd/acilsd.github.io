import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class DeleteModal extends Component {
  constructor(props) {
    super(props);

    this.modalDeleteHide = this.modalDeleteHide.bind(this);
    this.userDelete = this.userDelete.bind(this);
  }

  modalDeleteHide(e) {
    e.preventDefault();
    this.props.hideModal();
  }

  userDelete(e) {
    e.preventDefault();
    this.props.deleteUser();
  }

  render() {
    return (
      <Modal show={this.props.modal_delete.show}>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to delete {this.props.modal_delete.username}?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={this.modalDeleteHide}>No</Button>
          <Button bsStyle='primary' onClick={this.userDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  let modal_delete;
  if (state.users.modal && state.users.modal.list_delete) {
    modal_delete = state.users.modal.list_delete;
  } else {
    modal_delete = {
      show: false,
      id: 0,
      username: ''
    };
  }
  return {
    modal_delete: modal_delete
  };
}

export default connect(mapStateToProps, actions)(DeleteModal);
