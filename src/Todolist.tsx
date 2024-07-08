import { useState } from "react";
import Todoitem from "./lists/Todoitem";
export default function Todolist({ todos, toggletodo, deletetodo }) {
  return (
    <>
      {todos.length === 0 ? (
        "No todos"
      ) : (
        <ul className="p-10">
          {todos.map((todo) => {
            return (
              <Todoitem
                todo={todo}
                toggletodo={toggletodo}
                deletetodo={deletetodo}
                key={todo.id}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
