import React from "react";
import avatar from "../../assets/avatar.png";
import { useUser } from "../../utils/contexts/UserContext.jsx";
import "./SideBar.css";
function SideBar() {
  const { user, handleOpenEditProfileModal } = useUser();
  
  return (
    <div className="sidebar">
      <img 
        src={user?.avatar || avatar} 
        alt={user?.name || "user"} 
        className="sidebar__avatar" 
      />
      <h2 className="sidebar__username">{user?.name || "User"}</h2>
      <button
        className="sidebar__edit-button"
        type="button"
        onClick={handleOpenEditProfileModal}
      >
        Edit profile
      </button>
    </div>
  );
}

export default SideBar;
