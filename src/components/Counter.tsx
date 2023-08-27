import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addByNumber } from "../store/counterSlice";
import { RootState } from "../store/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count); // Use "counter" instead of "count"
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div>
      <h1>Counter App: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} disabled={count <= 0}>
        Decrement
      </button>
      <input
        type="number" // Use "number" type for input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(addByNumber(Number(inputValue)))}>
        Add by number
      </button>
    </div>
  );
};

export default Counter;
