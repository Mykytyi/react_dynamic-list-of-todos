import React from 'react';
import User from './User';

function TodoItem(props) {
  const thePerson = props.users.find(item => props.data["userId"] === item["id"]);
  return (
    <tr>
      <td>{props.data.title}</td>
      <td>{`${props.data.completed}`}</td>
      <User name={thePerson["name"]} email={thePerson["email"]} />
    </tr>
  );
}

export default TodoItem;
