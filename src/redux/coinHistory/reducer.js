import { type } from "./type";

const initialState = {
  coinHistory: {},
  loading: false,
  error: null,
};

const coinHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_COIN_HISTORY_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.GET_COIN_HISTORY_SUCCESS:
      return {
        coinHistory: action.payload,
        loading: false,
        error: null,
      };

    case type.GET_COIN_HISTORY_ERROR:
      return {
        coinHistory: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default coinHistoryReducer;
