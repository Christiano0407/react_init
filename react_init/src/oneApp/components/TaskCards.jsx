//**! === ==== Component Task Card ==== === */
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== Component Cart Task */

export const TaskCards = ({ task }) => {
  return (
    <div className="task-card">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
};
