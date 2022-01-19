import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import FoodItem from "./FoodItem";

function CartSM({ toggleCart }) {
  const reduxState = useSelector((globalState) => globalState.cart.cart);

  const history = useHistory();

  const continueToCheckout = () => history.push("/checkout/orders");

  return (
    <>
      <div className="md:hidden flex items-center justify-between">
        <div className="flex flex-col items-start">
          <small className="flex items-center gap-1" onClick={toggleCart}>
            {reduxState.length} Item <IoMdArrowDropup />
          </small>
          <h4>
            ${reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}{" "}
            <sub>(plus tax)</sub>
          </h4>
        </div>
        <button
          onClick={continueToCheckout}
          className="flex items-center gap-1 bg-zomRed-400 px-3 py-1 text-white rounded-lg"
        >
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
}

function CartLG({ toggleCart }) {
  const reduxState = useSelector((globalState) => globalState.cart.cart);

  const history = useHistory();

  const continueToCheckout = () => history.push("/checkout/orders");

  return (
    <>
      <div className="hidden md:flex items-center justify-between">
        <div className="flex flex-col items-start">
          <small className="flex items-center gap-1" onClick={toggleCart}>
            {reduxState.length} Item <IoMdArrowDropup />
          </small>
          <h4>
            ${reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}{" "}
            <sub>(plus tax)</sub>
          </h4>
        </div>
        <button
          onClick={continueToCheckout}
          className="flex items-center gap-1 bg-zomRed-400 px-3 py-1 text-white rounded-lg"
        >
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
}

function CartContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const reduxState = useSelector((globalState) => globalState.cart.cart);

  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);

  if (reduxState.length) {
    return (
      <>
        {isOpen && (
          <div className="fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-12 px-3">
            <div className="flex items-center justify-between md:px-20">
              <h3 className="text-xl font-semibold">Your Orders</h3>
              <IoCloseSharp onClick={closeCart} />
            </div>
            <hr className="my-2" />
            <div className="flex flex-col gap-2 md:px-20">
              {reduxState.map((food) => (
                <FoodItem key={food._id} {...food} />
              ))}
            </div>
          </div>
        )}
        <div className="container mx-auto px-4 lg:px-20 fixed bottom-0 left-0 right-0 bg-white z-10 py-1">
          <CartSM toggleCart={toggleCart} />
          <CartLG toggleCart={toggleCart} />
        </div>
      </>
    );
  }

  return null;
}

export default CartContainer;
