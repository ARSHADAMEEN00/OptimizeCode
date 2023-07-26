import React from "react";
import { Link } from "react-router-dom";

function AvoidUsingInlineStyles() {
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
      <h1>6, Avoid Using Inline Styles</h1>
      <h3>Performance,Maintainability,Reusability,Developer Experience</h3>
      <h3>
        <ul>
          <li>
            you're keeping your styles separate from the components, which
            enhances the maintainability of your codebase.
          </li>
          <li>
            {" "}
            Additionally, the CSS classes can be efficiently cached and reused
            by the browser, leading to better performance compared to inline
            styles.
          </li>
        </ul>
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
        to={"/dependencyOptimization"}
      >
        Next
      </Link>
    </div>
  );
}

export default AvoidUsingInlineStyles;
