import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

//! typescript code is here
function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}

export default function Counter() {
  const [satte, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {satte.count}
      <button type="button" onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment by 10
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement by 10
      </button>
    </>
  );
}
