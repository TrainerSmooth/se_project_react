import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import UserContext from "../../utils/UserContext"; // make sure this is the correct import path

const ClothesSection = ({
  handleAddClick,
  onCardClick,
  clothingItems,
  onCardLike = () => {}, // fix default value
  isLoggedIn,
}) => {
  const currentUser = useContext(UserContext);

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
      <ul className="clothes-section__items">
        {clothingItems
          ?.filter((item) => item.owner === currentUser._id)
          .map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          ))}
      </ul>
    </div>
  );
};

export default ClothesSection;
