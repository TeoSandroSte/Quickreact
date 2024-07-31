import {
  increment,
  decrement,
} from "@/store/slices/counter/counterSlice.slice";
import { useDispatch } from "react-redux";

const Dispatch = () => {
  console.log("carico Dispatch");

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementHandler}>Increment</button>
    </>
  );
};

export default Dispatch;
