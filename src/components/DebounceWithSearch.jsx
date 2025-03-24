import React from "react";
import { useDebounce } from "./../hooks/useDebounce.js";

export const DebounceWithSearch = () => {
  const [val, setVal] = React.useState("");
  const result = useDebounce(val, 500);

  const handleInput = (e) => {
    console.log("test");
    setVal(e.target.value);
  };

  return (
    <>
      <input type="text" value={val} onChange={handleInput} />
      <p>Value:{result}</p>
    </>
  );
};
