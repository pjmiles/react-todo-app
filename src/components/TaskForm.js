const TaskForm = () => {
  return (
    <div className="form-section">
      <form className="form-container">
        <div className="form-control-container">
          <div className="form-control">
            <label htmlFor="title" />
            <input 
            type="text" 
            className="form-input" 
            placeholder="task"
             />
          </div>

          <div className="form-control">
            <label htmlFor="description" />
            <input
              type="text"
              className="form-input"
              placeholder="description"
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
