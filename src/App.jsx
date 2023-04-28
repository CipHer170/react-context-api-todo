import React, { useEffect, useContext } from "react";
import AddTodo from "./components/AddTodo";
import "./App.scss";
import ListTodo from "./components/ListTodo";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { fetchTodos } = useContext(TodoContext);

  useEffect(() => {
    fetchTodos();
  }, []);

  // base jsx
  return (
    <div className="todo">
      <h1>List</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
