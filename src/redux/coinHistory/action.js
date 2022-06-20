import { type } from "./type";
import { axios } from "../../apis/axios/axios";
import { endpoint } from "../../apis/requests/endpoint";

export const getCoinHistory = (cionId, timePeriod) => async (dispatch) => {
  dispatch({ type: type.GET_COIN_HISTORY_REQUEST });

  try {
    const { data } = await axios.get(
      `${endpoint.coin}${cionId}/${endpoint.history}?timePeriod=${timePeriod}`
    );
    dispatch({ type: type.GET_COIN_HISTORY_SUCCESS, payload: data });
    console.log("coin history data", data);
  } catch (err) {
    dispatch({ type: type.GET_COIN_HISTORY_ERROR, payload: err });
  }
};
