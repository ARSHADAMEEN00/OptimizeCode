// import { filter, map } from "lodash";
import React from "react";
import { Link } from "react-router-dom";

function DependencyOptimization() {
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
      <h1>7, Dependency Optimization</h1>
      <h3>Audit and Remove Unused Dependencies</h3>
      <h3>
        Upgrade React and Dependencies: Keep your React version and related
        libraries up-to-date to benefit from performance improvements and bug
        fixes.
      </h3>

      {/* ////////////////////////////////// */}

      {/* ////////////////////////////////// */}

      <Link
        style={{
          marginTop: "5%",
          width: "100%",
          backgroundColor: "lightgray",
          padding: 20,
        }}
        to={"/memoizeStore"}
      >
        Next
      </Link>
    </div>
  );
}

export default DependencyOptimization;
