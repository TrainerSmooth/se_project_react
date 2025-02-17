import React from "react";
import PropTypes from "prop-types";
import closeButton from "../../assets/images/Closebutton.svg";

function ModalWithForm({
  children,
  buttonText = "Submit",
  title = "Default Title",
  isOpen = false,
  onClose = () => {},
  onSubmit = () => {},
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close modal"
        >
          <img
            src={closeButton}
            alt="Close button"
            className="modal__close-icon"
          />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

ModalWithForm.propTypes = {
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

ModalWithForm.defaultProps = {
  onSubmit: () => {},
};

export default ModalWithForm;
