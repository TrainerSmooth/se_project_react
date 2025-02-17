import cardImage from "../assets/images/shorts.png";

function ItemCard({ card, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <h2 className="card__name">{card.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={card.link || cardImage} // Use cardImage as a fallback
        alt={card.name}
      />
    </li>
  );
}

export default ItemCard;
