import { useState } from "react";
import { legacy_createStore } from "redux";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const RESET = "RESET";
const DOUBLE = "DOUBLE";
const SQUARE = "SQUARE";

function CountReduser(state = 0, action) {
  switch (action.type) {
    case INCREASE: {
      return state + 1;
    }
    case DECREASE: {
      return state - 1;
    }
    case DOUBLE: {
      return state * 2;
    }
    case SQUARE: {
      return state * state;
    }
    case RESET: {
      return 0;
    }
    default: {
      return state;
    }
  }
}

const store = legacy_createStore(CountReduser);

function App() {
  const [render, Rerender] = useState(0);

  function handleChange(e) {
    const typeValue = e.target.textContent;
    switch (typeValue) {
      case INCREASE: {
        store.dispatch({ type: typeValue });
        break;
      }
      case DECREASE: {
        store.dispatch({ type: typeValue });
        break;
      }
      case DOUBLE: {
        store.dispatch({ type: typeValue });
        break;
      }
      case SQUARE: {
        store.dispatch({ type: typeValue });
        break;
      }
      case RESET: {
        store.dispatch({ type: typeValue });
        break;
      }
    }
  }

  store.subscribe(() => Rerender(render + 1));
  return (
    <>
      <pre>{JSON.stringify(store.getState())}</pre>
      <button onClick={(e) => handleChange(e)}>INCREASE</button>
      <br />
      <button onClick={(e) => handleChange(e)}>DECREASE</button>
      <br />
      <button onClick={(e) => handleChange(e)}>DOUBLE</button>
      <br />
      <button onClick={(e) => handleChange(e)}>SQUARE</button>
      <br />
      <button onClick={(e) => handleChange(e)}>RESET</button>
      <br />
    </>
  );
}

export default App;
