import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

//! This is very important, and shows how to make payload optional when action is "reset"
type CounterAction = UpdateAction | ResetAction;

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
    case "reset":
      return initialState;
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
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </>
  );
}
