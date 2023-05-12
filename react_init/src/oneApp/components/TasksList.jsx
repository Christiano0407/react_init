//**! === ===== Component TasList ====== === */
//** === Import */
import { useState, useEffect } from "react";
import { dataTask as data } from "../data/taskData";
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== TasList ==== */
export function TasksList() {
  /* console.log(data); */
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <span>This task not exist</span>;
  }

  return (
    <>
      <h1>TaskList</h1>
      <div className="task__list">
        {tasks.map((task) => {
          <div key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>;
        })}
      </div>
    </>
  );
}
