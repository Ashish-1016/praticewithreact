import React, { useEffect, useState } from "react";
import store from "../store";

function ReduxPage() {
  const [logs, setLogs] = useState([]);
  const [logInput, setLogInput] = useState("");

  function handleAdd(logInput) {
    store.dispatch({
      type: "logAdded",
      payload: {
        description: logInput,
      },
    });
  }

  useEffect(() => {
    console.log(logs);
    setLogs(store.getState());
  }, [logs]);

  return (
    <div>
      <h1>Hello Redux Page</h1>
      <input
        type="text"
        placeholder="Add Log"
        onChange={(e) => setLogInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Log</button>
      {logs.map((log) => (
        <ol key={log.id}>{log.description}</ol>
      ))}
    </div>
  );
}

export default ReduxPage;
