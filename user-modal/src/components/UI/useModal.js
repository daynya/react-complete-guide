import { useState } from 'react';

const useModal = (props) => {
  const [isShowing, setIsShowing] = useState(false);
  const [message, setMessage] = useState('');

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    setIsShowing,
    isShowing,
    toggle, 
    message, 
    setMessage
  }
};

export default useModal;