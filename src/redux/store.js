// import { configureStore } from "@reduxjs/toolkit";
// import { baseApi } from "./config";

// export default configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// });

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore } from "redux-persist";

import RootReducer from "./rootReducer";

const middleWare = [thunk];

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);
