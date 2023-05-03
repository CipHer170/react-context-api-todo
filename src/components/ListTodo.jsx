import React from "react";
import SingleTodo from "./SingleTodo";
import { useTodoContext } from "../hooks/useTodoContext";

function ListTodo() {
  const { items } = useTodoContext();

  const showList = items.map((item, i) => {
    return <SingleTodo item={item} key={i} />;
  });

  return <div className="todo__list">{showList}</div>;
}

export default ListTodo;
