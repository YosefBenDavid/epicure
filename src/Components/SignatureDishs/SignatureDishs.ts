import { Dish } from "../../Utilities/Utilities";
import garbanzo from "../../Assets/SignatureDishOf/garbanzo.svg";
import padkimao from "../../Assets/SignatureDishOf/padkimao.svg";
import pizza from "../../Assets/SignatureDishOf/pizza.svg";
import spicy from "../../Assets/Icons/spicy.svg"
import vegan from "../../Assets/Icons/vegan.svg"

export const SignatureDishes: Dish[] = [
  {
    image: padkimao,
    name: "Pad Ki Mao",
    chef: "",
    ingredients: ["Shrimps", "Glass Noodles", "Kemiri Nuts", "Shallots", "Lemon Grass", "Magic Chili Brown Coconut"],
    logo: spicy,
    price: 88,
    stars: -1,
  },
  {
    image: garbanzo,
    name: "Garbanzo Frito",
    chef: "",
    ingredients: ["Polenta fingers", "veal cheek", "magic chili cured lemon cream", "yellow laksa"],
    logo: spicy,
    price: 98,
    stars: -1,
  },
  {
    image: pizza,
    name: "Smoked Pizza",
    chef: "",
    ingredients: ["Basil dough", 'cashew "butter"', "demi-glace", "bison & radish"],
    logo: vegan,
    price: 65,
    stars: -1,
  },
];
