import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => setData(json.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Fullstack App with Docker</h1>
      <p>Message from backend: {data}</p>
    </div>
  );
}

export default App;
