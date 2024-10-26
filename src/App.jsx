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
  const [edit, setEdit] = useState(null);
  console.log(todos);

  let handleTodo = (e) => {
    e.preventDefault();

    const todoArr = [
      ...todos,
      {
        todo: inputValue,
        id: Date.now(),
        completed: false,
      },
    ];

    setTodos([...todoArr]);
    setInputValue("");
  };
  console.log(todos);

  let deleteTodo = (id) => {
    console.log(id);
    setTodos((prev) => prev.filter((data) => data.id !== id));
  };
  let editTodo = (todo, id) => {
    console.log(id);
    console.log(todos);
    setEdit(id);
    setTodos((prev) => prev.map((data) => (data.id == id ? todo : data)));
  };
  let togleTodo = (id) => {
    console.log(id);
    console.log(todos);
    setTodos((prev) =>
      prev.map((data) => (data.id == id ? { ...data, completed: true } : data))
    );
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="w-[600px] py-5 bg-white rounded-2xl flex flex-col justify-center">
        <h1 className="text-2xl mx-4">Todo App</h1>
        <TodoInput
          value={inputValue}
          setInputValue={setInputValue}
          onClick={handleTodo}
        />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          togleTodo={togleTodo}
          edit={edit}
        />
      </div>
    </div>
  );
}

export default App;
