import React from "react";

export default function KinoAPI({ src, title, releaseDate }) {
  return (
    <div className="w-1/6 bg-gray-300 bg-opacity-80 p-2 hover:bg-gray-400 cursor-pointer duration-500">
      <img src={`https://image.tmdb.org/t/p/w500/${src}`} alt="kino" />
      <div className="h-16 flex justify-center items-center border-b-2 border-gray-900 ">
        <p className="  text-black text-center font-bold font-serif	">{title}</p>
      </div>
      <div className="h-8 mt-2 text-black text-center font-bold">
        {releaseDate}
      </div>
    </div>
  );
}
