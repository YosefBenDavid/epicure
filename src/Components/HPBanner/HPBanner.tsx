import React from "react";
import "./HPBanner.scss";
// import banner from "../../Assets/HPBanner/banner.svg";
import searchLogo from "../../Assets/searchLogo.svg";

const HPBanner = () => {
  return (
    <section className="banner-continer">
      {/* <img className="banner-img" src={banner} alt="banner" /> */}
      <div className="banner-middle-div">
        <div className="middle-div-text">
          <p>Epicure works with the Top</p>
          <p>chef restaurants in Tel Aviv</p>
        </div>
        <div className="search-input">
          <img
            className="banner-searchLogo"
            src={searchLogo}
            alt="searchLogo"
          />
          <input
            className="search-input"
            type="text"
            placeholder="Search for restaurant cuisine, chef"
          />
        </div>
      </div>
    </section>
  );
};

export default HPBanner;
