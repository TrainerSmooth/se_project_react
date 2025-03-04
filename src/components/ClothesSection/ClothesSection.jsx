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
  const currentUser = useContext(CurrentUserContext);
  // const isOwn = selectedCard.owner === currentUser._id;
  // const clothesSectionItemsClassname = `clothes-section__items ${
  //   isOwn ? "clothes-section__items_visible" : "clothes-section__items_hidden"
  // }`;

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
