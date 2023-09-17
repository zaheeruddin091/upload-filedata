import { useState } from "react";
import TestComponent from "./Test";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  axios.defaults.baseURL =
    "http://127.0.0.1:5001/algohire-test/asia-south1/api";
  return (
    <div>
      <TestComponent />
    </div>
  );
}

export default App;
