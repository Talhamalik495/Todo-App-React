import { useState } from "react";

function TodoInput({ onClick, value, setInputValue }) {
  console.log(value);

  return (
    <>
      <div className="flex justify-center pt-5 h-[100%]  w-[100%] gap-2 relative px-5">
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setInputValue(e.target.value);
          }}
          value={value}
          className=" w-full outline-none border-none h-12 border-2 border-black rounded-lg pl-2"
          type="text"
          placeholder="Add Todo"
        />

        <button
          disabled={value == ""}
          onClick={onClick}
          className="w-16 h-12 rounded-lg bg-black text-white"
        >
          Add
        </button>
      </div>
    </>
  );
}
export default TodoInput;
