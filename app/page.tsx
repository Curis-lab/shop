import { increment } from "./redux_store/features/counterSlice";
import { RootState } from "./redux_store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-black">
      <button onClick={() => dispatch(increment)}>Increment</button>
      <div>{count}</div>
      Hello
    </div>
  );
}
