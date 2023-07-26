import React from "react";
import { Link } from "react-router-dom";

function Introduction() {
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
      <h1>Welcome to ReactJs Course </h1>
      <h2 style={{ color: "" }}>Some Tips For Optimize Our Code </h2>

      <ul
        style={{
          textAlign: "start",
        }}
      >
        <li>
          <Link to={"/useRef"}>Important of useRef</Link>
        </li>
        <li>
          <Link to={"/childProps"}>How to use memo</Link>
        </li>
        <li>
          <Link to={"/renderingLargeLists"}>Rendering large lists</Link>
        </li>
        <li>
          <Link to={"/lazyLoadingImages"}>
            Lazy loading Images and Components
          </Link>
        </li>
        <li>
          <Link to={"/codeSplitting"}>Code Splitting</Link>
        </li>
        <li>
          <Link to={"/importCost"}>Import Cost Extension for vscode</Link>
        </li>
        <li>
          <Link to={"/avoidUsingInlineStyles"}> Avoid Using Inline Styles</Link>
        </li>
        <li>
          <Link to={"/dependencyOptimization"}> Dependency Optimization</Link>
        </li>
        <li>
          <Link to={"/memoizeStore"}> Memoize Store</Link>
        </li>
      </ul>

      <Link
        style={{
          marginTop: "10%",
          width: "100%",
          backgroundColor: "lightgray",
          padding: 20,
        }}
        to={"/useRef"}
      >
        Next
      </Link>
    </div>
  );
}

export default Introduction;
