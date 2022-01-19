import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import FloatMenuButton from "./Order-Online/FloatMenuButton";
import FoodList from "./Order-Online/FoodList";
import MenuListContainer from "./Order-Online/MenuListContainer";
import { getFoodList } from "../../redux/reducers/food/food.action";

function OrderOnline() {
  const [menu, setMenu] = useState([]);

  const [selected, setSelected] = useState("Recommended");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    reduxState &&
      dispatch(getFoodList(reduxState.menu)).then((data) => {
        setMenu(data.payload.menus.menus);
      });
  }, [reduxState, dispatch]);

  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45
              mins
            </h4>
          </div>
          <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList {...item} key={index} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuButton
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
}

export default OrderOnline;
