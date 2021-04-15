import logo from './logo.svg';
import './App.css';
import Liste from "./Liste";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Liste data={data}/>
      </header>
    </div>
  );
}




export default App;
