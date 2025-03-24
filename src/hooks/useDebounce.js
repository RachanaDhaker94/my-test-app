import React from "react";

export const useDebounce = (value, delay) => {
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    let id = setTimeout(() => {
      console.log("call de");
      setInput(value);
    }, delay);

    return function cleanup() {
      clearTimeout(id);
    };
  }, [value, delay]);

  return input;
};
