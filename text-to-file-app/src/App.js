import {useState} from 'react'
import './App.css';
import { DownloadLink } from './components/DownloadLink';
import {WordsTableRFC} from './components/WordsTableRFC';
import { TitleRFC } from './components/TitleRFC';
import { WordsRFC } from './components/WordsRFC';
function App() {
  const [words, setWords] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null);
  

  

  function onCreateClick(e){
    alert("file created");
    var cleanScript = {
      "title": title,
      "words": words 
  };

  

  var _json = JSON.stringify(cleanScript);
  var blob = new Blob([_json], {type: "application/json"});
  var url  = URL.createObjectURL(blob);
  setUrl(url);
  }

  

  function deleteWord(key) {
    setWords(prev => prev.filter(item => item._key !== key));
}
  return (
    <div className="App">
      <TitleRFC title={title} setTitle={setTitle} />
      <WordsRFC setWords={setWords} />
      <button onClick={onCreateClick}>Create file</button>
      {url !== null && <DownloadLink link={url} name="file1">Download</DownloadLink>}
      <WordsTableRFC words={words} deleteWord={deleteWord} />
    </div>
  );
}

export default App;
