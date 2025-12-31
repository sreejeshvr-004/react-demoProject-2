import React from "react";
import Demo2 from "./Demo2";

const Demo1 = ({ dummy }) => {
  return (
    <div>
      Demo1
      <Demo2 dummy={dummy} />
    </div>
  );
};

export default Demo1;
