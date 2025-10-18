import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const syncEmails = async () => {
    const res = await axios.get("http://localhost:5000/sync");
    setMessage(res.data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ReachInbox Dashboard</h1>
      <button onClick={syncEmails}>Sync Emails</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
