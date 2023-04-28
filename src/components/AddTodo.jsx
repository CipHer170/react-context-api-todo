import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
  const [item, setItem] = useState("");
  const { createItem } = useContext(TodoContext);
  const handleCreateChange = (e) => {
    setItem(e.target.value);
  };
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    createItem(item);
    setItem("");
  };
  return (
    <div className="todo__newItem">
      <form action="" onSubmit={handleCreateSubmit}>
        <label htmlFor="">Enter item title</label>
        <input type="text" value={item} onChange={handleCreateChange} />
      </form>
    </div>
  );
}

export default AddTodo;
