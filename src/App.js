import React, { useState, useEffect } from "react";
import { Input } from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import Liste from "./Liste";
import dataJ from "./data.json";


function App() {
  const [data, setDataState] = useState(undefined);
  const [filter, setFilter] = useState("");
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
      <input
          type="text"
          placeholder="Filtrer par pays ?"
          onChange={(text) => setFilter(text.target.value)}
        ></input>
      {data ? (
          <Liste data={data} filter={filter} />
        ) : (
          <div>Chargement en cours ...</div>
        )}
      </header>
    </div>
  );
}


export default App;
