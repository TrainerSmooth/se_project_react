import "./DeleteModal.css";

function DeleteModal({ card, onClose, handleDeleteCard, isOpen }) {
  if (!isOpen || !card) return null;

  const handleConfirmDelete = () => {
    handleDeleteCard(card.id);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className={`modal_type_delete ${isOpen && "modal_opened"}`}>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <h2 className="delete__modal-caption">
          Are you sure you want to delete this item? This action is
          irreversible.
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
      </div>
    </div>
  );
}

export default DeleteModal;
