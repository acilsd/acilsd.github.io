import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/';

class UserElement extends Component {
  handleDeleteClick(e) {
    e.preventDefault();

    const user_id = Number(e.target.dataset.id);
    const username = e.target.dataset.username;

    this.props.showModalDelete(user_id, username);

  }

  render() {

    const user = this.props.user;

    return (
      <tr>
        <td>#{user.id}</td>
        <td>{user.username}</td>
        <td>{user.job}</td>
        <td>
          <a href={'/user-edit/' + user.id}>
            <Button bsSize='xsmall'>
              Edit
              <Glyphicon glyph='edit'/>
            </Button>
          </a>
        </td>
        <td>
          <Button
            bsSize='xsmall'
            data-id={user.id}
            data-username={user.username}
            onClick={::this.handleDeleteClick}>
            Delete
            <Glyphicon glyph='remove-circle'/>
          </Button>
        </td>
      </tr>
    );
  }
}

export default connect(null, actions)(UserElement);
