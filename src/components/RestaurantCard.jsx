import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { getImage } from "../redux/reducers/image/image.action";

function RestaurantCard(props) {
  const [image, setImage] = useState({
    images: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    props.photos &&
      dispatch(getImage(props.photos)).then((data) => {
        const images = data.payload.images;
        setImage((prev) => ({ ...prev, images }));
      });
  }, [props.photos, dispatch]);

  return (
    <Link
      to={`/restaurant/${props._id}/overview`}
      className="md:w-1/2 lg:w-1/3"
    >
      <div className="p-4 mb-4 w-full rounded-2xl transition duration-700 ease-in-out hover:shadow-lg">
        <div className="w-full relative">
          <div className="w-full bottom-4 flex items-end justify-between">
            <div className="flex flex-col gap-2 items-start absolute">
              {props.isPro && (
                <span className="bg-zomRed-400 text-white px-2 py-1 rounded text-sm">
                  Pro extra 10% off
                </span>
              )}
              {props.isOff && (
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  $20 Off
                </span>
              )}
            </div>
            <img
              src={image.images.length && image.images[0].location}
              alt="restaurant"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="my-2 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium">{props.name}</h4>
              <span className="bg-green-800 text-white text-xs p-1 flex items-center">
                {props.restaurantReviewValue} <AiTwotoneStar />
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 text-gray-500">
              <p>{props.cuisine.join(", ")}</p>
              <p>${props.averageCost} for one</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
