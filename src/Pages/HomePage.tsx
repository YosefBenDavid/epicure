import React from "react";
import HPBanner from "../Components/HPBanner/HPBanner";
import PopularRestaurants from "../Components/PopularRestaurants/PopularRestaurants.tsx";
import SignatureDishs from "../Components/SignatureDishs/SignatureDishs.tsx";
import IconDictionary from "../Components/IconDictionary/IconDictionary.tsx"
import ChefOfTheWeek from "../Components/ChefOfTheWeek/ChefOfTheWeek.tsx";

const HomePage = () => {

    return (
        <>
        <HPBanner />
        <PopularRestaurants />
        <SignatureDishs />
        <IconDictionary />
        <ChefOfTheWeek />
        </>
    )
}

export default HomePage;