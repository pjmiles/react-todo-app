import { useState, useEffect } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import GetTasks from "./components/GetTasks";
import axiosInstance from "./api/axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const data = await axiosInstance.get();
        setTodos(data.data);
      } catch {
        console.log("Error fetching data");
      }
    };
    getTask()
  }, [])  

  return (
    <div className="App">
      <Header />
      <TaskForm />
      <GetTasks todos={todos} />
    </div>
  );
}

export default App;
