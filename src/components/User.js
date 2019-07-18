import React from 'react';

function User(props) {
  return (
    <React.Fragment>
      <td>{props.name}</td>
      <td>{props.email}</td>
    </React.Fragment>
  );
}

export default User;
