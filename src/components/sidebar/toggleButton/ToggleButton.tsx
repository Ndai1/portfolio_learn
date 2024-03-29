import React from "react";

function ToggleButton({ setOpen }) {
  return <button onClick={() => setOpen((prev) => !prev)}>Button</button>;
}

export default ToggleButton;