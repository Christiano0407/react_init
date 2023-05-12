//**! === ===== Component TasList ====== === */
//** === Import */
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== TasList ==== */
function TasksList(props) {
  /* console.log(data); */

  if (props.tasks.length === 0) {
    return <h1>This task not exist</h1>;
  }
  return (
    <div>
      {props.tasks.map((task) => {
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>;
      })}
    </div>
  );
}

export default TasksList;
