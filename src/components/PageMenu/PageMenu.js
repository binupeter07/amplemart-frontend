import React from "react";
import { NavLink } from "react-router-dom";
import "./PageMenu.scss";

const PageMenu = () => {
  return (
    <div>
      <nav className="--bg-primary --p --mb">
        <ul className="home-links">
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageMenu;
