import { useState } from "react";

function TodoInput({ onClick, value, setInputValue }) {
  console.log(value);

  return (
    <>
      <div className="flex justify-center pt-14  h-[100%]  w-[100%] gap-6">
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setInputValue(e.target.value);
          }}
          value={value}
          className=" w-96 h-10 border-2 border-black rounded-lg pl-2"
          type="text"
          placeholder="Add Todo"
        />

        <button
          disabled={value == ""}
          onClick={onClick}
          className="w-24 h-10 rounded-lg bg-black text-white"
        >
          Add
        </button>
      </div>
    </>
  );
}
export default TodoInput;
