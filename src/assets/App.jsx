import "../../styles/App.css";
import NavBar from "../../components/NavBar.jsx";
import SearchForm from "../../components/NewTodoForm.jsx";
import TodoSection from "../../components/TodoSection.jsx";
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
  function deleteTodo(id) {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  }

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

export default App;
