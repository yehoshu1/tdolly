/* eslint-disable react/prop-types */
import { useState } from "react";
import TabButton from "./TabButton";
import TodoItem from "./TodoItem";

const TodoSection = ({
  todoItems,
  setTodoItems,
  toggleTodo,
  deleteTodo,
}) => {
  const [filter, setFilter] = useState(false);

  const [condition, setCondition] = useState();

  function filterItems(completed) {
    setCondition(completed);
    setFilter(true);
  }
  function resetFilter(condition) {
    setFilter(condition);
  }

  return (
    <section className="flex flex-col justify-center place-items-center">
      <h1 className="text-lg font-bold">To do List Items</h1>
      <div className="flex flex-row justify-center place-items-center">
        <TabButton
          filterItems={resetFilter}
          active={!filter && true}
          condition={undefined}
          filter={filter}
        >
          All items
        </TabButton>
        <TabButton
          filterItems={filterItems}
          condition={true}
          active={(filter && condition) && true}
        >
          Completed
        </TabButton>
        <TabButton
          filterItems={filterItems}
          condition={false}
          active={filter & (condition === false) && true}
        >
          To Do
        </TabButton>
      </div>

      <div className="flex flex-col justify-center place-items-center">
        {filter
          ? todoItems.map((item) => {
              return condition ? (
                item.isDone ? (
                  <TodoItem
                    key={item.id}
                    item={item}
                    setTodoItems={setTodoItems}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                  />
                ) : null
              ) : !item.isDone ? (
                <TodoItem
                  key={item.id}
                  item={item}
                  setTodoItems={setTodoItems}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ) : null;
            })
          : todoItems.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  setTodoItems={setTodoItems}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              );
            })}
      </div>
    </section>
  );
};

export default TodoSection;
