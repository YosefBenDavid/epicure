import React from "react";
import { Dish } from "../../Utilities/Utilities";
import "./DishCard.scss";
import star from "../../Assets/Star.svg";
import emptyStar from "../../Assets/emptyStar.svg";

interface PopularRestaurantsProps {
  dish: Dish;
  index: number;
}

const renderStars = (stars: number) => {
  const filledStars = Array.from({ length: stars }).map((_, index) => (
    <img key={`filled-${index}`} src={star} alt="star" className="star" />
  ));

  const emptyStars = Array.from({ length: 5 - stars }).map((_, index) => (
    <img
      key={`empty-${index}`}
      src={emptyStar}
      alt="empty-star"
      className="star"
    />
  ));

  return [...filledStars, ...emptyStars];
};

const DishCard: React.FC<PopularRestaurantsProps> = ({ dish, index }) => {
  return (
    <div key={index} className="dish-card">
      {dish.image && (
        <img src={dish.image} alt={dish.name} className="dish-image" />
      )}
      {dish.name && <h2 className="dish-name">{dish.name}</h2>}
      {dish.chef && <p className="dish-chef">{dish.chef}</p>}
      {dish.ingredients.length > 0 && (
        <ul className="dish-ingredients">
          {dish.ingredients.map((ingredient, i) => (
            <li key={i} className="ingredient">
              {ingredient}
            </li>
          ))}
        </ul>
      )}
      {dish.logo && <img src={dish.logo} alt="logo" className="chef-logo" />}
      {dish.price > -1 && (
        <p className="dish-price">Price: ${dish.price.toFixed(2)}</p>
      )}
      {dish.stars > -1 && (
        <div className="dish-stars">{renderStars(dish.stars)}</div>
      )}
    </div>
  );
};

export default DishCard;
