import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

function NutritionCard(props) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-3">
      <div className="rounded-2xl shadow-lg">
        <div className={`rounded-t-2xl bg-${props.bg}-100`}>
          <img src={props.image} alt="suppliments" className="object-fill" />
        </div>
        <div className="p-2 flex flex-col gap-2">
          <div className="flex mt-2 items-center gap-3">
            <div className="w-4 h-4">
              <img
                src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
                alt="veg"
                className="w-full h-full"
              />
            </div>
            <ReactStars
              count={5}
              size={16}
              isHalf={true}
              value={3}
              emptyIcon={<BsStar />}
              halfIcon={<BsStarHalf />}
              fullIcon={<BsStarFill />}
            />
            <span className="text-gray-400">15</span>
          </div>
          <h3 className="text-xl font-bold text-gray-400">
            Burn - Weight Balance
          </h3>
          <p className="text-sm font-light text-gray-400">
            Lorem Ipsum Lorem Ipsum
          </p>
          <div className="mt-2">
            <hr />
          </div>
          <div>
            <span>
              <s className="text-gray-300 font-light mt-3">$600</s>
              {"  "}
              <strong>$320</strong>
            </span>
            <p>Monthly pack - 30 capsules</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionCard;
