import React from "react";
import ReactDOM from "react";

import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.className}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault
        }
      >
        
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hoot"));
}

const Modal = (props) => {
  return
};

export default Modal;
