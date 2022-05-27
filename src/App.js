import './App.css';
import {useState} from "react"
import Axios from 'axios'

function App() {

  function getJoke(){
    Axios.get('http://localhost:3005/jokes/random').then(
      (response) => {
        console.log(response)
      }
    )
  }

  return (
    <div className="App">
      <button onClick={getJoke}>Render Joke</button>
    </div>
  );
}

export default App;
