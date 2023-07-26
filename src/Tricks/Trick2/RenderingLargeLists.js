import React from "react";
import { Link } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

function RenderingLargeLists() {
  const items = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Demo Item ${index + 1}`,
  }));

  const Row = ({ index, style }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      Row : {items[index]?.name}
    </div>
  );

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
      <h1>2, rendering large lists and tabular data</h1>
      {/* ////////////////////////////////// */}

      <div>
        <h3>
          React window works by only rendering part of a large data set (just
          enough to fill the viewport).
        </h3>

        <AutoSizer>
          {({ height, width }) => (
            <List
              className="List"
              height={height}
              itemCount={1000}
              itemSize={35}
              width={width}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>

      {/* ////////////////////////////////// */}

      <Link
        style={{
          marginTop: "40%",
          width: "100%",
          backgroundColor: "lightgray",
          padding: 20,
        }}
        to={"/lazyLoadingImages"}
      >
        Next
      </Link>
    </div>
  );
}

export default RenderingLargeLists;
