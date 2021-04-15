import React, { useState, useEffect } from "react";
import './App.css';
import Liste from "./Liste";
//import data from "./data.json";

function App() {
  const [data, setDataState] = useState(undefined);
  const URL = 'https://api.covid19api.com/summary';
  useEffect(() => {
    if (!data) {
      fetch(URL)
        .then((res) => res.json())
        .then((json) => setDataState(json));
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <Liste data={data}/>
      </header>
    </div>
  );
}




export default App;
