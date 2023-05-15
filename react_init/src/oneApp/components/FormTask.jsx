//**! ============== === Component Task Form === ==================== */
import { useState } from "react";
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== === Form Component === */
export const FormTask = ({ createList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* const newTask = {
      title,
      id: 4,
      description: "Prove New Task",
    }; */
    console.log(title, description);
    createList({
      title,
      description,
    });
  };

  return (
    <>
      <section className="section-form">
        <h1 className="formulary">Formulary Tasks</h1>
        <form onSubmit={handleSubmit} className="form-task">
          <input
            className="input-form"
            placeholder="Write your task"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Describe your task"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button className="btn-form">Up</button>
        </form>
      </section>
    </>
  );
};
