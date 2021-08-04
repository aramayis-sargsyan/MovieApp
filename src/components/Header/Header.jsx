import React from "react";
import Input from "../Input/Input";

export default function Header({ handleChange }) {
  return (
    <div className="h-20 bg-gray-500  flex justify-around items-center bg-opacity-80 ">
      <button className="h-16 w-40  text-center text-5xl ">Kinofx</button>
      <div>
        <Input handleChange={handleChange} />
        <button className=" h-8 w-20 bg-gray-400 bg-opacity-70 hover:bg-gray-400 text-white">
          SEARCH
        </button>
      </div>
    </div>
  );
}
