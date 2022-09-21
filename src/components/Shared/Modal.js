const Modal = (props) => {
  return (
    <>
      <div className={`modal-backdrop ${props.animateOut}`} onClick={props.onBackdropClick}></div>
      <div className={`modal ${props.class} ${props.animateOut}`}>
        <div className="card">{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
