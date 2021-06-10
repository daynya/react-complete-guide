import React, { useState } from 'react';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal';
import useModal from '../../UI/useModal';
import '../../UI/Modal.css';
 
const UserInput = (props) => {
    //const [enteredValue, setEnteredValue] = useState('');
    //const setIsValid = useState(true);
    // const [enteredValue, setEnteredValue] = useState({
    //     username: '',
    //     age: '',
    // });
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    //const user = [enteredName, enteredAge];

    const usernameChangeHandler = (event) => {
      if (event.target.value.trim().length > 0) {
        //setIsValid(true);
      }
      setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
      if (event.target.value.trim() > 0) {
        //setIsValid(true);
        setEnteredAge(event.target.value);
      } else {
        //alert('you must enter a valid age, greater than 0');
        return;
      }
    };

    // const inputChangeHandler = (event) => {
    //     if (event.target.value.trim().length > 0) {
    //         setIsValid(true);
    //     }
    //     setEnteredValue(event.target.value);
    // }
  
    const formSubmitHandler = (event) => {
      event.preventDefault();
    //   if (enteredValue.trim().length === 0) {
    //     setIsValid(false);
    //     return;
    //   }
      const resetInputs = () => {
          setEnteredName('')
          setEnteredAge('')
          document.getElementById('form').reset();
      };
      if (enteredName.length > 0 && enteredAge.length > 0) {
          props.onAddUser([enteredName, " (" + enteredAge + " years old)"]);
          resetInputs();
      } else {
          //alert('you must complete both fields!');
          return;       
      }
};

const {isShowing, toggle} = useModal();
  
    return (
        <>
            <form id="form" onSubmit={formSubmitHandler}>
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
            <button className="modal-button" onClick={toggle}>Modal Button</button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
      </>
    );
  };
  
  export default UserInput;
  