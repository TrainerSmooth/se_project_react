import "./DeleteModal.css";
import ItemModal from "../ItemModal/ItemModal"; // Ensure this path is correct
import { useState } from "react";

function DeleteModal({ card, onClose, handleDeleteCard, isOpen }) {
  if (!isOpen) return null; // Ensures modal only renders when open

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} type="button" className="modal__close">
          ✕
        </button>

        <h2 className="delete__modal-caption">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>

        {card && <p className="delete__modal-item">Item: {card.name}</p>}

        <div className="delete__modal-footer">
          <button
            onClick={() => handleDeleteCard(card.id)}
            type="button"
            className="delete__modal-button"
          >
            Yes, delete item
          </button>
          <button
            onClick={onClose}
            type="button"
            className="delete__modal-cancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
