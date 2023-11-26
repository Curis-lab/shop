import { ActionTypes } from "./Types";
import axios from "axios";

export const dataLoad = () => async (dispatch:any) => {
  const res = await axios.get(`https://dummyjson.com/products`);
  dispatch({
    type: ActionTypes.LOAD_DATA,
    payload: {
      data_type: "products",
      data_flow: res.data,
    },
  });
};
