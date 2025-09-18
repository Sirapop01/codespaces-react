import { useState, useRef } from "react";

function BmiText({ bmi }) {
  if (bmi === 0) return "N/A";
  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Normal weight";
  if (bmi < 29.9) return "Overweight";
  return "Obesity";
}

export default function Bmi() {
  const w_InputRef = useRef();
  const h_InputRef = useRef();
  const [bmi, setBmi] = useState(0);

  function calculateBmi() {
    const height = parseFloat(h_InputRef.current.value);
    const weight = parseFloat(w_InputRef.current.value);
    if (height > 0 && weight > 0) {
      const bmiValue = parseFloat((weight / ((height / 100) ** 2)).toFixed(2));
      setBmi(bmiValue);
    } else {
      setBmi(0);
    }
  }

  return (
    <div>
      <input ref={w_InputRef} type="number" placeholder="Weight (kg)" />
      <input ref={h_InputRef} type="number" placeholder="Height (cm)" />
      <button onClick={calculateBmi}>Calculate</button>

      <h2>Your BMI: {bmi}</h2>
      <p>Status: <BmiText bmi={bmi} /></p>
    </div>
  );
}
