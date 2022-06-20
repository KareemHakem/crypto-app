import { type } from "./type";

const initialState = {
  cryptoNews: {},
  error: null,
  loading: false,
};

const cryptoNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_CRYPTO_NEWS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.GET_CRYPTO_NEWS_SUCCESS:
      return {
        cryptoNews: action.payload,
        loading: false,
        error: null,
      };
    case type.GET_CRYPTO_NEWS_ERROR:
      return {
        cryptoNews: {},
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default cryptoNewsReducer;
