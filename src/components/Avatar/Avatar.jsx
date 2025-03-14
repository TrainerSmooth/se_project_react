import React, { useContext } from "react";
import "./Avatar.css";

function Avatar({ sizeClass }) {
  const { name, avatar } = useContext(currentUserContext);
  const avatarClass = sizeClass ? sizeClass : "";
  return avatar ? (
    <img src={avatar} alt={name} className={`avatar__image ${avatarClass}`} />
  ) : (
    <div className={`avatar__letter ${avatarClass}`}>{name.charAt(0)}</div>
  );
}

export default Avatar;
