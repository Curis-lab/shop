import { ActionTypes } from "./Types";

export const shopReducer = (storeData: any, action: any) => {
  switch (action.type) {
    case ActionTypes.LOAD_DATA:
      return { ...storeData, ...action.payload.data_flow };
    default:
      return storeData || {};
  }
};
