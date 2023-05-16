//**! === ===== Component TasList ====== === */
//** === Import */
import { useState, useContext } from "react";
import { someContext } from "../context/Context";
import { TaskCards } from "./TaskCards";
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== TasList ==== */
function TasksList() {
  const { tasks } = useContext(someContext);

  if (tasks.length === 0) {
    return <h1>This task no exist</h1>;
  }
  return (
    <div className="list-plus">
      {tasks.map((task) => (
        <TaskCards key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksList;
