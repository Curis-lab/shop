"use client";

//just seperate provider ...> redux toolkit is only working  

import { Provider } from "react-redux";
import { store } from "./store";


export function Providers({ childern }: any) {
  return <Provider store={store}>{childern}</Provider>;
}
