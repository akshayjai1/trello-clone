import React from "react";
import Relevel from "../assets/relevel.jpeg";
import { SearchOutline } from "react-ionicons";
import "./Header.css";

export const Header = (props) => {
  return (
    <div className="header-container">
      <div
        className="logo"
        style={{
          backgroundImage: `url(${Relevel})`,
        }}
      />
      <div className="logo-text">Relevel Trello</div>
      <div>
        <SearchOutline
          color={"#00000"}
          title={"Search"}
          className="search-icon"
        />
        <input className="search-input" type="search" placeholder="Search..." />
      </div>
      <button className="add-card-button">Add Card</button>
    </div>
  );
};
