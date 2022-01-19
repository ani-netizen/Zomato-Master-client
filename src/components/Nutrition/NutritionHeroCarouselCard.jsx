import React from "react";

function NutritionHeroCarouselCard(props) {
  return (
    <div className="w-full">
      <img
        src={props.image}
        alt="nutrition"
        className="w-full h-full object-cover object-center rounded-lg"
      />
    </div>
  );
}

export default NutritionHeroCarouselCard;
