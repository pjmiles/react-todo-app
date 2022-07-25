import { useState, useEffect } from "react";
import axiosInstance from '../api/axios'

const GetTasks = () => {
  const [todos, setTodos] = useState([]);

  const getTask = async () => {
    try {
      const data = await axiosInstance.get();
      setTodos(data.data);
    } catch {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <div className="task-section">
        {todos.map((todo) => {
          return (
            <div className="task-card" key={todo.id}>
              <div className="task-title-container">
                <h1 className="task-title">
                  {todo.title} <input type="checkbox" className="checkbox" />
                  <button className="delete">X</button>
                </h1>
              </div>
              <div className="task-desc-container">
                <p className="task-desc">{todo?.descriptions}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetTasks;
