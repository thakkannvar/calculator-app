
import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  function calculate() {
    const a = Number(number1);
    const b = Number(number2);

    if (number1 === "" || number2 === "") {
      setResult("Enter both numbers");
      return;
    }

    if (operator === "+") setResult(a + b);
    else if (operator === "-") setResult(a - b);
    else if (operator === "*") setResult(a * b);
    else if (operator === "/") {
      setResult(b === 0 ? "Cannot divide by zero" : a / b);
    }
  }

  function clearCalculator() {
    setNumber1("");
    setNumber2("");
    setOperator("+");
    setResult(null);
  }

  return (
    <div className="calculator">
      <h1 className="calculator-title">React Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />

      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      >
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (*)</option>
        <option value="/">Division (/)</option>
      </select>

      <input
        type="number"
        placeholder="Enter second number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <button onClick={calculate}>Calculate</button>
      <button onClick={clearCalculator}>Clear</button>

      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
