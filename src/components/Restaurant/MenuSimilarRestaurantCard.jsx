import React from "react";
import { TiStar } from "react-icons/ti";

function MenuSimilarRestaurantCard(props) {
  return (
    <>
      <div className="mx-2">
        <div className="bg-white shadow rounded-md">
          <div className="w-full h-48">
            <img
              src={props.image}
              alt="food item"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 p-2 m-1">
            <h3 className="font-semibold text-lg">{props.title}</h3>
            <div className="flex items-center text-xs">
              <span className="flex items-center gap-0.5">
                <span className="flex items-center bg-green-700 text-white px-2 py-1 rounded">
                  30 <TiStar />
                </span>
                Dining
              </span>
              <span className="h-4 border-r bg-gray-500 mx-2" />
              <span className="flex items-center gap-0.5">
                <span className="flex items-center bg-green-700 text-white px-2 py-1 rounded">
                  400 <TiStar />
                </span>
                Delivery
              </span>
            </div>
            <h4>Street Food, Beverages, Tea</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuSimilarRestaurantCard;
