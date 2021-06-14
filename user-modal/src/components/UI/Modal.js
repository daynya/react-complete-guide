import React from 'react';
import ReactDOM from 'react-dom';
import createPortal from 'react-dom';

const Modal = ({ isShowing, hide, message }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={hide}>
        <div className="modal">
          <div className="modal-header">
            <h2>Invalid Input</h2>
          </div>
          <p>{message}</p>
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">Okay</span>
          </button>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;

export default Modal;