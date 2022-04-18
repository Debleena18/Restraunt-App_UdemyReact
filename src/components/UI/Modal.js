import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

//In the end {Props.children} will be the actual content passed between <Modal></Modal> by any comp where Modal is used.
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div> 
    </div>
  );
};

const portalElement = document.getElementById('overlays');

//React Portal to markup the backdrop and modal overlay
//So we need to edit in index.html where both backdrop and overlay will be portal
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
