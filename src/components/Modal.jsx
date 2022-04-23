const Modal = props => {

  return (
    <div id="modal" className={`modal${props.active ? ' active' : ''}`}>
      {props.children}
    </div>
  )
}

export const ModalContent = props => {

  return (
    <div className="modal__content" ref={props.modalRef}>
      {props.children}
      <div className="modal__content__close" onClick={() => props.setActive(false)}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  )
}

export default Modal