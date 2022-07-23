
import './App.css';
import './components/Header'
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import GetTasks from './components/GetTasks';


function App() {
  return (
    <div className="App">
      <Header />
      <TaskForm />
      <GetTasks />
    </div>
  );
}

export default App;
