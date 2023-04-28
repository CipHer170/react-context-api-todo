import { createContext, useState } from "react";
import axios from "axios";

const TodoContext = createContext();
function Provider({ children }) {
  const [items, setItems] = useState([]);

  // getting data from api
  const fetchTodos = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        headers: {
          Authorization: "Client ID",
        },
      }
    );
    setItems(response.data);
  };

  // posting data
  const createItem = async (item) => {
    if (item !== "") {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          headers: {
            Authorization: "Client-ID",
          },
          params: {
            title: item,
          },
        }
      );
      const updatedItems = [...items, res.data];
      return setItems(updatedItems);
    }
  };

  // deleting data
  const DeleteItemById = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const updatedItems = items.filter((item) => {
        return item.id !== id;
      });
      setItems(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  // edit item
  const edittingElementsById = async (id, newTitle) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        title: newTitle,
      }
    );
    const updateTodoList = items.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data };
      }
      return item;
    });
    setItems(updateTodoList);
  };

  const values = {
    items,
    fetchTodos,
    createItem,
    DeleteItemById,
    edittingElementsById,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
export { TodoContext };
export default Provider;
