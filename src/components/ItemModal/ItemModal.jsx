import React from "react";
import PropTypes from "prop-types";
import closeButton from "../../assets/images/Closebutton.svg";
import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card }) {
  const { link, name, weather } = card || {};

  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden={activeModal !== "preview"}
    >
      <div className="modal__content modal__content_type_image">
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
        <img
          src={link || "#"}
          alt={name || "No name"}
          className="modal__image"
        />
        <div className="modal__overlay">
          <h2 className="modal__caption" id="modal-title">
            {name || "Unnamed Item"}
          </h2>
          <p className="modal__weather">Weather: {weather || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
}

ItemModal.propTypes = {
  activeModal: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
  }).isRequired,
};

ItemModal.defaultProps = {
  card: {
    name: "Unnamed Item",
    link: "",
    weather: "Unknown",
  },
};

export default ItemModal;
