import { useState, useRef } from "react";
import IdxRFC from "./IdxRFC";
import { WordRFC } from "./WordRFC";
import { DefRFC } from "./DefRFC";
function WordsContainer({words, title, wordsFirst}){
    const [index, setIndex] = useState(0);
    const [wordShown, setWordShown] = useState(false);
    const [defShown, setDefShown] = useState(false);

    const wordRef = useRef(null);
    const defRef = useRef(null);
    const firstRender = useRef(true);
    const callbackRef = useRef(null);
    return (
        <>
        <p>Not implemented (words container)</p>
        <h1 className="words-title">{title}</h1>
        <div className="words-container">
        <IdxRFC idx={index} maxWord={words.length}/>
        <WordRFC idx={index} ref={wordRef} key={index+1} words={words} wordsFirst={wordsFirst} />
        <DefRFC idx={index} ref={defRef} key={index+2} words={words} wordsFirst={wordsFirst} />
        </div>
        </>
    );
};

export {WordsContainer};