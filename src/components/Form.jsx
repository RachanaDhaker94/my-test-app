import React from "react";
import { useForm } from "./../hooks/useForm.js";

export const Form = (props) => {
  const [fields, onChange] = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("all", fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={fields?.name}
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          value={fields?.email}
          onChange={onChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
