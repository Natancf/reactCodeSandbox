import React, { useState } from "react";
import "./styles.css";

const Description = ({ num }) => {
  return <h2>Start editing to see some magic happen! {num}</h2>;
};

export default function App() {
  const [num1, setNum1] = useState(10);
  const increment = () => {
    setNum1(num1 + 1);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox {num1}</h1>
      <button onClick={increment}>+</button>
      <Description num={num1 + 0} />
      <Description num={num1 + 1} />
      <Description num={num1 + 2} />
      <Description num={num1 + 3} />
    </div>
  );
}
