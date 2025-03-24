import React from "react";

export const useForm = (initialVal) => {
  const [fields, setFields] = React.useState(initialVal);

  const onChange = (e) => {
    //console.log("x", e.target);
    const { name, value } = e.target;
    console.log("x", name, value);
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  return [fields, onChange];
};
