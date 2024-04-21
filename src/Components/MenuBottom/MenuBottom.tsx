import React from "react";
import { Link } from "react-router-dom";
import "./MenuBottom.scss"

const MenuBottom: React.FC = () => {
  return (
    <div className="menu-bottom">
      <ul>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Term of Use</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBottom;
