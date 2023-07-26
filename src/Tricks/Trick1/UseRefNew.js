import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function UseRefNew() {
  const inputRef = useRef(null);

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
      <h1>Important of useRef</h1>
      <h3>Minimize the number of re-renders</h3>
      {/* ////////////////////////////////// */}

      <div>
        <input ref={inputRef} />
        <button onClick={() => alert(inputRef.current.value)}>Send</button>
      </div>

      {/* ////////////////////////////////// */}

      <Link
        style={{
          marginTop: "20%",
          width: "100%",
          backgroundColor: "lightgray",
          padding: 20,
        }}
        to={"/childProps"}
      >
        Next
      </Link>
    </div>
  );
}

export default UseRefNew;
