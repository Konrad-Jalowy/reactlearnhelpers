import { useState, useRef, useEffect } from "react";
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
    const maxIdx = words.length;
    useEffect(() => {
        
        if(firstRender.current === true){
            firstRender.current = false;
            
            setWordShown(true);
        }
    }, []);

    function onClickHandler(){
        if(wordShown === false && defShown === false){
            setWordShown(true);
        }
        if(wordShown === true && defShown === false){
            setDefShown(true);
        }
        else {
            setWordShown(true);
            setDefShown(false);
            setIndex(prev => prev + 1);
        }
    }

    callbackRef.current = onClickHandler;
    if(index === maxIdx -1 && defShown === true){
        callbackRef.current = function(){return;}
        
    }
    return (
        <>
        <h1 className="words-title">{title}</h1>
        <div className="words-container" onClick={callbackRef.current}>
       
        {wordShown && <WordRFC idx={index} ref={wordRef} key={index+1} words={words} wordsFirst={wordsFirst} /> }
        {defShown && <DefRFC idx={index} ref={defRef} key={index+2} words={words} wordsFirst={wordsFirst} /> }
        <IdxRFC idx={index} maxWord={words.length}/>
        </div>
        </>
    );
};

export {WordsContainer};