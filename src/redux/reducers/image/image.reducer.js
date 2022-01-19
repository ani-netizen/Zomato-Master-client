import { GET_IMAGE } from "./image.type";

const initialState = {
  image: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return { ...state, images: action.payload };

    default:
      return { ...state };
  }
};

export default imageReducer;
