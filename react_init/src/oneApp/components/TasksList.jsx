//**! === ===== Component TasList ====== === */
//** === Import */
import "/src/index.css";
import "../src/css/taskList.css";
import { TaskCards } from "./TaskCards";

//**! ==== TasList ==== */
function TasksList({ tasks }) {
  /* console.log(data); */

  if (tasks.length === 0) {
    return <h1>This task not exist</h1>;
  }
  return (
    <div className="list-plus">
      {tasks.map((task) => (
        <TaskCards task={task} />
      ))}
    </div>
  );
}

export default TasksList;
