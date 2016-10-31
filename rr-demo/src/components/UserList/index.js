import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import UserElement from '../UserElement/';
import DeleteModal from '../DeleteModal/';

class UserList extends Component {

  render() {
    const { users } = this.props;

    return (
      <div>
        <Table bordered hover responsive striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Job</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map( (user, index) => {
                return (
                  <UserElement
                    key={user.id}
                    user={user}
                  />
                );
              })
            }
          </tbody>
        </Table>
        <DeleteModal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    users: state.users.list
  });
}

export default connect(mapStateToProps)(UserList);
