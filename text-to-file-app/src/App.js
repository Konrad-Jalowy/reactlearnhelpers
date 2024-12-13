import {useState, useRef} from 'react'
import './App.css';

function App() {
  const [words, setWords] = useState([]);
  const [title, setTitle] = useState("");

  function onTitleChange(e){
    setTitle(e.target.value);
  }
  return (
    <div className="App">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" onChange={onTitleChange} value={title} />
      <p>Title: {title}</p>
      <label htmlFor="words">Paste your words here:</label>
      <textarea id='words' name='words' rows="5" cols="33"></textarea>
    </div>
  );
}

export default App;
