import { SELF, GET_USER, CLEAR_USER } from "./user.type";

const initialState = {
  user: {},
  self: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };

    case SELF:
      return { ...state, self: action.payload };

    case CLEAR_USER:
      return { self: {} };

    default:
      return { ...state };
  }
};

export default userReducer;
