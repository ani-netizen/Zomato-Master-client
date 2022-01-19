import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../../redux/reducers/image/image.action";
import MenuCollection from "./MenuCollection";

function Menu() {
  const [menus, setMenus] = useState([]);

  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const image = [];
        data.payload.images.map(({ location }) => image.push(location));
        setMenus(image);
      });
    }
  }, [reduxState, dispatch]);

  return (
    <div className="flex flex-wrap gap-3">
      <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
    </div>
  );
}

export default Menu;
