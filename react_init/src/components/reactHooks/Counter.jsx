//**! === Component React Hooks ===  */
//** === Import */
import { useState } from "react";
/** Variable and Function => Index - setIndex  = useState */
/** useState > method reduce (Remember) */
//**! === Component */

export function Counter() {
  //let counter = 0;
  const [counter, setCounter] = useState(0);
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
      </div>
    </>
  );
}
