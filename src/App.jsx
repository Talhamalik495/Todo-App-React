import { useState } from "react";
import React from "react";
import TodoInput from "./component/Todoinput";
import TodoList from "./component/TodoList";
import imag1 from "./assets/download.png";

function App() {
  const [inputValue, setInputValue] = useState("");

  // const [todos,setTodos]=useState([
  //     {
  //         todo:"rrrrrrr",
  //         id:Date.now()
  //     }
  // ])
  const [todos, setTodos] = useState([]);
  console.log(todos);

  let handleTodo = () => {
    const todoArr = [
      ...todos,
      {
        todo: inputValue,
        id: Date.now(),
      },
    ];

    setTodos([...todoArr]);
  };
  console.log(todos);

  let deleteTodo = (id) => {
    console.log(id);
    setTodos((prev) => prev.filter((data) => data.id !== id));
  };
  let editTodo = (todo, id) => {
    console.log(id);
    console.log(todos);
    setTodos((prev) => prev.map((data) => (data.id == id ? todo : data)));
  };

  return (
    <>
      <h1 className=" text-center text-black mt-5 w-[100%] h-10 flex justify-center items-center text-2xl">
        Todo App
      </h1>
      <TodoInput
        value={inputValue}
        setInputValue={setInputValue}
        onClick={handleTodo}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
}

export default App;
