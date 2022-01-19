import React from "react";
import FoodItem from "./FoodItem";

function FoodList(props) {
  return (
    <>
      <div>
        <h2 className="bg-white top-0 w-full px-2 py-1 z-10 sticky text-xl font-semibold text-gray-800">
          {props.name}
        </h2>
        <div className="flex flex-col gap-5">
          {props.items.map((each, index) => (
            <FoodItem id={each} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodList;
