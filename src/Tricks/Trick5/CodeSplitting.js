import React from "react";
import { Link } from "react-router-dom";

function CodeSplitting() {
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
      <h1>5, Code Splitting</h1>
      <h3>
        Code splitting is a technique used to break down your application into
        smaller chunks, allowing the user to load only the necessary code for
        the current view. This can significantly reduce the initial loading time
        and improve the perceived performance of your app.
      </h3>
      <h3>`React.lazy` and `Suspense`</h3>

      <Link
        style={{
          marginTop: "5%",
          width: "100%",
          backgroundColor: "lightgray",
          padding: 20,
        }}
        to={"/importCost"}
      >
        Next
      </Link>
    </div>
  );
}

export default CodeSplitting;
