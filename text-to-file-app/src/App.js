import {useState} from 'react'
import './App.css';
import {WordsTableRFC} from './components/WordsTableRFC';
import { TitleRFC } from './components/TitleRFC';
import { WordsRFC } from './components/WordsRFC';
import { CreateRFC } from './components/CreateRFC';
import { AddOneRFC } from './components/AddOneRFC';
function App() {
  const [words, setWords] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null);
  
  function deleteWord(key) {
    setWords(prev => prev.filter(item => item._key !== key));
}
  return (
    <div className="App">
      <TitleRFC title={title} setTitle={setTitle} />
      <WordsRFC setWords={setWords}  />
      <AddOneRFC setWords={setWords} />
      <CreateRFC url={url} setUrl={setUrl} words={words} title={title}/>
      <WordsTableRFC words={words} deleteWord={deleteWord} />
    </div>
  );
}

export default App;
