import { useEffect, useReducer, useState, useTransition } from "react";

const initialState = { count: 0, text: "hello" };

function reducer(
  state: typeof initialState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export const InfiniteLoop = () => {
  const [isPending, startTransition] = useTransition();
  const [ok, setOk] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("Comp", state, isPending, ok);

  useEffect(() => {
    setOk(false);
  }, [state]);

  const onClick = () => {
    startTransition(() => {
      dispatch({ type: "increment" });
    });
    dispatch({ type: "increment" });
  };

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <h2 style={{textAlign: "center"}}>Infinite Loop Demo</h2>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "20px",
        padding: "20px",
        border: "2px solid #007acc",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
        maxWidth: "400px",
        margin: "0 auto",
        alignItems: "center"
      }}>
        <button 
          onClick={onClick}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#007acc",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Click to Trigger Infinite Loop
        </button>
        
        <p style={{ 
          margin: "0", 
          padding: "10px", 
          backgroundColor: "#fff3cd", 
          border: "1px solid #ffeaa7",
          borderRadius: "4px",
          color: "#856404"
        }}>
          💡 After clicking, check the browser console to see the infinite loop!
        </p>
      </div>
    </div>
  );
};
