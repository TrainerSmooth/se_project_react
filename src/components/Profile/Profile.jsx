import React from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

const Profile = ({
  handleAddClick,
  onCardClick,
  clothingItems,
  selectedCard,
  handleEditProfileModal,
  onCardLike,
  handleLogOutClick,
  isLoggedIn,
}) => {
  const [items, setItems] = useState(clothingItems);

  useEffect(() => {
    setItems(clothingItems); // Ensure `items` updates when `clothingItems` changes
  }, [clothingItems]);
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleEditProfileModal={handleEditProfileModal}
          handleLogOutClick={handleLogOutClick}
        />
      </section>
      <section className="profile__clothing-its">
        <ClothesSection
          handleAddClick={handleAddClick}
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          selectedCard={selectedCard}
          onCardLike={onCardLike}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </div>
  );
};

export default Profile;
