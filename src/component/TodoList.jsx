function TodoList({ todos, deleteTodo, img }) {
  console.log(todos);
  return (
    // <>
    <div className="w-[100%] h-[100%]  flex justify-center flex-col mt-6 items-center gap-4 pb-5">
      {todos.map((todo, index) => {
        return (
          <div className="flex bg-black w-[37%] h-10 items-center rounded-md  text-white">
            <h1 className=" w-[92%] pl-1 rounded-md" key={todo.id}>
              {todo.todo}
            </h1>
            <button
              onClick={(todo) => {
                console.log(todo);
              }}
              className="w-8 h-8 text-black rounded-md bg-white flex justify-center items-center "
            >
              <img className="w-8 h-8" src={img} alt="" />
            </button>
          </div>
        );
      })}
      {/* </> */}
    </div>
  );
}
export default TodoList;
