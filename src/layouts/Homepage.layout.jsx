import React from "react";
import FoodTab from "../components/FoodTab";
import Navbar from "../components/Navbar";

function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-1 lg:px-10 w-10/12">{children}</div>
    </div>
  );
}

export default HomeLayout;
