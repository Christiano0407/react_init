//**! === Fetch ==== Component API Rest ==== === */
import "/src/index.css";
import { VscAdd } from "react-icons/vsc";

//**! === Fetch Component === */
export const Post = () => {
  return (
    <button
      onClick={async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
          );
          const data = await response.json();
          return console.log(data);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <VscAdd />
      Data
    </button>
  );
};
