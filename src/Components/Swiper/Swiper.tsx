import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Dish } from "../../Utilities/Utilities";
import "./Swiper.scss";
import DishCard from "../DishCard/DishCard";

interface PopularRestaurantsProps {
  dishes: Dish[];
}

const PopularRestaurants: React.FC<PopularRestaurantsProps> = ({ dishes }) => {
  return (
    <div className="swiper-container">
      <Swiper spaceBetween={24} slidesPerView={1.3}>
        {dishes.map((dish, index) => (
          <SwiperSlide key={index} className="dish-slide">
            <DishCard dish={dish} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularRestaurants;
