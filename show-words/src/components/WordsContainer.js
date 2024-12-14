import { useState } from "react";
import IdxRFC from "./IdxRFC";
function WordsContainer({words, title, wordsFirst}){
    const [index, setIndex] = useState(0);
    const [wordShown, setWordShown] = useState(false);
    const [defShown, setDefShown] = useState(false);
    return (
        <>
        <p>Not implemented (words container)</p>
        <h1 className="words-title">{title}</h1>
        <IdxRFC idx={index} maxWord={words.length}/>
        </>
    );
};

export {WordsContainer};