import React from "react";
import { useState } from "react";
import "./Edit.scss";
import { useTodoContext } from "../hooks/useTodoContext";

function EdittingTodo({ item, content, setShowEditingItem }) {
  const { edittingElementsById } = useTodoContext();
  const [newTitle, setNewTitle] = useState(item?.title || "");

  const handleEditingChanges = (e) => {
    setNewTitle(e.target.value);
  };

  const handleEditingSubmit = (e) => {
    e.preventDefault();
    edittingElementsById(item.id, newTitle);
    setNewTitle("");
    setShowEditingItem(false);
  };

  return (
    <div className="todo__edit">
      <form className="todo__edit__form " onSubmit={handleEditingSubmit}>
        <label htmlFor="">Enter new title for {content}</label>
        <input
          type="text"
          autoFocus
          value={newTitle}
          onChange={handleEditingChanges}
        />
      </form>
    </div>
  );
}

export default EdittingTodo;
