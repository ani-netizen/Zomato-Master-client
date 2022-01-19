import React from "react";
import { useDispatch } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../redux/reducers/cart/cart.action";

function FoodItem(props) {
  const dispatch = useDispatch();

  const deleteFoodFromCart = () => dispatch(deleteFromCart(props._id));

  const increment = () => dispatch(incrementQuantity(props._id));

  const decrement = () => {
    if (props.quantity === 1) {
      return;
    }

    dispatch(decrementQuantity(props._id));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h5>{props.name}</h5>
        <div className="flex flex-col items-start">
          <small>${parseInt(props.price) * parseInt(props.quantity)}</small>
          <div className="flex items-center gap-2">
            <div className="px-1 bg-zomRed-400 text-white rounded flex items-center gap-1">
              <button
                onClick={decrement}
                className="p-1 bg-zomRed-400 text-white rounded"
              >
                -
              </button>
              <small>{props.quantity}</small>
              <button
                onClick={increment}
                className="p-1 bg-zomRed-400 text-white rounded"
              >
                +
              </button>
            </div>
            <BsTrashFill
              onClick={deleteFoodFromCart}
              className="text-zomRed-400 text-lg md:text-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
