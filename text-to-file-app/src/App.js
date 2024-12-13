import {useState, useRef} from 'react'
import './App.css';

function App() {
  const [words, setWords] = useState([]);

  function onTitleChange(e){
    console.log("triggered");
  }
  return (
    <div className="App">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" onChange={onTitleChange} />
    </div>
  );
}

export default App;
