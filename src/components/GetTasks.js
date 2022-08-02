import axiosInstance from "../api/axios";

const GetTasks = ({ getTask, todos }) => {
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(id + "/");
      getTask();
    } catch (error) {
      console.log(error);
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
                  <input type="checkbox" className="checkbox" />
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
