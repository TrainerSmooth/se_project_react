import React from "react";
import "./DeleteModal.css";

function DeleteModal({ card, onClose, handleDeleteCard, isOpen }) {
  if (!isOpen || !card) return null; // Ensure the modal doesn't render if not open or card is null

  const handleConfirmDelete = () => {
    handleDeleteCard(card._id); // Use `_id` instead of `id`
    onClose();
  };

  return (
    <Modal name="delete" isOpen={isOpen} onClose={onClose}>
      <h2 className="delete__modal-caption">
        Are you sure you want to delete this item? This action is irreversible.
      </h2>
      <p className="delete__modal-item">Item: {card.name}</p>
      <div className="delete__modal-footer">
        <button
          onClick={handleConfirmDelete}
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
    </Modal>
  );
}

export default DeleteModal;
