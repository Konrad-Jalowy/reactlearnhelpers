import {useState, useRef} from 'react'
import './App.css';
import { DownloadLink } from './components/DownloadLink';
import {WordsTableRFC} from './components/WordsTableRFC';
import { TitleRFC } from './components/TitleRFC';
import { WordsRFC } from './components/WordsRFC';
function App() {
  const [words, setWords] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null);
  const textareaRef = useRef(null)
  const textRef = useRef(null);
  const keyRef = useRef(1);

  

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

  function onAddHandler(e){
    if(textareaRef.current.value.trim() === "")
        return;
    console.log("adding words triggered");
    textRef.current = textareaRef.current.value;
    let _parsed = parseText(textRef.current);
    console.log(_parsed);
    addToWords(_parsed);
    textRef.current = "";
    textareaRef.current.value = "";
  }

  function parseText(text){
    text = text.replaceAll("–", "-");
    text = text.replaceAll(/\r?\n/g, " ");
    let _asArray = text.split(/•/);
    _asArray = _asArray.map(item => item.trim());
    return _asArray.filter(item => item !== "");
  }

  function addToWords(parsed){
    parsed.forEach(item => {
      let _idx = item.indexOf("-");
      let _word = item.slice(0, _idx);
      let _def = item.slice(_idx+1);
      let _key = keyRef.current++;
      console.log(_word);
      console.log(_def);
      let newItem = {
        word: _word.trim(),
        meaning: _def.trim(),
        _key
      };
      setWords(prev => [...prev, newItem]);
    });
  }

  function deleteWord(key) {
    setWords(prev => prev.filter(item => item._key !== key));
}
  return (
    <div className="App">
      <TitleRFC title={title} setTitle={setTitle} />
      <label htmlFor="words">Paste your words here:</label> <br/>
      <textarea id='words' name='words' rows="35" cols="66" ref={textareaRef}></textarea><br/>
      <button onClick={onAddHandler}>Add words</button><br/>
      <WordsRFC />
      <button onClick={onCreateClick}>Create file</button>
      {url !== null && <DownloadLink link={url} name="file1">Download</DownloadLink>}
      <WordsTableRFC words={words} deleteWord={deleteWord} />
    </div>
  );
}

export default App;
