// import { filter, map } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllSlot } from "../../server/api/slot";

function MemoizeStore() {
  const dispatch = useDispatch();
  const appointmentSlots = useSelector((state) => state.slot.slotList);

  useEffect(() => {
    dispatch(getAllSlot());
  }, [dispatch]);

  const callApi = () => {
    dispatch(getAllSlot());
  };

  console.log(appointmentSlots);

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
      <h1>8, Memoize Store</h1>
      <h3>"Redux Toolkit" or "Reselect"</h3>
      <h3>
        A library for creating memoized "selector" functions. Commonly used with
        Redux,
      </h3>

      <Link to={"#"} onClick={callApi}>
        Call Api Again
      </Link>

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

export default MemoizeStore;
