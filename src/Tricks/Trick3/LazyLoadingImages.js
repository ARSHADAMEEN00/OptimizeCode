import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

function LazyLoadingImages() {
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
      <h1>3, Lazy loading Images and Components</h1>
      <h3>"react-lazyload", "lazy, Suspense from react"</h3>
      {/* ////////////////////////////////// */}

      <div>
        <h3>
          Lazy loading is one of the most popular methods to optimize React
          applications. It allows users to render content only when they need
          it, resulting in faster initial load time, reduced bandwidth
          consumption, and less data traffic
        </h3>

        <LazyLoad height={200}>
          <img src="assets/demo.jpg" height={400} alt="demo" />
        </LazyLoad>
      </div>

      {/* ////////////////////////////////// */}

      <Link
        style={{
          marginTop: "5%",
          width: "100%",
          backgroundColor: "lightgray",
          padding: 20,
        }}
        to={"/codeSplitting"}
      >
        Next
      </Link>
    </div>
  );
}

export default LazyLoadingImages;
