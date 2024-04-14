/**
 * The main React component for the application.
 * It manages the state of the todo items, provides functionality to toggle, delete, and filter them, and renders the main UI components.
 * The todo items are stored in the browser's local storage.
 */
import "../styles/App.css";
import "../styles/index.css";
import NavBar from "../components/NavBar.jsx";
import SearchForm from "../components/NewTodoForm.jsx";
import TodoSection from "../components/TodoSection.jsx";
import { useEffect, useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const jsonValue = localStorage.getItem("TODOS");
    if (jsonValue == null) {
      return [];
    } else {
      return JSON.parse(jsonValue);
    }
  });

  useEffect(() => {
    const items = localStorage.setItem("TODOS", JSON.stringify(todoItems));
    if (items) {
      setTodoItems(JSON.parse(items));
    }
  }, [todoItems]);

  /**
 * Toggles the completion status of a todo item.
 *
 * @param {number} id - The unique identifier of the todo item.
 * @param {boolean} isDone - The new completion status of the todo item.
 */
  function toggleTodo(id, isDone) {
    setTodoItems((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone };
        }
        return todo;
      });
    });

  }
  /**
 * Deletes a todo item from the list of todo items.
 *
 * @param {number} id - The unique identifier of the todo item to be deleted.
 */
  function deleteTodo(id) {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  }

  /**
 * Filters the list of todo items based on their completion status.
 *
 * @param {string} isDone - The completion status to filter by. Can be "all", "true", or "false".
 * @returns {object[]} - The filtered list of todo items.
 */
  function filterTodos(isDone) {
    if (isDone === "all") {
      return todoItems;
    } else {
      return todoItems.filter((item) => item.isDone === isDone);
    }
  }

  return (
    <>
      <NavBar />
      <SearchForm todoItems={todoItems} setTodoItems={setTodoItems} />
      <TodoSection
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}

        filterTodos={filterTodos}

      />
    </>
  );
}
export default App

