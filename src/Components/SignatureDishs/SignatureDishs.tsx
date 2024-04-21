import React from "react";
import { SignatureDishes } from "./SignatureDishs.ts";
import Swiper from "../Swiper/Swiper.tsx";
import DishCard from "../DishCard/DishCard.tsx";
import "./SignatureDishs.scss"
import useWindowWidth from '../../CustomHooks/useWindowWidth.tsx';

const SignatureDishs = () => {

  const windowWidth = useWindowWidth();

  return (
    <section className="signature-container">
      <div className="signature-title">SIGNATURE DISH OF:</div>
      {windowWidth <= 700 ? (
        <Swiper dishes={SignatureDishes} />
      ) : (
        <div className="non-swiper-content">
          {SignatureDishes.map((dish, index) => (
            <DishCard key={index} dish={dish} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SignatureDishs;
