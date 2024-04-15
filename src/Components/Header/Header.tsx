import React, { useState } from "react";
import epicureLogo from "../../Assets/Header/epicureLogo.svg";
import hamburMenu from "../../Assets/Header/mobile/hamburMenu.svg";
import cartLogo from "../../Assets/Header/cartLogo.svg";
import profileLogo from "../../Assets/Header/profileLogo.svg";
import searchLogo from "../../Assets/searchLogo.svg";
import epicureName from "../../Assets/Header/desktop/EPICUREName.svg";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  return (
    <header>
      <div className="desktop-left-div">
        <Link to="/" className="Header-desktop-logos">
          <img
            className="Header-desktop-logo"
            src={epicureLogo}
            alt="desktop-logo"
          />
          <img
            className="Header-desktop-name"
            src={epicureName}
            alt="lodesktop-name"
          />
        </Link>
        {/* todo add restaurants page */}
        <Link to="/" className="restaurants-p">
          <p>Restaurants</p>
        </Link>
        {/* todo add Chefs page */}
        <Link to="/" className="chefs-p">
          <p>Chefs</p>
        </Link>
      </div>
      <div className="mobile-left-div">
        <img
          className="Header-mobile-menu"
          src={hamburMenu}
          alt="mobile-menu"
          onClick={handleMenuClick}
        />
        {showMenu && <MobileMenu closeMenu={() => setShowMenu(false)} />}
      </div>

      <Link to="/" className="Header-mobile-logo-a">
        <img className="Header-mobile-logo" src={epicureLogo} alt="logo" />
      </Link>

      <div className="right-div">
        <img className="searchLogo" src={searchLogo} alt="searchLogo" />
        <Link to="/" className="profileLogo-a">
          <img className="profileLogo" src={profileLogo} alt="profileLogo" />
        </Link>
        <img className="cartLogo" src={cartLogo} alt="cartLogo" />
      </div>
    </header>
  );
};

export default Header;
