"use client";

import { useState } from "react";

export default function FilterSearch() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center gap-6 py-4">
      <img src="\assets\others\LOGO.png" className="ml-4 h-8"></img>

      <select className="ml-auto w-36 border-2 border-gray-200 bg-inherit text-xl">
        <option>Browse</option>
        <option></option>
      </select>
      <div className="ml-auto flex w-auto space-x-2 border-2 border-gray-400 p-2 focus-within:border-orange-500">
        <button>
          <img src="\assets\others/MagnifyingGlass.png" className="h-6"></img>
        </button>
        <input
          onChange={(e) => {
            e.target.value.length >= 3
              ? setSearch(e.target.value)
              : setSearch("");
          }}
          type="text"
          placeholder="What do you want to learn ..."
          className="w-80 bg-inherit outline-none "></input>
      </div>
    </div>
  );
}
