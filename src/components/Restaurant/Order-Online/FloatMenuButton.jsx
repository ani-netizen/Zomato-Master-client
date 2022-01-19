import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import MenuListContainer from "./MenuListContainer";

function FloatMenuButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => setIsClicked((prev) => !prev);

  return (
    <>
      <div className="fixed z-30 w-9/12 flex flex-col gap-3 items-end bottom-2 right-2 md:hidden">
        {isClicked && (
          <div className="p-3 w-full bg-white h-48 overflow-y-scroll">
            {props.menu.map((item, index) => (
              <MenuListContainer
                {...item}
                key={index}
                onClickHandler={props.onClickHandler}
                selected={props.selected}
              />
            ))}
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="text-white flex items-center gap-2 bg-yellow-900 px-3 py-1 rounded-full"
        >
          {isClicked ? <MdClose /> : <HiMenu />} Menu
        </button>
      </div>
    </>
  );
}

export default FloatMenuButton;
