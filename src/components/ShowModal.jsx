import React from "react";
import "./modal.scss";

function ShowModal({ content, handleShowMore, showMore }) {
  return (
    <div className="modal">
      <div className="modal__content">{content}</div>
      <button onClick={handleShowMore} className="todo__single_btn_showLess">
        {showMore ? "x" : "show more"}
      </button>
    </div>
  );
}

export default ShowModal;
