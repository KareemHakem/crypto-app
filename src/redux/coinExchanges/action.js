import { type } from "./type";
import { axios } from "../../apis/axios/axios";
import { endpoint } from "../../apis/requests/endpoint";

export const coinsExchange = (id) => async (dispatch) => {
  dispatch({ type: type.GET_COIN_EXCHANGES_REQUEST });

  try {
    const { data } = await axios.get(`${endpoint.coin}${id}/${endpoint.exchanges}`);
    dispatch({ type: type.GET_COIN_EXCHANGES_SUCCESS, payload: data });
    console.log("exchanges", data);
  } catch (err) {
    dispatch({ type: type.GET_COIN_EXCHANGES_ERROR, payload: err });
  }
};
