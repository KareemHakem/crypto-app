import { type } from "./type";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const coinDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_COINS_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.GET_COINS_DETAILS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case type.GET_COINS_DETAILS_ERROR:
      return {
        data: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default coinDetailReducer;
