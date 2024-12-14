import { useState } from "react";

function WordsContainer({words, title, wordsFirst}){
    const [index, setIndex] = useState(0);
    const [wordShown, setWordShown] = useState(false);
    const [defShown, setDefShown] = useState(false);
    return (
        <>
        <p>Not implemented (words container)</p>
        <h1 className="words-title">{title}</h1>
        </>
    );
};

export {WordsContainer};