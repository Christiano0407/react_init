//**! === Component React Hooks ===  ==> UseState & useEffect <==  === */
//** === Import */
import { useState, useEffect } from "react";
/** Variable and Function => Index - setIndex  = useState */
/** useState > method reduce (Remember) */
//**! === Component */

export function Counter() {
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  //const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("Render");
  }, []);

  return (
    <>
      <div>
        <h2>Counter:{counter} </h2>
        <button
          onClick={() => {
            //counter += 1;
            setCounter(counter + 1);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Restart
        </button>
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          Init
        </button>
        {/* <input
          onChange={(e) => {
            console.log(e.target.value);
            setMessage(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(message);
          }}
        >
          message
        </button>
        <span>{message}</span>; */}
      </div>
    </>
  );
}
