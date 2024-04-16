import React from "react";
import close from "../../../Assets/Header/mobile/menu/close.svg";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="close-menu">
        <img className="Header-mobile-menu" onClick={onClose} src={close} alt="mobile-menu" />
      </div>
      <div className="menu-top">
        <ul>
          <li>
            <Link to="/">Restaurants</Link>
          </li>
          <li>
            <Link to="/">Chefs</Link>
          </li>
        </ul>
      </div>
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
    </div>
  );
};

export default MobileMenu;
