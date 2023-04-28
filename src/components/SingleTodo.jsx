import React, { useContext, useState } from "react";
// import EdittingTodo from "./EdittingTodo";
import ShowModal from "./ShowModal";
import { TodoContext } from "../context/TodoContext";
import EdittingTodo from "./EdittingTodo";

function SingleTodo({ item }) {
  const [showEditingItem, setShowEditingItem] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const { DeleteItemById } = useContext(TodoContext);
  let content = <h3>{item.title}</h3>;

  // handle delete click
  const handleDeleteClick = () => {
    DeleteItemById(item.id);
  };
  // handle edit click
  const handleEditClick = () => {
    setShowEditingItem(!showEditingItem);
  };

  // editing window
  if (showEditingItem) {
    return (
      <EdittingTodo
        item={item}
        content={content}
        showEditingItem={showEditingItem}
        setShowEditingItem={setShowEditingItem}
      />
    );
  }

  // modal window
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  if (showMore) {
    return (
      <ShowModal
        content={content}
        handleShowMore={handleShowMore}
        showMore={showMore}
      />
    );
  }

  // base jsx
  return (
    <div className="todo__single">
      {item.title.slice(0, showMore ? 5 : 20)}
      <button onClick={handleShowMore} className="todo__single__btn_showMore">
        {showMore ? "show less " : "show  more"}
      </button>
      <div className="todo__single_actions">
        <button className="todo__single_btn delete" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="todo__single_btn edit" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default SingleTodo;

// const handleEditingChanges = (e) => {
//   setNewTitle(e.target.value);
// };
// const handleEditingSubmit = (e) => {
//   e.preventDefault();
//   edittingElementsById(item.id, newTitle);
//   setNewTitle("");
// };
// return (
//   <form onSubmit={handleEditingSubmit}>
//     <label htmlFor="">Enter new title for {content}</label>
//     <input type="text" value={newTitle} onChange={handleEditingChanges} />
//   </form>
// );
