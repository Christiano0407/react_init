//**! === ==== Component Task Card ==== === */
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== Component Cart Task */

export const TaskCards = ({ task }) => {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};
