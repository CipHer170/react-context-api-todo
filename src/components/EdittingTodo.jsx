import React from "react";
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import "./Edit.scss";

function EdittingTodo({ item, content, showEditingItem, setShowEditingItem }) {
  const { edittingElementsById } = useContext(TodoContext);
  const [newTitle, setNewTitle] = useState("");
  const handleEditingChanges = (e) => {
    setNewTitle(e.target.value);
  };
  const handleEditingSubmit = (e) => {
    e.preventDefault();
    edittingElementsById(item.id, newTitle);
    setNewTitle("");
    setShowEditingItem(!showEditingItem);
  };
  return (
    <div className="todo__edit">
      <form className="todo__edit__form " onSubmit={handleEditingSubmit}>
        <label htmlFor="">Enter new title for {content}</label>
        <input type="text" value={newTitle} onChange={handleEditingChanges} />
      </form>
    </div>
  );
}

export default EdittingTodo;
