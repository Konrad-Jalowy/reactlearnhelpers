import { useRef } from "react";
import { PasteWords } from "./ui/PasteWords";
function WordsRFC({setWords}){
    const textareaRef = useRef(null)
  const textRef = useRef(null);
  const keyRef = useRef(1);

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
    return (
        <>
        <PasteWords/>
        <label htmlFor="words">Paste your words here:</label> <br/>
         <textarea id='words' name='words' rows="35" cols="66" ref={textareaRef}></textarea><br/>
         <button onClick={onAddHandler}>Add words</button><br/>
        </>
    );
};

export {WordsRFC};