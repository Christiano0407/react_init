//**! === ====== Component Task  Card ====== === */
//**? ===> CSS Add Style */
import "../index.css";
import "../assets/css/componentsCSS/card.css";
const cardStyle = { background: "#f4f4f4", color: "#202020", padding: "1rem" };

//**! === Card === */

export function TaskCard({ ready }) {
  return (
    <>
      <div style={cardStyle}>
        <h1>My First Task</h1>
        <span>{ready === true ? `Task realized` : ` Task Failed`}</span>
      </div>
    </>
  );
}
