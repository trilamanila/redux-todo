import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [input, setInput] = useState("");

  const addTodo = () => {};
  return (
    <div className="input">
      <input type="text" value={input} onChange={e => setInput} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
