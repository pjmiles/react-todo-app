import { useState, useEffect } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import GetTasks from "./components/GetTasks";
import axiosInstance from "./api/axios";
import ClipLoader from "react-spinners/ClipLoader";
import { ExternalLink } from "react-external-link";

function App() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const getTask = async () => {
    try {
      const data = await axiosInstance.get();
      setTodos(data.data);
      setLoading(false);
    } catch {
      setErrMsg("Error fetching data, please try again!");
    }
  };
  useEffect(() => {
    getTask();
  });

  return (
    <>
      <main className="App">
        <Header />
        <TaskForm todos={todos} getTask={getTask} />
        {errMsg && <p className="error-message">{errMsg}</p>}
        {loading ? (
          <div className="spiner">
            <ClipLoader size={80} className="spin-item" />
          </div>
        ) : (
          <GetTasks todos={todos} getTask={getTask} />
        )}
      </main>
      <footer>
        <p>
          Created with &#128157; by{" "}
          <ExternalLink href="https://github.com/pjmiles" target="_blank" className="foot-link">
            PJMILES
          </ExternalLink>
        </p>
      </footer>
    </>
  );
}

export default App;
