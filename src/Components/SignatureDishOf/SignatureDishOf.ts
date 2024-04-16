import { Dish } from "../../Utilities/Utilities";
import claro from "../../Assets/PopularRestaurants/claro.svg";
import Lumina from "../../Assets/PopularRestaurants/Lumina.svg";
import tigerLily from "../../Assets/PopularRestaurants/tiger-lily.svg";

export const Dishes: Dish[] = [
  {
    image: claro,
    name: "Claro",
    chef: "Ran Shmueli",
    ingredients: [],
    logo: "",
    price: -1,
    stars: 4,
  },
  {
    image: Lumina,
    name: "Lumina",
    chef: "Meir Adoni",
    ingredients: [],
    logo: "",
    price: -1,
    stars: 3,
  },
  {
    image: tigerLily,
    name: "Tiger Lilly",
    chef: "Yanir Green",
    ingredients: [],
    logo: "",
    price: -1,
    stars: 4,
  },
];
