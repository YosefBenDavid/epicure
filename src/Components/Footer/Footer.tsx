import React from "react";
import "./Footer.scss";

import mobileLogo from "../../Assets/Footer/FLogo.png";
import logo from "../../Assets/Footer/FLogo.svg";
import googlePlay from "../../Assets/Footer/googlePlay.svg";
import appStore from "../../Assets/Footer/appStore.svg";
import MenuBottom from "../../Components/MenuBottom/MenuBottom.tsx";
import useWindowWidth from "../../CustomHooks/useWindowWidth.tsx";

const Footer = () => {
  const windowWidth = useWindowWidth();

  return (
    <footer className="footer">
      <div className="margin-container">
        <div className="top">
          <div className="footer-section-left">
            <div className="about">
              <h2 className="footer-heading">ABOUT US:</h2>
              {windowWidth <= 700 ? (
                <p className="footer-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                  lacus vel justo fermentum bibendum non eu ipsum. Cras porta
                  malesuada eros, eget blandit turpis suscipit at. Vestibulum
                  sed massa in magna sodales porta. Vivamus elit urna, dignissim
                  a vestibulum. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In a lacus vel justo fermentum bibendum no eu
                  ipsum. Cras porta malesuada eros.
                </p>
              ) : (
                <div className="footer-text-desktop-display">
                  <p className="footer-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    a lacus vel justo fermentum bibendum non eu ipsum. Cras
                    porta malesuada eros, eget blandit turpis suscipit at.
                    Vestibulum sed massa in magna sodales porta. Vivamus elit
                    urna, dignissim a vestibulum.
                  </p>
                  <p className="footer-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    a lacus vel justo fermentum bibendum no eu ipsum. Cras porta
                    malesuada eros.
                  </p>
                </div>
              )}
            </div>
            <div className="footer-section-apps">
              <img src={appStore} alt="appStore" className="apple-icon" />
              <img src={googlePlay} alt="googlePlay" className="google-icon" />
            </div>
          </div>
          <div className="footer-section-right">
            {windowWidth <= 700 ? (
              <img src={mobileLogo} alt="logo" className="footer-logo" />
            ) : (
              <img src={logo} alt="logo" className="footer-logo" />
            )}
          </div>
        </div>
      </div>

      <MenuBottom />
    </footer>
  );
};

export default Footer;
