import React from "react";
import KinoAPI from "../KinoAPI/KinoAPI";

export default function Container({ data }) {
  return (
    <div className="flex flex-wrap gap-6  justify-between ">
      {data.map((el) => {
        return (
          <KinoAPI
            src={el.poster_path}
            title={el.title}
            releaseDate={el.release_date}
          />
        );
      })}
    </div>
  );
}
