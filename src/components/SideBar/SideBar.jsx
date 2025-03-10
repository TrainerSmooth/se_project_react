import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";
import "./SideBar.css";
import Avatar from "../Avatar/Avatar";

const SideBar = ({ handleEditProfileModal, handleLogOutClick }) => {
  const { name } = useContext(UserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <Avatar sizeClass="avatar-large" />
        <p className="sidebar__username">{name}</p>
      </div>
      <div className="avatar__buttons">
        <button
          onClick={handleEditProfileModal}
          type="button"
          className="sidebar__change-profile"
        >
          Change profile data
        </button>
        <button onClick={handleLogOutClick} className="sidebar__logout">
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
