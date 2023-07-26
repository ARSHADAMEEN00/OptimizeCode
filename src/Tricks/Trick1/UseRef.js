import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UseRef() {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("RERENDER");
  });

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>1, Important of useRef (Case Study)</h1>
      {/* ////////////////////////////////// */}

      <div>
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => alert(input)}>Send</button>
      </div>

      {/* ////////////////////////////////// */}

      <Link
        style={{
          marginTop: "20%",
          width: "100%",
          backgroundColor: "lightgray",
          padding: 20,
        }}
        to={"/useRef/v1"}
      >
        Next
      </Link>
    </div>
  );
}

export default UseRef;
