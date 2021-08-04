import React from "react";

export default function Pagination({ page }) {
  return (
    <div>
      <button className="w-10 h-10 border-2 ">{page}</button>
    </div>
  );
}
