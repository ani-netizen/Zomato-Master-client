import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../../../redux/reducers/review/review.action";
import AddReviewCard from "./AddReviewCard";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    reduxState &&
      dispatch(getReview(reduxState?._id)).then((data) =>
        setReviews(data.payload.reviews)
      );
  }, [reduxState]);

  return (
    <>
      <div className="w-full h-full flex flex-col md:flex-row relative gap-5">
        <div className="w-full md:w-8/12 flex-col gap-3">
          <div className="md:hidden mb-5">
            <AddReviewCard />
          </div>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex items-start w-4/12 sticky rounded-xl top-2 right-2 bg-white p-4 shadow-md flex-col"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
}

export default Reviews;
