/* eslint-disable react/prop-types */
import { useState } from "react";

const NewTodoForm = ({setTodoItems}) => {

  const [newItem, setnewItem] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return
    setTodoItems((prev) => [...prev, {
      id: crypto.randomUUID(),
      text: newItem,
      isDone: false,
    }]);
    setnewItem("");
  }


  return (
    <form className="flex max-width-10 flex-col justify-center py-3 my-2 place-items-center">
      <label
        htmlFor="search"
        className="flex justify-center text-lg font-medium"
      >
        New Todo List Item
      </label>
      <input
        onChange={(e) => setnewItem(e.target.value)}
        value={newItem}
        type="text"
        id="search"
        placeholder="Add a new item"
        className="flex justify-center w-3/4 px-4 py-1 my-2 border rounded-md shadow-sm place-items-center md:w-2/4"
      />
      <button 
      onClick={handlesubmit}
      className="rounded-md border flex justify-center place-items-center w-3/4 md:w-2/4  my-2 py-1 px-4 shadow-sm bg-black/95 hover:bg-black text-white hover:-translate-y-0.5 ease-in-out transition-transform duration-300">
        Add Item
      </button>
    </form>
  );
};

export default NewTodoForm;
