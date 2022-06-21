import { type } from "./type";

const initialState = {
  exchanges: {},
  loading: false,
  error: null,
};

const coinExchangesReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_COIN_EXCHANGES_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.GET_COIN_EXCHANGES_SUCCESS:
      return {
        exchanges: action.payload,
        loading: false,
        error: null,
      };
    case type.GET_COIN_EXCHANGES_ERROR:
      return {
        exchanges: {},
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default coinExchangesReducer;
