import React, { useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Child/Item";

function Parent() {
  const [itemValues, setItemValues] = useState([
    { value: "", id: "1" },
    { value: "", id: "2" },
    { value: "", id: "3" },
  ]);

  const changeValue = useCallback((id, value) => {
    setItemValues((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          item.value = value;
        }
        return item;
      })
    );
  }, []);

  // const changeValue = (id, value) => {
  //   setItemValues((prevItems) =>
  //     prevItems.map((item) => {
  //       if (item.id === id) {
  //         item.value = value;
  //       }
  //       return item;
  //     })
  //   );
  // };

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
      <h1>How to use memo, (Case Study)</h1>
      <h3>Minimize the number of re-renders, with Memoize previous data</h3>
      <p className="App-header-output">{JSON.stringify(itemValues)}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {itemValues.map((itemValue) => {
          return (
            <Item
              key={itemValue.id}
              id={itemValue.id}
              value={itemValue.value}
              onChange={changeValue}
            />
          );
        })}
      </div>
      <Link
        style={{
          marginTop: "20%",
          width: "100%",
          backgroundColor: "lightgray",
          padding: 20,
        }}
        to={"/renderingLargeLists"}
      >
        Next
      </Link>
    </div>
  );
}

export default Parent;
