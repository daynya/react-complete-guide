import React from 'react';
import User from '../User/User';
import '../User/User.css';
import './UserList.css';

const UserList = props => {
  return (
    <ul className="user-list">
      {props.items.map(user => (
        <User
          key={user.id}
          id={user.id}
        >
          {user.text}
        </User>
      ))}
    </ul>
  );
};

export default UserList;