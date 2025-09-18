import './App.css';
//npm install react-router-dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Bmi from './bmi';
import Hello from './Hello'
import List from "./List";
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <h1>My App</h1>
          <ul>
            <li><Link to="/hello">Home</Link></li>
            <li><Link to="/hello?name=Sirapop&surname=Sorntad">Hello</Link></li>
            <li><Link to="/bmi">BMI Calculator</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/hello" element={<Hello name="React Router" />} />
          <Route path="/hello:n" element={<Hello />} />
          <Route path="/hello:n:m" element={<Hello />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
