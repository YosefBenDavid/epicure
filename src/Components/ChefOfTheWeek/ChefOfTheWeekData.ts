import { Chef } from "../../Utilities/Utilities";
import claro from "../../Assets/ChefOfTheWeek/YossiShitrit.svg";
import Onza from "../../Assets/ChefOfTheWeek/Restaurants/Onza.svg";
import Mashya from "../../Assets/ChefOfTheWeek/Restaurants/Mashya.svg";
import KitchenMarket from "../../Assets/ChefOfTheWeek/Restaurants/KitchenMarket.svg";

export const chef: Chef = {
  image: claro,
  name: "Yossi Shitrit",
  about:
    "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
  restaurants: [
    {
      image: Onza,
      name: "Onza",
      chef: "",
      ingredients: [],
      logo: "",
      price: -1,
      stars: -1,
    },
    {
      image: KitchenMarket,
      name: "Kitchen Market",
      chef: "",
      ingredients: [],
      logo: "",
      price: -1,
      stars: -1,
    },
    {
      image: Mashya,
      name: "Mashya",
      chef: "",
      ingredients: [],
      logo: "",
      price: -1,
      stars: -1,
    },
  ],
};
