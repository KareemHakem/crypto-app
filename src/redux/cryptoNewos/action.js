import { type } from "./type";
import { axiosNews } from "../../apis/axios/axios";
import { endpoint } from "../../apis/requests/endpoint";

export const getCryptoNews = () => async (dispatch) => {
  dispatch({ type: type.GET_CRYPTO_NEWS_REQUEST });
  try {
    const { data } = await axiosNews.get(`${endpoint.news}/${endpoint.search}`);
    console.log(data);
    dispatch({ type: type.GET_CRYPTO_NEWS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.GET_CRYPTO_NEWS_ERROR, payload: err });
    console.log(err);
  }
};
