//**! === ==== Component Task Card ==== === */
//import { Context } from "../context/Context";
//import { useContext } from "react";
//import { someContext } from "../context/Context";
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== Component Cart Task */

export const TaskCards = ({ task, deleteTask }) => {
  /* const value = useContext(someContext);
  console.log(value); */
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button
        className="btn-form delete"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
