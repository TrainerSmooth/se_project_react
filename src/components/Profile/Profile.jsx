import React from "react";
import "./Profile.css";

const Profile = ({
  handleAddClick,
  onCardClick,
  clothingItems,
  selectedCard,
  handleEditProfileModal,
  onCardLike = { onCardLike },
  handleLogOutClick,
  isLoggedIn,
}) => {
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
