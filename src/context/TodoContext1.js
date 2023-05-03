import { createContext, useState } from "react";
import axios from "axios";

const TodoContext = createContext();

function Provider({ children }) {
  const [items, setItems] = useState([]);

  // getting data from api
  const fetchTodos = async () => {
    const response = await axios.get(
      "https://plu-v1-default-rtdb.firebaseio.com/todos.json",
      {
        headers: {
          Authorization: "Client ID",
        },
      }
    );

    setItems(formatted(response?.data));
  };

  // posting data
  const createItem = async (item) => {
    if (item !== "") {
      try {
        const res = await axios.post(
          "https://plu-v1-default-rtdb.firebaseio.com/todos.json",
          { title: item, id: Date.now() }
        );

        const newTodo = { title: item, id: res?.data?.name || "" };
        const updatedItems = [...items, newTodo];
        setItems(updatedItems);
      } catch (error) {
        alert("oops");
      }
    }
  };

  // deleting data
  const DeleteItemById = async (id) => {
    try {
      await axios.delete(
        `https://plu-v1-default-rtdb.firebaseio.com/todos/${id}.json`
      );
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
      `https://plu-v1-default-rtdb.firebaseio.com/todos/${id}.json`,
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

// FORMATTED === DATAFORMATTER

// export function dataFormatter(data = []) {
//   const objectToArray = Object.entries(data);
//   const newData = objectToArray.map((item) => ({ ...item[1], id: item[0] }));
//   return newData;
// }

export const formatted = (data = []) => {
  const newData = [];
  for (let key in data) {
    const data1 = { id: key, title: data[key].title };
    newData.push(data1);
  }
  return newData;
};
