import React from "react";
import HPBanner from "../Components/HPBanner/HPBanner";
import PopularRestaurants from "../Components/PopularRestaurants/PopularRestaurants.tsx";
import SignatureDishs from "../Components/SignatureDishs/SignatureDishs.tsx";

const HomePage = () => {

    return (
        <div>
        <HPBanner />
        <PopularRestaurants />
        <SignatureDishs />
        </div>
    )
}

export default HomePage;