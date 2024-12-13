import { useRef } from "react";

function WordsRFC(){
    const textareaRef = useRef(null)
  const textRef = useRef(null);
  const keyRef = useRef(1);
    return (
        <>
        <label htmlFor="words">Paste your words here:</label> <br/>
         <textarea id='words' name='words' rows="35" cols="66" ref={textareaRef}></textarea><br/>
         <button onClick={onAddHandler}>Add words</button><br/>
        </>
    );
};

export {WordsRFC};