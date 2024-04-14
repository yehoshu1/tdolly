/* eslint-disable react/prop-types */

import { useState } from "react";

const TodoItem = ({ item, toggleTodo, deleteTodo }) => {
  const [checked, setChecked] = useState(item.isDone)

  function toggleDone(id, checked){
    toggleTodo(id, checked)
    setChecked(checked)
  }


  return (

      <label
          className={item.isDone ?"flex flex-row text-md mx-2 font-medium my-2 px-10 rounded-lg w-full shadow-sm border py-3 bg-gray-200 hover:bg-gray-300 transition-all ease-in-out duration-300 hover:translate-y-[1px]" : "flex flex-row text-md mx-2 font-medium my-2 px-10 rounded-lg w-full shadow-sm border py-3 hover:bg-gray-200 transition-all ease-in-out duration-300 hover:translate-y-[1px]"}
      >
        <input
            type="checkbox"
            checked={checked}
            name="todoItem"
            id="todoItem"
            className="rounded-md "
            onChange={e => toggleDone(item.id, e.target.checked)}
        />
        <p className={item.isDone ? "flex-grow ml-2 line-through" : "flex-grow ml-2"}>{item.text}</p>
        <button className="flex justify-center px-3 ml-10 text-sm text-red-600 transition-transform duration-300 ease-in-out border border-red-600 rounded-lg shadow-md place-items-center hover:text-white hover:bg-red-500 hover:translate-x-1"
                onClick={() => deleteTodo(item.id)}
        >
          Delete
        </button>
      </label>
  );
};

export default TodoItem;
