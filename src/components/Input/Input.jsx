import React from "react";

export default function Input({ handleChange }) {
  return <input className=" h-8 w-96 outline-none" onChange={handleChange} />;
}
