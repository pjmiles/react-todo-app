import { useState } from "react";
import axiosInstance from "../api/axios";

const TaskForm = () => {
  const [todo, setTodo] = useState({ title: "", decriptions: "" });

  const handleChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axiosInstance.post("/", todo);
      setTodo(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-section">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-control-container">
          <div className="form-control">
            <label htmlFor="title" />
            <input
              type="text"
              className="form-input"
              placeholder="task"
              name="title"
              value={todo.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="decriptions" />
            <input
              type="text"
              className="form-input"
              placeholder="decriptions"
              name="decriptions"
              value={todo.decriptions}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <button className="btn">Add Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
