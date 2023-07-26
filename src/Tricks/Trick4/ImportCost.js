import React from "react";
import { Link } from "react-router-dom";

function ImportCost() {
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
      <h1>4, Import Cost Extension for vscode</h1>
      <h3>
        Bundle Analysis, to identify large packages or unnecessary dependencies
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
        to={"/avoidUsingInlineStyles"}
      >
        Next
      </Link>
    </div>
  );
}

export default ImportCost;
