import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CheckoutNavbar from "../components/Navbar/CheckoutNavbar";
import { getCart } from "../redux/reducers/cart/cart.action";

function CheckoutLayout(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  });
  
  return (
    <>
      <CheckoutNavbar />
      <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
    </>
  );
}

export default CheckoutLayout;
