import {useState, useRef} from 'react'
import './App.css';
import { DownloadLink } from './components/DownloadLink';

function App() {
  const [words, setWords] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null);

  function onTitleChange(e){
    setTitle(e.target.value);
  }

  function onCreateClick(e){
    alert("file created");
    var cleanScript = {
      "title": title,
      "words": words 
  };

  var jsonse = JSON.stringify(cleanScript);
  var blob = new Blob([jsonse], {type: "application/json"});
  var url  = URL.createObjectURL(blob);
  setUrl(url);
  }
  return (
    <div className="App">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" onChange={onTitleChange} value={title} />
      <p>Title: {title}</p>
      <label htmlFor="words">Paste your words here:</label> <br/>
      <textarea id='words' name='words' rows="35" cols="66"></textarea><br/>
      <button>Add words</button><br/>
      <button onClick={onCreateClick}>Create file</button>
      {url !== null && <DownloadLink link={url} name="file1">Download</DownloadLink>}
    </div>
  );
}

export default App;
