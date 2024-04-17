import React from "react";
import "./IconDictionary.scss";
import { Icons } from "./IconData";

const IconMeaning = () => {
  return (
    <section className="icon-section">
      <div className="icon-section-title">THE MEANING OF OUR ICONS:</div>
      <div className="icon-map">
        {Icons.map((Icon, index) => (
          <div className="icon-block" key={index}>
            <img className="icon-image" src={Icon.image} />
            <p className="icon-name">{Icon.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconMeaning;
