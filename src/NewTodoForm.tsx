import { useState } from "react";

export default function NewTodoForm({ todoadd }) {
  const [newItem, setnewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem == "") return false;
    else todoadd(newItem);
    setnewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="px-5 py-5" method="get">
      <div className="form-row">
        <div className="col-sm-6 mb-3">
          <div className="my-3">Add Task</div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setnewItem(e.target.value)}
            className="border-4 px-5 py-1 rounded-md border-gray-700"
            id="firstName"
            placeholder="Task"
            required
          />
        </div>
        <div className="col-sm-6 mb-3">
          <input
            type="submit"
            className="border-2 px-3 py-3 rounded-md"
            value={"submit"}
            placeholder="Last name"
            required
          />
        </div>
      </div>
    </form>
  );
}
