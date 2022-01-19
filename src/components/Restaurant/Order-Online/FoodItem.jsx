import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";
import { getFood } from "../../../redux/reducers/food/food.action";
import { getImage } from "../../../redux/reducers/image/image.action";
import { addToCart } from "../../../redux/reducers/cart/cart.action";

function FoodItem(props) {
  const [food, setFood] = useState({});

  const dispatch = useDispatch();

  const reduxState = useSelector((globalState) => globalState.cart.cart);

  useEffect(() => {
    dispatch(getFood(props.id))
      .then((data) => {
        setFood(data.payload.foods);
        dispatch(getImage(data.payload.foods.photos)).then((data) => {
          const { images } = data.payload;
          images.length &&
            setFood((prev) => ({ ...prev, image: images[0].location }));
        });
        return data.payload.foods;
      })
      .then((data) => {
        reduxState.forEach((each) => {
          if (each._id === data._id) {
            setFood((prev) => ({ ...prev, isAddedToCart: true }));
          }
        });
      });
  }, [reduxState, dispatch, props.id]);

  const addFoodToCart = () => {
    dispatch(addToCart({ ...food, quantity: 1, totalPrice: food.price }));
    setFood((prev) => ({ ...prev, isAddedToCart: true }));
  };

  return (
    <>
      <div className="flex items-start gap-2 text-xs">
        {food?.name && (
          <div className="flex w-full items-start gap-2">
            {food?.image && (
              <div className="w-1/3 md:px-3">
                <img
                  src={food?.image}
                  alt="food item"
                  className="w-full h-full rounded-lg"
                />
              </div>
            )}
            <div className="w-2/3 md:w-7/12 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold">
                  {food?.name}
                </h3>
                <button
                  onClick={addFoodToCart}
                  disabled={food?.isAddedToCart}
                  className="flex items-center gap-3 text-zomRed-400 bg-zomRed-50 border-zomRed-400 px-1 py-1 rounded-lg"
                >
                  {food.isAddedToCart ? (
                    "Added"
                  ) : (
                    <>
                      <AiOutlinePlus /> Add
                    </>
                  )}
                </button>
              </div>
              <ReactStars count={5} value={food?.rating} />
              <h5>${food.price}</h5>
              <p className="truncate">{food?.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FoodItem;
