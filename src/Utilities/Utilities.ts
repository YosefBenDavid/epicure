export interface Dish {
  image: string;
  name: string;
  chef: string;
  ingredients: string[];
  logo: string;
  price: number;
  stars: number;
}

export interface Restaurant {
  image: string;
  name: string;
}

export interface Chef {
  image: string;
  name: string;
  about: string;
  restaurants: Dish[];
}

export interface Restaurants {
  image: string;
  name: string;
}

export interface Icon {
  image: string;
  name: string;
}
