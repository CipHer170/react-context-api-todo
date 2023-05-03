import React, { useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

function AddTodo() {
  const [item, setItem] = useState("");
  const { createItem } = useTodoContext();
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
        <input
          type="text"
          autoFocus
          value={item}
          onChange={handleCreateChange}
        />
      </form>
    </div>
  );
}

export default AddTodo;
