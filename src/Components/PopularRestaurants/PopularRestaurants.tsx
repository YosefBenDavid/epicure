import React from "react";
import Swiper from "../Swiper/Swiper";
import "swiper/css";
import "./PopularRestaurants.scss";
import useWindowWidth from '../../CustomHooks/useWindowWidth.tsx';
import { Dishes } from "./PopularRestaurants";
import DishCard from "../DishCard/DishCard";
import rightArrow from "../../Assets/rightArrow.svg";

const PopularRestaurants = () => {

  const windowWidth = useWindowWidth();
  
  return (
    <section className="popular-container">
      <div className="popular-title">POPULAR RESTAURANTS IN EPICURE:</div>
      <div className="fit-content">
        {windowWidth <= 700 ? (
          <Swiper dishes={Dishes} />
        ) : (
          <div className="non-swiper-content">
            {Dishes.map((dish, index) => (
              <DishCard dish={dish} key={index} />
            ))}
          </div>
        )}
        <div className="all-restaurants">
          <p>All restaurants</p>
          <img src={rightArrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurants;
