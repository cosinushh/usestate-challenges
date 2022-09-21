import { useState } from "react";
import "./ActiveToggle.css";

function ActiveToggle() {
  const [active, setActive] = useState(false);
  return (
    <main>
      <div className={`box ${active && "box--active"}`} />
      {/* <button onClick={() => setActive(!active)} type="button">
        {active ? "Active" : "Deactive"}
      </button> */}
      <button
        onClick={() => setActive((previousActive) => !previousActive)}
        type="button"
      >
        {active ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}

export default ActiveToggle;
