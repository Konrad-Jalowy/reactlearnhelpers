import { useApp } from "../context/appcontext";
import { useRef, useState } from "react";
function WordsContainerController(){

    const {take, shuffle, title, words, wordsFirst} = useApp();
    const wordsRef = useRef(null);
    const [containerKey, setContainerKey] = useState(1);
    console.log(words);
    return (
        <>
        <p>Not implemented(words container)</p>
        <p>Take: {take} shuffle: {shuffle.toString()} title: {title} wordsFirst: {wordsFirst.toString()}</p>
        </>
    );
};

export {WordsContainerController};