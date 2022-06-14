import React from "react";
import "./sidebar.scss";
import Search from "../../pictures/search_icon.png";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div className="menu-left">
          <ul className="menu-list">
            <li className="menu-item">NFTs Hubs</li>
            <li className="menu-item">Explore</li>
            <li className="menu-item">Create</li>
            <li className="menu-item">Feed</li>
          </ul>
        </div>
        <div className="menu-right">
          <div className="menu-search">
            <img src={Search} alt="" className="menu-search__icon" />
            <input
              type="text"
              placeHolder="Search"
              className="menu-search__input"
              id="menu-search__input"
            />
          </div>
          <div className="menu-button">
            <span>Sign In Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
