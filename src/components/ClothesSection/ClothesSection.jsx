import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";

const ClothesSection = ({
  handleAddClick,
  onCardClick,
  clothingItems,
  selectedCard = { selectedCard },
  onCardLike = { onCardLike },
  isLoggedIn,
}) => {
  return (
    <div className="clothes-section">
      <div className="clothes-section__labels">
        <p className="clothes-section__items">Your items</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes-section__add"
        >
          + Add new
        </button>
      </div>
      <ul className={"clothes-section__items"}>
        {clothingItems
          .filter((item) => {
            return item.owner === currentUser._id;
          })
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ClothesSection;
