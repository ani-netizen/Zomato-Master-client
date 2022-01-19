import HomeLayoutHoc from "./HOC/Home.hoc";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";
import Overview from "./components/Restaurant/Overview";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Reviews from "./components/Restaurant/Reviews/Reviews";
import Menu from "./components/Restaurant/Menu";
import Photos from "./components/Restaurant/Photos/Photos";
import CheckoutLayoutHoc from "./HOC/Checkout.hoc";
import Checkout from "./pages/Checkout";
import RestaurantPage from "./pages/RestaurantPage";
import GoogleAuth from "./pages/GoogleAuth";
import { getMySelf } from "./redux/reducers/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySelf());
  }, [dispatch]);

  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHoc exact component={HomePage} path="/:type" />
      <HomeLayoutHoc path="/google/:token" exact component={GoogleAuth} />
      <RestaurantLayoutHoc
        exact
        component={RestaurantPage}
        path="/restaurant/:id"
      />
      <RestaurantLayoutHoc
        exact
        component={Overview}
        path="/restaurant/:id/overview"
      />
      <RestaurantLayoutHoc
        exact
        component={OrderOnline}
        path="/restaurant/:id/order-online"
      />
      <RestaurantLayoutHoc
        exact
        component={Reviews}
        path="/restaurant/:id/reviews"
      />
      <RestaurantLayoutHoc exact component={Menu} path="/restaurant/:id/menu" />
      <RestaurantLayoutHoc
        exact
        component={Photos}
        path="/restaurant/:id/photos"
      />
      <CheckoutLayoutHoc path="/checkout/orders" exact component={Checkout} />
    </>
  );
}

export default App;
