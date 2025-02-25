import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onOpenDelete }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_type_image"
        ></button>
        <img src={card?.link} alt={card?.name} className="modal__image" />
        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{card?.name}</h2>
            <p className="modal__weather">Weather: {card?.weather}</p>
          </div>

          <button
            onClick={() => onOpenDelete(card)} // Pass the entire card object
            className="modal__delete-button"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
