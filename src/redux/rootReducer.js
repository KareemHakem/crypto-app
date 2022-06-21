import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import coins from "./coins/reducer";
import coinDetail from "./coinDetail/reducer";
import coinsNews from "./cryptoNewos/reducer";
import coinHistory from "./coinHistory/reducer";
import exchanges from "./coinExchanges/reducer";
const persistConfig = {
  key: "KEY-1",
  storage,
  whiteList: [],
  blackList: [],
};

const rootReducer = combineReducers({
  coins,
  coinDetail,
  coinsNews,
  coinHistory,
  exchanges,
});

export default persistReducer(persistConfig, rootReducer);
