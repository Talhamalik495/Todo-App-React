import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";

function TodoList({ todos, deleteTodo, editTodo, togleTodo, edit }) {
  console.log(todos);
  return (
    // <>
    <div className="w-full max-h-56 flex justify-center flex-col mt-6 items-center gap-4 pb-3 px-5 overflow-scroll ">
      {todos.map((todo, index) => {
        return (
          <div className="flex bg-black w-full min-h-12 items-center rounded-md  text-white pr-1 gap-1 relative">
            <h1 className=" w-[92%] pl-2 rounded-md" key={todo.id}>
              {todo.todo}
            </h1>
            {/* <button
              onClick={() => {
                editTodo(todo, todo.id);
              }}
              className="w-8 h-8 text-white rounded-md  flex justify-center items-center "
            >
              <MdEdit size={30} />
            </button> */}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="w-8 h-8 text-white rounded-md  flex justify-center items-center "
            >
              <MdDelete size={30} />
            </button>
            {edit ? (
              <div>
                <input
                  type="text"
                  className="w-[100%] h-10  absolute top-0 left-0"
                />
                <MdSave
                  size={30}
                  className="text-white  absolute top-0 left-[92%]"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      {/* </> */}
    </div>
  );
}
export default TodoList;
