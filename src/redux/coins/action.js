import { type } from "./type";
import { axios } from "../../apis/axios/axios";
import { endpoint } from "../../apis/requests/endpoint";

export const getCoins = (count) => async (dispatch) => {
  dispatch({ type: type.GET_COINS_REQUEST });
  try {
    const { data } = await axios.get(`${endpoint.coins}?limit=${count}`);
    dispatch({ type: type.GET_COINS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: type.GET_COINS_ERROR, payload: error });
  }
};
