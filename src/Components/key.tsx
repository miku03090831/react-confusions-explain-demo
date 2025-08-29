import { useState } from "react";

export const Key = () => {
  const [list, setList] = useState([
    { name: "a" },
    { name: "b" },
    { name: "c" },
    { name: "d" },
  ]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px", width: "100%" }}>
      <h2 style={{textAlign: "center"}}>React Key Property Demo</h2>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
        <button 
          onClick={() => setList(prev => [...prev].reverse())}
          style={{ 
            padding: "10px",
            backgroundColor: "#007acc",
            color: "white",
            border: "2px solid #005c99",
            borderRadius: "6px"
          }}
        >
          Reverse List
        </button>
        
        <button 
          onClick={() => setList(prev => [...prev])}
          style={{ 
            padding: "10px",
            backgroundColor: "#007acc", 
            color: "white",
            border: "2px solid #005c99",
            borderRadius: "6px"
          }}
        >
          Shallow Copy Reassign List
        </button>
      </div>
      
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3>1. No key</h3>
          <NoKeyDemo list={list} />
        </div>
        
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3>2. Using index as key</h3>
          <IndexKeyDemo list={list} />
        </div>
        
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3>3. Using random number as key</h3>
          <RandomKeyDemo list={list} />
        </div>
        
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3>4. Using correct unique value as key</h3>
          <CorrectKeyDemo list={list} />
        </div>
      </div>
    </div>
  );
};

const Child = ({ name }: { name: string }) => {
  const [count, setCount] = useState(0);
  return (
    <div
      onClick={() => {
        setCount((count) => count + 1);
      }}
      style={{ 
        padding: "8px 12px", 
        border: "1px solid #ccc", 
        cursor: "pointer",
        backgroundColor: "#f9f9f9",
        borderRadius: "4px",
        textAlign: "center",
        minWidth: "60px"
      }}
    >{`${name}:${count}`}</div>
  );
};

// First component: No key
const NoKeyDemo = ({ list }: { list: { name: string }[] }) => {
  return (
    <div style={{ border: "2px solid red", padding: "10px", height: "fit-content" }}>
      <p style={{ margin: "0 0 10px 0", color: "red", fontSize: "12px", textAlign: "center" }}>
        ⚠️ No key - React will warn, may cause component state confusion
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        {list.map((item) => (
          <Child name={item.name} />
        ))}
      </div>
    </div>
  );
};

// Second component: Using index as key
const IndexKeyDemo = ({ list }: { list: { name: string }[] }) => {
  return (
    <div style={{ border: "2px solid orange", padding: "10px", height: "fit-content" }}>
      <p style={{ margin: "0 0 10px 0", color: "orange", fontSize: "12px", textAlign: "center" }}>
        ⚠️ Using index as key - Basically same as no key
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        {list.map((item, index) => (
          <Child key={index} name={item.name} />
        ))}
      </div>
    </div>
  );
};

// Third component: Using random number as key
const RandomKeyDemo = ({ list }: { list: { name: string }[] }) => {
  return (
    <div style={{ border: "2px solid purple", padding: "10px", height: "fit-content" }}>
      <p style={{ margin: "0 0 10px 0", color: "purple", fontSize: "12px", textAlign: "center" }}>
        ⚠️ Using random number as key - Component recreated every render, state will be lost
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        {list.map((item) => (
          <Child key={Math.random()} name={item.name} />
        ))}
      </div>
    </div>
  );
};

// Fourth component: Using correct unique value as key
const CorrectKeyDemo = ({ list }: { list: { name: string }[] }) => {
  return (
    <div style={{ border: "2px solid green", padding: "10px", height: "fit-content" }}>
      <p style={{ margin: "0 0 10px 0", color: "green", fontSize: "12px", textAlign: "center" }}>
        ✅ Using correct unique value as key - Best practice, ensures proper component updates
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        {list.map((item) => (
          <Child key={item.name} name={item.name} />
        ))}
      </div>
    </div>
  );
};
