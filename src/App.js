import './App.css';
import {useState} from "react"
import Axios from 'axios'

function App() {

const [joke, setJoke] = useState('')

  function getJoke(){
    // Axios.get('http://localhost:3005/jokes/random').then(
    //   (response) => {
    //     setJoke(response.data.setup + "..." + response.data.punchline)
    //   }
    // )
    fetch('http://localhost:3005/jokes/random')
    .then((response) => response.json())
      .then((data) => {
      setJoke(data.setup + "..." + data.punchline)
    })
  }
  return (
    <div className="App">
      <button onClick={getJoke}>Render Joke</button>
      {joke}
    </div>
  );
}

export default App;
