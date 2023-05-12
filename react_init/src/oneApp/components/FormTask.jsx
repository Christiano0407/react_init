//**! ============== === Component Task Form === ==================== */
import { useState } from "react";
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== === Form Component === */
export const FormTask = ({ createList }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
    };
    console.log(newTask);
  };

  return (
    <>
      <section className="section-form">
        <form onSubmit={handleSubmit} className="form-task">
          <input
            className="input-form"
            placeholder="Write your task"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button className="btn-form">Up</button>
        </form>
      </section>
    </>
  );
};
