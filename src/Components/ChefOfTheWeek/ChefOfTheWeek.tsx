import React from "react";
import useWindowWidth from "../../CustomHooks/useWindowWidth.tsx";
import { chef } from "./ChefOfTheWeekData.ts";
import "./ChefOfTheWeek.scss";
import Swiper from "../Swiper/Swiper.tsx";
import DishCard from "../DishCard/DishCard.tsx";

const ChefOfTheWeek = () => {
  const windowWidth = useWindowWidth();
  const firstName = chef.name.split(" ")[0];
  let title;

  // Set different titles based on window width
  if (windowWidth <= 700) {
    title = `${firstName.toUpperCase()}'S RESTAURANTS`;
  } else {
    title = `${firstName}'s Restaurants`;
  }
  return (
    <section className="ChefOfTheWeek-container">
      <div className="margin-container">
      <div className="chef-title">CHEF OF THE WEEK:</div>
        <div className="bio">
          <div className="id">
            <img src={chef.image} alt="photo" />
            <p className="name">{chef.name}</p>
          </div>
          <div className="about">{chef.about}</div>
        </div>

        <div className="restaurants">
          <div className="title">{title}</div>
          {windowWidth <= 700 ? (
            <Swiper dishes={chef.restaurants} />
          ) : (
            <div className="non-swiper-content">
              {chef.restaurants.map((dish, index) => (
                <DishCard dish={dish} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChefOfTheWeek;
