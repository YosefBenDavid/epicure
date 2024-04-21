import React from "react";
import HPBanner from "../Components/HPBanner/HPBanner";
import PopularRestaurants from "../Components/PopularRestaurants/PopularRestaurants.tsx";
import SignatureDishs from "../Components/SignatureDishs/SignatureDishs.tsx";
import IconDictionary from "../Components/IconDictionary/IconDictionary.tsx"
import ChefOfTheWeek from "../Components/ChefOfTheWeek/ChefOfTheWeek.tsx";
import { Fade } from "react-awesome-reveal";

const HomePage = () => {

    return (
        <Fade>
        <HPBanner />
        <PopularRestaurants />
        <SignatureDishs />
        <IconDictionary />
        <ChefOfTheWeek />
        </Fade>
    )
}

export default HomePage;