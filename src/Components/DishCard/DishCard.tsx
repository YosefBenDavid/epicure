import React from "react";
import { Dish } from "../../Utilities/Utilities";
import "./DishCard.scss";
import star from "../../Assets/Star.svg";
import emptyStar from "../../Assets/emptyStar.svg";
import nis from "../../Assets/Icons/nis.svg";
import line from "../../Assets/line.svg";

interface DishCardProps {
  dish: Dish;
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

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="dish-card" key={dish.name}>
      {dish.image && (
        <img src={dish.image} alt={dish.name} className="dish-image" />
      )}
      <div className="dish-props">
        {dish.name && <h2 className="dish-name">{dish.name}</h2>}
        {dish.chef && <p className="dish-chef">{dish.chef}</p>}
        <div className="typeNingredients">
          {dish.logo && (
            <img src={dish.logo} alt="logo" className="type-logo" />
          )}
          {dish.ingredients.length > 0 && (
            <div className="dish-ingredients">
              {dish.ingredients.map((ingredient, i) => (
                <span key={i} className="ingredient">
                  {ingredient}, <span> </span>
                </span>
              ))}
            </div>
          )}
        </div>
        {dish.stars > -1 && (
          <div className="dish-stars">{renderStars(dish.stars)}</div>
        )}
        {dish.price > -1 && (
          <div className="dish-price">
            <img src={line} alt="nis" />
            <p>
              <img src={nis} className="nis" alt="nis" />
              {dish.price.toFixed(2)}
            </p>
            <img src={line} alt="nis" />
          </div>
        )}
      </div>
    </div>
  );
};

export default DishCard;
