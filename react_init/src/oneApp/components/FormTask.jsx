//**! ============== === Component Task Form === ==================== */
import { useState, useContext } from "react";
import { someContext } from "../context/Context";
import "/src/index.css";
import "../src/css/taskList.css";

//**! ==== === Form Component === */
export const FormTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createList } = useContext(someContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createList({
      title,
      description,
    });
    setTitle("");
    setDescription("");
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
            value={title}
            autoFocus
          />
          <textarea
            placeholder="Describe your task"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          ></textarea>
          <button className="btn-form">Task</button>
        </form>
      </section>
    </>
  );
};
