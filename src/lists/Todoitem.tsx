export default function Todoitem({ todo, toggletodo, deletetodo }) {
  return (
    <>
      <li className="space-x-4">
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => toggletodo(todo.id, e.target.checked)}
          />{" "}
          {todo.title}
        </label>
        <button
          className="rounded-md bg-red-500 p-3"
          onClick={() => deletetodo(todo.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}
