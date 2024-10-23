import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function TodoList({ todos, deleteTodo, editTodo }) {
  console.log(todos);
  return (
    // <>
    <div className="w-[100%] h-[100%]  flex justify-center flex-col mt-6 items-center gap-4 pb-5">
      {todos.map((todo, index) => {
        return (
          <div className="flex bg-black w-[37%] h-10 items-center rounded-md  text-white pr-1 gap-1">
            <h1 className=" w-[92%] pl-1 rounded-md" key={todo.id}>
              {todo.todo}
            </h1>
            <button
              onClick={() => {
                editTodo(todo, todo.id);
              }}
              className="w-8 h-8 text-white rounded-md  flex justify-center items-center "
            >
              <MdEdit size={30} />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="w-8 h-8 text-white rounded-md  flex justify-center items-center "
            >
              <MdDelete size={30} />
            </button>
          </div>
        );
      })}
      {/* </> */}
    </div>
  );
}
export default TodoList;
