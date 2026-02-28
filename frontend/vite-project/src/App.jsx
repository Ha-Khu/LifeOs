import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
    .then(res => res.json())
    .then(data => setStatus(data.message))
    .catch(err => setStatus("Error: " + err.message));
  }, []);

  return(
    <div style={{ padding: "2rem" }}>
      <h1>LifeOs</h1>
      <p>{status}</p>
    </div>
  );
}

export default App
