import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import { signOut } from "../../redux/reducers/auth/auth.action";

function MobileNav({ SignUp, SignIn }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const reduxState = useSelector((globalState) => globalState.user.self.user);

  const dispatch = useDispatch();

  return (
    <div className="py-1.5 pl-4 flex w-full items-center justify-between lg:hidden">
      <div className="w-24">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="zomato"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 relative">
          <button className="bg-zomRed-500 text-white py-1.5 px-2 rounded-full text-sm">
            Use App
          </button>
          {reduxState?.fullName ? (
            <>
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border-gray-300 text-zomRed-400 w-9 h-9 rounded-full"
              >
                <img
                  src="https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?h=500&fakeurl=1&type=.jpg"
                  alt="user"
                  className="w-full h-full rounded-full"
                />
              </div>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full z-20 flex flex-col gap-2">
                  <button onClick={() => dispatch(signOut())}>Sign Out</button>
                </div>
              )}
            </>
          ) : (
            <>
              <span
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border p-2 border-gray-300 text-zomRed-400 rounded-full"
              >
                <FaUserAlt className="w-full h-full" />
              </span>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 bg-white -bottom-20 -right-4 w-full z-20 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      SignIn();
                      setIsDropDownOpen((prev) => !prev);
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      SignUp();
                      setIsDropDownOpen((prev) => !prev);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function LargeNav({ SignUp, SignIn }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const reduxState = useSelector((globalState) => globalState.user.self.user);

  const dispatch = useDispatch();

  return (
    <>
      <div className="hidden lg:inline container w-full px-1 py-2">
        <div className="gap-4 w-full items-center justify-between flex">
          <div className="gap-4 w-full items-center flex">
            <div className="w-28">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato"
                className="w-full h-full"
              />
            </div>
            <div className="w-3/4 shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
              <div className="flex items-center gap-2 border-r-2 border-gray-200">
                <span className="text-zomRed-400">
                  <HiLocationMarker className="w-5 h-5" />
                </span>
                <input
                  type="text"
                  placeholder="Mumbai"
                  className="focus:outline-none"
                />
                <IoMdArrowDropdown className="w-6 h-6" />
              </div>
              <div className="flex w-full items-center gap-2">
                <ImSearch className="w-4 h-4" />
                <input
                  type="search"
                  placeholder="Search for reastaurant, cuisine or a dish"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
          </div>
          {reduxState?.fullName ? (
            <div className="relative w-20">
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border border-gray-300 text-zomRed-400 w-full h-full rounded-full"
              >
                <img
                  src="https://image.winudf.com/v2/image1/Y29tLmJ1bnR5YXBweC5hdnRhcm1ha2VyX3NjcmVlbl8wXzE1NjM0OTUwODFfMDg3/screen-0.jpg?h=500&fakeurl=1&type=.jpg"
                  alt="user"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full z-20 flex flex-col gap-2">
                  <button onClick={() => dispatch(signOut())}>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-8">
              <button
                className="text-gray-500 text-xl hover:text-gray-800"
                onClick={SignIn}
              >
                LogIn
              </button>
              <button
                className="text-gray-500 text-xl hover:text-gray-800"
                onClick={SignUp}
              >
                SignUp
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openSignInModal = () => setOpenSignIn(true);
  const openSignUpModal = () => setOpenSignUp(true);

  return (
    <>
      <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />
      <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn} />

      <nav className="py-1 px-2 flex shadow-md lg:shadow-none justify-center">
        <MobileNav SignUp={openSignUpModal} SignIn={openSignInModal} />
        <LargeNav SignUp={openSignUpModal} SignIn={openSignInModal} />
      </nav>
    </>
  );
}

export default Navbar;
