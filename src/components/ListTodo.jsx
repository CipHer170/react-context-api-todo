import React, { useContext } from "react";
import SingleTodo from "./SingleTodo";
import { TodoContext } from "../context/TodoContext";

function ListTodo() {
  const { items } = useContext(TodoContext);
  const showList = items.map((item, i) => {
    console.log("list" + item);
    return <SingleTodo item={item} key={i} />;
  });
  return <div className="todo__list">{showList}</div>;
}

export default ListTodo;
