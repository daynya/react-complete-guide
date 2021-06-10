import React, { useState } from 'react';
import UserInput from './components/Users/UserInput/UserInput';
import UserList from './components/Users/UserList/UserList'
import Modal from './components/UI/Modal';
import useModal from './components/UI/useModal';
import './App.css';
import './components/UI/Modal.css';

const App = () => {
  const [users, setUsers] = useState('');

  const addUser = enteredText => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No users found. Add yourself!</p>
  );

  if (users.length > 0) {
    content = (
      <UserList items={users} />
    );
  }

  // const {isShowing, toggle} = useModal();

  return (
    <>
      <section className="card" id="user-form">
        <UserInput onAddUser={addUser} />
      </section>
      <section className="card" id="users">
        {content}
      </section>
      {/* <button className="modal-button" onClick={toggle}>Modal Button</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        message={"hello"}
      /> */}
    </>
  );
};

export default App;
