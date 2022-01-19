import axios from "axios";
import { clearUser } from "../user/user.action";
import { GOOGLE_AUTH, SIGN_IN, SIGN_OUT, SIGN_UP } from "./auth.type";

export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `https://zomato-master-server.herokuapp.com/auth/sign-in`,
      data: { credentials: userData },
    });

    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    window.location.reload();

    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `https://zomato-master-server.herokuapp.com/auth/sign-up`,
      data: { credentials: userData },
    });

    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    window.location.reload();

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("zomatoUser");

    clearUser();

    window.location.href = "http://localhost:3000/delivery";

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const googleAuth = (token) => async (dispatch) => {
  try {
    localStorage.setItem("zomatoUser", JSON.stringify({ token }));

    return dispatch({ type: GOOGLE_AUTH, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
