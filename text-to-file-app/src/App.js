import {useState} from 'react'
import './App.css';

function App() {
  const [words, setWords] = useState([]);
  return (
    <div className="App">
      {words.length}
    </div>
  );
}

export default App;
