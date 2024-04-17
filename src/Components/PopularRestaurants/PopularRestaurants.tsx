import React from "react";
import Swiper from "../Swiper/Swiper";
import "swiper/css";
import "./PopularRestaurants.scss";
import { Dishes } from "./PopularRestaurants";
import DishCard from "../DishCard/DishCard";
import rightArrow from "../../Assets/rightArrow.svg";

const PopularRestaurants = () => {
  return (
    <section className="popular-container">
      <div className="popular-title">POPULAR RESTAURANTS IN EPICURE:</div>
      {window.innerWidth <= 700 ? (
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
    </section>
  );
};

export default PopularRestaurants;
