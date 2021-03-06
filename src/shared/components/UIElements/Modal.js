import React from 'react';
import reactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

//{`modal__header ${props.headerClass}`} to provide dinamically class name to the 
const ModalOverlay = (props) => {//Portal so the Modal doesnt render on the root at the DOM
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return reactDOM.createPortal(content, document.getElementById('modal-hook'));
  //in {props.chidlren}-> there render all that is bettwen the tags of the Modal in the PlaceItem component.
};

const Modal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};//<ModalOverlay {...props}/> pasa los props que llegan de modal al ModalOverlay

export default Modal;
