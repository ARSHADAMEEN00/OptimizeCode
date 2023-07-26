import React, { memo } from "react";

const Item = memo(({ id, value, onChange }) => {
  return (
    <div>
      <h5>RE-RENDER{(Math.random() * 100).toFixed()}</h5>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 10px",
        }}
      >
        <label className="It@m-label" htmlFor="text">
          Item
        </label>
        <input
          className="Item-input"
          type="text"
          name="text"
          id="text"
          onChange={(e) => onChange(id, e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
});

export default Item;
