import React, {useReducer} from 'react'


function reducer(state, action) {
  if (action.type === "increase") {
    return state + 1;
  }

  if (action.type === "decrease") {
    return state - 1;
  }

  if (action.type === "Reset") {
    return state = 0;
  }

  return state;
}

function HookReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "increase" })}
              disabled={count === 10}  >
        Increase
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}
              disabled={count === 0}>
        Decrease
      </button>
      <button onClick={() => dispatch({type:"Reset"})}
                disabled={count <= 0 }>
        Reset
      </button>
    </>
  );
}

export default HookReducer
