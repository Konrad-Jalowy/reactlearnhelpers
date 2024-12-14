import { useApp } from "../context/appcontext";
import { useRef, useState } from "react";
import { WordsContainer } from "./WordsContainer";
function WordsContainerController(){

    const {take, shuffle, title, words, wordsFirst} = useApp();
    const wordsRef = useRef(null);
    const [containerKey, setContainerKey] = useState(1);
    console.log(words);

    if(wordsRef.current === null){
        let readyWords = [...words];
       
        if(shuffle){
           
            readyWords.sort(() => Math.random() - 0.5);
        }
        if(readyWords.length > take){
            
            readyWords = readyWords.slice(0, take);
        }
        wordsRef.current = readyWords;
        
    }
    console.log(wordsRef.current);
    return (
        <>
        <p>Not implemented(words container)</p>
        <p>Take: {take} shuffle: {shuffle.toString()} title: {title} wordsFirst: {wordsFirst.toString()}</p>
        <WordsContainer key={containerKey} title={title} words={wordsRef.current} wordsFirst={wordsFirst}/>
        </>
    );
};

export {WordsContainerController};