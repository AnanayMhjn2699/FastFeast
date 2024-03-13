import React, { useState } from "react";

const SearchBar = (props) => {
  const [text, setText] = useState("");

  const handleSeachClick = () => {
    props.catchSearchText(text);
  };

  const handleKeyDown = (e) => {
    if (e?.key === "Enter") handleSeachClick();
  };

  return (
    <div className="flex m-3 justify-center">
      <input
        type="text"
        className="w-64 border-2 rounded-md"
        onChange={(event) => {
          //   console.log(event.target.value);
          setText(event.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Enter restaurant name to search"
        value={text}
      ></input>

      <button
        className=" ml-1 px-2 bg-gray-400 hover:bg-gray-500 rounded-md"
        onClick={handleSeachClick}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
