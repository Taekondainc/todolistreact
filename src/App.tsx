import { useEffect, useState } from "react";
import NewTodo from "./NewTodoForm";
import Todolist from "./Todolist";
export default function App() {
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem("Item");
    if (data == null) return [];
    return JSON.parse(data);
  });

  useEffect(() => {
    localStorage.setItem("Item", JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function deletetodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodo todoadd={addTodo} />
      <h1 className="p-4 font-semibold text-3xl">Todo List</h1>
      <Todolist todos={todos} toggletodo={toggleTodo} deletetodo={deletetodo} />
    </>
  );
}
