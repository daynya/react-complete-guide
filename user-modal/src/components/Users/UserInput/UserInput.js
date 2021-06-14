import React, { useState } from 'react';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal';
import useModal from '../../UI/useModal';
import '../../UI/Modal.css';
 
const UserInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) => {
      if (event.target.value.trim().length > 0) {
      }
      setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
      if (event.target.value.trim() > 0) {
        setEnteredAge(event.target.value);
      } else {
        toggle();
        setMessage('Please enter a valid age (greater than 0)');
        return;
      }
    };
  
    const FormSubmitHandler = (event) => {
      event.preventDefault();
      const message = "Please enter both a name and age";

      const resetInputs = () => {
          setEnteredName('')
          setEnteredAge('')
          document.getElementById('form').reset();
      };
      if (enteredName.length > 0 && enteredAge.length > 0) {
          props.onAddUser([enteredName, " (" + enteredAge + " years old)"]);
          resetInputs();
      } else {
          toggle();
          setMessage('Please enter valid username and age');
          return;       
      }
};

const {isShowing, toggle, message, setMessage} = useModal();
  
  return (
    <>
      <form id="form" onSubmit={FormSubmitHandler}>
          <div>
          <div className="input-wrapper">
            <label>Username</label>
            <input 
              type="text" 
              name="username"
              onBlur={usernameChangeHandler} />
          </div>
          <div className="input-wrapper">
            <label>Age (Years)</label>
            <input 
              type="number" 
              name="age"
              onBlur={ageChangeHandler} />
          </div>
          </div>
          <Button type="submit">Add User</Button>
      </form>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        message={message}
      />
    </>
    );
  };
  
  export default UserInput;
  