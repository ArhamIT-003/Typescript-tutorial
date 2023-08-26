import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addByNumber } from "../store/counterSlice";
import { RootState } from "../store/store";

const Counter = () => {
  const [counter, setCounter] = useState<number>();
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} disabled={count <= 0}>
        Decrement
      </button>
      <input
        type="text"
        value={counter}
        onChange={(e) => {
          setCounter(Number(e.target.value));
        }}
      />
      <button onClick={() => dispatch(addByNumber(counter))}>
        Add by number
      </button>
    </div>
  );
};

export default Counter;
