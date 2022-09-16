import { useState, useEffect } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import GetTasks from "./components/GetTasks";
import axiosInstance from "./api/axios";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const getTask = async () => {
    try {
      const data = await axiosInstance.get();
      setTodos(data.data);
      setLoading(false);
    } catch {
      console.log("Error fetching data");
    }
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="App">
      <Header />
      <TaskForm todos={todos} getTask={getTask}/>
      {loading ? (
        <ClipLoader size={100} />
      ) : (
        <GetTasks todos={todos} getTask={getTask} />
      )}
    </div>
  );
}

export default App;
