import { forwardRef } from "react";
const WordRFC = forwardRef(function WordRFC({idx, words, wordsFirst}, ref){
    const wordText = wordsFirst ? words[idx].word : words[idx].meaning
   
    return (
        <p ref={ref} className="date-rfc ani-fadein">{wordText}</p>
    );
});

export {WordRFC};