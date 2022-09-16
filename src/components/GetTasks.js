import { useState } from "react";
import axiosInstance from "../api/axios";

const GetTasks = ({ getTask, todos }) => {
  const [selected, setSelected] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(id + "/");
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  const completedTodo = async (id, title, decriptions) => {
    setSelected(id);
    if (selected === id) {
      setIsCompleted(!isCompleted);
      await axiosInstance.put(id + "/", {
        title: title,
        decriptions: decriptions,
        completed: isCompleted,
      });
    }
  };

  // useEffect(() => {
  //   if(!mount){
  //     setMount(true)
  //     getTask();
  //   }
  // }, [getTask, mount]);

  return (
    <>
      <div className="task-section">
        {todos.map((todo) => {
          return (
            <div className="task-card" key={todo.id}>
              <div className="task-title-container">
                <h1 className="task-title">
                  {todo.title}
                  <input type="checkbox" className="checkbox"
                  checked={selected === todo.id}
                  onChange={() => completedTodo(todo.id, todo.title, todo.decriptions)} 
                  />
                  <button
                    className="delete"
                    onClick={() => handleDelete(todo.id)}
                  >
                    X
                  </button>
                </h1>
                <div className="task-desc-container">
                  <p className="task-desc">{todo?.decriptions}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetTasks;
