import axios from "axios";
import { GET_REVIEW, POST_REVIEW } from "./review.type";

export const getReview = (resId) => async (dispatch) => {
  try {
    const reviewList = await axios({
      method: "GET",
      url: `https://zomato-master-server.herokuapp.com/review/${resId}`,
    });

    return dispatch({ type: GET_REVIEW, payload: reviewList.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const postReview = (reviewData) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `https://zomato-master-server.herokuapp.com/review/new`,
      data: reviewData,
    });

    return dispatch({
      type: POST_REVIEW,
      payload: reviewData,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
