import { useState } from "react";
import { InfiniteLoop } from "./Components/infiniteLoop";
import { Key } from "./Components/key";

function App() {
  const [activeComponent, setActiveComponent] = useState<'infiniteLoop' | 'key'>('infiniteLoop');

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Navigation Header */}
      <div style={{ 
        backgroundColor: "#fff", 
        padding: "20px", 
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        marginBottom: "0"
      }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <h1 style={{ margin: "0 0 20px 0", color: "#333" }}>React Confusions Demo</h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setActiveComponent('infiniteLoop')}
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                backgroundColor: activeComponent === 'infiniteLoop' ? "#007acc" : "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
            >
              Infinite Loop Demo
            </button>
            <button
              onClick={() => setActiveComponent('key')}
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                backgroundColor: activeComponent === 'key' ? "#007acc" : "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.2s"
              }}
            >
              Key Property Demo
            </button>
          </div>
        </div>
      </div>

      {/* Component Content */}
      <div style={{ 
        padding: "20px 0",
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{ width: "100%", maxWidth: "1600px" }}>
          {activeComponent === 'infiniteLoop' && <InfiniteLoop />}
          {activeComponent === 'key' && <Key />}
        </div>
      </div>
    </div>
  );
}

export default App;
