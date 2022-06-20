import { type } from "./type";

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_COINS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.GET_COINS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case type.GET_COINS_ERROR:
      return {
        data: {},
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default coinsReducer;
