import React from "react";

function NutritionCard({ image, title }) {
  return (
    <>
      <div className="shadow rounded-md w-20 h-full md:w-56 md:px-4 lg:w-36 xl:w-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-md"
        />
        <h3 className="text-sm my-1 text-center font-light md:text-xl xl:text-sm">
          {title}
        </h3>
      </div>
    </>
  );
}

function NutritionCarouselCard(props) {
  return (
    <>
      <NutritionCard {...props} />
    </>
  );
}

export default NutritionCarouselCard;
