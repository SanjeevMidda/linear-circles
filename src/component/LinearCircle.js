import React from "react";

const LinearCircle = ({ rotation, colors, direction }) => {
  return (
    <div
      className={`circle ${direction}`}
      style={{
        background: `conic-gradient(from ${rotation}deg, ${colors[0]}, ${colors[1]})`,
      }}
    ></div>
  );
};

export default LinearCircle;
