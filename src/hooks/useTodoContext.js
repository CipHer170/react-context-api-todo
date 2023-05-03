import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodoContext = () => {
  const useTodoContext = useContext(TodoContext);
  return useTodoContext;
};
