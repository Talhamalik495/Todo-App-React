import { useRef, useState } from "react";

function TodoInput({ onClick, value, setInputValue }) {
  let inputRef = useRef("");

  return (
    <>
      <form
        onSubmit={onClick}
        className="flex justify-center pt-5 h-[100%]  w-[100%] gap-2 relative px-5"
      >
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setInputValue(e.target.value);
          }}
          value={value}
          className=" w-full outline-none border-none h-12 border-2 bg-gray-200 rounded-lg pl-2"
          type="text"
          placeholder="Add Todo"
        />

        <button
          disabled={value == ""}
          // onClick={onClick}
          className="w-16 h-12 rounded-lg bg-black text-white"
        >
          Add
        </button>
      </form>
    </>
  );
}
export default TodoInput;
