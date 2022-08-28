import { type } from "./type";
import { axios } from "../../apis/axios/axios";
import { endpoint } from "../../apis/requests/endpoint";

export const getCoinsDetails = (coinId) => async (dispatch) => {
  dispatch({ type: type.GET_COINS_DETAILS_REQUEST });
  try {
    const { data } = await axios.get(`${endpoint.coin}${coinId}`);
    dispatch({ type: type.GET_COINS_DETAILS_SUCCESS, payload: data });
    console.log(data, "data coinssssssss");
  } catch (error) {
    dispatch({ type: type.GET_COINS_DETAILS_ERROR, payload: error });
  }
};
