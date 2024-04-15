import React from "react";
import close from "../../../Assets/Header/mobile/menu/close.svg";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <div className="mobile-menu">
      <div className="close-menu">
        <img
          onClick={closeMenu}
          className="Header-mobile-menu"
          src={close}
          alt="mobile-menu"
        />
      </div>
      <div>
        <ul>
          {/* todo add restaurants page */}
          <Link to="/">
            <li>Restaurants</li>
          </Link>
          {/* todo add Chefs page */}
          <Link to="/">
            <li>Chefs</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul>
          {/* todo add Contact Us page */}
          <Link to="/">
            <li>Contact Us</li>
          </Link>
          {/* todo add Term of Use page */}
          <Link to="/">
            <li>Term of Use</li>
          </Link>
          {/* todo add Privacy Policy page */}
          <Link to="/">
            <li>Privacy Policy</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
