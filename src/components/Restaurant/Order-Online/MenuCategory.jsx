import React from "react";
import classnames from "classnames";

function MenuCategory(props) {
  return (
    <>
      <div
        className={classnames("py-2 px-2 text-sm md:text-xs lg:text-sm", {
          "text-zomRed-400 bg-zomRed-50 border-r-4 border-zomRed-400":
            props.isActive,
        })}
      >
        <h3 id={props.name} onClick={props.onClickHandler}>
          {props.name} ({props.items.length})
        </h3>
      </div>
    </>
  );
}

export default MenuCategory;
